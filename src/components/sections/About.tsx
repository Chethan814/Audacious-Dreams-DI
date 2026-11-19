import React from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionFade } from "@/components/ui/MotionFade";

export function About() {
  const content = siteContent.about;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
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
            theme="paper"
          />
        </MotionFade>

        <div className="space-y-16 lg:space-y-20">
          {/* Row 1: Two Equal Columns (Narrative Left, Timeline Right) */}
          <MotionFade delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: Narrative */}
              <div>
                <p className="font-editorial-body text-ink/85 text-base sm:text-lg leading-relaxed max-w-[60ch]">
                  {content.copy}
                </p>
              </div>

              {/* Right Column: 2007 and 2012 Timeline Aligned to Top of Paragraph */}
              <div className="border border-line bg-paper-2/40 p-6 sm:p-8">
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted block mb-6">
                  Institutional Evolution
                </span>
                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-line">
                  {content.timeline.map((item, idx) => (
                    <div key={idx} className="relative flex items-start gap-4">
                      {/* Timeline Node */}
                      <span
                        className="absolute -left-[19px] top-1.5 w-2.5 h-2.5 bg-paper border border-ink/40 flex items-center justify-center rounded-none"
                        aria-hidden="true"
                      >
                        <span className="w-1 h-1 bg-accent rounded-none" />
                      </span>
                      <div>
                        <span className="font-mono text-sm font-semibold tracking-wider text-ink block">
                          {item.year}
                        </span>
                        <span className="text-sm sm:text-base text-ink/80 mt-0.5 block leading-normal">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionFade>

          {/* Row 2: Vision and Mission as Two Equal-Height Cards (1px border, 40px padding) */}
          <MotionFade delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-line bg-paper-2/40 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold block mb-4">
                    {content.vision.label}
                  </span>
                  <p className="text-lg sm:text-xl font-medium text-ink leading-relaxed">
                    &ldquo;{content.vision.text}&rdquo;
                  </p>
                </div>
              </div>

              <div className="border border-line bg-paper-2/40 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold block mb-4">
                    {content.mission.label}
                  </span>
                  <p className="text-lg sm:text-xl font-medium text-ink leading-relaxed">
                    &ldquo;{content.mission.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </MotionFade>

          {/* Row 3: Approach as Five Equal Columns Joined by One Thin Rule with Saffron Nodes */}
          <MotionFade delay={200}>
            <div className="border-t border-line pt-12">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted block mb-8 text-center sm:text-left">
                {content.approach.title}
              </span>

              {/* Steps Container: Joined by thin rule on >= 900px, stacks vertically below */}
              <div className="relative">
                {/* Horizontal Connecting Rule (desktop only) */}
                <div
                  className="hidden min-[900px]:block absolute top-[13px] left-0 right-0 h-[1px] bg-line z-0"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 min-[900px]:grid-cols-5 gap-8 min-[900px]:gap-4 relative z-10">
                  {content.approach.steps.map((step) => (
                    <div key={step.step} className="flex flex-col relative">
                      {/* Step Node with Number and Saffron Accent */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-paper border border-line flex items-center justify-center font-mono text-xs font-semibold text-ink flex-shrink-0 relative">
                          <span className="w-1.5 h-1.5 bg-accent absolute -top-1 -right-1" aria-hidden="true" />
                          {step.step}
                        </div>
                        <span className="font-semibold text-ink text-base">
                          {step.title}
                        </span>
                      </div>

                      <p className="text-sm text-ink/75 leading-relaxed min-[900px]:pr-2">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionFade>
        </div>
      </Container>
    </section>
  );
}
