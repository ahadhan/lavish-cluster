

// import Stripe from 'stripe';
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const runtime = 'nodejs'; // Specifies that this API route should run on the Node.js runtime
// export const dynamic = 'force-dynamic'; // This might replace the need for `config` in some cases

// // Define your POST request handler here
// export async function POST(request) {
//   try {
//     const { items, email } = await request.json();
//     console.log('Received items:', items);
//     console.log('Received email:', email);

//     if (!items || !email) {
//       return new NextResponse(JSON.stringify({ error: 'Missing items or email' }), {
//         status: 400,
//       });
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: items.map((item) => ({
//         price_data: {
//           currency: 'usd',
//           product_data: { name: item.name },
//           unit_amount: item.price,
//         },
//         quantity: item.quantity,
//       })),
//       mode: 'payment',
//       customer_email: email,
//       success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.BASE_URL}/cancel`,
//     });

//     console.log('Stripe session created:', session.id);
//     return new NextResponse(JSON.stringify({ sessionId: session.id }), {
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error creating Stripe session:', error);
//     return new NextResponse(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }






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
      // Setting placeholder URLs for success and cancel, as they won't be used
      success_url: `https://stripe.com`,  // Placeholder URL
      cancel_url: `https://stripe.com`,    // Placeholder URL
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
