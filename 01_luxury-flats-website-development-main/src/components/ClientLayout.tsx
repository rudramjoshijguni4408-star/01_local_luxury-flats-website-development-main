"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

/**
 * ClientLayout Component
 * Wraps the application with Framer Motion transitions for smooth page changes.
 * Uses AnimatePresence to handle exit animations.
 */
export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={pathname === "/" ? "" : "pt-20 sm:pt-24"}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Toaster position="top-center" expand={true} richColors />
    </>
  );
}
