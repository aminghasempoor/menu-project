"use client";
import { useEffect, useState } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_USERS } from "@/lib/utils/apiRoutes";

export type User = {
    username: string;
    email: string | null;
    phone_number: string | null;
    role: string | null;
};

export const useUserManagement = () => {
    const requestServer = useRequest({ auth: true, notification: true });
    const [data, setData] = useState<User[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = (await requestServer(GET_USERS)) as { data: { data: User[] } };
                setData(response.data.data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { data, loading, error };
};
