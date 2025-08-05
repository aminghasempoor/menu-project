"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useTranslations } from "next-intl";
import useReports from "@/lib/hooks/useReports";
import { Statistics } from "@/components/Dashboard/Main/Statistics";
import { SkeletonCard } from "@/core/SkeletonCard";
import { motion } from "framer-motion";

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
        <>
            {loadingReports ? (
                <SkeletonCard />
            ) : errorReports ? (
                <p className="text-red-500 text-center pt-10">خطا در دریافت داده‌ها</p>
            ) : (
                <>
                    <Statistics view={reports[0].sum} />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Card className="mt-5">
                            <CardHeader className="capitalize">
                                <CardTitle>{t("title")}</CardTitle>
                                <CardDescription>{t("description")}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="w-full h-[300px]">
                                    <LineChart
                                        accessibilityLayer
                                        data={chartData}
                                        margin={{ left: 12, right: 12 }}
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
                            </CardContent>
                        </Card>
                    </motion.div>
                </>
            )}
        </>
    );
}
