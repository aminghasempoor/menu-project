import { SidebarFooter, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

const SidebarFooterComponent = ({ title }) => {
    return (
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>{title}</SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    );
};
export default SidebarFooterComponent;
