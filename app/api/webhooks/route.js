import Stripe from 'stripe';
import { NextResponse } from 'next/server';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Disable body parsing for this route (important for Stripe)
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Use native Buffer to read the request body
      const buf = await new Promise((resolve, reject) => {
        let data = '';
        req.on('data', (chunk) => {
          data += chunk;
        });
        req.on('end', () => resolve(Buffer.from(data)));
        req.on('error', (err) => reject(err));
      });

      const sig = req.headers['stripe-signature'];

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
          break;
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      res.status(200).json({ received: true });
    } catch (err) {
      console.error('Error in webhook handler:', err);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
