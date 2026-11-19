import React from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionFade } from "@/components/ui/MotionFade";
import { StatStrip } from "@/components/ui/StatStrip";

export function Impact() {
  const content = siteContent.impact;

  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
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
            intro={content.intro}
            theme="paper"
          />
        </MotionFade>

        <div className="space-y-16">
          {/* Reused Exact StatStrip from Hero */}
          <MotionFade delay={100}>
            <StatStrip theme="paper" />
          </MotionFade>

          {/* Programme-Level Reach Sharp Table (56px rows, hairlines only, mobile scroll wrapper) */}
          <MotionFade delay={150}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted font-medium">
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
                    <tr className="border-b border-line bg-paper-2/60 h-14">
                      <th
                        scope="col"
                        className="py-3 px-6 font-mono text-xs uppercase tracking-[0.08em] text-ink font-semibold w-1/2 align-middle"
                      >
                        {content.tableColumns.programme}
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 font-mono text-xs uppercase tracking-[0.08em] text-ink font-semibold text-right w-1/4 align-middle"
                      >
                        {content.tableColumns.institutions}
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 font-mono text-xs uppercase tracking-[0.08em] text-ink font-semibold text-right w-1/4 align-middle"
                      >
                        {content.tableColumns.participants}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line bg-paper">
                    {content.tableRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="h-14 hover:bg-paper-2/40 transition-colors"
                      >
                        <td className="py-3 px-6 text-sm sm:text-[15px] font-medium text-ink align-middle">
                          {row.programme}
                        </td>
                        <td className="py-3 px-6 font-mono text-sm text-ink/85 text-right tabular-nums align-middle">
                          {row.institutions}
                        </td>
                        <td className="py-3 px-6 font-mono text-sm text-ink/85 text-right tabular-nums align-middle">
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
      </Container>
    </section>
  );
}
