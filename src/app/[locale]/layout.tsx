import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

interface LocaleLayoutProps {
    params: Promise<{
        locale: string;
    }>;
    children: React.ReactNode
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
    const { locale } = await props.params;
    let isRtl;
    let messages;
    try {
        messages = await getMessages();
        isRtl = locale === "fa";
    } catch (e) {
        console.log(e);
        notFound();
    }

    return (
        <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
        <body>
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {props.children}
            </ThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
