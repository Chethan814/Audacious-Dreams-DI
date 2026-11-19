"use client";

import React, { useEffect, useState } from "react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StatStrip } from "@/components/ui/StatStrip";

interface HeroProps {
  onPartnerClick?: () => void;
}

export function Hero({ onPartnerClick }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => {
      setIsReducedMotion(isReduced);
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const shouldAnimate = mounted && !isReducedMotion;

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative w-full border-b border-line bg-paper overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 hero-hairline-grid"
    >
      <Container>
        {/* Subtle Institutional Eyebrow */}
        <div className="mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2.5 border border-line bg-paper/90 px-3 py-1 rounded-[2px]">
            <span className="w-1.5 h-1.5 bg-accent rounded-none flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted font-medium">
              {siteContent.hero.sinceLabel}
            </span>
          </div>
        </div>

        {/* H1: Widened to full container, exactly 3 lines at >= 1024px */}
        <h1
          id="hero-heading"
          className="w-full text-ink font-semibold tracking-[-0.03em] leading-[1.03] mb-5 sm:mb-6 text-[clamp(2.25rem,min(5.6vw,8.5vh),4.5rem)]"
        >
          {/* Line 1 */}
          <span className="block overflow-hidden pb-1">
            <span
              className={`block transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                shouldAnimate ? "translate-y-0" : isReducedMotion ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {siteContent.hero.headline.line1}
            </span>
          </span>

          {/* Line 2 with Instrument Serif italic emphasis */}
          <span className="block overflow-hidden pb-1">
            <span
              style={{ transitionDelay: isReducedMotion ? "0ms" : "90ms" }}
              className={`block transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                shouldAnimate ? "translate-y-0" : isReducedMotion ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {siteContent.hero.headline.line2Prefix}
              <span className="font-serif italic font-normal text-[1.14em] tracking-normal px-1">
                {siteContent.hero.headline.line2Emphasized}
              </span>
              {siteContent.hero.headline.line2Suffix}
            </span>
          </span>

          {/* Line 3 */}
          <span className="block overflow-hidden pb-1">
            <span
              style={{ transitionDelay: isReducedMotion ? "0ms" : "180ms" }}
              className={`block transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                shouldAnimate ? "translate-y-0" : isReducedMotion ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {siteContent.hero.headline.line3}
            </span>
          </span>
        </h1>

        {/* Sub text: max 2 lines on desktop */}
        <div
          style={{ transitionDelay: isReducedMotion ? "0ms" : "360ms" }}
          className={`w-full max-w-[62ch] transition-opacity duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
            shouldAnimate || isReducedMotion ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-editorial-body text-ink/80 text-base sm:text-lg leading-relaxed text-pretty">
            {siteContent.hero.subtext}
          </p>

          {/* Buttons directly below with 32px gap */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Button
              variant="primary"
              size="hero"
              href={siteContent.hero.buttons.primary.href}
              onClick={onPartnerClick}
              showArrow
              className="w-full sm:w-auto"
            >
              {siteContent.hero.buttons.primary.text}
            </Button>
            <Button
              variant="secondary"
              size="hero"
              href={siteContent.hero.buttons.secondary.href}
              className="w-full sm:w-auto"
            >
              {siteContent.hero.buttons.secondary.text}
            </Button>
          </div>
        </div>

        {/* Four-Column Stat Strip: stays below the buttons (allowed to sit under fold) */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 border-t border-line">
          <StatStrip showCountriesFootnote theme="paper" />
        </div>
      </Container>
    </section>
  );
}
