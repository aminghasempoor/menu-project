"use client";
import { toast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import React from "react";
type ToastType = "pending" | "error" | "warning" | "success";

const ErrorNotification = (
    pushToastList: (toast_type: ToastType, toast_id: string) => void,
    notificationType: "pending" | "warning" | "error" | "success",
    t: (key: string) => string,
    status?: number,
    message?: string
) => {
    const toastId = toast({
        title: "You're Request has been sent",
        description: (
            <div className="flex flex-col items-start justify-start">
                <div className="flex items-center">
                    <Check />
                    <div className="flex">
                        <h6 className={"pr-2"}>{message}</h6>
                        <h1 className="text-green-600">
                            {t("HomePage.title")}
                            {status}
                        </h1>
                    </div>
                </div>
            </div>
        ) as React.ReactNode, // Cast to React.ReactNode here
    });
    pushToastList(notificationType, toastId.id);
};
export default ErrorNotification;
