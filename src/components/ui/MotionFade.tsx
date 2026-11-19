"use client";

import React, { useEffect, useRef, useState } from "react";

type SupportedTag = "div" | "section" | "article" | "aside" | "header" | "footer";

interface MotionFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  as?: SupportedTag;
}

export function MotionFade({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}: MotionFadeProps) {
  const [hasAppeared, setHasAppeared] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(() => setHasAppeared(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAppeared(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  const style: React.CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: "500ms",
    transitionTimingFunction: "cubic-bezier(0.2, 0.7, 0.2, 1)",
    transitionDelay: `${delay}ms`,
  };

  return (
    <Component
      ref={domRef}
      style={style}
      className={`${
        hasAppeared ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${className}`}
    >
      {children}
    </Component>
  );
}
