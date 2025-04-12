"use client";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CardContentComponent } from "./CardContentComponent";
import Picture from "../../../public/burger.jpg";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div onClick={() => setOpen(true)}>
                        <CardContentComponent picture={picture} title={title} description={description} price={price} />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <VisuallyHidden>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </VisuallyHidden>
                    <div className="flex items-center gap-4 p-4 text-center">
                        <Image src={Picture} alt={title} className="w-60 h-60 rounded-lg object-cover" />
                        <div>
                            <h2 className="text-xl font-bold">{title}</h2>
                            <p className="text-sm text-muted-foreground">{description}</p>
                            <p className="text-lg font-extrabold text-green-600">{price}</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer>
            <DrawerTrigger>
                <CardContentComponent picture={picture} title={title} description={description} price={price} />
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-md mx-auto rounded-t-xl">
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
}
