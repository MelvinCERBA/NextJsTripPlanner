/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./stories/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "orange-main": "#f3a83c",
                "orange-secondary": "#fbeaab",
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                montaga: ["Montaga", "serif"],
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    plugins: [],
};
