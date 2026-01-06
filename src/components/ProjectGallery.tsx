"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Building2 as BuildingIcon, 
  Map as MapIcon, 
  Sparkles as SparklesIcon,
  Download as DownloadIcon,
  Maximize2 as MaximizeIcon
} from "lucide-react";

/**
 * ProjectGallery Component
 * Showcases the architectural beauty and planning of the project.
 * Created by: Rudram Joshi
 */
const galleryData = {
  overview: [
    { src: "/images/horizon-1bhk.jpg", alt: "Modern Building Façade" },
    { src: "/images/azure-2bhk.jpg", alt: "Luxury Living Room" },
    { src: "/images/hero-main.jpg", alt: "Architectural Grandeur" },
    { src: "/images/pinnacle-3bhk.jpg", alt: "Designer Kitchen" },
    { src: "/images/interior-master.jpg", alt: "Master Suite" },
    { src: "/images/interior-bath.jpg", alt: "Elegant Bathroom" },
  ],
  unitPlans: [
    { title: "1 BHK - Smart Series", src: "/images/exterior-smart.jpg", description: "Efficiently designed for maximum utility and urban comfort." },
    { title: "2 BHK - Elite Luxury", src: "/images/interior-living.jpg", description: "Expansive layouts with dual balconies and premium finishes." },
    { title: "3 BHK - Grandeur", src: "/images/pinnacle-3bhk.jpg", description: "Palatial residences with three-sided open views." },
  ],
  masterPlan: [
    { src: "/images/master-plan.jpg", alt: "Project Master Layout" },
  ]
};

export function ProjectGallery() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="gallery" className="py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <SparklesIcon className="h-5 w-5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">Visual Journey</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight"
            >
              Architectural <span className="text-primary italic">Canvas</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-500 text-lg font-light leading-relaxed max-w-xl"
            >
              Immerse yourself in the aesthetic brilliance and meticulous planning that defines Satyam Residency. From grand façades to intricate floor plans.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              size="lg"
              className="rounded-full gap-3 px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform"
              onClick={() => {
                alert("The high-resolution project brochure is being prepared. It will be sent to your registered contact shortly.");
              }}
            >
              <DownloadIcon className="h-5 w-5" /> Download Portfolio
            </Button>
          </motion.div>
        </div>

        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-16">
            <TabsList className="flex w-full max-w-2xl bg-zinc-200/50 dark:bg-zinc-800/50 p-1.5 rounded-full border border-zinc-100 dark:border-zinc-800 backdrop-blur-sm h-14">
              <TabsTrigger value="overview" className="flex-1 rounded-full gap-2 text-xs font-bold uppercase tracking-widest h-full data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950 data-[state=active]:shadow-lg transition-all duration-300">
                <BuildingIcon className="h-4 w-4" /> Overview
              </TabsTrigger>
              <TabsTrigger value="unitPlans" className="flex-1 rounded-full gap-2 text-xs font-bold uppercase tracking-widest h-full data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950 data-[state=active]:shadow-lg transition-all duration-300">
                <MapIcon className="h-4 w-4" /> Floor Plans
              </TabsTrigger>
              <TabsTrigger value="masterPlan" className="flex-1 rounded-full gap-2 text-xs font-bold uppercase tracking-widest h-full data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950 data-[state=active]:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-4 w-4" /> Master Plan
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="relative min-h-[500px]">
            <TabsContent value="overview" className="mt-0 outline-none">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {galleryData.overview.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-xl hover:shadow-primary/10 transition-all duration-700"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <MaximizeIcon className="text-white h-12 w-12 transform scale-75 group-hover:scale-100 transition-transform duration-500" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="unitPlans" className="mt-0 outline-none">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-10"
              >
                {galleryData.unitPlans.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-500"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-10 flex flex-col flex-1">
                      <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                      <p className="text-zinc-500 text-sm mb-8 flex-1 leading-relaxed italic">{item.description}</p>
                      <Button variant="outline" className="w-full rounded-2xl h-14 font-bold border-2 hover:bg-zinc-50 transition-all active:scale-95">Enlarge View</Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="masterPlan" className="mt-0 outline-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                className="relative aspect-[16/9] max-w-5xl mx-auto bg-white dark:bg-zinc-800 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-800 p-12 flex items-center justify-center group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={galleryData.masterPlan[0].src}
                    alt="Master Plan"
                    fill
                    className="object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
