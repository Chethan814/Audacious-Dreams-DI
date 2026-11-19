import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  headingPrefix: string;
  headingEmphasized?: string;
  headingSuffix?: string;
  intro?: string;
  theme?: "paper" | "paper-2" | "ink";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headingPrefix,
  headingEmphasized,
  headingSuffix,
  intro,
  theme = "paper",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "ink";

  return (
    <div className={`text-center mx-auto mb-14 lg:mb-[72px] ${className}`}>
      {/* Eyebrow: plain text with 24px by 2px saffron rule */}
      <div className="inline-flex items-center justify-center gap-2.5 mb-4">
        <span
          className="w-6 h-[2px] bg-accent inline-block flex-shrink-0"
          aria-hidden="true"
        />
        <span
          className={`font-mono text-xs uppercase tracking-[0.08em] font-medium ${
            isDark ? "text-accent" : "text-muted"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      {/* H2: max-w-[22ch], text-wrap balance */}
      <h2
        className={`font-editorial-h2 text-balance max-w-[22ch] mx-auto mb-5 ${
          isDark ? "text-paper" : "text-ink"
        }`}
      >
        {headingPrefix}
        {headingEmphasized && (
          <span
            className={`font-serif italic font-normal text-[1.12em] px-1 ${
              isDark ? "text-accent" : "text-ink"
            }`}
          >
            {headingEmphasized}
          </span>
        )}
        {headingSuffix}
      </h2>

      {/* Intro paragraph: max-w-[62ch], muted colour */}
      {intro && (
        <p
          className={`font-editorial-body max-w-[62ch] mx-auto text-base sm:text-lg leading-relaxed ${
            isDark ? "text-ink-muted" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
