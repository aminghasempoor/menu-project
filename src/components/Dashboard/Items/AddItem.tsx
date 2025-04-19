import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DialogContentComponent } from "./DialogContentComponent";
import { DrawerContentComponent } from "./DrawerContentComponent";

export function AddItem() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return <DialogContentComponent />;
    }

    return <DrawerContentComponent />;
}
