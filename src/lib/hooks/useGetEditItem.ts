import { useEffect, useState } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_EDIT_ITEM } from "@/lib/utils/apiRoutes";

export function useGetEditItem(id?: null | number) {
    const requestServer = useRequest({ auth: true, notification: false });
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            setState({ data: null, loading: true });
            try {
                const response = await requestServer(`${GET_EDIT_ITEM}/${id}`);
                // @ts-expect-error typing will be fixed later
                setState({ data: response.data.data, loading: false });
            } catch (error) {
                console.error(error);
                setState({ data: null, loading: false });
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return state;
}
