"use client";
import { ColumnDef } from "@tanstack/react-table";
import RowActions from "./RowActions";

export type User = {
    username: string;
    id?: number;
    email: string | null;
    phone_number: string | null;
    role: string | null;
    lat: string;
    lng: string;
    address: string;
    telephone: string;
    icon: string;
    name_fa: string;
};

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "username",
        header: "نام کاربری",
        cell: ({ row }) => {
            return <div className={"text-center"}>{row.getValue("username")}</div>;
        },
    },
    {
        accessorKey: "email",
        header: "ایمیل",
        cell: ({ row }) => {
            return <div className={"text-center"}>{row.getValue("email")}</div>;
        },
    },
    {
        accessorKey: "phone_number",
        header: "شماره تلفن",
        cell: ({ row }) => {
            return <div className={"text-center"}>{row.getValue("phone_number")}</div>;
        },
    },
    {
        id: "actions",
        header: "عملیات",
        cell: ({ row }) => (
            <div className={"justify-end"}>
                <RowActions user={row.original} />
            </div>
        ),
    },
];
