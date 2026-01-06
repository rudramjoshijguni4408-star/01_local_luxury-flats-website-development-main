// Created by: Rudram Joshi
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/InquiryModal";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

    const projects = [
      {
        title: "Sophisticated 1 BHK",
        slug: "1bhk",
        description: "Smartly designed compact luxury for individuals and young couples.",
        features: ["Efficient Layout", "Modern Kitchen", "City View Balcony"],
        image: "/images/horizon-1bhk.jpg",
        tag: "Compact Luxury"
      },
      {
        title: "Elite 2 BHK",
        slug: "2bhk",
        description: "Spacious family homes with premium finishes and expansive living areas.",
        features: ["Master Suite", "Italian Fittings", "Double Balconies"],
        image: "/images/azure-2bhk.jpg",
        tag: "Family Choice"
      },
      {
        title: "Grandeur 3 BHK",
        slug: "3bhk",
        description: "Palatial residences for the ultimate lifestyle with servant and utility rooms.",
        features: ["3-Side Open", "Servant Room", "Home Automation"],
        image: "/images/pinnacle-3bhk.jpg",
        tag: "Premium Series"
      }
    ];

    {/* Developed by: Rudram Joshi */}
    return (
    <div className="pt-32 pb-24 bg-white dark:bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Configurations</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Explore Our Residences</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            From efficient 1 BHKs to sprawling 3 BHK penthouses, find the perfect space that resonates with your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-zinc-900 dark:text-white">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-serif font-bold mb-4">{project.title}</h3>
                <p className="text-zinc-500 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-3 mb-10">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <Link href={`/projects/${project.slug}`}>
                    <Button className="w-full rounded-2xl h-14 font-bold">
                      View Floor Plans <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                    <InquiryModal>
                      <Button variant="default" className="w-full rounded-2xl h-14 font-bold shadow-lg shadow-primary/10">
                        Check Pricing
                      </Button>
                    </InquiryModal>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
