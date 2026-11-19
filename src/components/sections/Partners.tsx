import React from "react";
import { siteContent, EnquiryTypeValue } from "@/content/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MotionFade } from "@/components/ui/MotionFade";
import { Button } from "@/components/ui/Button";

interface PartnersProps {
  onPartnerClick?: (type: EnquiryTypeValue) => void;
}

export function Partners({ onPartnerClick }: PartnersProps) {
  const content = siteContent.partners;

  const handleClick = () => {
    if (onPartnerClick) {
      onPartnerClick("School, college or university");
    }
  };

  return (
    <SectionWrapper
      id="partners"
      sectionNumber={content.sectionNumber}
      sectionName={content.sectionName}
      theme="paper"
    >
      <div className="space-y-16">
        {/* Section Heading & Narrative */}
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
              {content.copy}
            </p>
          </div>
        </MotionFade>

        {/* Four Columns Divided by Hairlines */}
        <MotionFade delay={100}>
          <div className="border border-line divide-y md:divide-y-0 md:divide-x divide-line grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-paper-2/20">
            {content.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:bg-paper-2/50 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold block mb-3">
                    0{idx + 1} / Pillar
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-ink mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-line/60">
                  <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
                    Institutional Collaboration
                  </span>
                </div>
              </div>
            ))}
          </div>
        </MotionFade>

        {/* Section CTA */}
        <MotionFade delay={150}>
          <div className="border-t border-line pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Ready to explore an institutional arrangement?
              </h3>
              <p className="font-editorial-body text-sm text-ink/70 mt-0.5">
                We partner with accredited universities, colleges, and academic institutions worldwide.
              </p>
            </div>
            <Button
              variant="primary"
              href={content.cta.href}
              onClick={handleClick}
              showArrow
            >
              {content.cta.text}
            </Button>
          </div>
        </MotionFade>
      </div>
    </SectionWrapper>
  );
}
