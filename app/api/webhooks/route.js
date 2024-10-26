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
















import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Disable Next.js body parsing, as Stripe requires the raw body to verify webhook signatures
export const runtime = 'nodejs'; // Add runtime declaration if needed
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const signature = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, signature, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error('Webhook signature verification failed.', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Extract email and product details from the session
      const customerEmail = session.customer_email;
      const productName = session.metadata.product_name; // Use metadata to pass product details
      const deliveryTime = session.metadata.delivery_time; // e.g., "5-7 business days"

      // Send a confirmation email
      await sendConfirmationEmail(customerEmail, productName, deliveryTime);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.status(200).json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// Function to send the confirmation email
async function sendConfirmationEmail(email, productName, deliveryTime) {
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
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.response);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}
