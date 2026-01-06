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
  Sparkles,
  Award,
  Crown,
  MapPin,
  Star
} from "lucide-react";
import Link from "next/link";

/**
 * ThreeBHKPage Component
 * The pinnacle of luxury in the project. Features extensive detail and premium content.
 * Updated to fix image 404s and include more detailed project text.
 */
export default function ThreeBHKPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const features = [
    "Sprawling 3-Side Open Layout",
    "Grand Living & Dining Hall",
    "Master Suite with Walk-in Closet",
    "Dedicated Servant/Utility Room",
    "Large Wrap-around Balconies",
    "Vastu Compliant Design",
    "Smart Home Automation Ready",
    "Premium Italian Marble Flooring"
  ];

  const specifications = [
    { title: "Flooring", desc: "Premium Italian marble in living and dining; engineered wooden flooring in master bedroom." },
    { title: "Walls", desc: "Royal Shine plastic emulsion paint on internal walls; stone cladding highlights in lobby." },
    { title: "Windows", desc: "Sound-proof UPVC sliding windows with mosquito nets and premium hardware." },
    { title: "Kitchen", desc: "Fully modular kitchen with hob, chimney, and piped gas connection. Quartz countertop." },
    { title: "Security", desc: "Video door phone, digital locks, and 24/7 panic button system integrated with main gate." }
  ];

  return (
    <div className="flex flex-col bg-white dark:bg-zinc-950 overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
            <Image
              src="/images/pinnacle-3bhk.jpg"
              alt="3 BHK Grandeur Interior"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </motion.div>
        <div className="container relative z-10 px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
               <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-10 transition-all bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 hover:border-primary/50 group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
              </Link>
            </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-9xl font-serif font-bold mb-6 tracking-tight leading-none"
          >
            Grandeur <br /> <span className="text-primary italic">3 BHK</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-3xl text-zinc-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide"
          >
            The ultimate expression of status and space. Designed for those who refuse to settle for anything but the absolute best.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <Crown className="h-6 w-6 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500">The Crown Jewel</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 leading-[1.1]">Unrivaled Space <br /> & Sophistication</h2>
              <div className="space-y-8 text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed font-light">
                <p>
                  Our 3 BHK 'Grandeur Series' at Satyam Residency represents the zenith of architectural craftsmanship. These residences are designed for families who appreciate the finer things in life, offering an expansive canvas to create a home that is uniquely yours.
                </p>
                <p>
                  Each unit features a massive living-dining area that serves as the heart of the home, perfect for hosting elegant soirees or enjoying quiet family evenings. The master suite is a private oasis, complete with a walk-in wardrobe and a designer bathroom.
                </p>
                <p>
                  With three-sided ventilation and massive wrap-around balconies, your home will be bathed in natural light and fresh air, offering panoramic views of the city skyline. We've also included a dedicated utility and servant area with a separate entrance to ensure maximum privacy.
                </p>
                <p>
                  The 'Grandeur Series' is situated on the highest floors of our towers, providing an exclusive living experience with noise insulation and premium elevator access.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <InquiryModal>
                  <Button size="lg" className="rounded-2xl px-16 h-20 text-xl font-bold shadow-2xl shadow-primary/20 hover:scale-[1.05] transition-transform">
                    Book Site Visit Now
                  </Button>
                </InquiryModal>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
                <div className="relative aspect-square rounded-[5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-900 group">
                  <Image
                    src="/images/interior-master.jpg"
                    alt="3 BHK Palatial Interior"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="flex items-center gap-4 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                    <span className="text-white font-bold tracking-[0.3em] uppercase text-xs">Award Winning Design</span>
                  </div>
                  <h3 className="text-white text-4xl font-serif font-bold italic">The Palatial Layout</h3>
                </div>
              </div>
              
              <div className="bg-zinc-50 dark:bg-zinc-900 p-12 rounded-[4rem] border border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <h4 className="text-2xl font-serif font-bold mb-10">Elite Specifications</h4>
                <div className="space-y-8">
                  {specifications.map((spec, i) => (
                    <div key={i} className="border-b border-zinc-200 dark:border-zinc-800 pb-8 last:border-0 last:pb-0">
                      <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-3 block">{spec.title}</span>
                      <p className="text-zinc-500 leading-relaxed italic">"{spec.desc}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Luxury CTA */}
      <section className="py-40 bg-zinc-950 text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image 
              src="/images/hero-main.jpg" 
              alt="Luxury Real Estate" 
              fill 
              className="object-cover"
            />
          </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div {...fadeIn} className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-9xl font-serif font-bold mb-12 leading-tight tracking-tighter">Your Legacy <br /> Starts Here</h2>
            <p className="text-zinc-400 mb-20 text-2xl md:text-3xl leading-relaxed font-light">
              Limited inventory available for our signature 3 BHK residences. Join the most exclusive community in Thaltej and elevate your lifestyle standard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <InquiryModal>
                <Button size="lg" className="rounded-full px-16 h-24 text-2xl font-bold shadow-2xl shadow-primary/30">
                  Request VIP Access
                </Button>
              </InquiryModal>
                <Button size="lg" variant="default" className="rounded-full px-16 h-24 text-2xl font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
                  View Sample Flat
                </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
