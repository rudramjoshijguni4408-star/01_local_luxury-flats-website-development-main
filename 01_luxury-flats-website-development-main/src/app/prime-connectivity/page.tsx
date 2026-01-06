"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Train, 
  Bus, 
  MapPin, 
  Building2, 
  School, 
  ShoppingBag, 
  Car, 
  Plane, 
  Compass,
  Navigation,
  Milestone,
  HeartPulse,
  Trees
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InquiryModal } from "@/components/InquiryModal";

const connectivityHighlights = [
  {
    icon: Car,
    title: "S.G. Highway",
    time: "2 Mins",
    desc: "Direct access to Ahmedabad's primary north-south artery.",
    color: "bg-amber-500/10 text-amber-600"
  },
  {
    icon: Building2,
    title: "Thaltej Metro Station",
    time: "5 Mins",
    desc: "Seamless travel across the city via the Ahmedabad Metro.",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Train,
    title: "Thaltej Cross Road",
    time: "8 Mins",
    desc: "Quick access to the busiest business hub in Ahmedabad's west.",
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    icon: ShoppingBag,
    title: "Retail & Leisure",
    time: "10 Mins",
    desc: "Proximity to Ahmedabad One Mall, Iscon Mall, and local markets.",
    color: "bg-rose-500/10 text-rose-600"
  },
  {
    icon: School,
    title: "Top-tier Education",
    time: "5-12 Mins",
    desc: "Udgam School, Zydus School, and EuroSchool Thaltej.",
    color: "bg-indigo-500/10 text-indigo-600"
  },
  {
    icon: HeartPulse,
    title: "Healthcare Hub",
    time: "7 Mins",
    desc: "Zydus Hospital and Marengo CIMS Hospital for 24/7 medical care.",
    color: "bg-red-500/10 text-red-600"
  }
];

const landmarks = [
  { name: "Thaltej Lake", distance: "1.5 KM", icon: Trees },
  { name: "Udgam School", distance: "2.1 KM", icon: School },
  { name: "Thaltej Metro", distance: "0.8 KM", icon: Navigation },
  { name: "S.G. Highway", distance: "0.5 KM", icon: Milestone }
];

export default function ConnectivityPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
  };

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="flex flex-col bg-white dark:bg-zinc-950 overflow-hidden min-h-screen relative">
      {/* Decorative Background Patterns */}
      {/* Created by: Rudram Joshi */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/bg-cubes.png')]" />
      </div>

      {/* Immersive Header */}
      <section className="relative h-[70vh] sm:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <Image
            src="/images/connectivity-road.jpg"
            alt="Modern Cityscape Connectivity"
            fill
            className="object-cover brightness-[0.3] contrast-[1.2]"
            priority
          />
        </motion.div>
          <div className="container relative z-10 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-primary/10 backdrop-blur-3xl border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-6 sm:mb-8">
                <Compass className="h-4 w-4" />
                Strategic Location
              </span>
              <h1 className="text-5xl sm:text-8xl font-serif font-black mb-6 tracking-tighter text-white">
                Prime <span className="text-primary italic">Connectivity</span>
              </h1>
              <p className="text-white/60 text-lg sm:text-xl font-light max-w-2xl mx-auto italic">
                "Located at the heartbeat of Thaltej, where convenience meets prestige."
              </p>
            </motion.div>
          </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
      </section>

      {/* Map & Neighborhood Context */}
      <section className="py-16 sm:py-32 relative">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl sm:text-7xl font-serif font-bold mb-8 sm:mb-10 leading-[0.9]">At the <span className="text-primary italic">Center</span> <br /> of it all.</h2>
              <p className="text-zinc-500 text-lg sm:text-xl font-light mb-10 sm:mb-12 leading-relaxed">
                  Satyam Residency isn't just a place to live; it's a gateway to everything Ahmedabad offers. Strategically positioned between nature and the bustling city.
                </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
                {landmarks.map((landmark, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 sm:p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm">
                      <landmark.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{landmark.name}</h4>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-black">{landmark.distance}</p>
                    </div>
                  </div>
                ))}
              </div>

              <InquiryModal>
                <Button size="lg" className="w-full sm:w-auto rounded-full px-12 h-16 sm:h-18 text-lg font-black shadow-2xl shadow-primary/20">
                  Request Location Map
                </Button>
              </InquiryModal>
            </motion.div>

                <motion.div 
                  {...fadeInUp}
                  transition={{ delay: 0.3 }}
                  className="relative h-[400px] sm:h-[650px] rounded-[3rem] sm:rounded-[4rem] overflow-hidden border-4 sm:border-8 border-white dark:border-zinc-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group"
                >
                    <iframe 
                      src="https://maps.google.com/maps?q=23.0500,72.5167&hl=en&z=15&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      title="Satyam Residency Precise Location"
                      className="transition-all duration-700"
                    ></iframe>
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[3rem] sm:rounded-[4rem]" />
                </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Break Section */}
      <section className="h-[50vh] sm:h-[75vh] relative overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.4, 0.8], [0, 150]) }}
          className="absolute inset-0"
        >
          <Image 
            src="/images/connectivity-metro.jpg"
            alt="Modern Architectural Connectivity"
            fill
            className="object-cover scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="container relative z-10 h-full flex items-center justify-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-8xl font-serif font-black text-white text-center tracking-tighter"
          >
            Seamlessly <span className="text-primary italic">Linked.</span>
          </motion.h2>
        </div>
      </section>

      {/* Connectivity Grid */}
      <section className="py-20 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-6xl font-serif font-bold mb-6 italic text-primary">Travel Times</h2>
            <div className="h-1 w-20 sm:w-24 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {connectivityHighlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 sm:p-12 bg-white dark:bg-zinc-900 rounded-[2.5rem] sm:rounded-[3rem] border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all group"
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-8 sm:mb-10 transition-transform group-hover:scale-110 shadow-lg ${item.color}`}>
                  <item.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight">{item.title}</h3>
                  <span className="text-primary font-black text-[10px] sm:text-xs bg-primary/5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-primary/10">
                    {item.time}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed italic">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* Developed by: Rudram Joshi */}
      <section className="py-32 sm:py-48 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/bg-carbon.png')]" />
        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-8xl font-serif font-black mb-8 sm:mb-12 tracking-tighter leading-[0.85]">Experience the <br /> <span className="italic text-primary">Difference.</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <InquiryModal>
                <Button size="lg" className="w-full sm:w-auto rounded-full px-12 sm:px-20 h-20 sm:h-24 text-2xl sm:text-3xl font-black shadow-2xl">
                  Book A Visit
                </Button>
              </InquiryModal>
                <div className="text-center sm:text-left">
                  <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 mb-2 font-bold italic">Location Assistance</p>
                  <a href="tel:+91000000000" className="text-2xl sm:text-3xl font-serif font-bold hover:text-primary transition-all underline decoration-primary/30 decoration-4 underline-offset-8">+91 00000 00000</a>
                </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
