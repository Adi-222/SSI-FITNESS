"use client";

import { Check, X, Star } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { PRICING_PLANS } from "@/lib/data";
import Link from "next/link";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 bg-brand-dark overflow-hidden"
    >
      {/* Cinematic Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px]" />
      
      {/* Massive Hollow Background Text */}
      <div className="absolute top-1/3 left-0 w-full flex justify-center z-0 pointer-events-none select-none opacity-20">
        <span className="font-heading text-[18vw] font-black text-outline uppercase leading-none tracking-tighter whitespace-nowrap">
          INVEST
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Investment in Performance"
          highlight="Performance"
          subtitle="Choose the plan that matches your ambition. Every tier is designed to deliver real, measurable results."
        />

        <div className="mt-20 grid md:grid-cols-3 gap-8 lg:gap-10 items-center">
          {PRICING_PLANS.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 0.15}>
              <div
                className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-[#0A0A0A]/90 backdrop-blur-lg md:backdrop-blur-3xl border border-brand-orange/50 shadow-[0_15px_30px_rgba(255,107,0,0.2)] md:shadow-[0_30px_60px_rgba(255,107,0,0.2)] md:-mt-8 md:mb-8 md:py-16 z-20"
                    : "bg-[#111111]/80 backdrop-blur-md md:backdrop-blur-xl border border-white/10 shadow-xl md:shadow-2xl z-10"
                }`}
              >
                {/* Rotating glow effect for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-brand-orange/5 blur-[50px] rounded-3xl pointer-events-none animate-pulse-glow" />
                )}

                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-brand-orange text-white text-xs font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(255,107,0,0.4)]">
                      <Star size={14} fill="currentColor" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Plan name */}
                  <h3
                    className={`font-heading text-3xl font-black uppercase tracking-wide ${
                      plan.popular ? "text-brand-orange drop-shadow-md" : "text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-text-secondary text-sm mt-3 font-medium">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-8 flex items-baseline gap-1">
                    <span className="text-text-muted text-2xl font-bold">₹</span>
                    <span
                      className={`font-heading text-6xl lg:text-7xl font-black tracking-tighter ${
                        plan.popular ? "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "text-white"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-text-muted text-sm font-bold uppercase tracking-wider ml-1">
                      /{plan.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="my-10 h-px bg-white/10 w-full relative">
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50" />
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-center gap-4"
                      >
                        {feature.included ? (
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-brand-orange/20' : 'bg-white/10'}`}>
                            <Check
                              size={14}
                              className={plan.popular ? "text-brand-orange" : "text-white"}
                            />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                            <X
                              size={14}
                              className="text-white/20"
                            />
                          </div>
                        )}
                        <span
                          className={`text-sm font-medium ${
                            feature.included
                              ? "text-text-secondary"
                              : "text-text-muted line-through opacity-50"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className={`mt-10 w-full flex items-center justify-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                      plan.popular 
                        ? "bg-brand-orange text-white hover:bg-brand-orange-light shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)]" 
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
