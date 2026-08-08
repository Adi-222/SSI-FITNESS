"use client";

import { motion } from "framer-motion";
import { ArrowDown, Phone, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StatCounter from "./ui/StatCounter";
import { STATS } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="SSI Fitness premium gym interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark" />
        {/* Orange glow accent */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-brand-orange/5 rounded-full blur-[100px]" />
      </div>

      {/* Geometric accent lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
        <div className="absolute top-24 right-12 w-20 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
        <div className="absolute bottom-40 left-10 w-40 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-surface/50 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-text-secondary text-sm font-medium uppercase tracking-wider">
              Premium Training & Recovery
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight"
        >
          <span className="block text-white">Forge Your</span>
          <span className="block text-gradient-orange mt-2">Legacy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
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
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="btn-primary flex items-center gap-2 text-base"
          >
            <Phone size={18} />
            Book a Call
          </Link>
          <Link
            href="#pricing"
            className="btn-outline flex items-center gap-2 text-base"
          >
            Explore Plans
            <ChevronRight size={18} />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 mb-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative px-3 py-4 sm:px-4 sm:py-6 rounded-xl glass"
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown size={16} className="text-brand-orange" />
        </motion.div>
      </motion.div>
    </section>
  );
}
