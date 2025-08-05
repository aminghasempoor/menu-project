"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RowActionsProps } from "@/components/Dashboard/UserManagement/RowActions";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import useRequest from "@/lib/hooks/useRequest";
import { GET_USERS } from "@/lib/utils/apiRoutes";

const EditUserSchema = z.object({
    username: z.string().min(3, "حداقل ۳ کاراکتر لازم است"),
    email: z.string().email("ایمیل معتبر نیست").nullable().or(z.literal("")),
    phone_number: z.string().min(10, "شماره معتبر نیست").max(15).nullable().or(z.literal("")),
    password: z.string().min(6, "حداقل ۶ کاراکتر لازم است").optional(),
    role: z.string().min(1, "نقش الزامی است"),
    lat: z.string().min(1, "عرض جغرافیایی الزامی است"),
    lng: z.string().min(1, "طول جغرافیایی الزامی است"),
    address: z.string().min(1, "آدرس الزامی است"),
    telephone: z.string().min(1, "تلفن الزامی است"),
    name_fa: z.string().min(1, "نام الزامی است"),
    icon: z.string().min(1, "آیکن الزامی است"),
});

type EditUserFormValues = z.infer<typeof EditUserSchema>;

const EditForm = ({ user }: RowActionsProps) => {
    const t = useTranslations("UserManagement");
    const requestServer = useRequest({ auth: true, notification: true });
    const [openEdit, setOpenEdit] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<EditUserFormValues>({
        resolver: zodResolver(EditUserSchema),
        defaultValues: {
            username: user.username ?? "",
            email: user.email ?? "",
            phone_number: user.phone_number ?? "",
            password: "",
            role: user.role ?? "",
            lat: user.lat ?? "",
            lng: user.lng ?? "",
            address: user.address ?? "",
            telephone: user.telephone ?? "",
            icon: user.icon ?? "",
            name_fa: user.name_fa ?? "",
        },
    });

    const onSubmit = async (data: EditUserFormValues) => {
        try {
            await requestServer(`${GET_USERS}/${user.id}`, "post", {
                // @ts-ignore - no type for request
                data: { ...data },
            });
            setOpenEdit(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Dialog
            open={openEdit}
            onOpenChange={(open) => {
                setOpenEdit(open);
                if (open)
                    reset({
                        username: user.username ?? "",
                        email: user.email ?? "",
                        phone_number: user.phone_number ?? "",
                        password: "",
                        role: user.role ?? "",
                        lat: user.lat ?? "",
                        lng: user.lng ?? "",
                        address: user.address ?? "",
                        telephone: user.telephone ?? "",
                        icon: user.icon ?? "",
                        name_fa: user.name_fa ?? "",
                    });
            }}
        >
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    {t("edit")}
                </Button>
            </DialogTrigger>

            <DialogContent className="p-5">
                <DialogHeader>
                    <DialogTitle className="text-start">{t("edit")}</DialogTitle>
                    <DialogDescription className="text-start py-0 pt-2">{t("edit_description")}</DialogDescription>
                </DialogHeader>

                <motion.form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {[
                        ["username", "text"],
                        ["email", "email"],
                        ["phone_number", "tel"],
                        ["password", "password"],
                        ["role_id", "text"],
                        ["lat", "text"],
                        ["lng", "text"],
                        ["address", "text"],
                        ["telephone", "text"],
                        ["icon", "text"],
                    ].map(([field, type]) => (
                        <div key={field} className="space-y-1">
                            <Label htmlFor={field}>{t(field)}</Label>
                            <Input id={field} type={type} {...register(field as keyof EditUserFormValues)} />
                            {errors[field as keyof EditUserFormValues] && (
                                <p className="text-sm text-red-500">
                                    {errors[field as keyof EditUserFormValues]?.message?.toString()}
                                </p>
                            )}
                        </div>
                    ))}

                    <div className="flex justify-end gap-2 pt-4">
                        <Button type="button" variant="ghost" onClick={() => setOpenEdit(false)}>
                            {t("cancel")}
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {t("save_change")}
                        </Button>
                    </div>
                </motion.form>
            </DialogContent>
        </Dialog>
    );
};

export default EditForm;
