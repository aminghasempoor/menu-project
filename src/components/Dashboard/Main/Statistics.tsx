import { Card, CardContent } from "@/components/ui/card";
const stats = [
    { label: "بازدید امروز", value: "450" },
    { label: "کل آیتم‌ها", value: "52" },
    { label: "دسته‌بندی‌ها", value: "11" },
];
export function Statistics() {
    return (
        <Card className="w-full max-w-xl mx-auto rounded-2xl shadow-md mt-5">
            <CardContent className="flex justify-between items-center p-4 gap-4 text-center text-sm font-medium">
                {stats.map((stat, index) => (
                    <div key={index} className="flex-1">
                        <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                        <div className="mt-1">{stat.label}</div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
