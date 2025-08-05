import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { User } from "@/components/Dashboard/UserManagement/columns";
import { useTranslations } from "next-intl";

const TableToolbar = () => {
    const t = useTranslations("UserManagement")
    const [openAdd, setOpenAdd] = useState(false);

    const [newUser, setNewUser] = useState<User>({
        username: "",
        email: "",
        phone_number: "",
        role: null,
    });
    const handleAddUser = () => {
        console.log("کاربر جدید اضافه شد:", newUser);
        // اینجا می‌تونی درخواست API بفرستی
        setOpenAdd(false);
        // بعد از افزودن، فرم را ریست کن
        setNewUser({ username: "", email: "", phone_number: "", role: null });
    };
    return (
        <>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">{t("user_management")}</h2>

                <Dialog open={openAdd} onOpenChange={setOpenAdd}>
                    <DialogTrigger asChild>
                        <Button size="sm" className="gap-2">
                            <Plus className="h-4 w-4" />
                            {t("add_user")}
                        </Button>
                    </DialogTrigger>
                    <DialogContent className={"text-start p-5"}>
                        <DialogHeader>
                            <DialogTitle className={"text-start"}>{t("add_user")}</DialogTitle>
                        </DialogHeader>

                        <div className="space-y-4 py-2">
                            <div className="space-y-2">
                                <Label htmlFor="username">{t("username")}</Label>
                                <Input
                                    id="username"
                                    value={newUser.username}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, username: e.target.value })
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">{t("email")}</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={newUser.email || ""}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, email: e.target.value })
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">{t("phone_number")}</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={newUser.phone_number || ""}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, phone_number: e.target.value })
                                    }
                                />
                            </div>

                            <div className="pt-4 flex justify-end gap-2">
                                <Button
                                    variant="ghost"
                                    onClick={() => setOpenAdd(false)}
                                >
                                    {t("cancel")}
                                </Button>
                                <Button onClick={handleAddUser}>{t("add_user")}</Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}
export default TableToolbar;