import { Phone, Mail, MessageCircle, TrendingUp, Building, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import placementsImage from "@/assets/placements.webp";

const PlacementsSection = () => {
  return (
    <section className="bg-background py-12 lg:py-16">
      <div className="container px-4 lg:px-8">
        {/* Placements Header - Left Aligned */}
        <div className="max-w-4xl mb-16">
          <p className="text-secondary mb-3 tracking-[0.2em] uppercase text-xs">
            Career Success
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Placements & Career Support
          </h2>
          <div className="h-1 w-20 bg-secondary mb-8" />
          <p className="font-display italic text-xl text-primary/70 mb-4">
            Forging paths to global tech leadership.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            PDEU's dedicated Career Development Cell works year-round to connect students with leading employers through comprehensive training, industry mentorship, and campus recruitment drives.
          </p>
        </div>

        {/* Dynamic Placement Stats - New representation */}
        <div className="grid md:grid-cols-12 gap-6 mb-20 items-stretch">
          {/* Main Stat Card - Spans 5 columns */}
          <div className="md:col-span-12 lg:col-span-5 bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            <div className="relative z-10">
              <TrendingUp className="w-12 h-12 text-[#f9f5ec] mb-8" />
              <div className="text-6xl lg:text-7xl font-bold text-[#f9f5ec] mb-2">90%</div>
              <h3 className="font-display text-2xl font-bold mb-2">Career Outcomes</h3>
              <p className="text-white/60 text-sm">Includes successful graduates placed through campus recruitment as well as those pursuing higher education in India and abroad.</p>
            </div>
          </div>

          {/* Secondary Stats - Spans 7 columns */}
          <div className="md:col-span-12 lg:col-span-7 grid md:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="bg-muted/30 rounded-3xl p-8 border border-muted-foreground/10 flex items-center gap-8 group hover:bg-white hover:shadow-2xl hover:shadow-secondary/10 hover:border-secondary/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Building className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">200+</div>
                <div className="text-lg font-bold text-primary/80 mb-1">Recruiting Organizations</div>
                <p className="text-sm text-muted-foreground">Participation from a wide range of national and international companies across sectors</p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-3xl p-8 border border-muted-foreground/10 flex items-center gap-8 group hover:bg-white hover:shadow-2xl hover:shadow-secondary/10 hover:border-secondary/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">₹12 LPA</div>
                <div className="text-lg font-bold text-primary/80 mb-1">Average Package</div>
                <p className="text-sm text-muted-foreground">Exceptional packages for Computer Engineering graduates at premier firms.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Placement Highlights Image */}
        <div className="rounded-3xl p-4 md:p-1 border border-muted-foreground/10 bg-muted/20 mb-20 overflow-hidden group">
          <div className="bg-white rounded-[2rem] p-8 lg:p-12 overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h3 className="font-display text-3xl font-bold text-primary mb-3">
                  Our Recruiting Universe
                </h3>
                <div className="h-1.5 w-16 bg-secondary mb-4" />
                <p className="text-muted-foreground max-w-xl">
                  Join the elite network of PDEU alumni thriving at Fortune 500 companies and tech innovators across the globe.
                </p>
              </div>
              <Button className="h-14 px-10 bg-primary hover:bg-secondary text-white text-sm uppercase tracking-widest rounded-xl shadow-xl shadow-secondary/20 transition-all flex-shrink-0">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />
              <img
                src={placementsImage}
                alt="PDEU Placement Highlights"
                className="w-full rounded-2xl shadow-lg border border-muted transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Contact Section - Left Aligned style */}
        <div className="bg-primary rounded-[2.5rem] p-6 md:p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-32 -mb-32 blur-[100px]" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mt-32 blur-[80px]" />

          <div className="relative z-10 grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#f9f5ec] mb-4 tracking-[0.2em] uppercase text-xs">
                Take the Next Step
              </p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Ready to Join the PDEU Legacy?
              </h3>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Our admissions team is here to guide you through every step of your journey toward a future in excellence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:07923275444"
                  className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">079-2327 5444</p>
                  </div>
                </a>

                <a
                  href="mailto:admission@pdpu.ac.in"
                  className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-sm font-medium whitespace-nowrap">admission@pdpu.ac.in</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:pl-10">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl">
                <h4 className="font-display text-2xl font-bold mb-6 text-[#f9f5ec]">Personalized Consultation</h4>
                <p className="text-white/70 text-base mb-8">
                  Connect with our admissions counselors for guidance on program details, eligibility, and academic fit.
                </p>
                <Button className="w-full h-14 bg-secondary hover:bg-white hover:text-secondary text-white text-sm uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-secondary/20">
                  Talk to Admissions Team
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
