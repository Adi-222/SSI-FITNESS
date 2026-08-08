"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function BookCallCTA() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-orange/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface/50 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span className="text-text-muted text-xs uppercase tracking-widest">
                  Get in Touch
                </span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
                Start Your{" "}
                <span className="text-gradient-orange">Transformation</span>
              </h2>

              <p className="text-text-secondary text-lg leading-relaxed mt-6">
                Ready to change your life? Book a call with our team and
                we&apos;ll design a personalized plan tailored to your goals,
                schedule, and fitness level.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm">Call Us</div>
                    <div className="text-white font-medium">
                      +91 98765 43210
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm">Email</div>
                    <div className="text-white font-medium">
                      info@ssifitness.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm">Location</div>
                    <div className="text-white font-medium">
                      SSI Fitness, Main Road, City
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 md:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-plan"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Interested Plan
                </label>
                <select
                  id="contact-plan"
                  value={formState.plan}
                  onChange={(e) =>
                    setFormState({ ...formState, plan: e.target.value })
                  }
                  className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                >
                  <option value="">Select a plan</option>
                  <option value="basic">Basic — ₹2,999/month</option>
                  <option value="elite">Elite — ₹5,999/month</option>
                  <option value="champion">Champion — ₹9,999/month</option>
                  <option value="undecided">Not sure yet</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Request Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Book Your Free Consultation
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
