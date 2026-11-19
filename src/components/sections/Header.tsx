"use client";

import React, { useEffect, useState } from "react";
import { siteContent } from "@/content/site";
import { Wordmark } from "@/components/ui/Wordmark";
import { Button } from "@/components/ui/Button";

interface HeaderProps {
  onPartnerClick?: () => void;
}

export function Header({ onPartnerClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key and scroll lock for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-line shadow-[0_1px_3px_rgba(11,18,32,0.03)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="flex items-center focus-visible:outline-2 py-2"
            aria-label="Audacious Dreams Foundation - Home"
          >
            <Wordmark variant="ink" />
          </a>

          {/* Desktop Nav */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {siteContent.header.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="editorial-link-hover text-[14px] text-ink/80 hover:text-ink font-medium tracking-tight py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="primary"
              href={siteContent.header.cta.href}
              onClick={onPartnerClick}
              className="text-xs uppercase tracking-wider font-semibold py-2.5 px-5 min-h-[40px]"
            >
              {siteContent.header.cta.text}
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-3 text-ink border border-line rounded-[2px] hover:bg-paper-2 focus-visible:outline-2 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                Menu
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Sheet */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 bg-paper flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
        >
          {/* Mobile Sheet Top Bar */}
          <div className="flex items-center justify-between border-b border-line pb-6">
            <Wordmark variant="ink" />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 text-ink font-mono text-xs uppercase tracking-wider border border-line rounded-[2px] hover:bg-paper-2 focus-visible:outline-2 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close mobile navigation menu"
            >
              Close [ESC]
            </button>
          </div>

          {/* Mobile Sheet Links */}
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col py-8 space-y-4"
          >
            {siteContent.header.nav.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-baseline justify-between py-2 text-2xl font-semibold text-ink border-b border-line/50 hover:border-ink transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-muted group-hover:text-ink">
                  0{idx + 1} →
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Sheet Footer Action */}
          <div className="pt-6 border-t border-line flex flex-col gap-4">
            <Button
              variant="primary"
              href={siteContent.header.cta.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onPartnerClick) onPartnerClick();
              }}
              className="w-full text-center"
            >
              {siteContent.header.cta.text}
            </Button>
            <p className="font-mono text-xs text-muted text-center">
              {siteContent.hero.sinceLabel}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
