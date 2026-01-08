import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import pdeuLogo from "@/assets/pdeu-logo.png";

const Header = () => {
  const scrollToForm = () => {
    const form = document.querySelector('.card-form');
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10 w-full transition-all duration-500 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo & University Name (Aesthetic Single Line) */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <img
                src={pdeuLogo}
                alt="PDEU Logo"
                className="h-9 lg:h-12 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 md:gap-5">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 text-xs uppercase tracking-widest hidden md:flex">
              Login
            </Button>
            <Button onClick={scrollToForm} className="bg-[#A6192E] hover:bg-white text-white hover:text-secondary text-[10px] md:text-xs uppercase tracking-widest px-4 md:px-8 rounded-full shadow-lg shadow-[#A6192E]/20 transition-all hover:scale-105">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
      {/* Simple Border Line */}
      <div className="h-px w-full bg-white/10" />
    </header>
  );
};

export default Header;
