export default function Footer() {
    return (
        <footer className="w-full border-t border-[#e7ecf4] dark:border-slate-800 bg-white dark:bg-slate-900 py-12">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-400">mail</span>
                    <a className="text-[#0d131c] dark:text-slate-200 font-medium hover:text-google-blue transition-colors" href="mailto:contact@phamhamy.com">Contact</a>
                </div>
                <div className="flex gap-6">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-[#0d131c] dark:hover:text-white transition-colors font-medium text-sm hover:-translate-y-0.5 transform display-inline-block" href="mailto:contact@phamhamy.com" title="Gửi Email">Gmail</a>
                    <a className="text-slate-500 dark:text-slate-400 hover:text-[#0d131c] dark:hover:text-white transition-colors font-medium text-sm hover:-translate-y-0.5 transform display-inline-block" href="#">LinkedIn</a>
                    <a className="text-slate-500 dark:text-slate-400 hover:text-[#0d131c] dark:hover:text-white transition-colors font-medium text-sm hover:-translate-y-0.5 transform display-inline-block" href="#">Facebook</a>
                    <a className="text-slate-500 dark:text-slate-400 hover:text-[#0d131c] dark:hover:text-white transition-colors font-medium text-sm hover:-translate-y-0.5 transform display-inline-block" href="#">TikTok</a>
                    <a className="text-slate-500 dark:text-slate-400 hover:text-[#0d131c] dark:hover:text-white transition-colors font-medium text-sm hover:-translate-y-0.5 transform display-inline-block" href="#">Instagram</a>
                </div>
                <div className="text-slate-400 text-sm">
                    © 2024 Pham Ha My
                </div>
            </div>
        </footer>
    );
}
