import { Facebook, Instagram, Linkedin, Youtube, Phone, MapPin, Clock, Mail } from "lucide-react";
import pdeuLogo from "@/assets/pdeu-logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary py-8 text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 px-4 mb-8">
                    {/* Left Side: Logo & Contact Info Compact */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 w-full lg:w-auto">
                        <img
                            src={pdeuLogo}
                            alt="PDEU Logo"
                            className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-white/70">
                            {/* Address */}
                            <div className="flex gap-3">
                                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-white/40 mb-0.5">Address</p>
                                    <p className="text-xs leading-tight text-white/90">Knowledge Corridor, Raisan, Gandhinagar, Gujarat - 382426.</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-3">
                                <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-white/40 mb-0.5">Phone</p>
                                    <p className="text-xs text-white/90 font-medium">079-23275060</p>
                                </div>
                            </div>

                            {/* Email/Mail */}
                            <div className="flex gap-3">
                                <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-white/40 mb-0.5">Mail</p>
                                    <p className="text-xs text-white/90 font-medium">btechadmission@pdpu.ac.in</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex gap-3">
                                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-white/40 mb-0.5">Hours</p>
                                    <p className="text-xs text-white/90">9:30 AM to 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Social Logos & Watermark */}
                    <div className="flex flex-col items-center lg:items-end gap-5 mt-4 lg:mt-1 group">
                        <div className="flex items-center gap-3">
                            {/* LinkedIn */}
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077B5] transition-all duration-300 group border border-white/10">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 group border border-white/10">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E4405F] transition-all duration-300 group border border-white/10">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] transition-all duration-300 group border border-white/10">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col items-center lg:items-end gap-2 cursor-default">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white text-center lg:text-right">
                                Demo Admission Form <br />Created For PDEU
                            </p>
                            <p className="text-xs font-medium text-white/90 text-center lg:text-right">
                                By <a href="https://anxzone.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors font-bold underline decoration-secondary/30 underline-offset-4">ANXZONE Studio</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Compact */}
                <div className="pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left text-[9px] tracking-[0.15em] text-white/30 uppercase">
                    <p className="text-white/40">
                        &copy; 2026 Pandit Deendayal Energy University. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
