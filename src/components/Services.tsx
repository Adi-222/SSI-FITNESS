"use client";

import {
  CircleDot,
  CloudHail,
  Hand,
  Leaf,
  Zap,
  Apple,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  CircleDot,
  CloudFog: CloudHail,
  Hand,
  Leaf,
  Zap,
  Apple,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-brand-surface/50 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Specialized Services"
          highlight="Services"
          subtitle="Beyond training — we offer a complete ecosystem of recovery and wellness services to keep your body performing at its peak."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const IconComponent = iconMap[service.icon] || CircleDot;
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div className="group relative rounded-2xl bg-brand-card p-6 md:p-8 card-glow h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors duration-300">
                    <IconComponent
                      size={28}
                      className="text-brand-orange"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mt-3">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-6 flex items-center gap-2 text-brand-orange text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
