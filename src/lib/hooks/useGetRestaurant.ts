import { useEffect } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_COFFEE_MENU } from "@/lib/utils/apiRoutes";
import { useRestaurantStore, MenuCategory } from "@/lib/utils/useRestaurantStore";
import { useUser } from "@/lib/utils/useUser";

export const useGetRestaurant = () => {
    const { setMenu, setLoading, setError, menu, isLoading, error } = useRestaurantStore();
    const user = useUser((state) => state.user);
    const requestServer = useRequest({ auth: false, notification: false });

    useEffect(() => {
        const fetchMenu = async () => {
            setLoading(true);
            setError(false);

            try {
                const response = (await requestServer(`${GET_COFFEE_MENU}?username=${user?.username}&menu_type=2`)) as {
                    data: { data: MenuCategory[] };
                };
                setMenu(response.data.data);
                const namesFaArray = response.data.data.map((item) => item.name_fa);
                localStorage.setItem("banner", JSON.stringify(namesFaArray));
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchMenu();
        }
    }, [user]);

    return { menu, isLoading, error };
};
