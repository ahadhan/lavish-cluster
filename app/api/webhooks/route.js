import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// export const runtime = 'nodejs';
// export const config = { api: { bodyParser: false } }; // Needed for Stripe webhooks

// Define the Webhook handler for Stripe
export async function POST(req) {
  const signature = req.headers['stripe-signature'];
  const payload = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);
    console.log("Key bhi nahi aati")
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle successful payment event
  if (event.type === 'checkout.session.completed') {
    console.log("Run in webhooks," )
    const session = event.data.object;
    const email = session.customer_email;
    const productName = "XYZ Product";  // Placeholder, adjust as needed
    const deliveryTime = "5-7 business days";


    // Trigger the email sending
    await sendConfirmationEmail(email, productName, deliveryTime);
    console.log('Confirmation email sent for session:', session.id);
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}

// Email-sending function
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
