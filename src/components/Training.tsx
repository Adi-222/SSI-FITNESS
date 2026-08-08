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
    <section id="training" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Curated Training Disciplines"
          highlight="Disciplines"
          subtitle="From boxing rings to yoga mats — discover the training program that ignites your inner warrior."
        />

        <div className="mt-16 space-y-6">
          {TRAINING_PROGRAMS.map((program, i) => (
            <ScrollReveal
              key={program.id}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className="group relative rounded-2xl bg-brand-card overflow-hidden card-glow">
                <div
                  className={`grid md:grid-cols-2 ${
                    i % 2 !== 0 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[16/10] md:aspect-auto ${
                      i % 2 !== 0 ? "md:col-start-2" : ""
                    }`}
                  >
                    <Image
                      src={trainingImages[program.id]}
                      alt={`${program.title} training at SSI Fitness`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-${
                        i % 2 === 0 ? "r" : "l"
                      } from-transparent to-brand-card/80 hidden md:block`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent md:hidden" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-brand-orange text-sm font-medium uppercase tracking-widest mb-2">
                      {program.subtitle}
                    </div>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                      {program.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mt-4">
                      {program.description}
                    </p>

                    {/* Features tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {program.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20"
                        >
                          {feature}
                        </span>
                      ))}
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
