import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/core/theme-provider";
import { Toaster } from "@/components/ui/toaster";

interface LocaleLayoutProps {
    params: Promise<{
        locale: string;
    }>;
    children: React.ReactNode;
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
        <html
            className={"bg-background text-foreground"}
            lang={locale}
            dir={isRtl ? "rtl" : "ltr"}
            suppressHydrationWarning
        >
            <body>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                        value={{
                            light: "light",
                            dark: "dark",
                        }}
                    >
                        <main>{props.children}</main>
                        <Toaster />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
