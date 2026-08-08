"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix,
  label,
  duration = 2,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center w-full flex flex-col items-center justify-center"
    >
      <div className="font-heading text-4xl md:text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] tracking-tighter">
        {count}
        <span className="text-brand-orange">{suffix}</span>
      </div>
      <div className="text-brand-orange/80 text-xs md:text-sm mt-3 font-bold uppercase tracking-widest max-w-[150px] leading-snug">
        {label}
      </div>
    </motion.div>
  );
}
