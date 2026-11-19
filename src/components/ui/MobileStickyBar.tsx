"use client";

import React, { useEffect, useState } from "react";
import { siteContent } from "@/content/site";

interface MobileStickyBarProps {
  onPartnerClick?: () => void;
}

export function MobileStickyBar({ onPartnerClick }: MobileStickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const contactEl = document.getElementById("contact");

    if (!heroEl) return;

    let heroIntersecting = true;
    let contactIntersecting = false;

    const updateVisibility = () => {
      // Visible only after hero has left the viewport AND contact is not in view
      setIsVisible(!heroIntersecting && !contactIntersecting);
    };

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          heroIntersecting = entry.isIntersecting;
          updateVisibility();
        });
      },
      { threshold: 0.1 }
    );

    let contactObserver: IntersectionObserver | null = null;
    if (contactEl) {
      contactObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            contactIntersecting = entry.isIntersecting;
            updateVisibility();
          });
        },
        { threshold: 0.1 }
      );
      contactObserver.observe(contactEl);
    }

    heroObserver.observe(heroEl);

    return () => {
      heroObserver.disconnect();
      if (contactObserver) contactObserver.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onPartnerClick) {
      onPartnerClick();
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Quick Action"
      className="fixed bottom-0 left-0 right-0 z-40 bg-paper/95 backdrop-blur-md border-t border-line p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] md:hidden transition-all duration-300"
    >
      <a
        href="#contact"
        onClick={handleClick}
        className="w-full h-14 bg-accent text-ink font-semibold text-base flex items-center justify-center gap-2 rounded-[2px] transition-colors hover:bg-[#e09b00] active:bg-[#c98b00] focus-visible:outline-2"
      >
        <span>{siteContent.header.cta.text}</span>
        <span className="font-mono text-base leading-none">→</span>
      </a>
    </div>
  );
}
