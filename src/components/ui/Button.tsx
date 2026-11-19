import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline-light";
  asChild?: boolean;
  href?: string;
  showArrow?: boolean;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  showArrow = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 text-sm md:text-[15px] font-medium tracking-normal transition-colors duration-200 min-h-[44px] px-6 py-3 rounded-[2px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2";

  let variantClasses = "";
  if (variant === "primary") {
    // Saffron fill with ink text: > 9:1 contrast
    variantClasses =
      "bg-accent text-ink hover:bg-[#e09b00] active:bg-[#c98b00] font-semibold border border-transparent";
  } else if (variant === "secondary") {
    // 1px ink outline
    variantClasses =
      "bg-transparent text-ink border border-ink/80 hover:bg-ink/5 active:bg-ink/10";
  } else if (variant === "outline-light") {
    // 1px outline on ink dark background
    variantClasses =
      "bg-transparent text-paper border border-paper/60 hover:bg-paper/10 active:bg-paper/20";
  }

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          className="arrow-hover-nudge font-mono text-sm leading-none"
          aria-hidden="true"
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
