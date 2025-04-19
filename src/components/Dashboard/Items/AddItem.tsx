import React from "react";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DialogContentComponent } from "./DialogContentComponent";
import { DrawerContentComponent } from "./DrawerContentComponent";

export function AddItem (){
    const t = useTranslations("Items");
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return <DialogContentComponent />;
    }

    return <DrawerContentComponent />;
}