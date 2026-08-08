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
      className="relative py-24 md:py-32 bg-brand-surface/50"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-orange/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Investment in Performance"
          highlight="Performance"
          subtitle="Choose the plan that matches your ambition. Every tier is designed to deliver real, measurable results."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {PRICING_PLANS.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 0.15}>
              <div
                className={`relative rounded-2xl p-6 md:p-8 h-full ${
                  plan.popular
                    ? "bg-gradient-to-b from-brand-card to-brand-dark border-2 border-brand-orange/50 shadow-[0_0_40px_rgba(255,107,0,0.15)]"
                    : "bg-brand-card border border-brand-border"
                } ${
                  plan.popular ? "md:-mt-4 md:mb-4 md:py-12" : ""
                } transition-all duration-500 hover:border-brand-orange/30`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white text-xs font-bold uppercase tracking-wider">
                      <Star size={12} fill="currentColor" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan name */}
                <h3
                  className={`font-heading text-2xl font-bold uppercase tracking-wide ${
                    plan.popular ? "text-brand-orange" : "text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-text-muted text-sm mt-2">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-text-muted text-lg">₹</span>
                  <span
                    className={`font-heading text-5xl font-black ${
                      plan.popular
                        ? "text-gradient-orange"
                        : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-text-muted text-sm">
                    /{plan.period}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center gap-3"
                    >
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                          <Check
                            size={12}
                            className="text-brand-orange"
                          />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-brand-border/50 flex items-center justify-center flex-shrink-0">
                          <X
                            size={12}
                            className="text-text-muted"
                          />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-text-secondary"
                            : "text-text-muted line-through"
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
                  className={`mt-8 w-full flex items-center justify-center ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
