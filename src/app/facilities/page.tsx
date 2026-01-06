// Created by: Rudram Joshi
"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Trees, 
  Zap, 
  Coffee, 
  Car, 
  Gem,
  Waves,
  Dumbbell,
  Users,
  Baby,
  Gamepad,
  Library
} from "lucide-react";

export default function LifestylePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const amenityGroups = [
    {
      category: "Health & Wellness",
      items: [
        { icon: Dumbbell, title: "Sky Gym", desc: "State-of-the-art fitness center with panoramic city views." },
        { icon: Waves, title: "Infinity Pool", desc: "Temperature-controlled rooftop pool for year-round relaxation." },
        { icon: Coffee, title: "The Royal Club", desc: "A world-class social lounge and wellness center." }
      ]
    },
    {
      category: "Security & Service",
      items: [
        { icon: Shield, title: "Elite Security", desc: "24/7 military-grade surveillance and biometric access control." },
        { icon: Car, title: "Valet Parking", desc: "Multi-level intelligent parking with EV charging stations." },
        { icon: Zap, title: "Infinity Power", desc: "Next-gen backup systems ensuring 100% uptime." }
      ]
    },
    {
      category: "Lifestyle & Leisure",
      items: [
        { icon: Trees, title: "Vertical Gardens", desc: "Breathtaking sky gardens and oxygen-rich walking trails." },
        { icon: Gem, title: "Heritage Design", desc: "Timeless architecture meets modern luxury engineering." },
        { icon: Users, title: "Community Hall", desc: "Grand banquet space for celebrations and corporate events." }
      ]
    },
    {
      category: "Kids & Family",
      items: [
        { icon: Baby, title: "Kids Play Zone", desc: "Safe and engaging play area designed for young explorers." },
        { icon: Gamepad, title: "Indoor Games", desc: "Premium game room featuring billiards, table tennis, and VR." },
        { icon: Library, title: "The Library", desc: "A quiet sanctuary for reading and focused work." }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Elite Living</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Signature Indulgences</h1>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
              Experience a curated tapestry of convenience and class designed to elevate every second of your day.
            </p>
          </motion.div>

        <div className="space-y-24">
          {amenityGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <motion.h2 
                {...fadeInUp}
                className="text-3xl font-serif font-bold mb-12 border-l-4 border-primary pl-6"
              >
                {group.category}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((item, itemIndex) => (
                  <motion.div 
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="p-10 rounded-[3rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                      <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-all" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
