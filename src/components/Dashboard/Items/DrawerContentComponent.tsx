import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { CardContentComponent } from "@/components/Main/CardContentComponent";
import Image from "next/image";
import Picture from "../../../public/burger.jpg";
import React from "react";
import { useTranslations } from "next-intl";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DrawerContentComponent() {
    const t = useTranslations("Items");
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="destructive" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 capitalize text-xl font-semibold">
                    <div className={"py-2 flex items-center justify-center gap-x-3"}>
                        {t("add_item")}
                        <CirclePlus />
                    </div>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-md mx-auto rounded-t-3xl pb-6">

            </DrawerContent>
        </Drawer>
    );
}
