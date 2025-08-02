import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
    ...routing,
    localeDetection: false,
});

export const config = {
    matcher: [
        // بررسی همه‌ی مسیرها به جز:
        "/((?!_next|favicon.ico|telescope).*)",
    ],
};
