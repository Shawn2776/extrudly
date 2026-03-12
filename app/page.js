import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CatalogPreview from "@/components/sections/CatalogPreview";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import StatsBar from "@/components/sections/StatsBar";
import UploadTeaser from "@/components/sections/UploadTeaser";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <CatalogPreview />
      <UploadTeaser />
      <Footer />
    </main>
  );
}
