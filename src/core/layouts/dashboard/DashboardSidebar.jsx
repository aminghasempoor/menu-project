"use client";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import SidebarHeaderComponent from "./SidebarHeader";
import SidebarFooterComponent from "./SidebarFooter";
import { useTranslations } from "next-intl";
import { getDashboardSidebarItems } from "@/core/utils/dashboardSidebarItems";

export function DashboardSidebar() {
    const t = useTranslations("Sidebar");
    const items = getDashboardSidebarItems(t);
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    return (
        <Sidebar collapsible="icon" variant="inset" side={`${segments[0] === "en" ? "left" : "right"}`}>
            <SidebarHeaderComponent title={"Logo"} />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className={"text-2xl mb-2 capitalize"}>{t("global_title")}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <Collapsible key={item.title} defaultOpen className="group/collapsible">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={`${item.url === `/${segments[1]}${segments[2] ? `/${segments[2]}` : ""}`}`}
                                            >
                                                <Link href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <SidebarMenuSubItem />
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooterComponent />
        </Sidebar>
    );
}
