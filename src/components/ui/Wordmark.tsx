import React from "react";
import Image from "next/image";

interface WordmarkProps {
  variant?: "ink" | "paper";
  className?: string;
}

export function Wordmark({
  variant = "ink",
  className = "",
}: WordmarkProps) {
  const isOnDark = variant === "paper";

  return (
    <div
      className={`inline-flex items-center select-none ${
        isOnDark
          ? "bg-paper border border-ink-line px-3 py-1.5 rounded-[2px]"
          : ""
      } ${className}`}
    >
      <Image
        src="/Logo/ADF.png"
        alt="Audacious Dreams Foundation"
        width={2116}
        height={807}
        sizes="(max-width: 640px) 126px, 147px"
        priority
        style={{ width: "auto" }}
        className="h-12 sm:h-14 w-auto object-contain"
      />
    </div>
  );
}
