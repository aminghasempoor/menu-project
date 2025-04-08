import LanguageSwitcher from "@/core/LanguageToggleButton";
import { ModeToggle } from "@/core/ThemeToggleButton";

export function Navbar() {
    return (
        <div className={"flex justify-between items-center m-5 px-5"}>
            <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl align-baseline">
                منولیتا<small className={"text-neutral-600"}>.</small>
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
            <div className={"flex gap-x-6"}>
                <LanguageSwitcher />
                <ModeToggle />
            </div>
        </div>
    );
}
