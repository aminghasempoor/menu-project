"use client";

import LoadingHardPage from "@/core/LoadingHardPage";
import { useTranslations } from "next-intl";

export default function GlobalError() {
    const t = useTranslations("NotFound");
    return <LoadingHardPage loading={true} width={200} height={200} label={t("title")} />;
}
