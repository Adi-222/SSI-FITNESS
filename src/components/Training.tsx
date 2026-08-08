"use client";

import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { TRAINING_PROGRAMS } from "@/lib/data";

const trainingImages: Record<string, string> = {
  boxing: "/images/boxing.png",
  mma: "/images/mma.png",
  strength: "/images/strength.png",
  hiit: "/images/hiit.png",
  functional: "/images/yoga.png",
};

export default function Training() {
  return (
    <section id="training" className="relative py-24 md:py-32 overflow-hidden bg-brand-dark">
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px]" />
      
      {/* Massive Background Text Watermark */}
      <div className="absolute top-1/2 left-0 z-0 pointer-events-none opacity-[0.15] select-none w-full text-left -translate-y-1/2 overflow-hidden">
        <span className="font-heading text-[20vw] font-black text-outline uppercase tracking-tighter whitespace-nowrap pl-8">
          DISCIPLINE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Curated Training Disciplines"
          highlight="Disciplines"
          subtitle="From boxing rings to yoga mats — discover the training program that ignites your inner warrior."
        />

        <div className="mt-20 space-y-24 md:space-y-32">
          {TRAINING_PROGRAMS.map((program, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal
                key={program.id}
                direction="up"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center relative group`}>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-7/12 relative z-0">
                    <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={trainingImages[program.id]}
                        alt={`${program.title} training at SSI Fitness`}
                        fill
                        className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                      {/* Orange edge glow */}
                      <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay`} />
                    </div>
                  </div>

                  {/* Content Side (Overlapping Glass Card) */}
                  <div className={`w-full lg:w-6/12 mt-[-10%] sm:mt-[-5%] lg:mt-0 ${isEven ? 'lg:-ml-[10%]' : 'lg:-mr-[10%]'} relative z-10`}>
                    <div className="bg-[#0A0A0A]/80 backdrop-blur-2xl p-8 sm:p-12 lg:p-14 rounded-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.7)] relative overflow-hidden group-hover:border-brand-orange/30 transition-colors duration-500">
                      
                      {/* Subtle Inner Glow */}
                      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 bg-brand-orange/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        <div className="text-brand-orange text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span className="w-8 h-px bg-brand-orange/50"></span>
                          {program.subtitle}
                        </div>
                        <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white group-hover:text-brand-orange transition-colors duration-500">
                          {program.title}
                        </h3>
                        <p className="text-text-secondary text-lg leading-relaxed mt-6 font-medium">
                          {program.description}
                        </p>

                        {/* Features tags */}
                        <div className="mt-8 flex flex-wrap gap-3">
                          {program.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-white/70 border border-white/10 group-hover:border-brand-orange/30 group-hover:text-white transition-colors duration-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
