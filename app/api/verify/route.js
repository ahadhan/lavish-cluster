// import Stripe from 'stripe';
// import { NextResponse } from 'next/server';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const sessionId = searchParams.get('session_id');

//   if (!sessionId) {
//     return new NextResponse('Session ID not provided', { status: 400 });
//   }

//   try {
//     // Step 3: Verify the session exists
//     const session = await stripe.checkout.sessions.retrieve(sessionId);

//     if (!session) {
//       return new NextResponse('Session not found', { status: 404 });
//     }

//     console.log('Email verified for:', session.customer_email);

//     // Step 4: Redirect the user to Stripe checkout after email verification
//     return NextResponse.redirect(session.url);
//   } catch (error) {
//     console.error('Error verifying email:', error);
//     return new NextResponse(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }







// app/api/verify/route.js

import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const runtime = 'nodejs';

/**
 * Handles verification actions (approve or cancel) from the verification email.
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} - The response to redirect the user.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const paymentIntentId = searchParams.get('payment_intent');
  const action = searchParams.get('action');

  console.log(`Received verification request for PaymentIntent: ${paymentIntentId} with action: ${action}`);

  if (!paymentIntentId || !action) {
    return new NextResponse('Missing payment_intent or action parameter.', { status: 400 });
  }

  try {
    // Retrieve the Payment Intent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (!paymentIntent) {
      return new NextResponse('Payment Intent not found.', { status: 404 });
    }

    if (paymentIntent.status !== 'requires_capture') {
      return new NextResponse(`Payment Intent status is ${paymentIntent.status}. No action needed.`, { status: 400 });
    }

    if (action === 'approve') {
      // Capture the payment
      const capturedPaymentIntent = await stripe.paymentIntents.capture(paymentIntentId);
      console.log(`PaymentIntent captured: ${capturedPaymentIntent.id}`);
      // TODO: Update your database to mark the payment as completed

      // Redirect to confirmation page
      return NextResponse.redirect(`${process.env.BASE_URL}/confirmation?status=approved`);
    } else if (action === 'cancel') {
      // Cancel the Payment Intent
      const canceledPaymentIntent = await stripe.paymentIntents.cancel(paymentIntentId);
      console.log(`PaymentIntent canceled: ${canceledPaymentIntent.id}`);
      // TODO: Update your database to mark the payment as canceled

      // Redirect to confirmation page
      return NextResponse.redirect(`${process.env.BASE_URL}/confirmation?status=canceled`);
    } else {
      return new NextResponse('Invalid action parameter.', { status: 400 });
    }
  } catch (error) {
    console.error('Error processing verification:', error);
    return new NextResponse(`Error processing verification: ${error.message}`, { status: 500 });
  }
}
