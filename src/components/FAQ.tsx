"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of apartments do you offer?",
    answer: "We specialize in premium 1 BHK and 2 BHK residential apartments, designed for modern urban living with high-quality finishes and optimal space utilization."
  },
  {
    question: "Are the projects RERA registered?",
    answer: "Yes, all our projects under Satyam Residency are fully RERA registered, ensuring transparency, accountability, and peace of mind for our buyers."
  },
  {
    question: "What are the common facilities available?",
    answer: "Our projects typically feature 24/7 security, high-speed elevators, premium flooring, modular kitchen options, children's play areas, and landscaped communal spaces."
  },
  {
    question: "Can I schedule a site visit?",
    answer: "Absolutely! You can schedule a site visit by clicking the 'Inquiry Now' button or contacting us directly via the WhatsApp button on the left."
  },
  {
    question: "What is the expected possession timeline?",
    answer: "Possession timelines vary by project phase. Our current ongoing projects are scheduled for completion within the next 18-24 months. Please contact our sales team for project-specific dates."
  }
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Everything you need to know about our projects and booking process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between group"
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
