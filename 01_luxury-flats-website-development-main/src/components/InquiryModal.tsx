// Created by: Rudram Joshi
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  User, 
  Phone, 
  Home, 
    MessageSquare, 
    Mail, 
    CheckCircle2,
    ChevronDown,
    CircleDollarSign,
    Calendar,
    X
  } from "lucide-react";

import { submitInquiry } from "@/app/actions";
import { toast } from "sonner";

/**
 * InquiryModal Component
 * Provides a sophisticated form for potential buyers to submit their interest.
 * Enhanced with multiple fields including Budget and Timeline for detailed lead capture.
 * 
 * @param children - The trigger element (usually a button)
 * @param autoOpen - Whether the modal should open automatically
 * @param delay - Delay in milliseconds before auto-opening
 */
export function InquiryModal({ 
  children, 
  autoOpen = false,
  delay = 60000 
}: { 
  children?: React.ReactNode, 
  autoOpen?: boolean,
  delay?: number 
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (autoOpen) {
        const timer = setTimeout(() => {
          const hasOpened = localStorage.getItem("inquiry_modal_opened");
          if (!hasOpened) {
            setIsOpen(true);
            localStorage.setItem("inquiry_modal_opened", "true");
          }
        }, delay);
      return () => clearTimeout(timer);
    }
  }, [autoOpen, delay]);

  /**
   * Handles form submission with Supabase integration
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      type: formData.get("type") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {children && (
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
      )}
      <DialogContent 
        showCloseButton={false}
            className="sm:max-w-[550px] w-full sm:w-[95vw] rounded-none sm:rounded-[2.5rem] border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden p-0 h-full sm:h-auto max-h-screen sm:max-h-[90vh] flex flex-col"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 h-10 w-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md text-white transition-all active:scale-95 shadow-lg"
            >
              <X size={20} strokeWidth={3} />
            </button>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary transition-colors"
              >
                {/* Header with high-end aesthetic gradient */}
                <div className="relative h-28 sm:h-40 bg-zinc-950 flex items-center justify-center overflow-hidden shrink-0">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-zinc-500 rounded-full blur-[60px] -translate-x-1/2 translate-y-1/2" />
                  </div>
                  <DialogHeader className="relative z-10 text-center space-y-1 sm:space-y-2">
                    <DialogTitle className="font-serif text-2xl sm:text-4xl text-white tracking-tight">Express Interest</DialogTitle>
                      <DialogDescription className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.5em] font-black">
                        The Luxury Contact Team
                      </DialogDescription>
                  </DialogHeader>
                </div>
              
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input Group */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold flex items-center gap-2">
                      <User size={12} className="text-primary" /> Full Name
                    </Label>
                      <Input 
                        id="name" 
                        name="name"
                        required
                        placeholder="John Doe" 
                        className="rounded-xl border-zinc-100 dark:border-zinc-800 focus:ring-primary h-12 bg-zinc-50/50 dark:bg-zinc-900/50" 
                      />
                    </div>
                    
                    {/* Phone Input Group */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold flex items-center gap-2">
                        <Phone size={12} className="text-primary" /> Mobile Number
                      </Label>
                      <Input 
                        id="phone" 
                        name="phone"
                          required
                          type="tel"
                          placeholder="+91 00000 00000" 
                          className="rounded-xl border-zinc-100 dark:border-zinc-800 focus:ring-primary h-12 bg-zinc-50/50 dark:bg-zinc-900/50" 
                        />
                    </div>
                  </div>
  
                  {/* Email Input Group */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold flex items-center gap-2">
                      <Mail size={12} className="text-primary" /> Email Address
                    </Label>
                    <Input 
                      id="email" 
                      name="email"
                      required
                      type="email"
                      placeholder="your@email.com" 
                      className="rounded-xl border-zinc-100 dark:border-zinc-800 focus:ring-primary h-12 bg-zinc-50/50 dark:bg-zinc-900/50" 
                    />
                  </div>
  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Property Selection Dropdown */}
                    <div className="space-y-2">
                      <Label htmlFor="type" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold flex items-center gap-2">
                        <Home size={12} className="text-primary" /> Property Type
                      </Label>
                      <div className="relative">
                        <select 
                          id="type"
                          name="type"
                          required
                          className="flex h-12 w-full rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 px-4 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                          <option value="">Select Option</option>
                          <option value="1bhk">1 BHK Apartment</option>
                          <option value="2bhk">2 BHK Apartment</option>
                          <option value="3bhk">3 BHK Apartment</option>
                          <option value="commercial">Commercial Space</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
  
                    {/* Budget Selection Dropdown */}
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold flex items-center gap-2">
                        <CircleDollarSign size={12} className="text-primary" /> Budget Range
                      </Label>
                      <div className="relative">
                        <select 
                          id="budget"
                          name="budget"
                          className="flex h-12 w-full rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 px-4 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                          <option value="">Select Budget</option>
                          <option value="50-75L">₹50 Lac - ₹75 Lac</option>
                          <option value="75L-1Cr">₹75 Lac - ₹1 Cr</option>
                          <option value="1Cr-1.5Cr">₹1 Cr - ₹1.5 Cr</option>
                          <option value="above1.5Cr">Above ₹1.5 Cr</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  {/* Timeline Selection Dropdown */}
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold flex items-center gap-2">
                      <Calendar size={12} className="text-primary" /> Purchase Timeline
                    </Label>
                    <div className="relative">
                      <select 
                        id="timeline"
                        name="timeline"
                        className="flex h-12 w-full rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 px-4 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate (Within 1 Month)</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="planning">Just Exploring</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
  
                  {/* Requirements Textarea */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold flex items-center gap-2">
                      <MessageSquare size={12} className="text-primary" /> Comments / Requirements
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Share any specific preferences or questions..." 
                      className="rounded-xl border-zinc-100 dark:border-zinc-800 focus:ring-primary transition-all min-h-[70px] bg-zinc-50/50 dark:bg-zinc-900/50" 
                    />
                  </div>


                <Button 
                  disabled={loading}
                  type="submit" 
                  className="w-full rounded-2xl h-14 text-lg font-bold gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>Submit Inquiry <Send size={18} /></>
                  )}
                </Button>
                
                <p className="text-[10px] text-center text-zinc-400 uppercase tracking-widest font-medium">
                  Secured by SSL encryption. View our <Link href="/privacy" className="underline text-primary hover:text-primary/80 transition-colors">Privacy Policy</Link>
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-10 sm:p-12 flex flex-col items-center text-center space-y-6"
            >
              {/* Success State Illustration */}
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold">Inquiry Received</h3>
                  <p className="text-sm sm:text-base text-zinc-500">
                    Thank you for reaching out. A dedicated relationship manager from Satyam Residency will contact you in 2-3 days.
                  </p>
                </div>

              <Button 
                onClick={() => setIsOpen(false)}
                variant="outline" 
                className="rounded-xl px-8 h-12"
              >
                Close Window
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
