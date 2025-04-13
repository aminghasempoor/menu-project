'use client'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl";

export const ScrollToTopButton = () => {
    const t = useTranslations("ScrollToTopButton")
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Button
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-primary text-white hover:bg-primary/90 transition-opacity duration-300",
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            variant="secondary"
        >
            {t("title")}
            <ArrowUp className="ml-2 h-5 w-5" />
        </Button>

    )
}
