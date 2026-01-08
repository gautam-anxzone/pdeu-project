import { UserPlus, MailCheck, FileText, Upload, CreditCard, CheckCircle } from "lucide-react";

const ApplicationProcess = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register Yourself",
      description: "Create your account using basic details",
      step: 1,
    },
    {
      icon: MailCheck,
      title: "Verify Email",
      description: "Confirm your email to activate the application",
      step: 2,
    },
    {
      icon: FileText,
      title: "Fill Application Form",
      description: "Enter academic and personal information",
      step: 3,
    },
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Upload required academic and identity documents",
      step: 4,
    },
    {
      icon: CreditCard,
      title: "Make Payment",
      description: "Secure online application fee payment",
      step: 5,
    },
  ];

  return (
    <section className="bg-muted/30 py-12 lg:py-16 relative overflow-hidden">
      {/* Subtle Background Pattern - Multi-layered for depth */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-xs tracking-[0.2em] uppercase">
            Easy Onboarding
          </div>
          <h2 className="section-heading text-4xl md:text-5xl mb-6">
            Simple <span className="text-secondary">Application Process</span>
          </h2>
          <p className="text-lg text-muted-foreground/80">
            Join PDEU in 5 easy steps through our streamlined digital admission portal
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line - Desktop (Journey Path) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[3px]">
            <div className="w-full h-full border-t-2 border-dashed border-secondary/30" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col group h-full"
              >
                {/* Step Indicator & Icon */}
                <div className="relative mb-8 z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center border border-secondary/10 group-hover:border-secondary/30 group-hover:-translate-y-2 transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 ml-10 lg:ml-8 w-10 h-10 rounded-full bg-gradient-to-br from-navy-light to-primary text-white flex items-center justify-center font-bold text-sm shadow-xl border-4 border-white">
                    {step.step}
                  </div>
                </div>

                {/* Card Context */}
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-transparent group-hover:bg-white group-hover:shadow-lg group-hover:border-secondary/10 transition-all duration-300 w-full flex-1 flex flex-col text-center">
                  <h3 className="font-display text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile/Tablet Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-secondary/30 animate-pulse">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12l7 7 7-7" className="md:hidden" />
                      <path d="M5 12h14M12 5l7 7-7 7" className="hidden md:block" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
