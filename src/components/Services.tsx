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
      className="relative py-24 md:py-32 bg-brand-dark overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-orange/8 rounded-full blur-[120px]" />
      
      {/* Massive Background Text Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-20 select-none w-full text-center">
        <span className="font-heading text-[15vw] font-black text-outline uppercase tracking-tighter whitespace-nowrap">
          RECOVERY
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Specialized Offerings"
          highlight="Services"
          subtitle="Beyond training — we offer a complete ecosystem of recovery and wellness services to keep your body performing at its peak."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-12">
          {SERVICES.map((service, i) => {
            const IconComponent = iconMap[service.icon] || CircleDot;
            // Create a staggered masonry-like layout on large screens
            const isMiddle = i % 3 === 1;
            
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div 
                  className={`group relative rounded-3xl bg-[#111111]/80 backdrop-blur-xl p-8 border border-white/5 shadow-2xl h-full transition-all duration-500 hover:scale-[1.02] hover:border-brand-orange/40 hover:shadow-[0_30px_60px_rgba(255,107,0,0.15)] overflow-hidden ${
                    isMiddle ? 'lg:translate-y-12' : ''
                  }`}
                >
                  {/* Subtle inner hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top glowing edge on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-500 shadow-inner">
                      <IconComponent
                        size={32}
                        className="text-white group-hover:text-brand-orange transition-colors duration-500"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-2xl font-black uppercase tracking-wide text-white group-hover:text-brand-orange transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed mt-4 font-medium">
                      {service.description}
                    </p>

                    {/* Learn more link */}
                    <div className="mt-8 flex items-center gap-2 text-white/50 text-sm font-bold uppercase tracking-widest group-hover:text-brand-orange group-hover:gap-4 transition-all duration-300">
                      <span>Explore</span>
                      <ArrowRight size={16} />
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
