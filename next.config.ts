import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "menulita.ir",
            },
            {
                protocol: "http",
                hostname: "addresscafe.ir",
            },
            {
                protocol: "http",
                hostname: "37.152.179.23",
            },
        ],
    },
};

// @ts-ignore - no types for it
export default withNextIntl(nextConfig);
