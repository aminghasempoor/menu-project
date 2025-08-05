"use client";

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
import { motion } from "framer-motion";
import useRequest from "@/lib/hooks/useRequest";
import { GET_USERS } from "@/lib/utils/apiRoutes";

const DeleteForm = ({ user }: RowActionsProps) => {
    const t = useTranslations("UserManagement");
    const requestServer = useRequest({ auth: true, notification: true });
    const [openDelete, setOpenDelete] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);
            await requestServer(`${GET_USERS}/${user.id}`, "delete");
            setOpenDelete(false);
        } catch (error) {
            console.log("Delete error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={openDelete} onOpenChange={setOpenDelete}>
            <DialogTrigger asChild>
                <Button variant="destructive" size="sm">
                    {t("delete")}
                </Button>
            </DialogTrigger>

            <DialogContent className="p-5 text-start">
                <DialogHeader>
                    <DialogTitle className={"text-start"}>{t("delete")}</DialogTitle>
                    <DialogDescription className="pt-2 text-start">
                        {t("delete_description", {
                            username: user.username ?? "بدون‌نام",
                        })}
                    </DialogDescription>
                </DialogHeader>

                <motion.div
                    className="pt-6 flex justify-end gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <Button type="button" variant="ghost" onClick={() => setOpenDelete(false)} disabled={loading}>
                        {t("cancel")}
                    </Button>
                    <Button type="button" variant="destructive" onClick={handleDelete} disabled={loading}>
                        {loading ? t("deleting") : t("delete")}
                    </Button>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteForm;
