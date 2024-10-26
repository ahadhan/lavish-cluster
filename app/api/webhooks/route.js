// // app/api/webhooks/route.js

// import Stripe from 'stripe';
// import { NextResponse } from 'next/server';

// // Initialize Stripe with your secret key and specify the API version
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2022-11-15', // Specify the Stripe API version you are using
// });

// // Specify the runtime environment (optional but recommended for Stripe)
// export const runtime = 'nodejs';

// /**
//  * Handles POST requests to the webhook endpoint.
//  * @param {Request} request - The incoming request object.
//  * @returns {Promise<Response>} - The response to be sent back to the client.
//  */
// export async function POST(request) {
//   console.log("Webhook handler working successfully!");

//   try {
//     // Retrieve the raw request body as a buffer
//     const rawBody = await request.arrayBuffer();
//     const buf = Buffer.from(rawBody);

//     // Get the Stripe signature from the headers
//     const sig = request.headers.get('stripe-signature');

//     if (!sig) {
//       console.error('Missing Stripe signature');
//       return new NextResponse('Missing Stripe signature', { status: 400 });
//     }

//     // Verify the event using Stripe's webhook secret
//     const event = stripe.webhooks.constructEvent(
//       buf,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );

//     // Handle the event
//     switch (event.type) {
//       case 'checkout.session.completed':
//         const session = event.data.object;
//         console.log('Payment completed for:', session.customer_email);
//         // TODO: Implement your business logic here (e.g., fulfill the order)
//         break;
//       // Add more case blocks to handle other event types as needed
//       default:
//         console.log(`Unhandled event type: ${event.type}`);
//     }

//     // Respond to Stripe that the webhook was received successfully
//     return NextResponse.json({ received: true });
//   } catch (err) {
//     console.error('Error in webhook handler:', err);

//     // Optionally, you can add more specific error handling based on error types
//     return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
//   }
// }
















// app/api/webhooks/route.js

import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const runtime = 'nodejs';

/**
 * Handles Stripe webhook events.
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} - The response to send back to Stripe.
 */
export async function POST(request) {
  try {
    const rawBody = await request.text();
    const sig = request.headers.get('stripe-signature');

    if (!sig) {
      console.error('Missing Stripe signature');
      return new NextResponse('Missing Stripe signature', { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log(`Received event: ${event.type}`);

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent ${paymentIntent.id} succeeded.`);
        // TODO: Update your database to mark the payment as completed
        break;

      case 'payment_intent.canceled':
        const canceledIntent = event.data.object;
        console.log(`PaymentIntent ${canceledIntent.id} was canceled.`);
        // TODO: Update your database to mark the payment as canceled
        break;

      // Handle other event types as needed

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}
