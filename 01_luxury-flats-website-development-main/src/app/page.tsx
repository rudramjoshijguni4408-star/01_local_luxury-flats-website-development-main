// Created by: Rudram Joshi
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/InquiryModal";
import { 
  ArrowRight, 
  Trees, 
  Zap,
  Coffee,
  Car,
  MapPin,
  Star,
  Shield,
  Gem,
  Phone,
  Compass
} from "lucide-react";

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any }
  };

  const projects = [
    {
      title: "Satyam Horizon",
      type: "1 BHK Smart Homes",
      slug: "1bhk",
      description: "Crafted for the upwardly mobile. Re-defining efficient luxury with automation.",
      image: "/images/horizon-1bhk.jpg"
    },
    {
      title: "Satyam Azure",
      type: "2 BHK Premium Suites",
      slug: "2bhk",
      description: "A sanctuary for families. Featuring dual-aspect ventilation and expansive suites.",
      image: "/images/azure-2bhk.jpg"
    },
    {
      title: "Satyam Pinnacle",
      type: "3 BHK Royal Mansions",
      slug: "3bhk",
      description: "The peak of architectural excellence with 270-degree panoramic views.",
      image: "/images/pinnacle-3bhk.jpg"
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col overflow-hidden bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 0.3], [0, 100]),
            scale: useTransform(scrollYProgress, [0, 0.3], [1, 1.05])
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero-main.jpg"
            alt="Satyam Residency Architecture"
            fill
            className="object-cover brightness-[0.4] contrast-[1.1]"
            priority
          />
        </motion.div>
        
        <div className="container relative z-10 px-4 md:px-6 text-center text-white pt-20 sm:pt-36 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="relative w-32 h-32 sm:w-48 sm:h-48 mb-8"
          >
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ec1db7e8-65fd-449d-8dc4-279559f903c3/satya_favicon-1767720240241.png?width=8000&height=8000&resize=contain" 
              alt="Satyam Residency Logo" 
              fill 
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] mb-6 sm:mb-8 shadow-2xl">
              <Star className="h-4 w-4 text-primary" />
              Elite Living in Thaltej
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-5xl sm:text-8xl md:text-9xl font-serif font-black mb-6 sm:mb-10 tracking-tighter leading-[0.85] text-balance"
          >
            Satyam <br />
            <span className="italic font-serif text-primary py-2">Residency</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-white/70 mb-8 sm:mb-12 uppercase"
          >
            Welcome to the Future of Living
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8"
          >
            <InquiryModal>
              <Button size="lg" className="w-full sm:w-auto rounded-full px-10 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl font-black shadow-2xl active:scale-95 group">
                Reserve Your Visit <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </InquiryModal>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white dark:bg-zinc-950">
        <div className="container px-4 mx-auto text-center">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-6xl font-serif font-bold mb-8">
            Experience the <span className="text-primary italic">Pinnacle</span> of Luxury
          </motion.h2>
          <motion.p {...fadeInUp} className="text-zinc-500 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Satyam Residency is not just a home; it's a legacy. Designed for those who demand excellence, our residences offer a blend of modern architecture and timeless comfort in the heart of Thaltej, Ahmedabad.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Masterpiece Collection</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold">The Residences</h2>
            </div>
            <Link href="/projects">
              <Button variant="link" className="text-primary font-bold text-lg group p-0">
                View All Residences <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                {...fadeInUp}
                className="group bg-white dark:bg-zinc-800 rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-8 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-primary">{project.type}</p>
                    <h3 className="text-2xl font-serif font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-zinc-500 mb-8 line-clamp-2 italic font-light">{project.description}</p>
                  <Link href={`/projects/${project.slug}`}>
                    <Button 
                      variant="default" 
                      className="w-full rounded-2xl h-14 font-bold group shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-[0.98] transition-all"
                    >
                      Explore Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity Preview */}
      <section className="py-32 bg-white dark:bg-zinc-950">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block italic">Supreme Location</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-zinc-900 dark:text-white leading-[1.1]">
                Prime <br /><span className="text-primary italic">Connectivity</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg sm:text-xl font-light mb-10 leading-relaxed italic">
                "Located at the heartbeat of Thaltej, where convenience meets prestige."
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <Car className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold mb-1">S.G. Highway</h4>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest">2 Mins Away</p>
                </div>
                <div>
                  <Compass className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold mb-1">Thaltej Metro</h4>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest">5 Mins Away</p>
                </div>
              </div>
              <Link href="/prime-connectivity">
                <Button size="lg" className="rounded-full px-12 h-16 font-bold group">
                  Explore Connectivity <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="relative h-[500px] rounded-[3.5rem] overflow-hidden border-8 border-zinc-50 dark:border-zinc-900 shadow-2xl"
            >
              <iframe 
                src="https://maps.google.com/maps?q=23.0500,72.5167&hl=en&z=15&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Satyam Residency Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-40 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/hero-main.jpg" 
            alt="Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-7xl font-serif font-bold mb-8 sm:mb-12">
              Begin Your <span className="italic text-primary">Legacy</span> Today.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12">
              <InquiryModal>
                <Button size="lg" className="w-full md:w-auto rounded-full px-12 sm:px-16 h-20 sm:h-24 text-2xl sm:text-3xl font-black shadow-2xl">
                  Inquire Now
                </Button>
              </InquiryModal>
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 mb-2 font-bold">Direct Line</p>
                <a href="tel:+91000000000" className="text-2xl sm:text-3xl font-serif font-bold hover:text-primary transition-all">+91 00000 00000</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Auto-opening Inquiry Modal after 60 seconds */}
      <InquiryModal autoOpen={true} delay={60000} />
    </div>
  );
}
