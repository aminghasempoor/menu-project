import React from "react";
import { CategoryComponent } from "@/components/Dashboard/Categories";
import { AddCategory } from "@/components/Dashboard/Categories/AddCategory";
export const metadata = {
    title: "دسته بندی ها",
};
export default function Dashboard() {
    return (
        <>
            <CategoryComponent />
            <AddCategory />
        </>
    );
}
