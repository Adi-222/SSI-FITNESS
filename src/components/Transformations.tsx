"use client";

import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { TRANSFORMATIONS } from "@/lib/data";
import { TrendingUp, Timer, Trophy } from "lucide-react";

export default function Transformations() {
  return (
    <section id="transformations" className="relative py-24 md:py-32 overflow-hidden bg-brand-dark">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px]" />
      
      {/* Massive Background Watermark */}
      <div className="absolute top-1/4 right-0 z-0 pointer-events-none opacity-[0.15] select-none text-right w-full overflow-hidden">
        <span className="font-heading text-[18vw] font-black text-outline uppercase tracking-tighter whitespace-nowrap pr-8">
          RESULTS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Hall of Transformations"
          highlight="Transformations"
          subtitle="Real people, real results. Every body has a story of change — here are just a few."
        />

        <div className="mt-20 grid md:grid-cols-3 gap-8 lg:gap-10">
          {TRANSFORMATIONS.map((transform, i) => (
            <ScrollReveal key={transform.id} delay={i * 0.15}>
              <div className="rounded-3xl bg-[#0A0A0A]/80 backdrop-blur-md md:backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden group h-full hover:border-brand-orange/40 hover:shadow-[0_30px_60px_rgba(255,107,0,0.15)] transition-all duration-500 hover:-translate-y-2">
                {/* Before/After placeholder area */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden border-b border-white/5">
                  {/* Hover background glow */}
                  <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center group-hover:scale-110 transition-transform duration-700">
                      <TrendingUp
                        size={56}
                        className="text-brand-orange/40 group-hover:text-brand-orange mx-auto mb-4 transition-colors duration-500"
                      />
                      <div className="font-heading text-3xl font-black text-white/50 group-hover:text-white transition-colors duration-500 uppercase tracking-wide">
                        {transform.name}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-8 relative">
                  {/* Subtle inner glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="font-heading text-2xl font-black text-white uppercase tracking-wide group-hover:text-brand-orange transition-colors">
                    {transform.name}
                  </h3>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                        <Timer
                          size={16}
                          className="text-brand-orange"
                        />
                      </div>
                      <span className="text-white font-medium">
                        {transform.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                        <Trophy
                          size={16}
                          className="text-brand-orange"
                        />
                      </div>
                      <span className="text-white font-medium">
                        {transform.result}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-orange/10 text-brand-orange border border-brand-orange/20 inline-block group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    {transform.program}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
