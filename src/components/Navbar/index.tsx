import LanguageSwitcher from "@/core/LanguageToggleButton";
import { ModeToggle } from "@/core/ThemeToggleButton";

export function Navbar () {
    return(
        <div className={"flex justify-between items-center"}>
            <h4>
                منولیتا
            </h4>
            <div className={""}>
                <LanguageSwitcher />
                <ModeToggle />
            </div>
        </div>
    )
}