"use client";
import { useEffect, useState } from "react";
import useRequest from "@/lib/hooks/useRequest";
import { GET_REPORTS } from "@/lib/utils/apiRoutes";

export interface ReportEntry {
    day: string;
    sum: number;
}

interface ApiResponse {
    data: {
        data: { site_view: ReportEntry[] }
    };
}

const useReports = () => {
    const requestServer = useRequest({ notification: false, auth: true });

    const [reports, setReports] = useState<ReportEntry[]>([]);
    const [loadingReports, setLoadingReports] = useState<boolean>(true);
    const [errorReports, setErrorReports] = useState<boolean>(false);

    const fetchReports = async () => {
        setLoadingReports(true);
        setErrorReports(false);
        try {
            const response = (await requestServer(GET_REPORTS)) as ApiResponse;
            setReports(response.data.data.site_view);
        } catch (error) {
            console.error(error);
            setErrorReports(true);
        } finally {
            setLoadingReports(false);
        }
    };

    useEffect(() => {
        fetchReports();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        reports,
        loadingReports,
        errorReports,
        refetchReports: fetchReports,
    };
};

export default useReports;
