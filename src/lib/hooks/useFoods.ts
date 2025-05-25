"use client";
import { useEffect, useState } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_FOODS } from "@/lib/utils/apiRoutes";
interface Food {
    image: string;
    name_fa: string;
    id: number;
    description: string;
    price: string;
}

interface UseFoodsResponse {
    foods: Food[];
    loadingFoods: boolean;
    errorFoods: boolean;
}
interface ApiResponse {
    data: {
        data: Food[];
    };
}

const useFoods = (): UseFoodsResponse => {
    const requestServer = useRequest({ notification: false, auth: true });
    const [foods, setFoods] = useState<Food[]>([]);
    const [loadingFoods, setLoadingFoods] = useState<boolean>(true);
    const [errorFoods, setErrorFoods] = useState<boolean>(false);

    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = (await requestServer(GET_FOODS)) as ApiResponse;
                setFoods(response.data.data);
                setLoadingFoods(false);
            } catch (e: unknown) {
                console.log(e);
                setErrorFoods(true);
                setLoadingFoods(false);
            }
        };

        fetchProvinces();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { foods, loadingFoods, errorFoods };
};

export default useFoods;
