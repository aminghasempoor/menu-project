import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RowActionsProps } from "@/components/Dashboard/UserManagement/RowActions";
import { useTranslations } from "next-intl";

const EditForm = ({ user }: RowActionsProps) => {
    const t = useTranslations("UserManagement");
    const [openEdit, setOpenEdit] = useState(false);
    return (
        <>
            <Dialog open={openEdit} onOpenChange={setOpenEdit}>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                        {t("edit")}
                    </Button>
                </DialogTrigger>
                <DialogContent className={"p-5"}>
                    <DialogHeader>
                        <DialogTitle className={"text-start"}>{t("edit")}</DialogTitle>
                        <DialogDescription className={"text-start py-0"}></DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3">
                        <p>
                            {t("username")} {user.username || "ندارد"}
                        </p>
                        <p>
                            {t("email")} {user.email || "ندارد"}
                        </p>
                        <p>
                            {t("phone_number")} {user.phone_number || "ندارد"}
                        </p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setOpenEdit(false)}>
                            {t("cancel")}
                        </Button>
                        <Button onClick={() => setOpenEdit(false)}>{t("save_change")}</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
export default EditForm;
