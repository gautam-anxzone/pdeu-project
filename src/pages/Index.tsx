import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ApplicationProcess from "@/components/ApplicationProcess";
import ProgramSection from "@/components/ProgramSection";
import CampusGallery from "@/components/CampusGallery";
import PlacementsSection from "@/components/PlacementsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ApplicationProcess />
      <ProgramSection />
      <CampusGallery />
      <PlacementsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
