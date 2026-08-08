"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = TESTIMONIALS[current];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-brand-dark">
      {/* Massive Cinematic Background Quote */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center z-0 pointer-events-none select-none overflow-hidden opacity-10">
        <span className="font-heading text-[60vw] font-black text-outline uppercase leading-[0.5] tracking-tighter">
          &quot;
        </span>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-brand-orange/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Members Say"
          highlight="Members"
          subtitle="Real stories from real warriors who transformed their lives at SSI Fitness."
        />

        <div className="mt-20 relative">
          {/* Quote card */}
          <div className="relative bg-[#0A0A0A]/80 backdrop-blur-3xl rounded-3xl p-8 md:p-16 min-h-[350px] flex items-center border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden group">
            
            {/* Subtle inner hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Top glowing edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />

            {/* Big quote icon */}
            <Quote
              size={120}
              className="absolute top-4 left-4 text-white/5 rotate-180 -scale-y-100"
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 text-center w-full"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1.5 mb-8">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={22}
                        className="text-brand-orange drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]"
                        fill="currentColor"
                      />
                    )
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-3xl lg:text-4xl text-white font-medium leading-tight md:leading-snug italic px-4 md:px-12">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-12 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-1 bg-brand-orange/30 rounded-full mb-2" />
                  <div className="font-heading text-2xl font-black text-white uppercase tracking-wider">
                    {testimonial.name}
                  </div>
                  <div className="text-brand-orange text-sm font-bold uppercase tracking-widest">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/10 transition-all shadow-lg transform hover:-translate-x-1"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-10 bg-brand-orange shadow-[0_0_10px_rgba(255,107,0,0.6)]"
                      : "w-2 bg-white/20 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/10 transition-all shadow-lg transform hover:translate-x-1"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
