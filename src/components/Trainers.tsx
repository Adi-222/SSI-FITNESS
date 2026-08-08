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
      className="relative py-24 md:py-32 bg-brand-surface/50 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="World Class Mentorship"
          highlight="Mentorship"
          subtitle="Our coaches don't just train you — they transform you. Each one brings years of elite-level experience."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {TRAINERS.map((trainer, i) => (
            <ScrollReveal key={trainer.id} delay={i * 0.1}>
              <div className="group relative rounded-2xl bg-brand-card card-glow overflow-hidden h-full flex flex-col">
                {/* Trainer Image */}
                <div className="relative w-full aspect-[3/4] shrink-0 bg-brand-dark overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {trainer.bio}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {trainer.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2 py-1 rounded text-[10px] font-medium bg-brand-orange/10 text-brand-orange"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-card to-transparent pointer-events-none" />
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col justify-between z-10 bg-brand-card relative">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                      {trainer.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-3">
                      <Award size={16} className="text-brand-orange" />
                      <span className="text-brand-orange text-sm font-medium">
                        {trainer.specialization}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar size={16} className="text-text-muted" />
                      <span className="text-text-muted text-sm">
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
