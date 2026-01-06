// Created by: Rudram Joshi
"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Info, ShieldCheck, Scale, HelpCircle } from "lucide-react";

/**
 * Disclaimer Page
 * Provides important legal notices regarding project information and artistic representations.
 */
export default function DisclaimerPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const disclaimers = [
    {
      title: "Artistic Impressions",
      icon: Info,
      content: "All images, 3D renderings, and walkthroughs shown on this website are artistic impressions and are for representational purposes only. The final product may vary in color, texture, and appearance."
    },
    {
      title: "Specifications",
      icon: ShieldCheck,
      content: "The furniture, fixtures, and fittings shown in the photographs are not part of the standard offering. Please refer to the specific 'Agreement for Sale' for the list of facilities and specifications included with your unit."
    },
    {
      title: "Project Modifications",
      icon: Scale,
      content: "Satyam Residency reserves the right to modify project plans, specifications, or facilities without prior notice, subject to the regulations of RERA and other local governing bodies."
    },
    {
      title: "No Legal Binding",
      icon: AlertTriangle,
      content: "The contents of this website do not constitute a legal offer or contract. All transactions are subject to the terms and conditions mentioned in the formal booking documents and final agreement."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Legal Notice</span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">Disclaimer</h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Please read these important notices regarding the information provided on our digital platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {disclaimers.map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed italic">
                "{item.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...fadeIn}
          className="max-w-4xl mx-auto border-t border-zinc-100 dark:border-zinc-800 pt-20"
        >
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { 
                q: "Is the project RERA certified?", 
                a: "Yes, all our projects are registered under MahaRERA. The registration numbers are displayed at our site office and on official communications." 
              },
              { 
                q: "Can I rely on the dimensions shown?", 
                a: "The dimensions mentioned in floor plans are approximate and subject to minor variations during construction as permitted by law." 
              }
            ].map((faq, i) => (
              <div key={i} className="flex gap-6">
                <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex-shrink-0 flex items-center justify-center text-xs font-bold">?</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          {...fadeIn}
          className="text-center mt-24"
        >
          <p className="text-zinc-400 text-xs uppercase tracking-widest">Satyam Residency Developers | Mumbai, India</p>
        </motion.div>
      </div>
    </div>
  );
}
