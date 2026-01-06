// Created by: Rudram Joshi
"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * Footer Component
 * Comprehensive footer providing site navigation, legal links, and location information.
 * Fully rebranded for Satyam Residency with enhanced visual flair.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

    const navLinks = [
      { label: "Home", href: "/" },
      { label: "Residences", href: "/projects" },
      { label: "Lifestyle", href: "/facilities" },
      { label: "Prime Connectivity", href: "/prime-connectivity" },
      { label: "Visuals", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" }
    ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Terms of Service", href: "/terms" }
  ];

  return (
    <footer className="bg-zinc-950 text-white pt-24 sm:pt-40 pb-12 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-32">
            
            {/* Brand Identity Section */}
              <div className="lg:col-span-5 space-y-12">
                <Link href="/" className="inline-block group">
                  <div className="flex items-center gap-6">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ec1db7e8-65fd-449d-8dc4-279559f903c3/satya_favicon-1767720240241.png?width=8000&height=8000&resize=contain" 
                        alt="Satyam Residency Logo" 
                        fill 
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-serif font-black tracking-tighter text-white">
                      SATYAM <span className="text-primary group-hover:text-white transition-colors duration-500 italic">RESIDENCY</span>
                    </h3>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-700 mt-2" />
                </Link>


            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-md font-light italic">
              "We don't just build homes; we curate the stage where your life's greatest moments unfold. Experience the Satyam standard of excellence."
            </p>

            <div className="flex space-x-6">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Facebook, href: "#", label: "Facebook" }
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href} 
                  aria-label={social.label}
                  className="w-14 h-14 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-[1.5rem] hover:bg-primary hover:border-primary transition-all duration-500 group"
                >
                  <social.icon size={22} className="group-hover:scale-110 transition-transform group-hover:text-white" />
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Award, label: "Winner 2024" },
                { icon: ShieldCheck, label: "RERA Certified" },
                { icon: Building2, label: "15+ Years" }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2 group">
                  <badge.icon className="h-6 w-6 text-primary group-hover:scale-125 transition-transform" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="font-black text-xs uppercase tracking-[0.5em] text-zinc-500 mb-8 border-l-2 border-primary pl-4">Quick Links</h4>
            <ul className="space-y-6">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-all flex items-center gap-4 group text-lg font-medium">
                    <span className="w-6 h-[2px] bg-zinc-800 group-hover:w-10 group-hover:bg-primary transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            {/* Location and Contact Window */}
              <div className="lg:col-span-4 space-y-10">
                <h4 className="font-black text-xs uppercase tracking-[0.5em] text-zinc-500 mb-8 border-l-2 border-primary pl-4">Contact Us</h4>
                <div className="flex flex-col gap-8">
                  <a href="tel:+91000000000" className="group flex items-center gap-6 p-6 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-all">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone size={24} className="group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Priority Line</p>
                      <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">+91 00000 00000</span>
                    </div>
                  </a>

                    <a href="mailto:contact@satyamresidency.com" className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-all overflow-hidden">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                        <Mail size={24} className="group-hover:text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Email Us</p>
                        <span className="text-sm sm:text-lg font-bold tracking-tight text-white group-hover:text-primary transition-colors break-all block">contact@satyamresidency.com</span>
                      </div>
                    </a>

                <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-zinc-900/50 border border-zinc-800">
                  <div className="h-14 w-14 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Location</p>
                    <span className="text-lg font-medium text-zinc-300">Thaltej, Ahmedabad</span>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Bottom Credits and Features */}
        <div className="border-t border-zinc-900 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:items-start items-center gap-3">
            <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">© {currentYear} Satyam Residency Architecture</p>
            <div className="flex gap-6">
              {legalLinks.map((link, i) => (
                <Link key={i} href={link.href} className="text-[10px] text-zinc-600 hover:text-primary font-black uppercase tracking-[0.2em] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-12">
            {[
              { label: "Ultra Luxury", val: "100%" },
              { label: "Trust Index", val: "4.9/5" },
              { label: "Engineering", val: "Grade A" }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-serif font-black text-white">{metric.val}</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">{metric.label}</div>
              </div>
            ))}
          </div>

          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -10, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-20 w-20 rounded-[2rem] bg-primary flex items-center justify-center shadow-[0_20px_50px_rgba(var(--primary-rgb),0.5)] group"
          >
            <ArrowUpRight className="h-8 w-8 text-white -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
