import Stripe from 'stripe';
import { NextResponse } from 'next/server';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    // Create a simple test session to verify Stripe setup
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Test Product', // Hardcoded test product
            },
            unit_amount: 1000, // Price in cents (e.g., 1000 = $10.00)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    // Log the session object to confirm it is working
    console.log('Stripe Checkout Session:', session);

    // Return the session ID as JSON response
    return new NextResponse(JSON.stringify({ id: session.id }), {
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
