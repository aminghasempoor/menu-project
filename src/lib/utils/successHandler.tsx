import Notifications from "@/core/components/notifications";
import { ToastType } from "@/lib/utils/ToastStore";
import { AxiosResponse } from "axios";
import { RequestOptions } from "@/lib/hooks/useRequest";

interface Props {
    pushToastList: (toast_type: ToastType, toast_id: string) => void;
    dismissToastList: (toast_types: ToastType[]) => void;
    response: AxiosResponse<any, any>;
    t: (key: string) => string;
    options: RequestOptions;
}

export const successRequest = (
    pushToastList: Props["pushToastList"],
    dismissToastList: Props["dismissToastList"],
    response: Props["response"],
    t: Props["t"],
    options: Props["options"]
) => {
    if (options.notification && options?.success?.notification.show) {
        dismissToastList(["pending", "warning", "error", "success"]);
        Notifications(pushToastList, "success", t, response.status);
    }
};
