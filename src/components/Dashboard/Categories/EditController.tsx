import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import { useGetEditCategory } from "@/lib/hooks/useGetEditCategory";
import { useEditCategoryStore } from "@/lib/utils/useEditCategoryStore";
import { EditItem } from "./Edit";

export const EditController = () => {
    const t = useTranslations("Categories");
    const isOpen = useEditCategoryStore((state) => state.isOpen);
    const editID = useEditCategoryStore((state) => state.id);
    const { loading: loadingEditContent, data } = useGetEditCategory(editID);

    return (
        <>
            {isOpen && (
                <>
                    {loadingEditContent ? (
                        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/50">
                            <div className="flex flex-col items-center">
                                <Loader2 className="animate-spin w-10 h-10 text-primary" />
                                <p className="mt-4 text-muted-foreground">{t("loading")}</p>
                            </div>
                        </div>
                    ) : (
                        <EditItem data={data!} />
                    )}
                </>
            )}
        </>
    );
};
