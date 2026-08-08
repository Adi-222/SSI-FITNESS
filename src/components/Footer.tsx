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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center font-heading font-black text-white text-lg">
                S
              </div>
              <span className="font-heading text-xl font-bold tracking-wider">
                <span className="text-brand-orange">SSI</span>{" "}
                <span className="text-white">FITNESS</span>
              </span>
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
                  +91 98765 43210
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
                  SSI Fitness, Main Road,
                  <br />
                  City, State 000000
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 rounded-xl bg-brand-card border border-brand-border">
              <div className="text-xs text-brand-orange font-medium uppercase tracking-wider mb-2">
                Operating Hours
              </div>
              <div className="text-text-muted text-sm space-y-1">
                <div>Mon – Sat: 5:00 AM – 11:00 PM</div>
                <div>Sunday: 6:00 AM – 8:00 PM</div>
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
