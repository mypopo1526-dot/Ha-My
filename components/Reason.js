"use client";
import { motion } from "framer-motion";

export default function Reason() {
    return (
        <section className="w-full max-w-[850px] mx-auto px-4 md:px-10 py-20 text-center">
            <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="material-symbols-outlined text-6xl text-slate-200 dark:text-slate-700 mb-6 group-hover:text-google-blue transition-colors block"
            >
                format_quote
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl title-gradient uppercase mb-8"
            >
                LÝ DO EM ĐẾN VỚI GOOGLE STUDENT AMBASSADOR
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-6"
            >
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-center">
                    Google không chỉ tiên phong về công nghệ mà còn dẫn dắt văn hoá sẻ chia và trao quyền. Là một GSA, em khao khát mang tư duy <span className="text-google-blue font-bold">“AI First”</span> nhưng <span class="text-google-red font-bold">“People Centric”</span> đến với cộng đồng sinh viên Việt Nam. Em đã sẵn sàng trở thành người kết nối, khơi gợi và dẫn dắt để nhiều sinh viên dám thử, dám sáng tạo và dám bước lên vai trò lãnh đạo trong kỷ nguyên AI.
                </p>
            </motion.div>

            <div className="mt-12 flex justify-center gap-2">
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1, delay: i * 0.1 }}
                        className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-google-blue' : i === 1 ? 'bg-google-red' : i === 2 ? 'bg-google-yellow' : 'bg-google-green'}`}
                    />
                ))}
            </div>
        </section >
    );
}
