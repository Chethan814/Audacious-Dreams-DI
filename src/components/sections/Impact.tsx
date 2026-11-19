import React from "react";
import { siteContent } from "@/content/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MotionFade } from "@/components/ui/MotionFade";
import { StatCounter } from "@/components/ui/StatCounter";

export function Impact() {
  const content = siteContent.impact;

  return (
    <SectionWrapper
      id="impact"
      sectionNumber={content.sectionNumber}
      sectionName={content.sectionName}
      theme="paper"
    >
      <div className="space-y-16">
        {/* Section Heading & Intro */}
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
              {content.intro}
            </p>
          </div>
        </MotionFade>

        {/* 4 Headline Stats Counting Up Once on Scroll */}
        <MotionFade delay={100}>
          <div className="border border-line bg-paper-2/40 p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {content.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    idx !== 0 ? "md:border-l md:border-line md:pl-6" : ""
                  }`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-2">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionFade>

        {/* Programme-Level Reach Sharp Table */}
        <MotionFade delay={150}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                {content.tableTitle}
              </h3>
              <span className="font-mono text-[11px] text-muted hidden sm:inline">
                Scroll horizontally on mobile →
              </span>
            </div>

            {/* Table Container with Horizontal Scroll on Mobile */}
            <div className="overflow-x-auto border border-line">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-line bg-paper-2/60">
                    <th
                      scope="col"
                      className="py-3 px-4 font-mono text-xs uppercase tracking-[0.08em] text-ink font-semibold w-1/2"
                    >
                      {content.tableColumns.programme}
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-4 font-mono text-xs uppercase tracking-[0.08em] text-ink font-semibold text-right w-1/4"
                    >
                      {content.tableColumns.institutions}
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-4 font-mono text-xs uppercase tracking-[0.08em] text-ink font-semibold text-right w-1/4"
                    >
                      {content.tableColumns.participants}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line bg-paper">
                  {content.tableRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-paper-2/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 text-sm sm:text-[15px] font-medium text-ink">
                        {row.programme}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-sm text-ink/85 text-right tabular-nums">
                        {row.institutions}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-sm text-ink/85 text-right tabular-nums">
                        {row.participants}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footnote */}
            <p className="font-mono text-xs text-muted leading-relaxed pt-2">
              * {content.footnote}
            </p>
          </div>
        </MotionFade>
      </div>
    </SectionWrapper>
  );
}
