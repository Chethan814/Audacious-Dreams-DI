import React from "react";
import { siteContent, EnquiryTypeValue } from "@/content/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
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
    <SectionWrapper
      id="get-involved"
      sectionNumber={content.sectionNumber}
      sectionName={content.sectionName}
      theme="ink"
    >
      <div className="space-y-16">
        {/* Section Heading */}
        <MotionFade>
          <div className="max-w-3xl">
            <h2 className="font-editorial-h2 text-paper mb-4">
              {content.headingPrefix}
              <span className="font-serif italic font-normal text-[1.1em] text-accent px-0.5">
                {content.headingEmphasized}
              </span>
              {content.headingSuffix}
            </h2>
            <p className="font-editorial-body text-ink-muted text-pretty">
              Whether you are an aspiring student, a forward-looking institutional leader, or an industry partner, discover your pathway with ADF.
            </p>
          </div>
        </MotionFade>

        {/* 2x2 Grid with Hairlines */}
        <MotionFade delay={100}>
          <div className="border border-ink-line divide-y sm:divide-y-0 sm:grid sm:grid-cols-2 divide-ink-line">
            {content.tiers.map((tier, idx) => {
              // Apply border right to left column and border bottom to top row
              const isLeftColumn = idx % 2 === 0;
              const isTopRow = idx < 2;

              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors ${
                    isLeftColumn ? "sm:border-r sm:border-ink-line" : ""
                  } ${isTopRow ? "sm:border-b sm:border-ink-line" : ""}`}
                >
                  <div className="space-y-4 mb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold block">
                      Pathway 0{idx + 1}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-tight text-paper">
                      {tier.target}
                    </h3>
                    <p className="text-base text-ink-muted leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-ink-line">
                    <button
                      type="button"
                      onClick={() => handleCtaClick(tier.enquiryType)}
                      className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-accent hover:text-[#ffc333] transition-colors cursor-pointer py-2 focus-visible:outline-2 focus-visible:outline-offset-2"
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
      </div>
    </SectionWrapper>
  );
}
