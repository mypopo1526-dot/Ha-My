"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!mounted) return null;

    return (
        <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-[#e7ecf4] dark:border-slate-800" : "bg-white dark:bg-slate-900 border-transparent"}`}>
            <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1200px] mx-auto">
                <div className="flex items-center gap-2 md:gap-4 text-[#0d131c] dark:text-white">
                    <div className="size-10 flex items-center justify-center rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-[#0d131c] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Pham Ha My</h2>
                </div>
                <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                    <div className="hidden md:flex items-center gap-6 lg:gap-9">
                        {['About', 'Education', 'Experience', 'Leadership'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                className="text-[#0d131c] dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                            >
                                {item === 'About' ? 'Về em' : item === 'Experience' ? 'Kinh nghiệm' : item === 'Leadership' ? 'Hoạt động' : 'Học vấn'}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        {theme === 'dark' ? (
                            <span className="material-symbols-outlined text-yellow-400">light_mode</span>
                        ) : (
                            <span className="material-symbols-outlined text-slate-600">dark_mode</span>
                        )}
                    </button>

                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-blue-600 transition-all text-white text-sm font-bold shadow-soft transform hover:-translate-y-0.5">
                        <span className="truncate">Liên hệ</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
