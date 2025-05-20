import { useEffect, useState } from "react";
import useRequest from "@/lib/hooks/useRequest";

type FetchState = {
    data: {
        name: string;
        price:string
        ingredients:string
        description:string
        is_recommended : boolean
        image:string
        category_id:string
    } | null;
    loading: boolean;
};

export function useGetEditContent(url: string | null) {
    const requestServer = useRequest({auth : true, notification : false});
    const [state, setState] = useState({ data: null, loading: false });

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setState({ data: null, loading: true });
            try {
                const response = await requestServer(url);
                // @ts-ignore
                setState({ data: response.data, loading: false });
            } catch (error) {
                console.error(error);
                setState({ data: null, loading: false });
            }
        };

        fetchData();
    }, [url]);

    return state;
}
