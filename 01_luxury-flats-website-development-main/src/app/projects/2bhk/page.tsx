// Created by: Rudram Joshi
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/InquiryModal";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Home, 
  Maximize2, 
  Zap, 
  ShieldCheck, 
  Trees, 
  Coffee,
  Sparkles,
  Shield,
  Star,
  MapPin,
  Clock
} from "lucide-react";
import Link from "next/link";

/**
 * TwoBHKPage Component
 * Detailed view for 2 BHK residences with professional content and high-end aesthetics.
 * Updated with more detailed descriptions and animations.
 */
export default function TwoBHKPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const features = [
    "Spacious Dual-Aspect Living Room",
    "Master Suite with Private Balcony",
    "Second Bedroom for Kids/Guests",
    "Premium Modular Kitchen Setup",
    "Separate Dining & Lounge Areas",
    "Designer Bathroom with Walk-in Shower",
    "Smart Home Automation Ready",
    "Enhanced Security & Video Door Phone"
  ];

  const specifications = [
    { title: "Flooring", desc: "Large format Italian-style vitrified tiles in all major areas; anti-skid tiles in balconies." },
    { title: "Kitchen", desc: "Parallel granite platforms with dry balcony and heavy-duty sink. Piped gas connection ready." },
    { title: "Plumbing", desc: "Branded CP & Sanitary fittings (Jaguar/Kohler or equivalent) with wall-hung toilets." },
    { title: "Doors", desc: "Grand main door with decorative veneer and premium digital security locks." },
    { title: "Safety", desc: "Earthquake resistant RCC structure with fire-fighting systems and panic buttons." }
  ];

  return (
    <div className="flex flex-col bg-white dark:bg-zinc-950 overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
            <Image
              src="/images/azure-2bhk.jpg"
              alt="2 BHK Luxury Interior"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </motion.div>
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-10 transition-colors bg-white/10 backdrop-blur-md px-10 py-4 rounded-full border border-white/20 hover:bg-white/20 group">
              <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-2 transition-transform" />
              <span className="text-xs font-black uppercase tracking-[0.4em]">Back to Showcase</span>
            </Link>
          </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-9xl font-serif font-black mb-6 tracking-tighter leading-[0.9]"
            >
              Satyam <br /> <span className="text-primary italic">Azure</span>
            </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center gap-8 pb-32"
              >
                <p className="text-xl md:text-3xl text-white max-w-3xl mx-auto font-light leading-relaxed italic tracking-wide drop-shadow-lg">
                  "Engineering the perfect sanctuary for the modern visionary. Where every square inch inspires greatness at Satyam Residency."
                </p>
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent z-0" />
          </section>

      {/* Narrative Section */}
      <section className="py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">The Grand Life</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">A Legacy of <br /> Comfort & Style</h2>
              <div className="space-y-8 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                <p>
                  The 2 BHK residences at Satyam Residency are designed to be a definitive statement in luxury living. These homes offer the perfect balance of shared family spaces and private retreats. The expansive living room serves as the heart of the home, perfect for entertaining.
                </p>
                <p>
                  Each bedroom is a masterpiece of design, with the master suite featuring its own private balcony and an attached designer bathroom. The secondary bedroom is versatile, serving perfectly as a child's room, a guest suite, or a sophisticated home office.
                </p>
                <p>
                  From the Italian-style vitrified flooring to the designer bathroom fixtures, every detail reflects our commitment to excellence and your desire for a premium lifestyle that stands out. Our construction quality ensures that your investment is protected for generations to come.
                </p>
                  <p>
                    Located in a prime pocket of Thaltej, Ahmedabad, these homes offer the rare luxury of silence amidst the city's hustle, with cross-ventilation that keeps the interiors cool naturally.
                  </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>

                <div className="mt-16 flex flex-col sm:flex-row gap-6">
                  <InquiryModal>
                    <Button size="lg" className="rounded-2xl px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                      View Pricing & Plans
                    </Button>
                  </InquiryModal>
                  <Button variant="default" size="lg" className="rounded-2xl px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                    <Clock className="mr-2 h-5 w-5" /> Schedule Visit
                  </Button>
                </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="relative"
            >
                <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl border-4 border-zinc-100 dark:border-zinc-800 z-10">
                  <Image
                    src="/images/interior-living.jpg"
                    alt="2 BHK Elite Interior"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] z-0" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-zinc-500/10 rounded-full blur-[80px] z-0" />
              
              <div className="absolute top-10 right-10 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/20 hidden md:block max-w-[200px]">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-sm mb-2 uppercase tracking-widest">Enhanced Security</h4>
                <p className="text-[10px] text-zinc-500 font-medium">Video door phone and smart lock integrated for maximum safety.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-serif font-bold">Unmatched Specifications</h2>
             <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">We use only the highest grade materials to ensure your home remains as beautiful as the day you moved in.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specifications.map((spec, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-primary font-bold text-xs">0{i+1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">{spec.title}</h4>
                <p className="text-zinc-500 leading-relaxed text-sm">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10">
            <Image 
              src="/images/hero-main.jpg" 
              alt="Architecture" 
              fill 
              className="object-cover"
            />
          </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-serif font-bold mb-10 leading-tight tracking-tighter">The Life You've <br /> Always Imagined</h2>
            <p className="text-zinc-400 mb-16 text-xl md:text-2xl leading-relaxed font-light">
              Experience the pinnacle of urban living. Our 2 BHK residences are limited in number and high in demand. Join a community of over 500 happy families.
            </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <InquiryModal>
                    <Button size="lg" className="w-full sm:w-auto rounded-full px-16 h-20 text-xl font-bold shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                      Book Site Visit
                    </Button>
                  </InquiryModal>
                  <Link href="/projects/3bhk">
                    <Button size="lg" variant="default" className="w-full sm:w-auto rounded-full px-16 h-20 text-xl font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
                      View Satyam Pinnacle (3 BHK)
                    </Button>
                  </Link>
                </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
