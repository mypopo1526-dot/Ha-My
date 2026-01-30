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

export default function Experience() {
    return (
        <section className="w-full bg-slate-50 dark:bg-[#0b111a] py-16 md:py-24 scroll-mt-20" id="experience">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10">
                <div className="flex flex-col items-center mb-12 text-center">
                    <h2 className="text-3xl title-gradient mb-4">KINH NGHIỆM THỰC CHIẾN & AI</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Ứng dụng hệ sinh thái Google AI vào học tập, đời sống và các dự án thực tiễn.</p>
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <motion.div variants={item} className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-card transition-shadow border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:-translate-y-2 duration-300">
                        <div className="h-48 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 mb-6 flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#4285F4 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
                            <span className="material-symbols-outlined text-6xl text-google-blue group-hover:rotate-12 transition-transform duration-500">auto_awesome</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">AI Ecosystem</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-2 group-hover:text-google-blue transition-colors">Apply Google AI Daily</h3>
                            <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                <p className="mb-2">Thường xuyên áp dụng hệ sinh thái Google AI (Gemini, NotebookLM, Veo...) trong học tập, nghiên cứu và sáng tạo hằng ngày.</p>
                                <ul className="space-y-1">
                                    <li>- Tăng tốc nghiên cứu học thuật và xử lý các tài liệu phức tạp.</li>
                                    <li>- Tổng hợp và kết nối kiến thức từ nhiều nguồn khác nhau.</li>
                                    <li>- Đồng phát triển ý tưởng dự án cùng AI theo hướng AI-assisted ideation.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-card transition-shadow border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:-translate-y-2 duration-300">
                        <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800 mb-6 flex items-center justify-center overflow-hidden relative">
                            <img src="/workflow-image.png" alt="AI Workflow Design" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">Workflow</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-2 group-hover:text-purple-600 transition-colors">AI Workflow Design</h3>
                            <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                <p className="mb-2">Thiết kế và vận hành quy trình làm việc tích hợp AI bằng make2u và Gemini API.</p>
                                <ul className="space-y-1">
                                    <li>- Xây dựng workflow AI end-to-end</li>
                                    <li>- Ứng dụng prompt engineering theo hướng chiến lược và system-thinking</li>
                                    <li>- Cá nhân hoá AI theo mục tiêu học tập và dự án</li>
                                    <li>- Thiết kế logic tương tác người – AI để tối ưu hiệu suất làm việc</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-card transition-shadow border border-slate-100 dark:border-slate-800 flex flex-col h-full lg:col-span-1 md:col-span-2 hover:-translate-y-2 duration-300">
                        <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800 mb-6 flex items-center justify-center overflow-hidden relative">
                            <img src="/growth-chart.png" alt="AI Growth Chart" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">Case Study</span>
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Growth</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-2 group-hover:text-google-red transition-colors">AI for Business Growth</h3>
                            <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                <p className="mb-2">Triển khai Google AI vào dự án kinh doanh gia đình, tập trung vào tăng trưởng organic và tối ưu nội dung. Kết quả đo lường được:</p>
                                <ul className="space-y-1">
                                    <li>- 10,000+ organic reach</li>
                                    <li>- 7,200 lượt xem mỗi tháng</li>
                                    <li>- 300+ tương tác tự nhiên</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
