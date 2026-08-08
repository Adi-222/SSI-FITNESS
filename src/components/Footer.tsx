import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";

/* Inline SVG icons for social platforms (Lucide removed brand icons) */
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-brand-surface border-t border-brand-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col items-start justify-center">
                <span className="font-heading text-lg md:text-xl font-bold tracking-tight leading-none italic uppercase text-white">
                  Strange
                </span>
                <span className="font-heading text-lg md:text-xl font-bold tracking-tight leading-none italic uppercase text-white">
                  Strength
                </span>
                <span className="font-heading text-xl md:text-2xl font-black tracking-widest leading-none italic uppercase text-[#A6191B] mt-0.5">
                  India
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-text-muted mt-0.5">
                  Powerlifting
                </span>
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mt-4">
              Premium training facility offering elite fitness programs,
              combat training, and holistic recovery services. Transform
              your body, transform your life.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: SOCIAL_LINKS.facebook, label: "Facebook" },
                { icon: YoutubeIcon, href: SOCIAL_LINKS.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-text-muted hover:text-brand-orange hover:border-brand-orange/30 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-brand-orange transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Cupping Therapy",
                "Steam Bath",
                "Deep Tissue Massage",
                "Relaxation Massage",
                "Sports Recovery",
                "Nutrition Counseling",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-text-muted text-sm hover:text-brand-orange transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-brand-orange mt-0.5 flex-shrink-0"
                />
                <span className="text-text-muted text-sm">
                  +91 91635 69889
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="text-brand-orange mt-0.5 flex-shrink-0"
                />
                <span className="text-text-muted text-sm">
                  info@ssifitness.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-brand-orange mt-0.5 flex-shrink-0"
                />
                <span className="text-text-muted text-sm">
                  60/a Ramkrishna Pally, 60, Mahendra Banerjee Rd,
                  <br />
                  Behala, Kolkata, West Bengal 700060
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 rounded-xl bg-brand-card border border-brand-border">
              <div className="text-xs text-brand-orange font-medium uppercase tracking-wider mb-2">
                Gym Timings
              </div>
              <div className="text-text-muted text-sm space-y-2">
                <div>
                  <div className="font-medium text-white">Morning Batch</div>
                  <div className="text-xs">Mon to Sat: 6:00 AM – 12:00 PM</div>
                </div>
                <div>
                  <div className="font-medium text-white">Evening Batch</div>
                  <div className="text-xs">Mon to Sat: 5:00 PM – 11:30 PM</div>
                </div>
                <div className="text-brand-orange font-medium pt-1">
                  Sunday: CLOSED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-text-muted text-sm">
            © {new Date().getFullYear()} SSI Fitness. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-text-muted text-sm">
            <Link href="#" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
