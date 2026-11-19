import React from "react";
import Image from "next/image";

export interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2";
  priority?: boolean;
  className?: string;
}

/**
 * Editorial Figure Component
 * Reusable image wrapper built with semantic figure/figcaption,
 * hairline borders, and metadata captioning. Ready for verified photography.
 */
export function Figure({
  src,
  alt,
  caption,
  credit,
  aspectRatio = "16/9",
  priority = false,
  className = "",
}: FigureProps) {
  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-[1/1]",
    "3/2": "aspect-[3/2]",
  }[aspectRatio];

  return (
    <figure className={`border border-line bg-paper-2 overflow-hidden ${className}`}>
      <div className={`relative w-full ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover grayscale contrast-[1.05]"
        />
      </div>
      {(caption || credit) && (
        <figcaption className="px-3 py-2 text-xs font-mono text-muted border-t border-line flex justify-between gap-4">
          {caption && <span>{caption}</span>}
          {credit && <span className="opacity-75 uppercase">© {credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
