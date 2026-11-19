import React from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionFade } from "@/components/ui/MotionFade";

export function WhatWeDo() {
  const content = siteContent.whatWeDo;

  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="relative w-full border-b border-line bg-paper py-[clamp(72px,9vw,128px)]"
    >
      <Container>
        {/* Centred Header Block */}
        <MotionFade>
          <SectionHeader
            eyebrow={content.eyebrow}
            headingPrefix={content.headingPrefix}
            headingEmphasized={content.headingEmphasized}
            headingSuffix={content.headingSuffix}
            intro="Six programmatic pillars designed to equip students, strengthen campus ecosystems, and forge international linkages."
            theme="paper"
          />
        </MotionFade>

        {/* 6 Full-Width Focus Area Rows (min-h-[88px], 5/5/2 grid) */}
        <MotionFade delay={100}>
          <div className="border-t border-line divide-y divide-line">
            {content.focusAreas.map((area) => (
              <details
                key={area.id}
                className="editorial-accordion group transition-colors hover:bg-paper-2/60"
              >
                <summary className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 py-6 min-h-[88px] flex items-center">
                  <div className="w-full grid grid-cols-1 md:grid-cols-12 items-baseline gap-4 md:gap-6">
                    {/* Title: 5 cols */}
                    <div className="md:col-span-5">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink group-hover:text-ink/90">
                        {area.title}
                      </h3>
                    </div>

                    {/* One-Line Description: 5 cols */}
                    <div className="md:col-span-5">
                      <p className="text-sm sm:text-base text-ink/70 leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    {/* Plus/Minus Control drawn with CSS: 2 cols, right-aligned */}
                    <div className="md:col-span-2 flex items-center justify-end gap-3 pt-2 md:pt-0">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted hidden sm:inline">
                        <span className="group-open:hidden">Expand</span>
                        <span className="hidden group-open:inline">Collapse</span>
                      </span>
                      <div className="w-8 h-8 border border-line flex items-center justify-center rounded-none group-hover:border-ink transition-colors flex-shrink-0">
                        <span
                          className="font-mono text-base font-semibold text-ink leading-none inline-block select-none group-open:hidden"
                          aria-hidden="true"
                        >
                          +
                        </span>
                        <span
                          className="font-mono text-base font-semibold text-ink leading-none hidden group-open:inline-block select-none"
                          aria-hidden="true"
                        >
                          −
                        </span>
                      </div>
                    </div>
                  </div>
                </summary>

                {/* Expanded Bullets: Two columns aligned under description */}
                <div className="pb-8 pt-2">
                  <div className="border-t border-line/60 pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="hidden md:block md:col-span-2">
                      <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted block">
                        Workstreams
                      </span>
                    </div>
                    <div className="md:col-span-10">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {area.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm sm:text-[15px] text-ink/85"
                          >
                            <span
                              className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2 rounded-none"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
