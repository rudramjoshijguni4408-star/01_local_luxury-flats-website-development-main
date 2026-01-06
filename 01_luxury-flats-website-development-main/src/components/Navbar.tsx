// Created by: Rudram Joshi
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Home, 
  Building2, 
  Phone, 
  Gem, 
  Image as ImageIcon, 
  HelpCircle, 
  Compass,
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight
} from "lucide-react";
import { InquiryModal } from "@/components/InquiryModal";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const isHomePage = pathname === "/";
  // On non-home pages, we want a solid navbar from the start for better visibility
  const isScrolled = scrolled || !isHomePage;

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: Home, label: "The Beginning" },
    { name: "Residences", href: "/projects", icon: Building2, label: "Our Collection" },
    { name: "facilities", href: "/facilities", icon: Gem, label: "Lifestyle" },
    { name: "Location", href: "/prime-connectivity", icon: Compass, label: "Connectivity" },
    { name: "Gallery", href: "/gallery", icon: ImageIcon, label: "Visuals" },
    { name: "FAQ", href: "/faq", icon: HelpCircle, label: "Help" },
    { name: "Contact", href: "/contact", icon: Phone, label: "Get in Touch" },
  ];

  return (
    <nav className={`fixed top-0 z-[100] w-full transition-all duration-700 ${
    isScrolled 
          ? "bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800/50 py-3 shadow-lg" 
          : "bg-transparent py-6"
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group relative z-[110]">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 transition-all duration-500">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ec1db7e8-65fd-449d-8dc4-279559f903c3/satya_favicon-1767720240241.png?width=8000&height=8000&resize=contain" 
                    alt="Satyam Residency Logo" 
                    fill 
                    className={`object-contain transition-all duration-500 ${
                      isScrolled || isOpen ? "brightness-0" : ""
                    }`}
                  />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl sm:text-2xl font-serif font-black tracking-tighter transition-all duration-500 ${
                  isScrolled || isOpen ? "text-primary" : "text-white"
                }`}>
                  SATYAM <span className={isScrolled || isOpen ? "text-zinc-900 dark:text-white" : "text-white/90"}>RESIDENCY</span>
                </span>
                <span className={`text-[9px] uppercase tracking-[0.7em] font-bold transition-all duration-500 ${
                  isScrolled || isOpen ? "text-zinc-500 opacity-100" : "text-white/40 opacity-100"
                }`}>The Gold Standard</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-primary relative group ${
                    isScrolled ? "text-zinc-600 dark:text-zinc-400" : "text-white/80"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    pathname === link.href ? "w-full" : ""
                  }`} />
                </Link>
              ))}
              <InquiryModal>
                <Button variant="default" className="rounded-full px-8 h-12 text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-primary/20 active:scale-95 transition-all">
                  Inquire Now
                </Button>
              </InquiryModal>
            </div>

            {/* Mobile Toggle & Inquiry */}
            <div className="lg:hidden flex items-center gap-3">
              {!isOpen && (
                <InquiryModal>
                  <Button size="sm" className={`rounded-full px-5 h-10 text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all ${
                    isScrolled ? "bg-primary text-white" : "bg-white text-zinc-950"
                  }`}>
                    Inquiry
                  </Button>
                </InquiryModal>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3.5 rounded-full transition-all duration-500 relative z-[110] active:scale-90 overflow-hidden ${
                  isOpen 
                    ? "bg-primary text-white shadow-xl shadow-primary/30" 
                    : isScrolled 
                      ? "text-zinc-900 dark:text-white bg-white shadow-md border border-zinc-100" 
                      : "text-white bg-white/10 backdrop-blur-md border border-white/20"
                }`}
                aria-label="Toggle Menu"
              >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={20} strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={20} strokeWidth={3} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] lg:hidden bg-white dark:bg-zinc-950 flex flex-col"
          >
            {/* Elegant Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] grayscale contrast-150">
                <Image 
                  src="/images/bg-cubes.png" 
                  alt="Background Pattern" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pt-32 pb-10 px-6 sm:px-12 relative z-10">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-5 group"
                    >
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-[0.4em] font-black text-primary mb-1 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-500">
                          {link.label}
                        </span>
                        <span className={`text-4xl font-serif font-black tracking-tighter transition-all duration-300 ${
                          pathname === link.href ? "text-primary" : "text-zinc-900 dark:text-white"
                        }`}>
                          {link.name}
                        </span>
                      </div>
                      <div className={`w-12 h-12 rounded-full border border-zinc-100 dark:border-zinc-800 flex items-center justify-center transition-all duration-500 ${
                        pathname === link.href ? "bg-primary border-primary text-white" : "group-hover:border-primary group-hover:text-primary"
                      }`}>
                        <ArrowUpRight size={20} className="transform transition-transform group-hover:rotate-45" />
                      </div>
                    </Link>
                    <div className="h-px w-full bg-gradient-to-r from-zinc-100 via-zinc-100 to-transparent dark:from-zinc-800/50 dark:via-zinc-800/50 dark:to-transparent" />
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Bottom Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16 pt-10 border-t border-zinc-100 dark:border-zinc-800"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400 mb-5 italic">Direct Concierge</h4>
                    <a href="tel:+91000000000" className="text-xl font-serif font-bold text-zinc-900 dark:text-white hover:text-primary transition-colors block mb-1 underline decoration-primary/20 underline-offset-4">
                      +91 00000 00000
                    </a>
                    <a href="mailto:info@satyamresidency.com" className="text-xs text-zinc-500 hover:text-primary transition-colors">
                      info@satyamresidency.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400 mb-5 italic">Social Presence</h4>
                    <div className="flex gap-5">
                      {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                        <motion.a
                          key={idx}
                          href="#"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-primary transition-colors border border-zinc-100 dark:border-zinc-800"
                        >
                          <Icon size={18} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="p-6 sm:p-10 border-t border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl relative z-10">
              <InquiryModal>
                <Button variant="default" className="w-full rounded-2xl h-16 sm:h-18 text-lg font-black uppercase tracking-widest shadow-2xl shadow-primary/20 active:scale-[0.98] transition-all">
                  Secure Your Visit
                </Button>
              </InquiryModal>
              <p className="text-[9px] text-center text-zinc-400 uppercase tracking-[0.3em] font-bold mt-6">
                &copy; 2026 Satyam Residency. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
