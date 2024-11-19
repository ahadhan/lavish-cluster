import { NextResponse } from "next/server";
import { verifyIdToken } from "./app/lib/firebaseAdmin"; // Your Firebase Admin setup

export async function middleware(req) {
  const token = req.cookies.token; // Retrieve token from cookies

  if (!token) {
    // Redirect to login if no token is found
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const user = await verifyIdToken(token);
    if (!user) {
      // Redirect if the token is invalid
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next(); // Allow access if token is valid
}

// Optional: Apply middleware only to specific paths
export const config = {
  matcher: ["/admin/:path*"], // Protect all admin routes
};
