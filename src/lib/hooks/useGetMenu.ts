import { useEffect } from "react";
import { MenuCategory, useMenuStore } from "@/lib/utils/useMenuStore ";
import useRequest from "@/lib/hooks/useRequest";
import { GET_COFFEE_MENU } from "@/lib/utils/apiRoutes";

export const useGetMenu = (username: string) => {
    const { setMenu, setLoading, setError, menu, isLoading, error } = useMenuStore();
    const requestServer = useRequest({ auth: false, notification: false });

    useEffect(() => {
        const fetchMenu = async () => {
            setLoading(true);
            setError(false);

            try {
                const response = await requestServer(
                    `${GET_COFFEE_MENU}?username=${username}&menu_type=1`,
                ) as { data: { data: MenuCategory[] } };
                setMenu(response.data.data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchMenu();
        }
    }, [username]);

    return { menu, isLoading, error };
};
