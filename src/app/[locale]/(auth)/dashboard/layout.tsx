import React from "react";
import WithAuthMiddleware from "@/core/middlewares/WithAuthMiddleware";

export default async function DashboardLayout({ children } : {children: React.ReactNode}) {
    return (
        // <WithAuthMiddleware>
        <div className={"px-10"}>
            {children}
        </div>
        // </WithAuthMiddleware>
    );
}
