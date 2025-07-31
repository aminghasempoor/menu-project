"use client";
import useSWR from "swr";
import useRequest from "@/lib/hooks/useRequest";
import { GET_FOODS } from "@/lib/utils/apiRoutes";

interface Food {
    image: string;
    name_fa: string;
    id: number;
    description: string;
    price: string;
}

interface ApiResponse {
    data: {
        data: Food[];
    };
}

const useFoods = () => {
    const requestServer = useRequest({ notification: false, auth: true });

    // @ts-ignore - no type for response
    const fetcher = (url: string) => requestServer(url).then((res: ApiResponse) => res.data.data);

    const { data, error, isLoading, mutate } = useSWR<Food[]>(
        `${GET_FOODS}?menu_type=${localStorage.getItem("menu_type")}`,
        fetcher,
        {
            revalidateIfStale: true,
            revalidateOnFocus: false,
            revalidateOnReconnect: true,
            keepPreviousData: true,
        }
    );

    return {
        foods: data ?? [],
        loadingFoods: isLoading,
        errorFoods: !!error,
        mutateFoods: mutate,
    };
};

export default useFoods;
