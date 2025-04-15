import { useTranslations } from "next-intl";
import { LineChartComponent } from "./LineChartComponent";
import { Statistics } from "./Statistics";
import { MostViewed } from "./MostViewed";

export function DashboardComponent() {
    const t = useTranslations("Dashboard");
    return (
        <>
            <div className={"flex items-center gap-x-3"}>
                <h1 className="text-md scroll-m-20 sm:text-2xl font-bold tracking-tight">{t("title")}</h1>
                <div className="border-t-2 flex-grow ml-2 border-black/75" />
            </div>
            <Statistics />
            <LineChartComponent />
            <div className={"flex items-center gap-x-3 mt-5"}>
                <h1 className="text-md scroll-m-20 sm:text-2xl font-bold tracking-tight">{t("most_view")}</h1>
                <div className="border-t-2 flex-grow ml-2 border-black/75" />
            </div>
            <MostViewed />
        </>
    );
}
