"use client";
import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DialogContentComponent } from "./DialogContentComponent";
import { DrawerContentComponent } from "./DrawerContentComponent";

export function CardItems({
    picture,
    title,
    description,
    price,
}: {
    picture: string;
    title: string;
    description: string;
    price: string;
}) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (<DialogContentComponent title={title} description={description} price={price} picture={picture} />)
    }

    return (<DrawerContentComponent picture={picture} title={title} description={description} price={price} />)
}
