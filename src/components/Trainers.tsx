"use client";

import Image from "next/image";
import { Award, Calendar } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { TRAINERS } from "@/lib/data";

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="relative py-24 md:py-32 bg-brand-dark overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px] hidden md:block" />
      
      {/* Massive Background Text Watermark */}
      <div className="absolute top-1/3 left-0 w-full flex justify-center z-0 pointer-events-none select-none opacity-[0.12] overflow-hidden">
        <span className="font-heading text-[16vw] font-black text-outline uppercase leading-none tracking-tighter whitespace-nowrap pl-4">
          MENTORS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="World Class Mentorship"
          highlight="Mentorship"
          subtitle="Our coaches don't just train you — they transform you. Each one brings years of elite-level experience."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center pb-12">
          {TRAINERS.map((trainer, i) => (
            <ScrollReveal key={trainer.id} delay={i * 0.15}>
              <div className="group relative rounded-3xl bg-[#0A0A0A] overflow-hidden h-full flex flex-col border border-white/5 shadow-2xl hover:border-brand-orange/40 hover:shadow-[0_30px_60px_rgba(255,107,0,0.2)] transition-all duration-500">
                {/* Trainer Image */}
                <div className="relative w-full aspect-[3/4] shrink-0 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  
                  {/* Subtle inner hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Top glowing edge on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100" />

                  {/* Slide-up Bio Card on Hover */}
                  <div className="absolute inset-0 flex items-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 pb-32">
                    <div className="bg-[#111111]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl transform">
                      <p className="text-text-secondary text-sm leading-relaxed font-medium">
                        {trainer.bio}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {trainer.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange border border-brand-orange/30"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Persistent Info Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none z-10" />
                </div>

                {/* Persistent Info Footer */}
                <div className="p-8 pt-0 flex-1 flex flex-col justify-end z-20 bg-transparent relative mt-[-15%] pointer-events-none">
                  <div>
                    <h3 className="font-heading text-2xl font-black text-white uppercase tracking-wide group-hover:text-brand-orange transition-colors duration-300 drop-shadow-md">
                      {trainer.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center shadow-lg">
                        <Award size={16} className="text-brand-orange" />
                      </div>
                      <span className="text-white font-bold text-sm drop-shadow-md">
                        {trainer.specialization}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                        <Calendar size={16} className="text-white/70" />
                      </div>
                      <span className="text-white/70 text-sm font-bold drop-shadow-md">
                        {trainer.experience}
                      </span>
                    </div>
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
