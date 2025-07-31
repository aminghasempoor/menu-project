import useSWR from "swr";
import { useCustomerReview } from "@/lib/utils/useCustomerReview";
import React from "react";
import { GET_RATING } from "@/lib/utils/apiRoutes";
import { useUser } from "@/lib/utils/useUser";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useCustomerReviewData = () => {
    const { user } = useUser();
    const { setRatings, setLoadingData } = useCustomerReview();

    const { data, isLoading, mutate, error } = useSWR(`${GET_RATING}${user}`, fetcher, {
        onSuccess: (data) => {
            setRatings(data);
            setLoadingData(false);
        },
        onError: () => {
            setRatings([]);
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
