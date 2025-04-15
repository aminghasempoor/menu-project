import React from "react";
import WithoutAuthMiddleware from "@/core/middlewares/WithoutAuthMiddleware";

export default async function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <WithoutAuthMiddleware>
            <div className={"px-10"}>{children}</div>
        </WithoutAuthMiddleware>
    );
}
