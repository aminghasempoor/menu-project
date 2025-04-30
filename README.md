# 📦 Menulita

یک پروژه ساخته‌شده با [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/), و [TypeScript](https://www.typescriptlang.org/).

## 🛠️ تکنولوژی‌ها

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/) (استایل پایه برای shadcn)
- [pnpm](https://pnpm.io/) (برای مدیریت بسته‌ها)

## ⚙️ نصب و راه‌اندازی

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
pnpm install
pnpm dev

```


## 🧱 ساختار پروژه

```bash
src/
├───app/
│   └───[locale]/           # پشتیبانی از زبان‌های مختلف (مثلاً fa, en)
│       └───(auth)/         # مسیرهای احراز هویت
│           ├───login/      # صفحه ورود
│           └───dashboard/  # پنل مدیریتی
│               ├───categories/
│               └───items/
├───components/             # کامپوننت‌های بازاستفاده‌پذیر
│   ├───Banner/
│   ├───FirstPage/
│   ├───Login/
│   ├───Main/
│   ├───Navbar/
│   ├───Dashboard/          # اجزای پنل مدیریت
│   │   ├───Categories/
│   │   ├───Items/
│   │   └───Main/
│   └───ui/                 # اجزای UI سفارشی شده (shadcn)
├───core/
│   ├───components/
│   │   ├───DataTable/      # جدول داده با قابلیت محلی‌سازی
│   │   │   └───localization/
│   │   │       └───fa/
│   │   ├───notifications/
│   │   └───svgs/
│   ├───layouts/            # چیدمان‌ها
│   │   └───dashboard/
│   ├───middlewares/
│   └───utils/
├───fonts/                  # فونت‌های سفارشی (مثلاً Sahel و Shabnam)
├───hooks/                  # هوک‌های عمومی
├───i18n/                   # تنظیمات و فایل‌های ترجمه
└───lib/
    ├───contexts/           # React Contexts
    ├───hooks/              # هوک‌های خاص کتابخانه‌ها
    └───utils/              # توابع کمکی عمومی