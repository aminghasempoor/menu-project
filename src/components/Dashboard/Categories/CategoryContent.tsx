import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { CalendarPlus2 } from "lucide-react";
import { useEditCategoryStore } from "@/lib/utils/useEditCategoryStore";

export function CategoryContent({ id, title }: { id: number; title: string }) {
    const openEditDialog = useEditCategoryStore((state) => state.openEditDialog);
    return (
        <Card
            onClick={() => openEditDialog(id)}
            className="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] cursor-pointer max-w-md"
        >
            <CardContent className="px-3 py-0 flex flex-row items-center justify-between gap-x-2">
                <CalendarPlus2 />
                <div className="px-1 flex flex-col justify-between">
                    <div>
                        <h4 className="text-start text-sm sm:text-md lg:text-xl pt-2 line-clamp-1">{title}</h4>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
