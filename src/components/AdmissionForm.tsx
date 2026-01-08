import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Shield, Clock, Eye, EyeOff } from "lucide-react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    city: "",
    institute: "",
    course: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const states = [
    "Gujarat", "Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Rajasthan", "Madhya Pradesh"
  ];

  const citiesByState: Record<string, string[]> = {
    "Gujarat": ["Gandhinagar", "Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi"],
    "Karnataka": ["Bengaluru", "Mysuru", "Hubballi"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
  };

  const institutes = [
    "School of Technology (SOT)",
    "School of Petroleum Management (SPM)",
    "School of Petroleum Technology (SPT)",
    "School of Liberal Studies (SLS)"
  ];

  const courses = [
    "B.Tech in Computer Engineering",
    "B.Tech in Information Technology",
    "B.Tech in Electronics & Communication",
    "B.Tech in Mechanical Engineering",
    "B.Tech in Civil Engineering",
    "B.Tech in Chemical Engineering"
  ];

  return (
    <>
      <div className="card-form border border-primary/10 shadow-md bg-white overflow-hidden rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 relative">
        <div>
          {/* Form Header */}
          <div className="mb-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-black text-[10px] tracking-widest uppercase mb-4 border border-black/10">
              <Clock className="w-3.5 h-3.5 text-secondary" />
              Admissions 2026
            </div>
            <h3 className="font-display text-4xl font-bold text-primary leading-tight">
              Apply <span className="text-secondary underline decoration-secondary/30 decoration-4 underline-offset-8">Now</span>
            </h3>
            <p className="text-black/70 text-sm mt-4 max-w-sm">
              Begin your journey at PDEU with our simplified application process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Main Info */}
            <div className="space-y-5">
              <div className="space-y-4">
                <Input
                  id="fullName"
                  placeholder="Full Name (as per documents)"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="h-12 bg-muted/5 border-black/10 text-black placeholder:text-black focus:border-secondary focus:bg-primary/5 transition-all rounded-xl border-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Official Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 bg-muted/5 border-black/10 text-black placeholder:text-black focus:border-secondary focus:bg-primary/5 transition-all rounded-xl border-2"
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Mobile Number (+91)"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    className="h-12 bg-muted/5 border-black/10 text-black placeholder:text-black focus:border-secondary focus:bg-primary/5 transition-all rounded-xl border-2"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Account Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="h-12 pr-12 bg-muted/5 border-black/10 text-black placeholder:text-black focus:border-secondary focus:bg-primary/5 transition-all rounded-xl border-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 hover:text-secondary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <Select
                    value={formData.state}
                    onValueChange={(value) => setFormData({ ...formData, state: value, city: "" })}
                    required
                  >
                    <SelectTrigger className="h-12 bg-muted/5 border-black/10 text-black focus:border-secondary rounded-xl border-2 transition-all">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-xl border-black/10 text-black">
                      {states.map(state => (
                        <SelectItem key={state} value={state} className="focus:bg-black/5 focus:text-black">{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Select
                    value={formData.city}
                    onValueChange={(value) => setFormData({ ...formData, city: value })}
                    disabled={!formData.state}
                    required
                  >
                    <SelectTrigger className="h-12 bg-muted/5 border-black/10 text-black focus:border-secondary rounded-xl border-2 transition-all">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-xl border-black/10 text-black">
                      {formData.state && citiesByState[formData.state]?.map(city => (
                        <SelectItem key={city} value={city} className="focus:bg-black/5 focus:text-black">{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Select
                  value={formData.institute}
                  onValueChange={(value) => setFormData({ ...formData, institute: value })}
                  required
                >
                  <SelectTrigger className="h-12 bg-muted/5 border-black/10 text-black focus:border-secondary rounded-xl border-2 transition-all">
                    <SelectValue placeholder="Target Institute" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 border-black/10 text-black">
                    {institutes.map(inst => (
                      <SelectItem key={inst} value={inst} className="focus:bg-black/5 focus:text-black">{inst}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Select
                  value={formData.course}
                  onValueChange={(value) => setFormData({ ...formData, course: value })}
                  required
                >
                  <SelectTrigger className="h-12 bg-muted/5 border-black/10 text-black focus:border-secondary rounded-xl border-2 transition-all">
                    <SelectValue placeholder="Preferred Course" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 border-black/10 text-black">
                    {courses.map(course => (
                      <SelectItem key={course} value={course} className="focus:bg-black/5 focus:text-black">{course}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="group w-full h-12 bg-primary hover:bg-[#A6192E] text-white text-xs uppercase tracking-[3px] rounded-full shadow-2xl shadow-[#A6192E]/20 transition-all active:scale-[0.98]">
              Finalize Application
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-black/10 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-black text-[10px] uppercase tracking-widest">
              <Shield className="w-4 h-4 text-black" />
              End-to-End Encrypted Portal
            </div>
            <div className="flex items-center justify-center gap-6 text-[10px] tracking-tighter text-black">
              <span>UGC RECOGNIZED</span>
              <div className="w-1 h-1 bg-black rounded-full" />
              <span>AICTE APPROVED</span>
              <div className="w-1 h-1 bg-black rounded-full" />
              <span>PDEU ACADEMIC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Credits Watermark Box */}
      <div className="mt-10 px-8 py-14 rounded-[1.5rem] bg-white/40 backdrop-blur-md border border-black/5 flex flex-col items-center gap-4 text-center shadow-sm">
        <p className="text-xl sm:text-xl uppercase tracking-[0.2em] text-black/40 font-bold">
          Demo Admission Form <br />Created For PDEU
        </p>
        <p className="text-xl sm:text-2xl text-black/60 font-medium">
          By <a href="https://anxzone.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors font-bold underline decoration-secondary/30 decoration-2 underline-offset-4">ANXZONE Studio</a>
        </p>
      </div>
    </>
  );
};

export default AdmissionForm;
