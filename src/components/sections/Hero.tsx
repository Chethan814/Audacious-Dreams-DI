"use client";

import React, { useEffect, useState } from "react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";

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
    <section className="relative w-full border-b border-line bg-paper overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 hero-hairline-grid">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle Institutional Tag */}
        <div className="mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2 border border-line bg-paper/80 px-3 py-1 rounded-[2px]">
            <span className="w-1.5 h-1.5 bg-accent rounded-none flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted font-medium">
              {siteContent.hero.sinceLabel}
            </span>
          </div>
        </div>

        {/* H1 with 3 Stacked Lines and Masked Upward Motion */}
        <h1 className="font-editorial-h1 text-ink tracking-tight mb-8">
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
              <span className="font-serif italic font-normal text-[1.12em] tracking-normal px-1">
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

        {/* Sub text and CTA Buttons (fade in after heading reveal) */}
        <div
          style={{ transitionDelay: isReducedMotion ? "0ms" : "360ms" }}
          className={`max-w-3xl transition-opacity duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
            shouldAnimate || isReducedMotion ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-editorial-body text-ink/80 mb-10 text-pretty">
            {siteContent.hero.subtext}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Button
              variant="primary"
              href={siteContent.hero.buttons.primary.href}
              onClick={onPartnerClick}
              showArrow
            >
              {siteContent.hero.buttons.primary.text}
            </Button>
            <Button
              variant="secondary"
              href={siteContent.hero.buttons.secondary.href}
            >
              {siteContent.hero.buttons.secondary.text}
            </Button>
          </div>
        </div>

        {/* Four-Column Stat Strip */}
        <div className="border-t border-line pt-8 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {siteContent.hero.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx !== 0 ? "md:border-l md:border-line md:pl-6 lg:pl-8" : ""
                } ${idx % 2 === 1 ? "border-l border-line pl-6 md:border-l-0 md:pl-0 md:border-l md:border-line md:pl-6" : ""}`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-1.5">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Geographic representation footnote line */}
          <div className="mt-8 pt-4 border-t border-line/60 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
              {siteContent.hero.countriesList}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
