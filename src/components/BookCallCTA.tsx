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
      className="relative py-24 md:py-32 overflow-hidden bg-brand-dark"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>
      
      {/* Massive Background Text Watermark */}
      <div className="absolute top-1/2 left-0 w-full flex justify-center z-0 pointer-events-none select-none opacity-[0.12] overflow-hidden -translate-y-1/2">
        <span className="font-heading text-[20vw] font-black text-outline uppercase leading-none tracking-tighter whitespace-nowrap pl-4">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Info */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/5 backdrop-blur-md mb-8">
                <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
                  Get in Touch
                </span>
              </div>

              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9]">
                Start Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]">Transformation</span>
              </h2>

              <p className="text-text-secondary text-lg leading-relaxed mt-8 max-w-lg font-medium">
                Ready to change your life? Book a call with our team and
                we&apos;ll design a personalized plan tailored to your goals,
                schedule, and fitness level.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300 shadow-lg">
                    <Phone size={22} className="text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm font-medium uppercase tracking-wider mb-1">Call Us</div>
                    <div className="text-white font-bold text-lg">
                      +91 91635 69889
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300 shadow-lg">
                    <Mail size={22} className="text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm font-medium uppercase tracking-wider mb-1">Email</div>
                    <div className="text-white font-bold text-lg">
                      info@ssifitness.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300 shadow-lg">
                    <MapPin size={22} className="text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm font-medium uppercase tracking-wider mb-1">Location</div>
                    <div className="text-white font-bold leading-snug">
                      60/a Ramkrishna Pally, 60, Mahendra Banerjee Rd,<br/>
                      Behala, Kolkata, West Bengal 700060
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Pulsing glow behind form */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent blur-[50px] -z-10 animate-pulse-glow" />
              
              <form
                onSubmit={handleSubmit}
                className="bg-[#0A0A0A]/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] space-y-6 relative overflow-hidden"
              >
                {/* Glowing edge on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent" />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-bold text-white uppercase tracking-wider mb-2"
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all shadow-inner"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-bold text-white uppercase tracking-wider mb-2"
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all shadow-inner"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-bold text-white uppercase tracking-wider mb-2"
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all shadow-inner"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-plan"
                    className="block text-sm font-bold text-white uppercase tracking-wider mb-2"
                  >
                    Interested Plan
                  </label>
                  <div className="relative">
                    <select
                      id="contact-plan"
                      value={formState.plan}
                      onChange={(e) =>
                        setFormState({ ...formState, plan: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all shadow-inner appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#111111] text-white">Select a plan</option>
                      <option value="basic" className="bg-[#111111] text-white">Basic — ₹2,999/month</option>
                      <option value="elite" className="bg-[#111111] text-white">Elite — ₹5,999/month</option>
                      <option value="champion" className="bg-[#111111] text-white">Champion — ₹9,999/month</option>
                      <option value="undecided" className="bg-[#111111] text-white">Not sure yet</option>
                    </select>
                    {/* Custom caret */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="w-3 h-3 border-b-2 border-r-2 border-brand-orange transform rotate-45 -translate-y-1"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-bold text-white uppercase tracking-wider mb-2"
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all shadow-inner resize-none"
                    placeholder="Tell us about your fitness goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white hover:from-brand-orange-light hover:to-brand-orange py-5 rounded-xl font-black text-sm transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transform hover:-translate-y-1 tracking-widest uppercase flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={20} />
                      Request Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Book Your Free Consultation
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
