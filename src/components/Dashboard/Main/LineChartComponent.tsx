"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useTranslations } from "next-intl";
import useReports from "@/lib/hooks/useReports";

export function LineChartComponent() {
    const t = useTranslations("LineChart");
    const { reports, loadingReports, errorReports } = useReports();

    const chartConfig = {
        desktop: {
            label: `${t("label")}`,
            color: "hsl(var(--chart-1))",
        },
    } satisfies ChartConfig;

    const chartData = reports.map((item) => ({
        month: item.day,
        desktop: item.sum,
    }));

    return (
        <Card className={"mt-5"}>
            <CardHeader className={"capitalize"}>
                <CardTitle>{t("title")}</CardTitle>
                <CardDescription>{t("description")}</CardDescription>
            </CardHeader>
            <CardContent>
                {loadingReports ? (
                    <p>در حال بارگذاری...</p>
                ) : errorReports ? (
                    <p className="text-red-500">خطا در دریافت داده‌ها</p>
                ) : (
                    <ChartContainer config={chartConfig} className="w-full h-[300px]">
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(5)} // "2025-07-31" -> "07-31"
                            />
                            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                            <Line
                                dataKey="desktop"
                                type="linear"
                                stroke="var(--color-desktop)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    );
}
