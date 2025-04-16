"use client";

import { useEffect } from "react";
import useUserStore from "@/lib/utils/userStore";

const InitUser = () => {
    const initialize = useUserStore((state) => state.initialize);

    useEffect(() => {
        initialize();
    }, [initialize]);

    return null;
};

export default InitUser;
