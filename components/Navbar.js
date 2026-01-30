"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
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

    return (
        <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-[#e7ecf4]" : "bg-white border-transparent"}`}>
            <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1200px] mx-auto">
                <div className="flex items-center gap-2 md:gap-4 text-[#0d131c]">
                    <div className="size-8 flex items-center justify-center bg-white rounded-full">
                        <span className="material-symbols-outlined text-google-blue text-3xl">smart_toy</span>
                    </div>
                    <h2 className="text-[#0d131c] text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Pham Ha My</h2>
                </div>
                <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                    <div className="hidden md:flex items-center gap-6 lg:gap-9">
                        {['About', 'Education', 'Experience', 'Leadership'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                className="text-[#0d131c] text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                            >
                                {item === 'About' ? 'Về em' : item === 'Experience' ? 'Kinh nghiệm' : item === 'Leadership' ? 'Hoạt động' : 'Học vấn'}
                            </a>
                        ))}
                    </div>
                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-blue-600 transition-all text-white text-sm font-bold shadow-soft transform hover:-translate-y-0.5">
                        <span className="truncate">Liên hệ</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
