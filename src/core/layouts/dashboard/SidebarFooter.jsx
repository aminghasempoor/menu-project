import { SidebarFooter, SidebarMenu } from "@/components/ui/sidebar";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Power } from "lucide-react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_LOGOUT_ROUTE } from "@/lib/utils/apiRoutes";
import useUserStore from "@/lib/utils/userStore";
import { useRouter } from "next/navigation";

const SidebarFooterComponent = () => {
    const t = useTranslations("Sidebar");
    const { logout } = useUserStore();
    const router = useRouter();
    const requestServer = useRequest({ notification: false, auth : true })
    const handleLogOut = async () => {
        try {
            await requestServer(GET_LOGOUT_ROUTE, "post");
            await logout();
            router.replace("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuButton asChild>
                    <Button onClick={handleLogOut}>
                        <p className={"text-md md:hidden"}>
                            {t("log_out")}
                        </p>
                        <Power />
                    </Button>
                </SidebarMenuButton>
            </SidebarMenu>
        </SidebarFooter>
    );
};
export default SidebarFooterComponent;
