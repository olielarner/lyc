/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    safelist: ["flex-row-reverse"],
    theme: {
        extend: {
            fontFamily: {
                unbounded: ["Unbounded", "sans serif"],
            },
            colors: {
                "lyc-pink": "#ff007f",
                "lyc-purple": "#3446a4",
                "lyc-yellow": "#ffb00c",
            },
            backgroundImage: {
                "hero-pattern": "url('./media/patterns/Pat.png')",
                "dot-pattern": "url(./media/patterns/doodad-4.png)",
                "stripe-pattern": "url(./media/patterns/doodad-5.png)",
            },
        },
    },
    plugins: [],
};
