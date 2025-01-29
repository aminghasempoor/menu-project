"use client";
import { toast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import React from "react";
// import {ToastAction} from "@/components/ui/toast";
type ToastType = "pending" | "error" | "warning" | "success";

const SuccessNotification = (pushToastList: (toast_type: ToastType, toast_id: string) => void,
                             notificationType: "pending" | "warning" | "error" | "success",
                             t: (key: string) => string,
                             status?: number,) => {
    const toastId = toast({
        title: "You're Request has been sent",
        description: (
            <div className="flex flex-col items-start justify-start">
                <div className="flex items-center">
                    <Check />
                    <div className="flex">
                        <h1 className="text-green-600">
                            {t("HomePage.title")}
                            Use your class for success color
                            {status}
                        </h1>
                    </div>
                </div>
            </div>
        ) as React.ReactNode, // Cast to React.ReactNode here
    });
    pushToastList(notificationType, toastId.id);
};
export default SuccessNotification;