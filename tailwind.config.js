// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'xs': '420px',
                'xxs':'390px',
            },
        },
    },
    plugins: [],
}
