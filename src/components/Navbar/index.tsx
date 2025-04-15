import LanguageSwitcher from "@/core/LanguageToggleButton";
import { ModeToggle } from "@/core/ThemeToggleButton";
import { useTranslations } from "next-intl";

export function Navbar() {
    const t = useTranslations("NavBar");
    return (
        <div className={"flex justify-between items-center py-6 px-10 z-50"}>
            <h3 className="scroll-m-20 capitalize text-2xl tracking-tight lg:text-4xl align-baseline">
                {t("title")}
                <small className={"text-neutral-600"}>.</small>
            </h3>
            {/*<Sheet>*/}
            {/*    <SheetTrigger>*/}
            {/*        <AlignCenter />*/}
            {/*    </SheetTrigger>*/}
            {/*    <SheetContent>*/}
            {/*        <SheetHeader>*/}
            {/*            <SheetTitle>Edit profile</SheetTitle>*/}
            {/*            <SheetDescription>*/}
            {/*                Make changes to your profile here. Click save when you're done.*/}
            {/*            </SheetDescription>*/}
            {/*        </SheetHeader>*/}
            {/*        <SheetFooter>*/}
            {/*            <SheetClose asChild>*/}
            {/*                <Button type="submit">Save changes</Button>*/}
            {/*            </SheetClose>*/}
            {/*        </SheetFooter>*/}
            {/*    </SheetContent>*/}
            {/*</Sheet>*/}
            <div className={"flex gap-x-4 justify-center items-center"}>
                <ModeToggle />
                <LanguageSwitcher />
            </div>
        </div>
    );
}
