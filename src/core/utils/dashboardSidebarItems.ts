import { Calendar, Home, Inbox, WalletCards, Settings, ScrollText } from "lucide-react";
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
            url: "/dashboard/categories",
            icon: WalletCards,
        },
        {
            title: t("customer_review"),
            url: "/dashboard/customer-review",
            icon: ScrollText,
        },
        {
            title: t("settings"),
            url: "/dashboard/settings",
            icon: Settings,
        },
    ];
}
