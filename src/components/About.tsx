"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-brand-dark">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Image Side - Takes up 7/12 width */}
          <div className="w-full lg:w-7/12 relative z-0">
            <ScrollReveal direction="left">
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/strength.png"
                  alt="SSI Fitness founder training"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/80 via-transparent to-transparent" />
                
                {/* Experience badge */}
                <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 glass rounded-2xl px-6 py-4 border border-white/10 shadow-xl backdrop-blur-md">
                  <div className="font-heading text-4xl lg:text-5xl font-black text-brand-orange drop-shadow-md">
                    10+
                  </div>
                  <div className="text-text-primary font-bold text-sm uppercase tracking-wider mt-1">
                    Years of
                    <br /> Excellence
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Content Side - Overlapping Glass Card */}
          <div className="w-full lg:w-6/12 mt-[-15%] sm:mt-[-10%] lg:mt-0 lg:-ml-[8%] relative z-10">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-[#0A0A0A]/80 md:bg-[#0A0A0A]/70 backdrop-blur-md md:backdrop-blur-2xl p-8 sm:p-12 lg:p-16 rounded-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
                {/* Subtle Inner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-[60px]" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-6">
                    <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
                      The SSI Philosophy
                    </span>
                  </div>

                  <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95]">
                    The Architect of{" "}
                    <span className="text-brand-orange drop-shadow-[0_0_15px_rgba(255,107,0,0.3)] block mt-2">
                      Your Best Self
                    </span>
                  </h2>

                  <p className="text-text-secondary text-lg leading-relaxed mt-8 font-medium">
                    At SSI Fitness, we believe in a holistic approach to physical
                    excellence. We&apos;re not just a gym — we&apos;re a sanctuary
                    for transformation, where cutting-edge training meets
                    ancient recovery techniques.
                  </p>

                  <p className="text-text-muted text-base leading-relaxed mt-4">
                    From boxing rings to steam rooms, from deadlift platforms to
                    massage tables — every element of our facility is meticulously designed
                    to push you beyond your limits and restore you to peak performance.
                  </p>

                  <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                    {[
                      { label: "Programs", value: "15+" },
                      { label: "Recovery", value: "6+" },
                      { label: "Coaches", value: "10+" },
                      { label: "Success", value: "98%" },
                    ].map((item) => (
                      <div key={item.label} className="group">
                        <div className="font-heading text-3xl font-black text-white group-hover:text-brand-orange transition-colors">
                          {item.value}
                        </div>
                        <div className="text-text-muted text-xs font-bold uppercase tracking-widest mt-1">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
