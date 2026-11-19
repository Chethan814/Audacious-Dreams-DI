import React from "react";

interface SectionWrapperProps {
  id?: string;
  sectionNumber: string;
  sectionName: string;
  theme?: "paper" | "paper-2" | "ink";
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  sectionNumber,
  sectionName,
  theme = "paper",
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  const isDark = theme === "ink";
  const isPaper2 = theme === "paper-2";

  const bgClasses = isDark
    ? "bg-ink text-paper"
    : isPaper2
    ? "bg-paper-2 text-ink"
    : "bg-paper text-ink";

  const borderLineClass = isDark ? "border-ink-line" : "border-line";

  return (
    <section
      id={id}
      data-theme={isDark ? "dark" : "light"}
      aria-labelledby={id ? `${id}-label` : undefined}
      className={`relative w-full border-b ${borderLineClass} ${bgClasses} ${className}`}
    >
      <div className={`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Sticky left label column */}
          <div
            className={`lg:col-span-3 py-6 lg:py-16 lg:pr-8 border-b lg:border-b-0 lg:border-r ${borderLineClass}`}
          >
            <div className="sticky top-24 flex items-center gap-2">
              <span
                id={id ? `${id}-label` : undefined}
                className={`font-mono text-xs uppercase tracking-[0.08em] ${
                  isDark ? "text-accent font-medium" : "text-muted font-medium"
                }`}
              >
                {sectionNumber} / {sectionName}
              </span>
            </div>
          </div>

          {/* Main content right column */}
          <div className="lg:col-span-9 py-8 sm:py-12 lg:py-16 lg:pl-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
