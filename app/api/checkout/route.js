// import Stripe from 'stripe';
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// // Initialize Stripe with your secret key
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(request) {
  

//   try {
//     const { items, email } = await request.json();
//     console.log('Received items:', items);  // Debugging: Log received items
//     console.log('Received email:', email);  // Debugging: Log received email

//     if (!items || !email) {
//       return new NextResponse(JSON.stringify({ error: 'Missing items or email' }), {
//         status: 400,
//       });
//     }

//     // Step 1: Create a Stripe Checkout session, but do not complete payment yet.
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: items.map((item) => ({
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: item.name,
//           },
//           unit_amount: item.price, // Ensure price is in cents
//         },
//         quantity: item.quantity,
//       })),
//       mode: 'payment',
//       customer_email: email,
//       success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: 'http://localhost:3000/cancel',
//       // metadata: {
//       //   userID,            // to be used in future when integrating with database for webhook.
//       // },
      
//     });


    

//     console.log('Stripe session created:', session); // Debugging: Log the session

//     // Step 2: Send a verification email to the user with the session ID
//     await sendVerificationEmail(email, session.id);

//     return new NextResponse(JSON.stringify({ id: session.id }), {
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error creating Stripe session:', error); // Debugging: Log error
//     return new NextResponse(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }

// // Function to send verification email
// async function sendVerificationEmail(email, sessionId) {
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: `"Your Store" <${process.env.GMAIL_USER}>`,
//     to: email,
//     subject: 'Verify your email to complete the payment',
//     text: `Click the link to verify your email: http://localhost:3000/verify?session_id=${sessionId}`,
//     html: `<p>Please verify your email by clicking <a href="http://localhost:3000/verify?session_id=${sessionId}">here</a>.</p>`,
//   };

//   try {
//     console.log('Sending email to:', email); // Debugging log to check if the email process starts
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Verification email sent:', info.response); // Log email sending info
//   } catch (error) {
//     console.error('Error sending verification email:', error); // Log email sending error
//   }
// }


// // sendVerificationEmail("kmohammedafsar0@gmail.com", "123");






// api/checkout/route.js

import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Initialize Stripe with your secret key and specify the API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { items, email } = await request.json();
    console.log('Received items:', items);  // Debugging: Log received items
    console.log('Received email:', email);  // Debugging: Log received email

    if (!items || !email) {
      return new NextResponse(JSON.stringify({ error: 'Missing items or email' }), {
        status: 400,
      });
    }

    // Step 1: Create a Stripe Checkout session with manual capture
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: convertToSubcurrency(item.price), // Price in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      customer_email: email,
      payment_intent_data: {
        capture_method: 'manual', // Manual capture to allow email verification
      },
      success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
      // metadata: {
      //   userID, // to be used in future when integrating with database for webhook.
      // },
    });

    console.log('Stripe session created:', session); // Debugging: Log the session

    // Step 2: Send a verification email to the user with Approve and Cancel links
    await sendVerificationEmail(email, session.payment_intent);

    return new NextResponse(JSON.stringify({ sessionId: session.id }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating Stripe session:', error); // Debugging: Log error
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Function to send verification email
async function sendVerificationEmail(email, paymentIntentId) {
  // Create a transporter using SMTP (Gmail in this case)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail password or App Password
    },
  });

  // Generate verification links
  const approveLink = `${process.env.BASE_URL}/api/verify?payment_intent=${paymentIntentId}&action=approve`;
  const cancelLink = `${process.env.BASE_URL}/api/verify?payment_intent=${paymentIntentId}&action=cancel`;

  const mailOptions = {
    from: `"Your Store" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Verify Your Payment to Complete Your Order',
    text: `Thank you for your purchase! Please verify your payment by clicking one of the links below:\n\nApprove Payment: ${approveLink}\nCancel Payment: ${cancelLink}`,
    html: `
      <p>Thank you for your purchase!</p>
      <p>Please verify your payment by clicking one of the links below:</p>
      <p><a href="${approveLink}">Approve Payment</a></p>
      <p><a href="${cancelLink}">Cancel Payment</a></p>
    `,
  };

  try {
    console.log('Sending email to:', email); // Debugging log to check if the email process starts
    const info = await transporter.sendMail(mailOptions);
    console.log('Verification email sent:', info.response); // Log email sending info
  } catch (error) {
    console.error('Error sending verification email:', error); // Log email sending error
    // Optionally, handle email sending failures (e.g., retry logic, alert admin)
  }
}

// Helper function to convert dollars to cents
function convertToSubcurrency(amount) {
  return Math.round(amount * 100); // Assuming USD (1 dollar = 100 cents)
}
