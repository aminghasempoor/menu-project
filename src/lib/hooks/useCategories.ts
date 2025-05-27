"use client";
import { useEffect, useState } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_CATEGORIES } from "@/lib/utils/apiRoutes";

interface Category {
    image: string;
    name_fa: string;
    id: number;
}

interface UseCategoriesResponse {
    categories: Category[];
    loadingCategories: boolean;
    errorCategories: boolean;
}

interface ApiResponse {
    data: {
        data: Category[];
    };
}

const useCategories = (): UseCategoriesResponse => {
    const requestServer = useRequest({ notification: false, auth: true });
    const [categories, setCategories] = useState<Category[]>([]);
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
    const [errorCategories, setErrorCategories] = useState<boolean>(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = (await requestServer(GET_CATEGORIES)) as ApiResponse;
                setCategories(response.data.data);
                setLoadingCategories(false);
            } catch (e: unknown) {
                console.log(e);
                setErrorCategories(true);
                setLoadingCategories(false);
            }
        };

        fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { categories, loadingCategories, errorCategories };
};

export default useCategories;
