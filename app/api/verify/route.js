import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return new NextResponse('Session ID not provided', { status: 400 });
  }

  try {
    // Step 3: Verify the session exists
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return new NextResponse('Session not found', { status: 404 });
    }

    console.log('Email verified for:', session.customer_email);

    // Step 4: Redirect the user to Stripe checkout after email verification
    return NextResponse.redirect(session.url);
  } catch (error) {
    console.error('Error verifying email:', error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
