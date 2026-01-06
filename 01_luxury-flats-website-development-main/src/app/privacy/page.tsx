// Created by: Rudram Joshi
"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, CheckCircle } from "lucide-react";

/**
 * Privacy Policy Page
 * Provides a professional and easy-to-read overview of how data is handled.
 * Designed with a premium aesthetic and smooth transitions.
 */
export default function PrivacyPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      title: "Data Collection",
      icon: Shield,
      content: "We collect personal information such as name, mobile number, and email address when you submit an inquiry through our website. This data is used solely to provide you with the information you've requested about our residential projects."
    },
    {
      title: "Purpose of Use",
      icon: Eye,
      content: "Your information allows us to communicate effectively, schedule site visits, and provide tailored property recommendations. We may also use your contact details for project updates and promotional offers related to Satyam Residency."
    },
    {
      title: "Security Measures",
      icon: Lock,
      content: "We implement industry-standard security protocols to protect your personal data from unauthorized access, disclosure, or alteration. Our website uses SSL encryption to ensure safe data transmission."
    },
    {
      title: "Data Sharing",
      icon: FileText,
      content: "We do not sell or lease your personal information to third-party marketing companies. Data may only be shared with authorized partners who assist us in project delivery and customer service, under strict confidentiality agreements."
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
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Trust & Transparency</span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">Privacy Policy</h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            At Satyam Residency, we value your privacy as much as your trust. This policy outlines how we handle your personal information with the utmost care and security.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <section.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...fadeIn}
          className="max-w-3xl mx-auto bg-zinc-950 text-white p-12 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-[80px] opacity-20" />
          <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Your Rights</h2>
          <div className="space-y-4 relative z-10">
            {[
              "Right to access your personal data",
              "Right to correct any inaccuracies",
              "Right to request deletion of your data",
              "Right to opt-out of marketing communications"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-zinc-300">
                <CheckCircle size={18} className="text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-zinc-500 text-sm">
            For any privacy-related inquiries, please contact our compliance officer at <span className="text-primary">privacy@chekok.com</span>
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn}
          className="text-center mt-20"
        >
          <p className="text-zinc-400 text-sm italic">Last Updated: January 2026. © Satyam Residency.</p>
        </motion.div>
      </div>
    </div>
  );
}
