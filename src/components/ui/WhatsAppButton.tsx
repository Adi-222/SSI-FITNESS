"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow"
    >
      <MessageCircle size={26} className="text-white" fill="currentColor" />
    </motion.a>
  );
}
