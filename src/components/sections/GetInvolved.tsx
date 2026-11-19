import React from "react";
import { siteContent, EnquiryTypeValue } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionFade } from "@/components/ui/MotionFade";

interface GetInvolvedProps {
  onSelectTier: (type: EnquiryTypeValue) => void;
}

export function GetInvolved({ onSelectTier }: GetInvolvedProps) {
  const content = siteContent.getInvolved;

  const handleCtaClick = (type: EnquiryTypeValue) => {
    onSelectTier(type);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="get-involved"
      aria-labelledby="get-involved-heading"
      className="relative w-full border-b border-ink-line bg-ink text-paper py-[clamp(72px,9vw,128px)]"
    >
      <Container>
        {/* Centred Header Block */}
        <MotionFade>
          <SectionHeader
            eyebrow={content.eyebrow}
            headingPrefix={content.headingPrefix}
            headingEmphasized={content.headingEmphasized}
            headingSuffix={content.headingSuffix}
            intro="Whether you are an aspiring student, a forward-looking institutional leader, or an industry partner, discover your pathway with ADF."
            theme="ink"
          />
        </MotionFade>

        {/* 2x2 Grid of Equal-Height Cells with Hairline Dividers */}
        <MotionFade delay={100}>
          <div className="border border-ink-line divide-y md:divide-y-0 md:grid md:grid-cols-2 divide-ink-line">
            {content.tiers.map((tier, idx) => {
              const isLeftColumn = idx % 2 === 0;
              const isTopRow = idx < 2;

              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors ${
                    isLeftColumn ? "md:border-r md:border-ink-line" : ""
                  } ${isTopRow ? "md:border-b md:border-ink-line" : ""}`}
                >
                  {/* Audience Label, Title & Description */}
                  <div className="space-y-4 mb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold block">
                      {tier.target}
                    </span>
                    <p className="text-base text-ink-muted leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* CTA pinned to the bottom-left with mt-auto so all four line up */}
                  <div className="mt-auto pt-6 border-t border-ink-line/60">
                    <button
                      type="button"
                      onClick={() => handleCtaClick(tier.enquiryType)}
                      className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-accent hover:text-[#ffc333] transition-colors cursor-pointer min-h-[48px] py-3 focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <span className="editorial-link-hover">{tier.ctaText}</span>
                      <span
                        className="arrow-hover-nudge font-mono text-sm leading-none"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
