import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
export default createMiddleware({
    ...routing,
    localeDetection: true,
});

export const config = {
    // مسیرهایی که باید بررسی بشن
    matcher: ["/((?!_next|favicon.ico).*)"],
};
