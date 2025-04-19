import { ItemsComponent } from "@/components/Dashboard/Items";
import { AddItem } from "@/components/Dashboard/Items/AddItem";
import React from "react";
export const metadata = {
    title: "آیتم ها",
};
export default function Dashboard() {
    return (
        <>
            <ItemsComponent />
            <AddItem />
        </>
    );
}
