import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/api/webhooks(.*)",
    "/",
    "/profile/:id",
    "/jobs",
    "/community",
    "/tags/:id",
    "/collection",
    "/ask-question",
    "/sign-in",
    "/sign-up",
    "/question/:id",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
