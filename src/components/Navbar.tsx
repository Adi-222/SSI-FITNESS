"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-brand-border/30 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center font-heading font-black text-white text-lg">
                S
              </div>
              <div className="absolute inset-0 rounded-lg bg-brand-orange/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-heading text-2xl font-bold tracking-wider">
              <span className="text-brand-orange">SSI</span>{" "}
              <span className="text-white">FITNESS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors duration-300 uppercase tracking-wider group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="btn-primary flex items-center gap-2 !py-3 !px-6 text-sm"
            >
              <Phone size={16} />
              Book a Call
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-brand-border/30 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-text-secondary hover:text-brand-orange transition-colors font-medium uppercase tracking-wider text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
                >
                  <Phone size={16} />
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
