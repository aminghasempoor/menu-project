"use client";
import useSWR from "swr";
import useRequest from "@/lib/hooks/useRequest";
import { GET_CATEGORIES } from "@/lib/utils/apiRoutes";

interface Category {
    image: string;
    name_fa: string;
    id: number;
}

interface ApiResponse {
    data: {
        data: Category[];
    };
}

const useCategories = () => {
    const requestServer = useRequest({ notification: false, auth: true });

    const fetcher = (url: string) =>
        // @ts-expect-error typing will be fixed later
        requestServer(url).then((res: ApiResponse) => res.data.data);

    const { data, error, isLoading, mutate } = useSWR<Category[]>(
        `${GET_CATEGORIES}?menu_type=${localStorage.getItem("menu_type")}`,
        fetcher,
        {
            revalidateIfStale: true,
            revalidateOnFocus: false,
            revalidateOnReconnect: true,
            keepPreviousData: true,
        }
    );

    return {
        categories: data ?? [],
        loadingCategories: isLoading,
        errorCategories: !!error,
        mutateCategories: mutate,
    };
};

export default useCategories;
