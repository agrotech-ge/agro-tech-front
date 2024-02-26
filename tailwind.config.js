export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#5BB651',
                'secondary': '#3C4626',
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["lemonade"],
    },
};

