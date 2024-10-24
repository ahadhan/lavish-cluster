// app/api/webhooks/route.js

import Stripe from 'stripe';
import { NextResponse } from 'next/server';

// Initialize Stripe with your secret key and specify the API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15', // Specify the Stripe API version you are using
});

// Specify the runtime environment (optional but recommended for Stripe)
export const runtime = 'nodejs';

/**
 * Handles POST requests to the webhook endpoint.
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} - The response to be sent back to the client.
 */
export async function POST(request) {
  console.log("Webhook handler working successfully!");

  try {
    // Retrieve the raw request body as a buffer
    const rawBody = await request.arrayBuffer();
    const buf = Buffer.from(rawBody);

    // Get the Stripe signature from the headers
    const sig = request.headers.get('stripe-signature');

    if (!sig) {
      console.error('Missing Stripe signature');
      return new NextResponse('Missing Stripe signature', { status: 400 });
    }

    // Verify the event using Stripe's webhook secret
    const event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('Payment completed for:', session.customer_email);
        // TODO: Implement your business logic here (e.g., fulfill the order)
        break;
      // Add more case blocks to handle other event types as needed
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Respond to Stripe that the webhook was received successfully
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Error in webhook handler:', err);

    // Optionally, you can add more specific error handling based on error types
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}
