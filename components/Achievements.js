"use client";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Achievements() {
    return (
        <section className="w-full bg-[#1e293b] text-white py-16 md:py-24">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10">
                <div className="flex flex-col items-center mb-12 text-center">
                    <div className="flex items-center gap-3 mb-4 justify-center">
                        <span className="material-symbols-outlined text-google-yellow text-3xl animate-spin-slow">emoji_events</span>
                        <h2 className="text-3xl title-gradient">THÀNH TÍCH NỔI BẬT</h2>
                    </div>
                    <p className="text-slate-400">Sự nỗ lực và những cột mốc ý nghĩa trên hành trình phát triển</p>
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <motion.div variants={item} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col group hover:-translate-y-2">
                        <div className="w-full h-48 bg-slate-800 flex items-center justify-center text-slate-600 shrink-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <span className="material-symbols-outlined text-5xl group-hover:scale-125 transition-transform duration-500 text-google-yellow">photo_library</span>
                        </div>
                        <div className="p-8 flex flex-col h-full">
                            <div className="text-google-yellow font-black text-2xl mb-3">01</div>
                            <h3 className="font-bold text-lg leading-snug group-hover:text-google-blue transition-colors">Top 15 Business Development – Heading For The Future (2025) | Leader</h3>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col group hover:-translate-y-2">
                        <div className="w-full h-48 bg-slate-800 flex items-center justify-center text-slate-600 shrink-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <span className="material-symbols-outlined text-5xl group-hover:scale-125 transition-transform duration-500 text-google-yellow">workspace_premium</span>
                        </div>
                        <div className="p-8 flex flex-col h-full">
                            <div className="text-google-yellow font-black text-2xl mb-3">02</div>
                            <h3 className="font-bold text-lg leading-snug group-hover:text-google-blue transition-colors">Quán quân Giải pháp Doanh nghiệp (2024) | Leader</h3>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col group hover:-translate-y-2">
                        <div className="w-full h-48 bg-slate-800 flex items-center justify-center text-slate-600 shrink-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <span className="material-symbols-outlined text-5xl group-hover:scale-125 transition-transform duration-500 text-google-yellow">groups_2</span>
                        </div>
                        <div className="p-8 flex flex-col h-full">
                            <div className="text-google-yellow font-black text-2xl mb-3">03</div>
                            <h3 className="font-bold text-lg leading-snug group-hover:text-google-blue transition-colors">Top 12 VSIC – Thử thách Sáng tạo Xã hội (2024) | R&D dự án BookMate</h3>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
