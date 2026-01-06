// Created by: Rudram Joshi
"use client";

import { motion } from "framer-motion";
import { Gavel, CheckCircle2, AlertCircle, FileText, Calendar } from "lucide-react";

/**
 * Terms and Conditions Page
 * Outlines the legal agreement between the developer and the website user.
 */
export default function TermsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const terms = [
    {
      title: "Agreement to Terms",
      icon: Gavel,
      content: "By accessing this website, you agree to be bound by these Terms and Conditions and all applicable laws. If you do not agree with any of these terms, you are prohibited from using this site."
    },
    {
      title: "Booking Policy",
      icon: Calendar,
      content: "Any booking for a residence made through the website is subject to the standard booking terms of Satyam Residency. Allotment is subject to availability and completion of formal documentation."
    },
    {
      title: "Payment Schedules",
      icon: CheckCircle2,
      content: "Payment schedules for the purchase of units will be as per the 'Agreement for Sale'. All payments should be made in favor of 'Satyam Residency' or the designated project account."
    },
    {
      title: "Intellectual Property",
      icon: FileText,
      content: "The logos, trademarks, and content on this website are the property of Satyam Residency. Unauthorized use of any material on this website is strictly prohibited."
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
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Governing Rules</span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8">Terms & Conditions</h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Please review the following terms that govern your use of our website and project inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {terms.map((term, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <term.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{term.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...fadeIn}
          className="max-w-4xl mx-auto p-10 bg-amber-50 dark:bg-amber-950/20 rounded-[3rem] border border-amber-100 dark:border-amber-900/50 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="h-20 w-20 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0">
            <AlertCircle className="h-10 w-10 text-amber-600 dark:text-amber-500" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-400 uppercase tracking-widest text-sm">Important Note</h4>
            <p className="text-amber-800/80 dark:text-amber-400/80 leading-relaxed">
              These terms are subject to change without prior notice. Users are encouraged to check this page regularly for updates. For any legal clarifications, please reach out to our corporate office.
            </p>
          </div>
        </motion.div>

        <motion.div 
          {...fadeIn}
          className="text-center mt-24"
        >
          <p className="text-zinc-400 text-sm">© 2026 Satyam Residency Developers | Registered Office: Thaltej, Ahmedabad</p>
        </motion.div>
      </div>
    </div>
  );
}
