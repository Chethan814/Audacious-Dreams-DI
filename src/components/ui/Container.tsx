import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "header" | "footer" | "nav" | "main" | "section";
}

/**
 * Standard Institutional Container
 * Ensures uniform left and right edge alignment across the header,
 * hero, every section, and the footer at all screen widths.
 * Max-width: 1200px | Padding-inline: clamp(20px, 5vw, 64px)
 */
export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`w-full max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] ${className}`}
    >
      {children}
    </Component>
  );
}
