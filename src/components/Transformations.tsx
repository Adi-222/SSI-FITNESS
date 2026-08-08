"use client";

import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { TRANSFORMATIONS } from "@/lib/data";
import { TrendingUp, Timer, Trophy } from "lucide-react";

export default function Transformations() {
  return (
    <section id="transformations" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Hall of Transformations"
          highlight="Transformations"
          subtitle="Real people, real results. Every body has a story of change — here are just a few."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TRANSFORMATIONS.map((transform, i) => (
            <ScrollReveal key={transform.id} delay={i * 0.15}>
              <div className="rounded-2xl bg-brand-card card-glow overflow-hidden group h-full">
                {/* Before/After placeholder area */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-surface to-brand-card overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp
                        size={48}
                        className="text-brand-orange/40 mx-auto mb-3"
                      />
                      <div className="text-text-muted text-sm uppercase tracking-wider">
                        Transformation
                      </div>
                      <div className="font-heading text-2xl font-bold text-white mt-1">
                        {transform.name}
                      </div>
                    </div>
                  </div>
                  {/* Orange gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-card to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {transform.name}
                  </h3>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <Timer
                        size={16}
                        className="text-brand-orange flex-shrink-0"
                      />
                      <span className="text-text-secondary text-sm">
                        {transform.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy
                        size={16}
                        className="text-brand-orange flex-shrink-0"
                      />
                      <span className="text-text-secondary text-sm">
                        {transform.result}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 px-3 py-1.5 rounded-full text-xs font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20 inline-block">
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
