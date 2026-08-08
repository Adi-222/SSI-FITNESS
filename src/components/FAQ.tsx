"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { FAQ_ITEMS } from "@/lib/data";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${isOpen ? 'border-brand-orange/40 bg-brand-orange/5 shadow-[0_0_30px_rgba(255,107,0,0.15)]' : 'border-white/5 bg-[#111111]/80 hover:border-white/20'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`font-heading text-lg md:text-xl font-black uppercase tracking-wide transition-colors pr-4 ${isOpen ? 'text-brand-orange drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]' : 'text-white group-hover:text-brand-orange'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-orange text-white shadow-[0_0_15px_rgba(255,107,0,0.4)]' : 'bg-white/5 text-text-muted group-hover:bg-brand-orange/20 group-hover:text-brand-orange'}`}>
            <ChevronDown size={20} />
          </div>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-8 pt-0">
              <div className="h-px bg-gradient-to-r from-brand-orange/40 to-transparent mb-6" />
              <p className="text-text-secondary leading-relaxed font-medium text-lg">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 bg-brand-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px]" />

      {/* Massive Background Text Watermark */}
      <div className="absolute top-1/2 left-0 w-full flex justify-center z-0 pointer-events-none select-none opacity-[0.15] overflow-hidden -translate-y-1/2">
        <span className="font-heading text-[25vw] font-black text-outline uppercase leading-none tracking-tighter whitespace-nowrap">
          FAQ
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          highlight="Questions"
          subtitle="Everything you need to know about SSI Fitness. Can't find what you're looking for? Book a call with us."
        />

        <div className="mt-20 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
