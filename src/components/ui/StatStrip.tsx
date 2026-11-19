import React from "react";
import { siteContent } from "@/content/site";
import { StatCounter } from "@/components/ui/StatCounter";

interface StatStripProps {
  showCountriesFootnote?: boolean;
  theme?: "paper" | "paper-2" | "ink";
  className?: string;
}

export function StatStrip({
  showCountriesFootnote = false,
  theme = "paper",
  className = "",
}: StatStripProps) {
  const stats = siteContent.hero.stats;
  const isDark = theme === "ink";

  const borderLineClass = isDark ? "border-ink-line" : "border-line";
  const numColorClass = isDark ? "text-paper" : "text-ink";
  const labelColorClass = isDark ? "text-ink-muted" : "text-muted";

  return (
    <div className={`w-full ${className}`}>
      <div className={`grid grid-cols-2 lg:grid-cols-4 border border-line ${isDark ? "bg-white/[0.02]" : "bg-paper-2/30"}`}>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-6 sm:p-8 flex flex-col justify-center ${
              idx !== 0 ? `border-t sm:border-t-0 ${borderLineClass}` : ""
            } ${
              idx % 2 === 1 ? `border-l ${borderLineClass} lg:border-l-0 lg:border-l` : ""
            } ${
              idx > 0 && idx % 2 === 0 ? `lg:border-l ${borderLineClass}` : ""
            } ${
              idx === 1 ? `lg:border-l ${borderLineClass}` : ""
            } ${
              idx === 3 ? `lg:border-l ${borderLineClass}` : ""
            }`}
          >
            <div className={`text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight ${numColorClass} mb-2`}>
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className={`font-mono text-xs uppercase tracking-[0.08em] ${labelColorClass} leading-snug`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {showCountriesFootnote && (
        <div className={`mt-4 pt-3 flex items-center gap-2 border-t ${borderLineClass}`}>
          <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" aria-hidden="true" />
          <span className={`font-mono text-xs uppercase tracking-[0.08em] ${labelColorClass}`}>
            {siteContent.hero.countriesList}
          </span>
        </div>
      )}
    </div>
  );
}
