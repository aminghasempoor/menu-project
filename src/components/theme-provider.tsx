"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
type Props = ThemeProviderProps & {
    children: React.ReactNode;
};
export function ThemeProvider({ children, ...props }:Props) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}