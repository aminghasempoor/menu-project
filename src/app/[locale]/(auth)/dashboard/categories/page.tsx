import React from "react";
import { CategoryComponent } from "@/components/Dashboard/Categories";
import { Create } from "@/components/Dashboard/Categories/Create";
export const metadata = {
    title: "دسته بندی ها",
};
export default function Dashboard() {
    return (
        <>
            <CategoryComponent />
            <Create />
        </>
    );
}
