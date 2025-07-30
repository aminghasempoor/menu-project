import { z } from "zod";
import { TranslationValues } from "next-intl";

export const loginFormSchema = (t: (key: string, params?: TranslationValues) => string) =>
    z.object({
        user_name: z.string().min(1, { message: t("LoginPage.Required") }),
        password: z
            .string()
            .min(1, { message: t("LoginPage.Required") })
            .min(6, { message: t("LoginPage.minimum_character") })
            .max(10),
    });

export const RegisterFormSchema = (t: (key: string, params?: Record<string, unknown>) => string) =>
    z.object({
        phone_number: z
            .string()
            .min(1, { message: t("RegisterPage.Required") })
            .max(11, { message: t("RegisterPage.error_max", { max: 11 }) }),
    });
export const CustomerReviewSchema = (t: (key: string) => string) =>
    z.object({
        star: z
            .string(),
        text : z.string().min(1, { message: t("Required") })
    });
export const addItemSchema = (t: (key: string, params?: TranslationValues) => string) =>
    z.object({
        name_fa: z.string().min(1, { message: t("required") }),
        price: z
            .string()
            .regex(/^\d+$/, { message: t("price_should_be_number") })
            .min(1, { message: t("required") }),
        ingredients: z.string().min(1, { message: t("required") }),
        description: z.string().min(1, { message: t("required") }),
        is_recommended: z.boolean().or(z.string().transform((val) => val === "true" || val === "1")),
        image: z.union([z.instanceof(File), z.string().url()]).refine(
            (val) => {
                if (typeof val === "string") return val.length > 0;
                return val instanceof File;
            },
            {
                message: t("upload_image_err"),
            }
        ),
        category_id: z.string().min(1, { message: t("required") }),
    });
export const addCategorySchema = (t: (key: string, params?: TranslationValues) => string) =>
    z.object({
        name_fa: z.string().min(1, { message: t("required") }),
        // image: z.union([z.instanceof(File), z.string().url()]).refine(
        //     (val) => {
        //         if (typeof val === "string") return val.length > 0;
        //         return val instanceof File;
        //     },
        //     {
        //         message: t("upload_image_err"),
        //     }
        // ),
    });
export const OtpFormSchema = (t: (key: string) => string) =>
    z.object({
        pin: z.string().min(5, {
            message: t("OtpPage.pin_required"),
        }),
    });
export const UserDataFormSchema = (t: (key: string) => string) =>
    z.object({
        first_name: z.string().min(1, {
            message: t("UserDataPage.first_name_required"),
        }),
        last_name: z.string().min(1, {
            message: t("UserDataPage.last_name_required"),
        }),
        national_id: z.string().min(1, {
            message: t("UserDataPage.national_id_required"),
        }),
        birthday: z
            .string({ message: t("UserDataPage.birthday_invalid") })
            .min(1, {
                message: t("UserDataPage.birthday_required"),
            })
            .refine(
                (value) => !isNaN(Date.parse(value)), // Ensure it's a valid date string
                { message: t("UserDataPage.birthday_invalid") }
            ),
        gender: z.string().min(1, {
            message: t("UserDataPage.gender_required"),
        }),
        province: z.string().min(1, {
            message: t("UserDataPage.province_required"),
        }),
        city: z.string().min(1, {
            message: t("UserDataPage.city_required"),
        }),
    });
