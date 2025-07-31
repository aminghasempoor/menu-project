import useSWR from "swr";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";
import React from "react";
import { GET_RATING } from "@/lib/utils/apiRoutes";
import { useUser } from "@/lib/utils/useUser";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useCustomerReviewData = () => {
    const user = useUser((state) => state.user);
    const { setRatings, setLoadingData, setError } = useCustomerReview();

    const { data, isLoading, mutate, error } = useSWR(`${GET_RATING}${user?.username}`, fetcher, {
        onSuccess: (data) => {
            setRatings(data.data);
            setLoadingData(false);
        },
        onError: () => {
            setRatings([]);
            setError(true);
            setLoadingData(false);
        },
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
        keepPreviousData: true,
    });

    React.useEffect(() => {
        setLoadingData(isLoading);
    }, [isLoading]);

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};
