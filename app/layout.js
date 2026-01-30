import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    variable: "--font-inter",
});

export const metadata = {
    title: "Pham Ha My - Google Student Ambassador Portfolio",
    description: "Portfolio of Pham Ha My - Google Student Ambassador Applicant",
};

export default function RootLayout({ children }) {
    return (
        <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className={`${inter.variable} font-display antialiased bg-background-light dark:bg-[#0d131c] text-[#0d131c] dark:text-slate-200 transition-colors duration-300`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
