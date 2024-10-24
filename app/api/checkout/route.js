import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { items, email } = await request.json();

    if (!items || !email) {
      return new NextResponse(JSON.stringify({ error: 'Missing items or email' }), {
        status: 400,
      });
    }

    // Step 1: Create a Stripe Checkout session, but do not complete payment yet.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Ensure price is in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      customer_email: email,
      success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: 'http://localhost:3000/cancel',
    });

    // Step 2: Send a verification email to the user with the session ID
    await sendVerificationEmail(email, session.id);

    return new NextResponse(JSON.stringify({ message: 'Verification email sent' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Function to send verification email
async function sendVerificationEmail(email, sessionId) {
  let transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: '"Your Store" <your_email@gmail.com>',
    to: email,
    subject: 'Verify your email to complete the payment',
    text: `Click the link to verify your email: http://localhost:3000/verify?session_id=${sessionId}`,
    html: `<p>Please verify your email by clicking <a href="http://localhost:3000/verify?session_id=${sessionId}">here</a>.</p>`,
  };

  await transporter.sendMail(mailOptions);
  console.log('Verification email sent to:', email);
}
