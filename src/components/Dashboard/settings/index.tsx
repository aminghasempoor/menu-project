"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import useUserStore, { User } from "@/lib/utils/userStore";
import { useTranslations } from "next-intl";
import useRequest from "@/lib/hooks/useRequest";

export default function UserSettings() {
    const t = useTranslations("Settings");
    const requestServer = useRequest({ auth: true, notification: true });
    const user = useUserStore((state) => state.user);
    const userForForm = {
        username: user.username || "",
        email: user.email || "",
        phone_number: user.phone_number || "",
    };
    const {
        control,
        handleSubmit,
        formState: { isDirty, isSubmitting },
        reset,
    } = useForm<User>({
        defaultValues: userForForm,
    });

    const [apiError, setApiError] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    const onSubmit = async (data: User) => {
        setApiError(null);
        setSuccessMsg(null);
        try {
            await requestServer("/api/user/settings", "post", {
                data: {
                    username: data.username,
                    email: data.email!,
                    phone_number: data.phone_number!,
                },
            });
            setSuccessMsg(t("success_msg"));
            reset(data);
        } catch (error) {
            console.log(error);
            setApiError(t("error_msg"));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-md"
        >
            <h2 className="text-xl font-bold mb-6 text-center">{t("title")}</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <label htmlFor="username" className="block mb-1 font-medium">
                        {t("user_name")}
                    </label>
                    <Controller
                        name="username"
                        control={control}
                        rules={{ required: t("required") }}
                        render={({ field, fieldState }) => (
                            <>
                                <input
                                    {...field}
                                    id="username"
                                    type="text"
                                    className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                                        fieldState.error
                                            ? "border-red-500 focus:ring-red-400"
                                            : "border-gray-300 focus:ring-blue-400"
                                    }`}
                                />
                                {fieldState.error && (
                                    <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>
                                )}
                            </>
                        )}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                        {t("email")}
                    </label>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: t("required"),
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: t("invalid_format"),
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <>
                                {/* @ts-ignore - no type for input */}
                                <input
                                    {...field}
                                    id="email"
                                    type="email"
                                    className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                                        fieldState.error
                                            ? "border-red-500 focus:ring-red-400"
                                            : "border-gray-300 focus:ring-blue-400"
                                    }`}
                                />
                                {fieldState.error && (
                                    <p className="text-red-600 text-sm mt-1">{fieldState.error.message}</p>
                                )}
                            </>
                        )}
                    />
                </div>
                <div>
                    <label htmlFor="phone_number" className="block mb-1 font-medium">
                        {t("phone_number")}
                    </label>
                    <Controller
                        name="phone_number"
                        control={control}
                        render={({ field }) => (
                            // @ts-ignore - no type for input
                            <input
                                {...field}
                                id="phone_number"
                                type="tel"
                                placeholder={t("enter_phone_number")}
                                className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
                            />
                        )}
                    />
                </div>
                {apiError && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-center">
                        {apiError}
                    </motion.p>
                )}
                {successMsg && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-center">
                        {successMsg}
                    </motion.p>
                )}

                <button
                    type="submit"
                    disabled={!isDirty || isSubmitting}
                    className={`w-full py-2 rounded text-white font-semibold transition-colors ${
                        !isDirty || isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {t("submit")}
                </button>
            </form>
        </motion.div>
    );
}
