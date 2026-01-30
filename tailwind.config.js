/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#4285F4",
                "google-blue": "#4285F4",
                "google-red": "#EA4335",
                "google-yellow": "#FBBC05",
                "google-green": "#34A853",
                "background-light": "#f8f9fc",
                "background-dark": "#101722",
            },
            fontFamily: {
                "display": ["var(--font-inter)", "sans-serif"]
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                "soft": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "card": "0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)"
            }
        },
    },
    plugins: [],
}
