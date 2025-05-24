import { useEditItemStore } from "@/lib/utils/useEditItemStore";
import { EditItem } from "./Edit";
import { useGetEditContent } from "@/lib/hooks/useGetEditContent";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

export const EditController = () => {
    const t = useTranslations("Items");
    const isOpen = useEditItemStore((state) => state.isOpen);
    const editID = useEditItemStore((state) => state.id);
    const { loading: loadingEditContent, data } = useGetEditContent(editID);

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
