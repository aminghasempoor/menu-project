export type foodItemType = {
    picture: string;
    title: string;
    description: string;
    price: string;
};
export const pizzaItems = [
    { picture: "/pizza.jpg", title: "پیتزا هاوالین", description: "پنیر، سس، اناناس", price: "800000 تومان" },
    { picture: "/burger.jpg", title: "پیتزا مارگاریتا", description: "پنیر، گوجه، ریحان", price: "2200 تومان" },
    { picture: "/pizza.jpg", title: "پیتزا کچاب", description: "کچاب، سوسیس، قارچ", price: "2300 تومان" },
    { picture: "/burger.jpg", title: "پیتزا کچاب", description: "کچاب، سوسیس، قارچ", price: "2300 تومان" },
];

export const burgerItems = [
    { picture: "/burger.jpg", title: "برگر کلاسیک", description: "گوشت گوساله، پنیر، کاهو، گوجه", price: "1800 تومان" },
    { picture: "/burger.jpg", title: "چیزبرگر", description: "گوشت، پنیر، پیاز کاراملی", price: "2000 تومان" },
    { picture: "/burger.jpg", title: "دبل برگر", description: "دو لایه گوشت، پنیر دوبل، خیارشور", price: "2500 تومان" },
    { picture: "/burger.jpg", title: "برگر اسپایسی", description: "گوشت تند، فلفل، سس مخصوص", price: "2200 تومان" },
];
export const sushiItems = [
    { picture: "/sushi.jpg", title: "سوشی سالمون", description: "برنج، سالمون تازه، جلبک دریایی", price: "3000 تومان" },
    { picture: "/sushi.jpg", title: "سوشی تن ماهی", description: "تن، آووکادو، برنج", price: "2800 تومان" },
    { picture: "/sushi.jpg", title: "ماکی رول", description: "خیار، هویج، جلبک، برنج", price: "2700 تومان" },
    { picture: "/sushi.jpg", title: "دراگون رول", description: "میگو، آووکادو، سس تریاکی", price: "3200 تومان" },
];
export const recommendedPizzaItem = [
    { picture: "/burger.jpg", title: "پیتزا مارگاریتا", description: "پنیر، گوجه، ریحان", price: "2200 تومان" },
];
export const recommendedBurgerItem = [
    { picture: "/burger.jpg", title: "دبل برگر", description: "دو لایه گوشت، پنیر دوبل، خیارشور", price: "2500 تومان" },
];
export const recommendedSushiItem = [
    { picture: "/sushi.jpg", title: "ماکی رول", description: "خیار، هویج، جلبک، برنج", price: "2700 تومان" },
];
