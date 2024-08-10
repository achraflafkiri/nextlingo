import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "id", "fr", "zh"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(id|en|fr|zh)/:path*"],
};
