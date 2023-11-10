import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/api/webhooks(.*)",
    "/",
    "/profile/:id",
    "/profile",
    "/jobs",
    "/community",
    "/tags/:id",
    "/tags",
    "/collection",
    "/ask-question",
    "/sign-in",
    "/sign-up",
    "/questions/:id",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
