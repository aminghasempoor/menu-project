import { ItemsComponent } from "@/components/Dashboard/Items";
import { Create } from "@/components/Dashboard/Items/Create";
import React from "react";
export const metadata = {
    title: "آیتم ها",
};
export default function Dashboard() {
    return (
        <>
            <ItemsComponent />
            <Create />
        </>
    );
}
