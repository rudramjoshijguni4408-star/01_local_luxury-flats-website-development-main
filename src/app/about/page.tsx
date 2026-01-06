// Created by: Rudram Joshi
"use client";

import { motion } from "framer-motion";
import { Building, Target, Award, Users, CheckCircle, ShieldCheck, Heart, MapPin, Globe, Sparkles, Building2, HardHat } from "lucide-react";
import Image from "next/image";

/**
 * About Page
 * Tells the story of Satyam Residency with a premium, trust-building aesthetic.
 * Enhanced with more detailed history and project milestones.
 */
export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-zinc-950 overflow-hidden min-h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mb-24"
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Legacy of Excellence</span>
            <h1 className="text-5xl md:text-8xl font-serif font-black mb-8 leading-[0.9] tracking-tighter">
              Satyam <br /> 
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-zinc-400 to-primary bg-[length:200%_auto] animate-gradient py-2">Residency</span>
            </h1>
            <p className="text-xl md:text-3xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-3xl italic tracking-wide">
              "We are architects of modern lifestyles, committed to creating exceptional living spaces that redefine urban luxury and comfort in Mumbai."
            </p>
        </motion.div>

        {/* Story Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
               <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Our Journey</h2>
               <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  <p>
                    Founded in 2008, Satyam Residency began with a simple yet powerful vision: to bridge the gap between architectural innovation and residential comfort. Over the last 15 years, we have evolved from a boutique developer into a leading name in Mumbai's real estate landscape.
                  </p>
                  <p>
                    Our journey has been defined by a relentless pursuit of quality. Every brick laid and every beam raised in our projects is a testament to our commitment to excellence. We don't just build apartments; we create ecosystems where families thrive and dreams take flight.
                  </p>
                  <p>
                    With over 500 happy families already part of our community, our focus remains on delivering projects that are not only visually stunning but also structurally superior and legally transparent.
                  </p>
               </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl"
            >
               <Image 
                src="/images/hero-main.jpg" 
                alt="Construction Excellence" 
                fill 
                className="object-cover"
               />
               <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="/images/about-office.jpg"
              alt="Our Architectural Vision"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center gap-4 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-white font-bold tracking-widest uppercase text-xs">Innovation in Design</span>
              </div>
              <p className="text-white/90 text-lg italic font-serif">
                "Creating landmarks that stand the test of time and provide unparalleled value to our residents."
              </p>
            </div>
          </motion.div>

          <div className="space-y-16">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Our Core Philosophy</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed mb-8">
                At Satyam Residency, our philosophy is rooted in the belief that a home is more than just a structure—it's a sacred space where memories are made.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Sustainable Architectural Practices",
                  "Uncompromising Material Quality",
                  "Transparent & Ethical Business",
                  "Community-First Development"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-lg font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {[
                { icon: Globe, title: "Global Standards", desc: "Implementing international design principles in every Mumbai project." },
                { icon: Award, title: "Quality Benchmarks", desc: "Setting new standards in construction durability and finish." },
                { icon: Users, title: "Client Centric", desc: "Designing spaces that understand and cater to your lifestyle." },
                { icon: ShieldCheck, title: "Legal Integrity", desc: "100% RERA compliant with clear, transparent documentation." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="space-y-4 p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-xl">{item.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Milestone Journey */}
        <section className="py-24 border-y border-zinc-100 dark:border-zinc-800 mb-32 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-950 px-8 py-2 border border-zinc-100 dark:border-zinc-800 rounded-full text-xs font-bold tracking-[0.4em] text-primary uppercase">Timeline</div>
          <div className="text-center mb-20">
            <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-serif font-bold">Our Milestone Journey</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { year: "2008", title: "Foundation", desc: "Established with a vision to redefine the Mumbai residential landscape." },
              { year: "2015", title: "Expansion", desc: "Successfully delivered our first major gated community in the western suburbs." },
              { year: "2024", title: "Luxury Series", desc: "Launching our signature Elite series featuring world-class 1, 2 & 3 BHK homes." }
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-12 rounded-[3.5rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 group hover:bg-white dark:hover:bg-zinc-800 transition-all duration-500"
              >
                <div className="text-7xl font-serif font-bold text-primary/5 absolute top-8 right-12 group-hover:text-primary/10 transition-colors">{milestone.year}</div>
                <h4 className="text-2xl font-bold mb-4 relative z-10">{milestone.title}</h4>
                <p className="text-zinc-500 leading-relaxed relative z-10 text-lg">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="/images/hero-main.jpg" 
              alt="Architecture" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <Heart className="h-12 w-12 text-primary mx-auto mb-10" />
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-10 leading-tight">"We don't just sell square footage; we provide a canvas for your life's best memories."</h2>
            <p className="text-zinc-400 text-xl mb-12 font-light italic">
              — Leadership Team, Satyam Residency
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
