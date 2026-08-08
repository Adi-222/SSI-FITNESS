"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/strength.png"
                  alt="SSI Fitness founder training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              </div>
              {/* Accent frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-orange/40 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-orange/40 rounded-br-2xl" />

              {/* Experience badge */}
              <div className="absolute bottom-6 left-6 glass rounded-xl px-5 py-4">
                <div className="font-heading text-3xl font-bold text-brand-orange">
                  10+
                </div>
                <div className="text-text-secondary text-sm">
                  Years of Excellence
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content side */}
          <div>
            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface/50 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span className="text-text-muted text-xs uppercase tracking-widest">
                  About Us
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
                The Architect of{" "}
                <span className="text-gradient-orange">Your Best Self</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mt-6">
                At SSI Fitness, we believe in a holistic approach to physical
                excellence. We&apos;re not just a gym — we&apos;re a sanctuary
                for transformation, where cutting-edge training meets
                ancient recovery techniques.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-text-secondary text-lg leading-relaxed mt-4">
                From boxing rings to steam rooms, from deadlift platforms to
                massage tables — every element of our facility is designed
                to push you beyond your limits and then restore you to peak
                performance.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: "Training Programs", value: "15+" },
                  { label: "Recovery Services", value: "6+" },
                  { label: "Expert Coaches", value: "10+" },
                  { label: "Success Rate", value: "98%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-l-2 border-brand-orange/50 pl-4"
                  >
                    <div className="font-heading text-2xl font-bold text-brand-orange">
                      {item.value}
                    </div>
                    <div className="text-text-muted text-sm mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
