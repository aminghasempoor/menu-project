"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const ScrollToTopButton = () => {
    const t = useTranslations("ScrollToTopButton");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Button
            onClick={scrollToTop}
            className={cn("w-full p-5 bg-primary text-white hover:bg-primary/90 transition-opacity duration-300")}
            variant="secondary"
        >
            {t("title")}
            <ArrowUp className="ml-2 h-5 w-5" />
        </Button>
    );
};
