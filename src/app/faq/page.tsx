// Created by: Rudram Joshi
"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What is the exact location of Satyam Residency?",
    answer: "Satyam Residency is strategically located in Thaltej, Ahmedabad. It offers excellent connectivity to the S.G. Highway (2 mins) and the Thaltej Metro Station (5 mins)."
  },
  {
    question: "What configurations are available?",
    answer: "We offer thoughtfully designed 1 BHK Smart Homes, 2 BHK Premium Suites, and 3 BHK Royal Mansions, each crafted with high-end finishes and modern automation."
  },
  {
    question: "Are the projects RERA registered?",
    answer: "Yes, all our projects under Satyam Residency are fully RERA registered. We adhere to all regulatory standards to ensure complete transparency and peace of mind for our buyers."
  },
  {
    question: "What facilities are provided in the complex?",
    answer: "The complex features signature facilities including a Sky Garden, Infinity Power Backup, The Royal Club (networking lounge), 24/7 Elite Security, and oxygen-rich walking trails."
  },
  {
    question: "What is the possession timeline?",
    answer: "Possession timelines vary by project phase. Please contact our sales office or visit our 'Projects' page for specific details regarding Satyam Horizon, Azure, or Pinnacle."
  },
  {
    question: "Is there a sample flat available for viewing?",
    answer: "Yes, we have fully furnished sample flats ready for all configurations. You can 'Reserve Your Visit' through our website or call us directly to schedule a tour."
  }
];

export default function FAQPage() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <HelpCircle className="h-3.5 w-3.5" />
              Assistance Center
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Common <span className="text-primary italic">Questions</span>
            </h1>
            <p className="text-zinc-500 text-lg font-light max-w-2xl mx-auto">
              Find answers to the most frequent inquiries about our luxury residences and lifestyle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-12 rounded-[3rem] border border-zinc-100 dark:border-zinc-800"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="border-none bg-white dark:bg-zinc-800 rounded-2xl px-6 py-2 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-serif font-bold text-lg hover:no-underline group">
                    <span className="group-hover:text-primary transition-colors">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-500 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 p-10 bg-primary rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Still have questions?</h3>
              <p className="text-white/80 font-light">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button variant="secondary" className="rounded-full px-8 h-14 font-bold">
                  Contact Us
                </Button>
              </Link>
                <Link href="https://wa.me/91000000000" target="_blank">
                  <Button className="rounded-full px-8 h-14 font-bold bg-white text-primary hover:bg-white/90">
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                  </Button>
                </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
