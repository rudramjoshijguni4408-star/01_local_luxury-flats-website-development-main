// Created by: Rudram Joshi
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { submitInquiry } from "@/app/actions";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      project: formData.get("project") as string,
      message: formData.get("message") as string,
    };

    const result = await submitInquiry(data);

    setLoading(false);
    if (result.success) {
      setIsSubmitted(true);
      toast.success("Inquiry submitted successfully!");
    } else {
      toast.error(result.error || "Failed to submit inquiry");
    }
  };

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <Phone className="h-3.5 w-3.5" />
              Contact Us
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Get in <span className="text-primary italic">Touch</span>
            </h1>
            <p className="text-zinc-500 text-lg font-light max-w-2xl mx-auto">
              Whether you're looking for your dream home or have a question about our properties, our elite relationship managers are here to assist you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
                <div className="space-y-10">
                  {[
                    { icon: Phone, title: "Phone", value: "+91 00000 00000", desc: "Mon-Sat from 9am to 8pm." },
                    { icon: Mail, title: "Email", value: "sales@satyamresidency.com", desc: "Our friendly team is here to help." },
                    { icon: MapPin, title: "Office", value: "Thaltej, Ahmedabad", desc: "Come say hello at our sales office." },
                    { icon: Clock, title: "Working Hours", value: "9:00 AM - 8:00 PM", desc: "Open all days including Sundays." }
                  ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="h-16 w-16 rounded-[1.5rem] bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-100 dark:border-zinc-800 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-primary font-bold mb-1 text-lg">{item.value}</p>
                      <p className="text-sm text-zinc-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-zinc-950 rounded-[2.5rem] border border-white/5">
                <h4 className="text-white font-serif font-bold text-xl mb-4">Direct WhatsApp Support</h4>
                <p className="text-zinc-400 text-sm mb-6 font-light">Get instant answers to your queries on WhatsApp.</p>
                <Button className="w-full rounded-2xl h-14 font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-50 dark:bg-zinc-900/50 p-10 md:p-14 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800 shadow-2xl shadow-primary/5 min-h-[600px] flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 ml-4">Full Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full h-16 px-8 rounded-2xl bg-white dark:bg-zinc-800 border-none ring-1 ring-zinc-100 dark:ring-zinc-700 focus:ring-2 focus:ring-primary transition-all outline-none text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 ml-4">Phone Number</label>
                        <input 
                          required
                          name="phone"
                          type="tel" 
                          placeholder="+91 00000 00000" 
                          className="w-full h-16 px-8 rounded-2xl bg-white dark:bg-zinc-800 border-none ring-1 ring-zinc-100 dark:ring-zinc-700 focus:ring-2 focus:ring-primary transition-all outline-none text-lg"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 ml-4">Email Address</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full h-16 px-8 rounded-2xl bg-white dark:bg-zinc-800 border-none ring-1 ring-zinc-100 dark:ring-zinc-700 focus:ring-2 focus:ring-primary transition-all outline-none text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 ml-4">Preferred Project</label>
                      <select 
                        name="project"
                        className="w-full h-16 px-8 rounded-2xl bg-white dark:bg-zinc-800 border-none ring-1 ring-zinc-100 dark:ring-zinc-700 focus:ring-2 focus:ring-primary transition-all outline-none appearance-none text-lg cursor-pointer"
                      >
                        <option>Satyam Horizon (1 BHK)</option>
                        <option>Satyam Azure (2 BHK)</option>
                        <option>Satyam Pinnacle (3 BHK)</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 ml-4">Your Message</label>
                      <textarea 
                        name="message"
                        rows={4} 
                        placeholder="Tell us about your requirements..." 
                        className="w-full p-8 rounded-3xl bg-white dark:bg-zinc-800 border-none ring-1 ring-zinc-100 dark:ring-zinc-700 focus:ring-2 focus:ring-primary transition-all outline-none resize-none text-lg"
                      ></textarea>
                    </div>
                    <Button 
                      disabled={loading}
                      type="submit"
                      className="w-full h-20 rounded-[2rem] text-xl font-black shadow-2xl shadow-primary/20 group"
                    >
                      {loading ? "Submitting..." : (
                        <>Submit Inquiry <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-10"
                  >
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif font-bold">Inquiry Received</h3>
                      <p className="text-xl text-zinc-500 font-light max-w-sm mx-auto">
                        Thank you for reaching out. Our team will contact you in 2-3 days.
                      </p>
                    </div>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline" 
                      className="rounded-2xl px-10 h-14 text-lg font-bold"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 mt-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[600px] rounded-[4rem] overflow-hidden border-8 border-zinc-50 dark:border-zinc-900 shadow-2xl relative"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.246401030!2d72.5167!3d23.0500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8499256997f7%3A0x64b6e680459c0f99!2sThaltej%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Satyam Residency Location"
              ></iframe>
            </motion.div>
      </div>
    </div>
  );
}
