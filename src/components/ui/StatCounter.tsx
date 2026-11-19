"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  duration = 1200,
  className = "",
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Respect prefers-reduced-motion: set directly to target
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(() => setDisplayValue(value));
      hasAnimatedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutQuart: 1 - pow(1 - x, 4)
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOut * value);

            setDisplayValue(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  // Formatted with commas e.g. 3,000
  const formatted = displayValue.toLocaleString();

  return (
    <span ref={elementRef} className={`tabular-nums font-semibold ${className}`}>
      {formatted}
      {suffix}
    </span>
  );
}
