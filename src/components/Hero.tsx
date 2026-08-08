"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StatCounter from "./ui/StatCounter";
import Typewriter from "./ui/Typewriter";
import Ticker from "./Ticker";
import { STATS } from "@/lib/data";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yOrbs = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-brand-dark"
    >
      {/* Parallax Background Image */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <Image
          src="/images/hero-bg.png"
          alt="SSI Fitness premium gym interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-brand-dark" />
      </motion.div>

      {/* Parallax Orbs */}
      <motion.div style={{ y: yOrbs }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-orange/5 rounded-full blur-[100px]" />
      </motion.div>

      {/* Massive Hollow Background Text */}
      <motion.div 
        style={{ y: yText }} 
        className="absolute top-1/3 left-0 w-full flex justify-center z-[5] pointer-events-none select-none opacity-40"
      >
        <span className="font-heading text-[12vw] sm:text-[15vw] font-black text-outline uppercase leading-none tracking-tighter whitespace-nowrap">
          SSI FITNESS
        </span>
      </motion.div>

      {/* Geometric accent lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
        <div className="absolute top-24 right-12 w-20 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
        <div className="absolute bottom-40 left-10 w-40 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
      </div>

      {/* Content - Asymmetrical Left-Aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-24 md:pb-32 flex flex-col items-start text-left">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-surface/30 backdrop-blur-md mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-text-secondary text-sm font-medium uppercase tracking-wider">
                Premium Training & Recovery
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter"
          >
            <span className="block text-white drop-shadow-lg">Forge Your</span>
            <span className="block text-brand-orange mt-1 drop-shadow-[0_0_20px_rgba(255,107,0,0.4)]">
              <Typewriter words={["LEGACY", "STRENGTH", "MINDSET", "GREATNESS"]} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Experience elite performance, holistic recovery, and complete
            transformation at SSI Fitness — the premium destination for serious
            athletes and warriors.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-4"
          >
            <Link
              href="#contact"
              className="bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white hover:from-brand-orange-light hover:to-brand-orange px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transform hover:-translate-y-1 tracking-wide uppercase flex items-center justify-center gap-2"
            >
              Start Journey
            </Link>
            <Link
              href="#pricing"
              className="px-8 py-4 rounded-full font-bold text-sm text-white border border-brand-border-light hover:border-brand-orange hover:text-brand-orange transition-all uppercase tracking-wide flex items-center justify-center gap-2"
            >
              Explore Plans
            </Link>
          </motion.div>
        </div>

        {/* Full-bleed Ticker directly below CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 w-[100vw] relative left-1/2 -translate-x-1/2"
        >
          <Ticker />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-0 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-brand-orange/5 opacity-50 rounded-3xl pointer-events-none" />
          
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative p-6 flex items-center justify-center ${index !== 3 ? 'md:border-r md:border-white/10' : ''}`}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
