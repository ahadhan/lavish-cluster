
import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const runtime = 'nodejs'; // Specifies that this API route should run on the Node.js runtime

// Define your POST request handler here
export async function POST(request) {
  try {
    const { items, email } = await request.json();
    console.log('Received items:', items);
    console.log('Received email:', email);

    if (!items || !email) {
      return new NextResponse(JSON.stringify({ error: 'Missing items or email' }), {
        status: 400,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.name },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      customer_email: email,
      success_url: `${process.env.BASE_URL}/placeholder-success`, // Placeholder URL
      cancel_url: `${process.env.BASE_URL}/placeholder-cancel`,   // Placeholder URL
    });
    

    console.log('Stripe session created:', session.id);
    return new NextResponse(JSON.stringify({ sessionId: session.id }), {
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
