"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import useRequest from "@/lib/hooks/useRequest";
import { GET_USERS } from "@/lib/utils/apiRoutes";

// 🧠 اعتبارسنجی Zod
const AddUserSchema = z.object({
    username: z.string().min(3, "حداقل ۳ کاراکتر لازم است"),
    email: z.string().email("ایمیل معتبر نیست").nullable().or(z.literal("")),
    phone_number: z.string().min(10).max(15).nullable().or(z.literal("")),
    name_fa: z.string().min(1, "تکمیل گزینه name fa الزامی است"),
    password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
    role_id: z.string().min(1, "تکمیل گزینه role id الزامی است"),
    lat: z.string().min(1, "تکمیل گزینه lat الزامی است"),
    lng: z.string().min(1, "تکمیل گزینه lng الزامی است"),
    address: z.string().min(1, "تکمیل گزینه address الزامی است"),
    telephone: z.string().min(1, "تکمیل گزینه telephone الزامی است"),
    icon: z.string().min(1, "تکمیل گزینه icon الزامی است"), // فرض بر اینکه URL یا مقدار آیکن هست
});

type AddUserFormValues = z.infer<typeof AddUserSchema>;

const TableToolbar = () => {
    const t = useTranslations("UserManagement");
    const [openAdd, setOpenAdd] = useState(false);
    const requestServer = useRequest({ auth: true, notification: true });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<AddUserFormValues>({
        resolver: zodResolver(AddUserSchema),
        defaultValues: {
            username: "",
            email: "",
            phone_number: "",
            name_fa: "",
            password: "",
            role_id: "",
            lat: "",
            lng: "",
            address: "",
            telephone: "",
            icon: "",
        },
    });

    const onSubmit = async (data: AddUserFormValues) => {
        try {
            // @ts-ignore - no type for request
            await requestServer(GET_USERS, "post", { data: { ...data }});
            setOpenAdd(false);
            reset();
        } catch (error) {
            console.error("Add user error:", error);
        }
    };

    return (
        <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">{t("user_management")}</h2>

            <Dialog open={openAdd} onOpenChange={(open) => {
                setOpenAdd(open);
                if (!open) reset();
            }}>
                <DialogTrigger asChild>
                    <Button size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        {t("add_user")}
                    </Button>
                </DialogTrigger>

                <DialogContent className="text-start p-5 max-h-[90vh] w-[500px] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-start">
                            {t("add_user")}
                        </DialogTitle>
                    </DialogHeader>

                    <motion.form
                        className="space-y-4 py-2"
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {[
                            { name: "username", label: t("username"), type: "text" },
                            { name: "email", label: t("email"), type: "email" },
                            { name: "phone_number", label: t("phone_number"), type: "tel" },
                            { name: "name_fa", label: t("name_fa"), type: "text" },
                            { name: "password", label: t("password"), type: "password" },
                            { name: "role_id", label: t("role_id"), type: "text" },
                            { name: "lat", label: t("lat"), type: "text" },
                            { name: "lng", label: t("lng"), type: "text" },
                            { name: "address", label: t("address"), type: "text" },
                            { name: "telephone", label: t("telephone"), type: "text" },
                            { name: "icon", label: t("icon"), type: "text" },
                        ].map(({ name, label, type }) => (
                            <div key={name} className="space-y-2">
                                <Label htmlFor={name}>{label}</Label>
                                <Input id={name} type={type} {...register(name as keyof AddUserFormValues)} />
                                {errors[name as keyof typeof errors] && (
                                    <p className="text-sm text-red-500">
                                        {(errors[name as keyof typeof errors] as any)?.message}
                                    </p>
                                )}
                            </div>
                        ))}

                        <div className="pt-4 flex justify-end gap-2">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => setOpenAdd(false)}
                                disabled={isSubmitting}
                            >
                                {t("cancel")}
                            </Button>
                            <Button type="submit" disabled={isSubmitting}>
                                {t("add_user")}
                            </Button>
                        </div>
                    </motion.form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default TableToolbar;
