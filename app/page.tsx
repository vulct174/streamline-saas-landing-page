import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Testimonials from "@/app/components/Testimonials";
import Pricing from "@/app/components/Pricing";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main>
                <Hero />
                <Features />
                <Testimonials />
                <Pricing />
                <CTA />
            </main>
            <Footer />
        </div>
    )
}

