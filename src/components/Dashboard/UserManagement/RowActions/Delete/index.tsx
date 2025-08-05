import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RowActionsProps } from "@/components/Dashboard/UserManagement/RowActions";
import { useTranslations } from "next-intl";

const DeleteForm = ({ user }: RowActionsProps) => {
    const t = useTranslations("UserManagement");
    const [openDelete, setOpenDelete] = useState(false);
    return (
        <>
            <Dialog open={openDelete} onOpenChange={setOpenDelete}>
                <DialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                        {t("delete")}
                    </Button>
                </DialogTrigger>
                <DialogContent className={"text-start p-5"}>
                    <DialogHeader>
                        <DialogTitle className={"text-start"}>{t("delete")}</DialogTitle>
                        <DialogDescription className={"text-start"}>{t("description")}</DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setOpenDelete(false)}>
                            {t("cancel")}
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={() => {
                                console.log("Deleting", user);
                                setOpenDelete(false);
                            }}
                        >
                            {t("delete")}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
export default DeleteForm;
