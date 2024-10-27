// import Stripe from 'stripe';
// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // Specify the runtime and dynamic behavior as per Next.js 13+ standards
// export const runtime = 'nodejs'; // Specify that this API route should run on the Node.js runtime
// export const dynamic = 'force-dynamic'; // Required for dynamic behavior if your route needs to respond to runtime changes

// export async function POST(req) {
//   const signature = req.headers['stripe-signature'];
//   const payload = await req.text();

//   console.log("Payload called: ", payload )


//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);
//     console.log("event:", event)
//   } catch (err) {
//     console.error('Webhook signature verification failed:', err.message);
//     return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
//   }

//   // Handle specific webhook events
//   if (event.type === 'checkout.session.completed') {
//     console.log("Webhook triggered: checkout.session.completed");
//     // return;
//     const session = event.data.object;
//     const email = session.customer_email;
//     const productName = "XYZ Product";  // Placeholder product name
//     const deliveryTime = "5-7 business days";
//     console.log("session: ", session, email)
//   //   try {
//   //     await sendConfirmationEmail(email, productName, deliveryTime);
//   //     console.log('Confirmation email sent for session:', session.id);
//   //   } catch (error) {
//   //     console.error('Error sending confirmation email:', error);
//   //   }
//   }

//   return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
// }

// // Email-sending function
// async function sendConfirmationEmail(email, productName, deliveryTime) {
//   console.log("Initializing email...");

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: `"Your Store" <${process.env.GMAIL_USER}>`,
//     to: email,
//     subject: 'Order Confirmation',
//     text: `Congratulations! You just purchased ${productName}. You will receive it within ${deliveryTime}.`,
//     html: `<p>Congratulations! You just purchased <strong>${productName}</strong>. You will receive it within <strong>${deliveryTime}</strong>.</p>`,
//   };

//   try {
//     console.log('Sending confirmation email to:', email);
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Confirmation email sent:', info.response);
//   } catch (error) {
//     console.error('Error sending confirmation email:', error);
//   }
// }





import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// Specify the runtime and dynamic behavior as per Next.js 13+ standards
export const runtime = 'nodejs'; // Specify that this API route should run on the Node.js runtime
export const dynamic = 'force-dynamic'; // Required for dynamic behavior if your route needs to respond to runtime changes


export async function POST(req) {
  // Access the stripe-signature header correctly

  console.log("request: ", req)
  const rawBody = req.rawBody;
  const sig = req.headers['stripe-signature'];
  let event;

  console.log(rawBody, sig);
  // let event;

  // const signature = req.headers.get('stripe-signature');
  // const payload = await req.text();

  // console.log("Payload received: ", payload);

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle specific webhook events
  if (event.type === 'checkout.session.completed') {
    console.log("Webhook triggered: checkout.session.completed");
    const session = event.data.object;
    const email = session.customer_email;
    const productName = "XYZ Product";  // Placeholder product name
    const deliveryTime = "5-7 business days";
    console.log("Session details:", session, email);
    
    try {
      await sendConfirmationEmail(email, productName, deliveryTime);
      console.log('Confirmation email sent for session:', session.id);
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}

// Email-sending function
async function sendConfirmationEmail(email, productName, deliveryTime) {
  console.log("Initializing email...");

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Your Store" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Order Confirmation',
    text: `Congratulations! You just purchased ${productName}. You will receive it within ${deliveryTime}.`,
    html: `<p>Congratulations! You just purchased <strong>${productName}</strong>. You will receive it within <strong>${deliveryTime}</strong>.</p>`,
  };

  try {
    console.log('Sending confirmation email to:', email);
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.response);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error; // Re-throw to handle it in the caller if needed
  }
}
