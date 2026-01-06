"use client";

import { motion } from "framer-motion";
import { Train, Bus, MapPin, Building2, School, ShoppingBag } from "lucide-react";

const connectivityItems = [
  {
    icon: Train,
    title: "Railway Station",
    distance: "1.5 KM",
    description: "Quick access to the main railway hub for seamless commuting.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: Building2,
    title: "Metro Station",
    distance: "0.8 KM",
    description: "Upcoming metro connectivity just a short walk away.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: Bus,
    title: "Bus Terminal",
    distance: "0.5 KM",
    description: "Frequent bus services connecting all major parts of the city.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    icon: School,
    title: "Schools & Colleges",
    distance: "2.0 KM",
    description: "Top-tier educational institutions within the vicinity.",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: ShoppingBag,
    title: "Shopping Mall",
    distance: "1.2 KM",
    description: "Entertainment and retail hubs for your weekend getaways.",
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    icon: MapPin,
    title: "Major Highway",
    distance: "3.0 KM",
    description: "Excellent road connectivity to major business districts.",
    color: "bg-red-500/10 text-red-500"
  }
];

export function LocationConnectivity() {
  return (
    <section id="location" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-serif font-bold mb-4"
          >
            Prime Connectivity
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-500 max-w-2xl mx-auto"
          >
            Satyam Residency is strategically located to keep you connected to everything that matters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {connectivityItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-transparent hover:border-primary/20 transition-all hover:shadow-xl"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.color}`}>
                <item.icon className="h-7 w-7" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
                  {item.distance}
                </span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
