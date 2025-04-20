import { SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";

const SidebarHeaderComponent = ({ title }) => {
    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <Link href="/">{title}</Link>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    );
};
export default SidebarHeaderComponent;
