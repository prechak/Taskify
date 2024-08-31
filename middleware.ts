import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes including the root path
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/api/webhook",
]);

// Middleware configuration
export default clerkMiddleware((auth, request) => {
  const { pathname } = request.nextUrl;

  // If the user is authenticated and tries to access the root path, redirect them away
  if (auth().userId && pathname === "/") {
    // Redirect to the original path or a different page
    const redirectUrl = new URL(
      `/organization/${auth().orgId}`,
      request.nextUrl.origin
    ); // Adjust the redirect URL as needed
    return new Response(null, {
      status: 302,
      headers: { Location: redirectUrl.toString() },
    });
  }

  if (
    auth().userId &&
    !auth().orgId &&
    request.nextUrl.pathname !== "/select-org"
  ) {
    const orgSelection = new URL("/select-org", request.url);
    return NextResponse.redirect(orgSelection);
  }

  // If the user is not authenticated and tries to access a protected route, redirect to sign-in
  if (!isPublicRoute(request)) {
    if (!auth().userId) {
      // Redirect to login with the current path as a query parameter
      const loginUrl = new URL("/sign-in", request.nextUrl.origin);
      loginUrl.searchParams.set("redirect", pathname);
      return new Response(null, {
        status: 302,
        headers: { Location: loginUrl.toString() },
      });
    }
  }

  // Allow access to all other routes
  return;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
