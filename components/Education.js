```javascript
"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Education() {
    const [showNeu, setShowNeu] = React.useState(false);
    const [showUeh, setShowUeh] = React.useState(false);

    return (
        <section className="w-full max-w-[960px] mx-auto px-4 md:px-10 py-16 scroll-mt-20" id="education">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-google-blue">
                    <span className="material-symbols-outlined">school</span>
                </div>
                <h2 className="text-2xl title-gradient">HÀNH TRÌNH HỌC VẤN</h2>
            </div>
            <div className="relative pl-4 md:pl-0">
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2 origin-top"
                />

                {/* NEU Section */}
                <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:w-[45%] mb-4 md:mb-0 md:text-right pl-12 md:pl-0"
                    >
                        <h3 className="text-lg font-bold text-[#0d131c] dark:text-white">Đại học Kinh tế Quốc dân (NEU)</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">Hà Nội</p>
                        <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm leading-relaxed">NEU là môi trường nền tảng hình thành tư duy học thuật và định hướng phát triển. Những trải nghiệm học tập và hoạt động sinh viên tại đây đã mở rộng kết nối, đồng thời nuôi dưỡng tinh thần tạo giá trị cho cộng đồng sinh viên.</p>
                    </motion.div>
                    
                    <div 
                        onClick={() => setShowNeu(!showNeu)}
                        className={`absolute left - 8 md: left - 1 / 2 transform - translate - x - 1 / 2 w - 10 h - 10 rounded - full bg - white dark: bg - slate - 800 border - 4 border - google - blue flex items - center justify - center z - 10 shadow - sm transition - all cursor - pointer ${ showNeu ? 'scale-110 bg-blue-50' : 'group-hover:scale-110' } `}
                    >
                        <span className="material-symbols-outlined text-google-blue text-sm">{showNeu ? "close" : "north"}</span>
                    </div>

                    <div className={`md: w - [45 %] pl - 12 md: pl - 0 mt - 4 md: mt - 0 ${ showNeu ? '' : 'hidden md:block' } `}>
                        <AnimatePresence>
                            {showNeu && (
                                <motion.img 
                                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    src="/neu.jpg" 
                                    alt="NEU" 
                                    className="w-full rounded-xl shadow-lg object-cover aspect-video"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* UEH Section */}
                <div className="relative flex flex-col md:flex-row items-center justify-between group">
                    <div className={`md: w - [45 %] pl - 12 md: pl - 0 mb - 4 md: mb - 0 text - right md: text - left ${ showUeh ? '' : 'hidden md:block' } `}>
                        <AnimatePresence>
                            {showUeh && (
                                <motion.img 
                                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    src="/ueh.jpg" 
                                    alt="UEH" 
                                    className="w-full rounded-xl shadow-lg object-cover aspect-video"
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    <div 
                        onClick={() => setShowUeh(!showUeh)}
                        className={`absolute left - 8 md: left - 1 / 2 transform - translate - x - 1 / 2 w - 10 h - 10 rounded - full bg - white dark: bg - slate - 800 border - 4 border - google - green flex items - center justify - center z - 10 shadow - sm transition - all cursor - pointer ${ showUeh ? 'scale-110 bg-green-50' : 'group-hover:scale-110' } `}
                    >
                        <span className="material-symbols-outlined text-google-green text-sm">{showUeh ? "close" : "south"}</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:w-[45%] pl-12 md:pl-0 text-left"
                    >
                        <h3 className="text-lg font-bold text-[#0d131c] dark:text-white">Đại học Kinh tế TP.HCM (UEH)</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">TP. Hồ Chí Minh</p>
                        <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm leading-relaxed">Chương trình trao đổi tại UEH mang đến môi trường học tập mới và góc nhìn đa chiều hơn. Trải nghiệm này đã rèn luyện khả năng thích nghi, dám bước ra khỏi vùng an toàn và trưởng thành hơn trong cả tư duy lẫn hành động.</p>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/50 flex items-start gap-3"
            >
                <span className="material-symbols-outlined text-google-blue mt-0.5">link</span>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                    Hành trình trao đổi học tập giữa NEU và UEH là cơ hội để em thử thách bản thân trong một môi trường học thuật khác, mở rộng góc nhìn và rèn luyện khả năng thích nghi.
                </p>
            </motion.div>
        </section>
    );
}
