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
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-brand-orange/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Members Say"
          highlight="Members"
        />

        <div className="mt-16 relative">
          {/* Quote card */}
          <div className="relative glass rounded-2xl p-8 md:p-12 min-h-[280px] flex items-center">
            {/* Big quote icon */}
            <Quote
              size={80}
              className="absolute top-6 left-6 text-brand-orange/10"
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10 text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-brand-orange"
                        fill="currentColor"
                      />
                    )
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-text-secondary leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-8">
                  <div className="font-heading text-lg font-bold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-brand-orange text-sm mt-1">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-text-secondary hover:border-brand-orange hover:text-brand-orange transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-brand-orange"
                      : "w-2 bg-brand-border hover:bg-text-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-text-secondary hover:border-brand-orange hover:text-brand-orange transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
