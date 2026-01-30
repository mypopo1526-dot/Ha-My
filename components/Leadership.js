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
        <section className="w-full bg-[#1e293b] text-white py-16 md:py-24 scroll-mt-20" id="leadership">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10">
                <div className="flex flex-col items-center mb-12 text-center">
                    <h2 className="text-3xl title-gradient mb-2">HOẠT ĐỘNG NGOẠI KHOÁ</h2>
                    <p className="text-slate-400">Dấu ấn tại các tổ chức sinh viên</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <motion.div variants={item} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col group hover:-translate-y-2">
                        <div className="w-full h-40 bg-slate-800 flex items-center justify-center text-slate-600 bg-cover bg-center" style={{ backgroundImage: "url('/leadership-1.jpg')" }}>
                        </div>
                        <div className="p-8 pt-6">
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 text-google-yellow">
                                <span className="material-symbols-outlined text-2xl">gavel</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Bí thư Lớp BBAE-K66B</h3>
                            <p className="text-sm text-slate-400 font-medium mb-4 uppercase tracking-wide">Đại học Kinh tế Quốc dân</p>
                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                                – Là cầu nối giữa sinh viên – giảng viên – nhà trường;
                                – Gắn kết nội bộ lớp, lãnh đạo và tổ chức các buổi bonding;
                                – Ứng dụng công cụ số để quản lý và vận hành lớp hiệu quả hơn
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col group hover:-translate-y-2">
                        <div className="w-full h-40 bg-slate-800 flex items-center justify-center text-slate-600 bg-cover bg-center" style={{ backgroundImage: "url('/leadership-2.jpg')" }}>
                        </div>
                        <div className="p-8 pt-6">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-google-blue">
                                <span className="material-symbols-outlined text-2xl">groups</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Ban Chuyên Môn YEC-NEU</h3>
                            <p className="text-sm text-slate-400 font-medium mb-4 uppercase tracking-wide">CLB Nhà Kinh Tế Trẻ</p>
                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                                – Tham gia xây dựng nội dung học thuật, chia sẻ đến cộng đồng sinh viên;
                                – Đồng tổ chức Mentoring Series 2025, thu hút 500+ người tham dự, kết nối sinh viên với mentor trong lĩnh vực Kinh tế
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col group hover:-translate-y-2">
                        <div className="w-full h-40 bg-slate-800 flex items-center justify-center text-slate-600 bg-cover bg-center" style={{ backgroundImage: "url('/leadership-3.jpg')" }}>
                        </div>
                        <div className="p-8 pt-6">
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-google-green">
                                <span className="material-symbols-outlined text-2xl">event_available</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">BTC Cool Summer 2025</h3>
                            <p className="text-sm text-slate-400 font-medium mb-4 uppercase tracking-wide">Ban Nội Dung</p>
                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                                – Xây dựng concept và khung chương trình sự kiện;
                                – Thu hút 200+ sinh viên trong Viện tham gia, tăng 12% so với năm trước
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
