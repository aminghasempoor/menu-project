"use client";
import React from "react";
import UserMiddleware from "@/core/middlewares/UserMiddleware";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <UserMiddleware>{children}</UserMiddleware>;
};

export default Layout;
