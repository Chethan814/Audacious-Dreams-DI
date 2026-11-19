import React from "react";

interface WordmarkProps {
  variant?: "ink" | "paper";
  className?: string;
  showDot?: boolean;
}

export function Wordmark({
  variant = "ink",
  className = "",
  showDot = true,
}: WordmarkProps) {
  const isPaper = variant === "paper";

  return (
    <div className={`inline-flex flex-col select-none leading-none ${className}`}>
      <div className="flex items-center gap-1.5">
        <span
          className={`text-xl md:text-2xl font-bold tracking-tight ${
            isPaper ? "text-paper" : "text-ink"
          }`}
        >
          Audacious Dreams
        </span>
        {showDot && (
          <span
            className="w-1.5 h-1.5 rounded-none bg-accent inline-block flex-shrink-0"
            aria-hidden="true"
          />
        )}
      </div>
      <span
        className={`font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-medium mt-1 ${
          isPaper ? "text-ink-muted" : "text-muted"
        }`}
      >
        Foundation
      </span>
    </div>
  );
}
