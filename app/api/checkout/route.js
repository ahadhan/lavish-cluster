import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  

  try {
    const { items, email } = await request.json();
    console.log('Received items:', items);  // Debugging: Log received items
    console.log('Received email:', email);  // Debugging: Log received email

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
          unit_amount: item.price, // Ensure price is in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      customer_email: email,
      success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: 'http://localhost:3000/cancel',
      // metadata: {
      //   userID,            // to be used in future when integrating with database for webhook.
      // },
      
    });


    

    console.log('Stripe session created:', session); // Debugging: Log the session

    // Step 2: Send a verification email to the user with the session ID
    await sendVerificationEmail(email, session.id);

    return new NextResponse(JSON.stringify({ id: session.id }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating Stripe session:', error); // Debugging: Log error
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Function to send verification email
async function sendVerificationEmail(email, sessionId) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Your Store" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Verify your email to complete the payment',
    text: `Click the link to verify your email: http://localhost:3000/verify?session_id=${sessionId}`,
    html: `<p>Please verify your email by clicking <a href="http://localhost:3000/verify?session_id=${sessionId}">here</a>.</p>`,
  };

  try {
    console.log('Sending email to:', email); // Debugging log to check if the email process starts
    const info = await transporter.sendMail(mailOptions);
    console.log('Verification email sent:', info.response); // Log email sending info
  } catch (error) {
    console.error('Error sending verification email:', error); // Log email sending error
  }
}


// sendVerificationEmail("kmohammedafsar0@gmail.com", "123");


