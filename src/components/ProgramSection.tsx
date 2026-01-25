import {
  CheckCircle2, BookOpen, Cpu, Cloud, Shield, Code, BrainCircuit, Download,
  Microscope, Users, Building, Lightbulb, Award, GraduationCap, Laptop, Database
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramSection = () => {
  const programHighlights = [
    {
      icon: Laptop,
      title: "Industry-Aligned Curriculum",
      description: "Designed to match current industry needs and evolving technology trends"
    },
    {
      icon: BrainCircuit,
      title: "AI & Emerging Technology Exposure",
      description: "Focused learning in AI, ML, Cloud Computing, and Cybersecurity"
    },
    {
      icon: Microscope,
      title: "Research Opportunities",
      description: "Hands-on experience through research projects and practical problem solving"
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Guidance from qualified faculty with academic and industry experience"
    },
    {
      icon: Building,
      title: "Modern Infrastructure",
      description: "Advanced labs and computing facilities for effective learning"
    },
    {
      icon: Lightbulb,
      title: "Innovation Ecosystem",
      description: "Opportunities through incubation support, hackathons, and technical initiatives"
    },
  ];

  const curriculumAreas = [
    { icon: Code, text: "Programming & Software Development" },
    { icon: Database, text: "Data Structures & Algorithms" },
    { icon: Cpu, text: "Computer Architecture & Systems" },
    { icon: BrainCircuit, text: "Artificial Intelligence & Machine Learning" },
    { icon: Cloud, text: "Cloud Computing & DevOps Fundamentals" },
    { icon: Shield, text: "Cybersecurity & Computer Networks" },
    { icon: BookOpen, text: "Database Management Systems" },
    { icon: Laptop, text: "Web & Mobile Application Development" },
  ];

  const whyPDEU = [
    {
      stat: "Legacy",
      label: "Academic Excellence",
      description: "Trusted legacy of quality education"
    },
    {
      stat: "Industry",
      label: "Industry Engagement",
      description: "Internships, projects, and placements"
    },
    {
      stat: "Students",
      label: "Learning Environment",
      description: "Personalized academic guidance"
    },
    {
      stat: "Research",
      label: "Research Culture",
      description: "Active faculty research initiatives"
    },
  ];

  const careerPaths = [
    { title: "Software Engineer", icon: Code },
    { title: "Data Scientist", icon: Database },
    { title: "AI/ML Engineer", icon: BrainCircuit },
    { title: "Cloud Architect", icon: Cloud },
    { title: "Security Analyst", icon: Shield },
    { title: "Higher Studies (MS/PhD)", icon: GraduationCap },
  ];

  return (
    <section className="bg-muted/50 py-12 lg:py-16">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <p className="text-secondary mb-3 tracking-[0.2em] uppercase text-xs">
            Academic Excellence
          </p>
          <h2 className="font-display text-4xl font-bold text-primary mb-4 leading-tight">
            Program Overview
          </h2>
          <div className="h-1 w-16 bg-secondary mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Our four-year B.Tech in Computer Engineering combines rigorous theoretical foundations with hands-on practical experience, preparing you for the global technology arena.
          </p>
        </div>

        {/* Program Highlights Grid - Increased font-size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {programHighlights.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl border border-transparent bg-white/50 backdrop-blur-sm hover:bg-white hover:border-secondary/10 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/5 flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Curriculum & Why PDEU Combined */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          {/* Curriculum Focus Areas */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-muted-foreground/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">
                Curriculum Focus
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {curriculumAreas.map((topic) => (
                <div key={topic.text} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-transparent hover:border-secondary/20 transition-all group">
                  <div className="w-6 h-6 rounded bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <topic.icon className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <span className="text-sm font-normal text-primary/80">{topic.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose PDEU Stats */}
          <div className="lg:col-span-5 bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full -mr-24 -mt-24 blur-3xl opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <Award className="w-4 h-4 text-[#f9f5ec]" />
                </div>
                <h3 className="font-display text-2xl font-bold">
                  Why PDEU?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-14 gap-x-6 sm:gap-x-8">
                {whyPDEU.map((item) => (
                  <div key={item.label} className="group border-l-2 border-[#f9f5ec]/20 pl-4 hover:border-[#f9f5ec] transition-colors">
                    <div className="text-3xl font-bold text-[#f9f5ec] mb-0.5">{item.stat}</div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mb-1">{item.label}</div>
                    <p className="text-sm text-white/60 leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Career Outcomes */}
        <div className="border border-muted-foreground/10 rounded-2xl p-8 lg:p-10 bg-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-lg">
              <h3 className="font-display text-2xl font-bold text-primary mb-2">
                Career Horizons
              </h3>
              <p className="text-muted-foreground text-base">
                Empowering engineers to excel in dynamic roles across global technology giants.
              </p>
            </div>
            <Button className="h-12 px-8 bg-primary hover:bg-secondary text-white text-sm uppercase tracking-widest rounded-lg shadow-lg shadow-secondary/20 transition-all flex-shrink-0">
              <Download className="w-4 h-4 mr-2" />
              Get Full Curriculum
            </Button>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {careerPaths.map((career) => (
              <div
                key={career.title}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-transparent hover:border-secondary/20 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <career.icon className="w-4 h-4 text-secondary" />
                </div>
                <h4 className="text-xs text-primary/70 uppercase tracking-wider">
                  {career.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
