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
  Wind,
  Layout,
  Star,
  Shield,
  Gem,
  Smartphone
} from "lucide-react";
import Link from "next/link";

/**
 * Satyam Horizon (1 BHK) Page
 * Elevated detailed view for premium 1 BHK residences.
 */
export default function SatyamHorizonPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
  };

  const specifications = [
    { title: "Smart Living", desc: "Integrated home automation for lighting and climate control via smartphone." },
    { title: "Designer Kitchen", desc: "Premium quartz platforms with full-height backsplash and soft-close cabinetry." },
    { title: "Acoustic Windows", desc: "Triple-track powder-coated aluminum sections for 100% noise reduction." },
    { title: "Elite Flooring", desc: "Large-format Italian-style vitrified tiles for a continuous, luxurious flow." },
    { title: "Sanitary Art", desc: "High-end CP fittings from Jaguar's Artize series in master bathrooms." }
  ];

  return (
    <div className="flex flex-col bg-white dark:bg-zinc-950 overflow-hidden min-h-screen">
      {/* Immersive Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
            <Image
            src="/images/horizon-1bhk.jpg"
            alt="Satyam Horizon 1 BHK Interior"
            fill
            className="object-cover brightness-[0.4] contrast-[1.1]"
            priority
          />
        </motion.div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-16 transition-all bg-white/5 backdrop-blur-2xl px-10 py-4 rounded-full border border-white/10 hover:bg-white/10 group">
              <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-2 transition-transform" />
              <span className="text-xs font-black uppercase tracking-[0.4em]">Back to Showcase</span>
            </Link>
          </motion.div>
          
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-9xl font-serif font-black mb-8 tracking-tighter leading-[0.9]"
            >
              Satyam <br /> <span className="text-primary italic">Horizon</span>
            </motion.h1>
            
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center gap-8 pb-32"
              >
                <span className="bg-white/5 backdrop-blur-3xl border border-white/10 px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">The Smart Series</span>
                <p className="text-xl md:text-3xl text-white max-w-3xl mx-auto font-light leading-relaxed tracking-wider italic mb-10 drop-shadow-lg">
                  "Engineering the perfect sanctuary for the modern visionary. Where every square inch inspires greatness at Satyam Residency."
                </p>
              </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent z-0" />
      </section>

      {/* Narrative Section */}
      <section className="py-40 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-10">
                <Gem className="h-6 w-6 text-primary" />
                <span className="text-xs font-black uppercase tracking-[0.6em] text-zinc-500">The Blueprint of Success</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-[0.9] tracking-tighter">Spatial <br /> <span className="italic text-zinc-300 dark:text-zinc-800">Intelligence.</span></h2>
              <div className="space-y-10 text-zinc-500 text-xl leading-relaxed font-light italic">
                <p>
                  "Satyam Horizon isn't just a 1 BHK; it's a statement of arrival. We've utilized neuro-architectural principles to create a layout that feels twice its size, maximizing natural light and cognitive flow."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {[
                    { icon: Smartphone, label: "Tech Enabled" },
                    { icon: Wind, label: "Cross-Air" },
                    { icon: Shield, label: "Secured" },
                    { icon: Star, label: "Vastu" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="h-14 w-14 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center border border-zinc-100 dark:border-zinc-800 group-hover:bg-primary/10 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-zinc-700 dark:text-zinc-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16">
                <InquiryModal>
                  <Button size="lg" className="rounded-3xl px-16 h-20 text-xl font-black shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                    Reserve This View
                  </Button>
                </InquiryModal>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white dark:border-zinc-900 group">
                  <Image
                    src="/images/interior-detail.jpg"
                    alt="Satyam Horizon Layout"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-16 left-16 right-16">
                  <h3 className="text-white text-4xl font-serif font-bold mb-4 italic">The Horizon Layout</h3>
                  <div className="h-1 w-20 bg-primary mb-6" />
                  <p className="text-zinc-300 text-lg font-light uppercase tracking-widest">Efficiency Met Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Masterpieces Section */}
      <section className="py-40 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-32">
            <motion.h2 {...fadeInUp} className="text-5xl md:text-8xl font-serif font-bold mb-10 tracking-tight">Technical <span className="text-primary italic">Precision</span></motion.h2>
            <div className="w-40 h-1 bg-primary mx-auto rounded-full mb-10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {specifications.map((spec, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-900/50 p-12 rounded-[4rem] border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block group-hover:translate-x-2 transition-transform">{spec.title}</span>
                <p className="text-zinc-500 text-xl leading-relaxed font-light italic">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-56 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-[9rem] font-serif font-black mb-16 leading-[0.85] tracking-tighter">Your Future <br /> <span className="italic text-primary">Awaits.</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <InquiryModal>
                <Button size="lg" variant="default" className="w-full sm:w-auto rounded-full px-20 h-24 text-3xl font-black shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Secure Site Tour
                </Button>
              </InquiryModal>
              <div className="h-px w-20 bg-white/20 hidden sm:block" />
                    <Link href="/projects/2bhk">
                      <Button size="lg" variant="default" className="w-full sm:w-auto rounded-full px-16 h-24 text-xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        View Satyam Azure (2 BHK)
                      </Button>
                    </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
