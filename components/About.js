"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="w-full bg-white py-16 md:py-24 border-y border-slate-100 scroll-mt-20" id="about">
            <div className="max-w-[960px] mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-40 h-40 md:w-48 md:h-48 shrink-0 relative"
                    >
                        <div className="absolute inset-0 bg-google-blue/10 rounded-full transform translate-x-2 translate-y-2"></div>
                        <div className="w-full h-full rounded-full bg-cover bg-center border-4 border-white shadow-lg relative z-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQUo_xf9O82wqNvA6A-hKWUGbAGbMExNYYt5ncV8mPwaB2TBZYDahMXXAtUeeBD5-Q7GQZj83ZP_afmVqbQNwuJI7kx50Hoad7AnsSstuyEfoDJhwAwqqBD0q8EKto5hc4yUHJZaxkgKvcufikfFmLijY1vpNQDwpFitN-E1u1PVx-RxFvd_1Mlu1CTD7qZ2EwzmTJ05LrjOK7PUhckIGtt8vlLmG052cicXnJ00B4UfIyXb57S1PIM0gfAF7iGZWcwKujENWBumuX')" }}>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-4 text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <span className="material-symbols-outlined text-google-red">favorite</span>
                            <span className="text-sm title-gradient tracking-wider">VỀ EM</span>
                        </div>
                        <h3 className="text-sky-500 text-xl font-bold uppercase">XIN CHÀO, EM LÀ HÀ MY</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            Em là một người năng động, nhiệt huyết và luôn tò mò, em chủ động trải nghiệm, dám thử và không ngại thất bại – bởi mỗi lần thử là một lần em học nhanh hơn và đi xa hơn.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            Sự hứng thú của em với công nghệ, đặc biệt là AI, không nằm ở khía cạnh kỹ thuật, mà ở khả năng giúp con người học hiệu quả hơn và biến những khái niệm phức tạp trở nên dễ hiểu, dễ áp dụng. Từ đó, em chủ động thử nghiệm, ứng dụng và chia sẻ lại những giá trị này cho cộng đồng sinh viên thông qua các vai trò lãnh đạo, tổ chức và truyền thông.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Với em, giá trị không nằm ở việc biết nhiều hơn người khác, mà ở việc kết nối, dẫn dắt và lan toả để nhiều người cùng tiến lên – cũng chính là tinh thần em theo đuổi khi ứng tuyển Google Student Ambassador.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
