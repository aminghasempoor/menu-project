"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import useRequest from "@/lib/hooks/useRequest";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";
import { z } from "zod"

export default function Home() {
    const t = useTranslations();
    const requestServer = useRequest({ notification: true });
    const formSchema = z.object({
        phone_number: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: "onBlur",
        defaultValues: {
            phone_number: "",
        },
    })

    function onSubmit(values) {
        console.log(values);
    }
    const handleClick = async () => {
        requestServer("/api/fake-sign-in", "post", {
            data: {
                phone_number: "0913",
                password: "123",
            },
            success: {
                notification: { show: true },
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <section className="flex flex-col items-center justify-center h-screen text-center">
                <motion.h1
                    className="text-5xl font-bold text-gray-800 md:text-7xl"
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    {t("HomePage.title")}
                </motion.h1>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="phone_number"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormControl>
                                        <Input
                                            className="border-2"
                                            placeholder={t("LoginPage.phone_number")}
                                            {...field}
                                        />
                                    </FormControl>
                                    <div className="w-full h-3 ">
                                        <FormMessage
                                            className="px-4 text-Light-Required dark:text-Dark-Required font-bold" />
                                    </div>
                                </FormItem>
                            )}
                        />
                        <Button
                            className="flex w-full h-12 gap-2 bg-Light-SubmitBtnColor dark:bg-Dark-SubmitBtnColor hover:bg-opacity-70 hover:dark:bg-opacity-70 text-Light-SubmitBtnTextColor dark:text-Dark-SubmitBtnTextColor"
                            type="submit"
                        >
                            {t("LoginPage.login")}
                            <LogIn />
                        </Button>
                    </form>
                </Form>
                <motion.p
                    className="mt-4 text-lg text-gray-600 md:text-xl"
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Build fast, modern, and elegant web experiences.
                </motion.p>
                <motion.div
                    className="mt-8 flex space-x-4"
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button onClick={handleClick} variant="default" className="px-6 py-3">
                        Get Started
                    </Button>
                    <Button variant="outline" className="px-6 py-3">
                        Learn More
                    </Button>
                </motion.div>

            </section>
        </div>
    );
}