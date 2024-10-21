// import { NextRequest, NextResponse } from "next/server";
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export async function POST(request) {
//     try {
//         const { amount } = await request.json();

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amount,
//             currency: "usd",  // fixed the typo in "currency"
//             automatic_payment_methods: { enabled: true },
//         });

//         return NextResponse.json({ paymentIntent });
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 400 });
//     }
// }






// /app/api/checkout/route.js

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export async function POST(req) {
  try {
    const { items } = await req.json();

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100, // in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
