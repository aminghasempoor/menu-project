import { Calendar, Home, Inbox, WalletCards, Settings } from "lucide-react";
export const DashboardSidebarItems = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Profile",
        url: "/dashboard",
        icon: Inbox,
    },
    {
        title: "Appointment",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Wallet",
        url: "#",
        icon: WalletCards,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];