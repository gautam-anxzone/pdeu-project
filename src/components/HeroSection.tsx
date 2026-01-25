import { Award, Building2, Briefcase, GraduationCap, Calendar, Users } from "lucide-react";
import AdmissionForm from "./AdmissionForm";
import pdeuLogo from "@/assets/pdpu-logo.png";

const HeroSection = () => {
  const highlights = [
    { icon: Award, text: "NAAC 'A++' Accredited University" },
    { icon: Building2, text: "State-of-the-Art Infrastructure" },
    { icon: Briefcase, text: "Strong Placement Support & Outcomes" },
  ];

  const quickFacts = [
    { icon: GraduationCap, label: "Duration", value: "4 Years" },
    { icon: Calendar, label: "Intake", value: "July 2026" },
    { icon: Users, label: "Seats", value: "180" },
  ];

  return (
    <section className="bg-hero min-h-screen relative overflow-hidden">
      {/* Background Pattern - Darker for visibility on light bg */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="text-primary space-y-10 animate-fade-in relative">
            {/* Added Glow Effect - Adjusted for light theme */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-40 -right-20 w-64 h-64 bg-gold-light/20 rounded-full blur-[100px] pointer-events-none opacity-50" />

            {/* University Badge - Refined Red Branding */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#A6192E]/20 border border-[#A6192E]/40 shadow-sm transition-transform hover:scale-105 duration-300">
              <img src={pdeuLogo} alt="PDEU" className="h-7 w-auto" />
              <div className="w-px h-4 bg-[#A6192E]/50" />
              <span className="text-sm tracking-wide uppercase text-[#A6192E]">School of Technology | PDEU</span>
            </div>

            {/* Program Title */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-secondary" />
                <p className="text-secondary tracking-[0.2em] uppercase text-xs">
                  Admissions Open 2026-27
                </p>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6">
                <span className="text-[#A6192E]">B.Tech</span> <br />
                <span className="text-primary">in Computer Engineering</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black max-w-xl leading-relaxed">
                Transform your passion for technology into a rewarding career. Our industry-aligned curriculum, world-class faculty, and strong placement record prepare you for global opportunities in the tech industry.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="group cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-all duration-300 shadow-sm">
                      <fact.icon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-0.5">{fact.label}</p>
                      <p className="text-lg text-primary tracking-tight">{fact.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-primary/5 hover:border-primary/20 hover:translate-x-2 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <span className="font-bold text-lg tracking-tight text-primary group-hover:text-secondary transition-colors">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Eligibility & Deadline */}
            <div className="relative group overflow-hidden rounded-2xl border border-primary/10 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative backdrop-blur-xl p-4 sm:p-6 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 items-start sm:items-center justify-between">
                <div className="max-w-[300px]">
                  <p className="text-[10px] text-secondary font-black uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    Eligibility
                  </p>
                  <p className="text-primary/90 text-sm font-bold leading-normal">
                    10+2 with Physics, Chemistry & Mathematics (PCM) with minimum 60% aggregate
                  </p>
                </div>
                <div className="w-px h-10 bg-primary/10 hidden md:block" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5">Application Deadline</p>
                  <p className="text-primary text-xl tracking-tight leading-none">
                    April 30, 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 pl-2">
              {[
                { label: "UGC Recognized", color: "bg-secondary" },
                { label: "AICTE Approved", color: "bg-accent" },
                { label: "Gandhinagar, Gujarat", color: "bg-primary" }
              ].map((pill) => (
                <span key={pill.label} className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-default">
                  <span className={`w-2 h-2 rounded-full ${pill.color} shadow-sm`} />
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:sticky lg:top-24 drop-shadow-2xl">
            <AdmissionForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
