import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CardContentComponent } from "@/components/Main/CardContentComponent";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import Picture from "../../../public/burger.jpg";
import React from "react";
import { useTranslations } from "next-intl";

export function DialogContentComponent({
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
    const t = useTranslations("CardItem");
    const [open, setOpen] = React.useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div onClick={() => setOpen(true)}>
                    <CardContentComponent picture={picture} title={title} description={description} price={price} />
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl rounded-2xl p-8 shadow-lg">
                <VisuallyHidden>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </VisuallyHidden>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <Image src={Picture} alt={title} className="w-72 h-72 rounded-xl object-cover shadow-md" />
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <p className="text-md font-semibold text-muted-foreground mb-2">
                            {t("ingredient")} {description}
                        </p>
                        <p className="text-sm leading-relaxed mb-6">{t("description")}</p>
                        <div className="flex items-center justify-between mt-auto">
                            <div className="bg-gray-100 text-green-700 px-4 py-2 rounded-lg text-xl font-bold">
                                {price}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
