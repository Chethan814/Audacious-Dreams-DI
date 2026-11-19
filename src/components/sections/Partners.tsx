import React from "react";
import { siteContent, EnquiryTypeValue } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    <section
      id="partners"
      aria-labelledby="partners-heading"
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
            intro={content.copy}
            theme="paper"
          />
        </MotionFade>

        <div className="space-y-16">
          {/* Four Equal Columns Divided by Hairlines (No numerals, no repeated tags) */}
          <MotionFade delay={100}>
            <div className="border border-line divide-y sm:divide-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:divide-x divide-line bg-paper-2/20">
              {content.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:bg-paper-2/50 transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-ink/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MotionFade>

          {/* Full-Width CTA Band with Hairline Above and Below: Text Left, Button Right */}
          <MotionFade delay={150}>
            <div className="border-y border-line py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-ink">
                  Ready to explore an institutional arrangement?
                </h3>
                <p className="font-editorial-body text-sm sm:text-base text-ink/70 mt-1">
                  We partner with accredited universities, colleges, and academic institutions worldwide.
                </p>
              </div>
              <Button
                variant="primary"
                size="hero"
                href={content.cta.href}
                onClick={handleClick}
                showArrow
                className="w-full sm:w-auto flex-shrink-0"
              >
                {content.cta.text}
              </Button>
            </div>
          </MotionFade>
        </div>
      </Container>
    </section>
  );
}
