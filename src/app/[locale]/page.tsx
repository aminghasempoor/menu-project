import { useTranslations } from "next-intl";
import { ModeToggle } from "@/components/ThemeToggleButton";
import LanguageSwitcher from "@/components/LanguageToggleButton";
import { Button } from "@/components/ui/button";

export default function Home() {
    const t = useTranslations();
    return (
        <div>
            <h2 className={"font-bold text-red-800"}>{t("HomePage.title")}</h2>
            <ModeToggle />
            <LanguageSwitcher />
            <Button variant="outline">Button</Button>
        </div>
    );
}
