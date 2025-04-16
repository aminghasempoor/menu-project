"use client";
import { useEffect, useState } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_FOODS } from "@/lib/utils/apiRoutes";

const useFoods = () => {
    const requestServer = useRequest({ notification: false, auth: true });
    const [foods, setFoods] = useState([]);
    const [loadingFoods, setLoadingFoods] = useState(true);
    const [errorFoods, setErrorFoods] = useState(null);

    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await requestServer(GET_FOODS);
                setFoods(response.data.data);
                setLoadingFoods(false);
            } catch (e) {
                setErrorFoods(e);
                setLoadingFoods(false);
            }
        };

        fetchProvinces();
    }, []);

    return { foods, loadingFoods, errorFoods };
};

export default useFoods;
