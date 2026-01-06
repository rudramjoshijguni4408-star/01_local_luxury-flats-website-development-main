// Created by: Rudram Joshi
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ImageIcon, Maximize2, X } from "lucide-react";

const galleryImages = [
  {
    url: "/images/hero-main.jpg",
    title: "Main Facade",
    category: "Architecture"
  },
  {
    url: "/images/horizon-1bhk.jpg",
    title: "1 BHK Living Space",
    category: "Interiors"
  },
  {
    url: "/images/azure-2bhk.jpg",
    title: "2 BHK Master Suite",
    category: "Interiors"
  },
  {
    url: "/images/pinnacle-3bhk.jpg",
    title: "3 BHK Grand Hall",
    category: "Interiors"
  },
    {
      url: "/images/amenity-gym.jpg",
      title: "The Royal Club",
      category: "Lifestyle"
    },
    {
      url: "/images/amenity-pool.jpg",
      title: "Infinity Pool",
      category: "Lifestyle"
    },
    {
      url: "/images/amenity-lounge.jpg",
      title: "Sky Garden View",
      category: "Lifestyle"
    },
  {
    url: "/images/exterior-night.jpg",
    title: "Luxury Lobby",
    category: "Architecture"
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <ImageIcon className="h-3.5 w-3.5" />
            Visual Tour
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            The <span className="text-primary italic">Gallery</span>
          </h1>
          <p className="text-zinc-500 text-lg font-light max-w-2xl mx-auto mb-12">
            A visual journey through Mumbai's most prestigious residences. Explore the architectural brilliance and meticulous interiors.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/30" 
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-80 rounded-[2.5rem] overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <Image 
                src={image.url} 
                alt={image.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <Maximize2 className="text-white h-8 w-8 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform" />
                <h3 className="text-white font-serif font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{image.title}</h3>
                <p className="text-primary text-[10px] uppercase font-bold tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform delay-100">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div className="relative w-full max-w-6xl h-[80vh]">
            <Image 
              src={selectedImage} 
              alt="Gallery Preview" 
              fill 
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
