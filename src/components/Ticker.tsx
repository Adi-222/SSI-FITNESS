"use client";

import { motion } from "framer-motion";

const SLOGANS = [
  "SWEAT NOW, SHINE LATER",
  "YOUR ONLY LIMIT IS YOU",
  "TRAIN INSANE OR REMAIN THE SAME",
  "DISCIPLINE BEATS MOTIVATION",
  "EMBRACE THE GRIND",
  "NO EXCUSES, JUST RESULTS",
];

// Duplicate enough times to ensure the marquee never runs out of content on large screens before repeating
const REPEATED_SLOGANS = [...SLOGANS, ...SLOGANS, ...SLOGANS, ...SLOGANS];

export default function Ticker() {
  return (
    <div className="relative py-4 md:py-6 bg-black overflow-hidden border-y border-brand-orange/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20">
      <div className="flex whitespace-nowrap will-change-transform">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16"
        >
          {REPEATED_SLOGANS.map((slogan, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <span className="font-heading text-2xl md:text-3xl font-black italic tracking-widest text-brand-orange uppercase drop-shadow-md">
                {slogan}
              </span>
              {/* Separator Slash */}
              <span className="font-heading text-3xl md:text-4xl font-black text-brand-orange/30 italic">
                /
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
