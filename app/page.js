import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Achievements from "@/components/Achievements";
import Reason from "@/components/Reason";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <div className="flex flex-col items-center w-full">
                <Hero />
                <About />
                <Education />
                <Experience />
                <Leadership />
                <Achievements />
                <Reason />
                <Footer />
            </div>
        </main>
    );
}
