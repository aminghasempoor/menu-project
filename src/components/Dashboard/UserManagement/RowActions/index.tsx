"use client";
import { User } from "../columns";
import DeleteForm from "./Delete";
import EditForm from "./Edit";

export interface RowActionsProps {
    user: User;
}

const RowActions = ({ user }: RowActionsProps) => {
    return (
        <div className="flex justify-center gap-2">
            {/* Edit */}
            <EditForm user={user} />

            {/* Delete */}
            <DeleteForm user={user} />
        </div>
    );
};

export default RowActions;
