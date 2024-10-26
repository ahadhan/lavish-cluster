import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const runtime = 'nodejs'; // Replaces the deprecated config

export async function POST(req) {
  const signature = req.headers['stripe-signature'];
  const payload = await req.text();

  let event;
  try {
    // Construct event from Stripe payload and signature
    event = stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event for successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_email;
    const productName = "XYZ Product";  // Default product name, or retrieve dynamically if needed
    const deliveryTime = "5-7 business days";

    // Send confirmation email
    await sendConfirmationEmail(email, productName, deliveryTime);
    console.log('Confirmation email sent for session:', session.id);
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}

// Function to send confirmation email
async function sendConfirmationEmail(email, productName, deliveryTime) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Your Store" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Order Confirmation',
    text: `Congratulations! You just purchased ${productName}. You will receive it within ${deliveryTime}.`,
    html: `<p>Congratulations! You just purchased <strong>${productName}</strong>. You will receive it within <strong>${deliveryTime}</strong>.</p>`,
  };

  try {
    console.log('Sending confirmation email to:', email);
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.response);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}
