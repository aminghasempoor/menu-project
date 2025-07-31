import { useEffect } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_COFFEE_MENU } from "@/lib/utils/apiRoutes";
import { useRestaurantStore, MenuCategory } from "@/lib/utils/useRestaurantStore";

export const useGetRestaurant = (username: string) => {
    const { setMenu, setLoading, setError, menu, isLoading, error } = useRestaurantStore();
    const requestServer = useRequest({ auth: false, notification: false });

    useEffect(() => {
        const fetchMenu = async () => {
            setLoading(true);
            setError(false);

            try {
                const response = (await requestServer(`${GET_COFFEE_MENU}?username=${username}&menu_type=2`)) as {
                    data: { data: MenuCategory[] };
                };
                setMenu(response.data.data);
            } catch (err) {
                console.log(err);
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
