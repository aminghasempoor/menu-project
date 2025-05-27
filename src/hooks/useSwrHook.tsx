"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSwrHook<T = any>(url: string) {
    const { data, error, isLoading, mutate } = useSWR<T>(url, fetcher, {
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
        keepPreviousData: true,
    });

    async function refresh() {
        await mutate();
    }

    return {
        data,
        error,
        isLoading,
        mutate,
        refresh,
    };
}
