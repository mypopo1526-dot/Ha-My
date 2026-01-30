"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="w-full max-w-[1200px] px-4 md:px-10 py-12 md:py-20">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
                <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 w-fit mx-auto md:mx-0 border border-blue-100"
                    >
                        <span className="material-symbols-outlined text-google-blue text-sm">rocket_launch</span>
                        <span className="text-xs font-semibold text-google-blue uppercase tracking-wider">Google Student Ambassador Applicant</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[#0d131c] text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight"
                    >
                        Biến việc học thành <br className="hidden lg:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-google-blue via-google-green via-google-yellow to-google-red">giá trị được sẻ chia</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-slate-600 text-base md:text-lg font-normal leading-relaxed max-w-2xl"
                    >
                        Em tin rằng công nghệ chỉ thực sự có ý nghĩa khi được con người hiểu, sử dụng và cùng nhau tạo ra giá trị tích cực cho cộng đồng.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex gap-4 justify-center md:justify-start pt-2"
                    >
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-google-blue text-white text-base font-bold shadow-soft hover:bg-blue-600 transition-all">
                            Xem Portfolio
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white text-slate-700 border border-slate-200 text-base font-medium hover:bg-slate-50 transition-all">
                            Tải CV
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-[45%] lg:w-[40%] flex flex-col items-center justify-center gap-6"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <motion.div
                            animate={{ translate: [0, 30, -20, 0], scale: [1, 1.1, 0.9, 1] }}
                            transition={{ duration: 7, repeat: Infinity }}
                            className="absolute -top-4 -right-4 w-20 h-20 bg-google-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        />
                        <motion.div
                            animate={{ translate: [0, -30, 20, 0], scale: [1, 0.9, 1.1, 1] }}
                            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                            className="absolute -bottom-4 -left-4 w-20 h-20 bg-google-green rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-google-blue/20 to-google-red/20 rounded-full"></div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500 bg-gray-200 bg-cover bg-top" style={{ backgroundImage: "url('/hero.jpg')" }}>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-[#4285F4] text-xl font-bold uppercase tracking-wide">PHẠM HÀ MY</p>
                        <p className="text-[#4285F4] text-sm md:text-base mt-2 font-medium">Sinh viên NEU x UEH | Người yêu thích AI | Ứng viên Google Student Ambassador</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
