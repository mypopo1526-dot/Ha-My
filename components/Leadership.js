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

export default function Leadership() {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-16 md:py-24 scroll-mt-20" id="leadership">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <div>
                    <h2 className="text-3xl title-gradient mb-2">HOẠT ĐỘNG NGOẠI KHOÁ</h2>
                    <p className="text-slate-600 dark:text-slate-400">Dấu ấn tại các tổ chức sinh viên</p>
                </div>
                <div className="h-1 w-20 bg-google-yellow rounded-full hidden md:block"></div>
            </div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                <motion.div variants={item} className="bg-white rounded-2xl border border-slate-100 shadow-soft hover:-translate-y-1 transition-transform duration-300 flex flex-col overflow-hidden">
                    <div className="w-full h-40 bg-slate-100 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined text-4xl">image</span>
                    </div>
                    <div className="p-8 pt-6">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-6 text-google-yellow">
                            <span className="material-symbols-outlined text-2xl">gavel</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-2">Bí thư Lớp BBAE-K66B</h3>
                        <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wide">Đại học Kinh tế Quốc dân</p>
                        <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                            – Là cầu nối giữa sinh viên – giảng viên – nhà trường;
                            – Gắn kết nội bộ lớp, lãnh đạo và tổ chức các buổi bonding;
                            – Ứng dụng công cụ số để quản lý và vận hành lớp hiệu quả hơn
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={item} className="bg-white rounded-2xl border border-slate-100 shadow-soft hover:-translate-y-1 transition-transform duration-300 flex flex-col overflow-hidden">
                    <div className="w-full h-40 bg-slate-100 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined text-4xl">image</span>
                    </div>
                    <div className="p-8 pt-6">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-google-blue">
                            <span className="material-symbols-outlined text-2xl">groups</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-2">Ban Chuyên Môn YEC-NEU</h3>
                        <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wide">CLB Nhà Kinh Tế Trẻ</p>
                        <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                            – Tham gia xây dựng nội dung học thuật, chia sẻ đến cộng đồng sinh viên;
                            – Đồng tổ chức Mentoring Series 2025, thu hút 500+ người tham dự, kết nối sinh viên với mentor trong lĩnh vực Kinh tế
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={item} className="bg-white rounded-2xl border border-slate-100 shadow-soft hover:-translate-y-1 transition-transform duration-300 flex flex-col overflow-hidden">
                    <div className="w-full h-40 bg-slate-100 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined text-4xl">image</span>
                    </div>
                    <div className="p-8 pt-6">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-google-green">
                            <span className="material-symbols-outlined text-2xl">event_available</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-2">BTC Cool Summer 2025</h3>
                        <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wide">Ban Nội Dung</p>
                        <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                            – Xây dựng concept và khung chương trình sự kiện;
                            – Thu hút 200+ sinh viên trong Viện tham gia, tăng 12% so với năm trước
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
