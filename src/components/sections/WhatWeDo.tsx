import React from "react";
import { siteContent } from "@/content/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MotionFade } from "@/components/ui/MotionFade";

export function WhatWeDo() {
  const content = siteContent.whatWeDo;

  return (
    <SectionWrapper
      id="what-we-do"
      sectionNumber={content.sectionNumber}
      sectionName={content.sectionName}
      theme="paper"
    >
      <div className="space-y-12">
        {/* Section Heading */}
        <MotionFade>
          <div className="max-w-3xl">
            <h2 className="font-editorial-h2 text-ink mb-4">
              {content.headingPrefix}
              <span className="font-serif italic font-normal text-[1.1em] px-0.5">
                {content.headingEmphasized}
              </span>
              {content.headingSuffix}
            </h2>
            <p className="font-editorial-body text-ink/80 text-pretty">
              Six programmatic pillars designed to equip students, strengthen campus ecosystems, and forge international linkages.
            </p>
          </div>
        </MotionFade>

        {/* 6 Accordion Rows */}
        <MotionFade delay={100}>
          <div className="border-t border-line divide-y divide-line">
            {content.focusAreas.map((area) => (
              <details
                key={area.id}
                className="editorial-accordion group py-6 first:pt-6 last:pb-6 transition-colors hover:bg-paper-2/30"
              >
                <summary className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    {/* Numeral and Title */}
                    <div className="flex items-baseline gap-4 sm:gap-6 flex-1">
                      <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-ink/40 group-open:text-accent transition-colors flex-shrink-0">
                        {area.number}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink group-hover:text-ink/90">
                          {area.title}
                        </h3>
                        <p className="text-sm sm:text-base text-ink/70 mt-1 line-clamp-2 md:line-clamp-none">
                          {area.description}
                        </p>
                      </div>
                    </div>

                    {/* Expand Control Indicator */}
                    <div className="flex items-center gap-3 self-end md:self-center flex-shrink-0 pt-2 md:pt-0">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted hidden sm:inline">
                        <span className="group-open:hidden">Expand</span>
                        <span className="hidden group-open:inline">Collapse</span>
                      </span>
                      <div className="w-8 h-8 border border-line flex items-center justify-center rounded-none group-hover:border-ink transition-colors">
                        <span
                          className="accordion-icon font-mono text-base font-semibold text-ink leading-none inline-block select-none"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </summary>

                {/* Expanded Bullet Content */}
                <div className="pt-6 pb-2 pl-0 sm:pl-12 md:pl-14">
                  <div className="border-t border-line/60 pt-4 mt-2">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-3 block">
                      Core Initiatives & Workstreams
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {area.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm sm:text-[15px] text-ink/85"
                        >
                          <span
                            className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-2"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </MotionFade>
      </div>
    </SectionWrapper>
  );
}
