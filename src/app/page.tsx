import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Reviews } from "@/components/sections/Reviews";
import { Stats } from "@/components/sections/Stats";
import { AboutTimeline } from "@/components/sections/AboutTimeline";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <WhyChooseUs />
      <Stats />
      <Reviews />
      <AboutTimeline />
      <Gallery />
      <Footer />
    </main>
  );
}
