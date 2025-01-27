import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import React from "react";

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    let isRtl
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }
    const messages = await getMessages();
    isRtl = locale === "fa";

    return (
        <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
            <body>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
