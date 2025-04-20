import { Calendar, Home, Inbox, WalletCards, Settings } from "lucide-react";
export function getDashboardSidebarItems(t: (key: string) => string) {
    return [
        {
            title: t("home"),
            url: "/",
            icon: Home,
        },
        {
            title: t("profile"),
            url: "/dashboard",
            icon: Inbox,
        },
        {
            title: t("items"),
            url: "/dashboard/items",
            icon: Calendar,
        },
        {
            title: t("category"),
            url: "#",
            icon: WalletCards,
        },
        {
            title: t("settings"),
            url: "#",
            icon: Settings,
        },
    ];
}
