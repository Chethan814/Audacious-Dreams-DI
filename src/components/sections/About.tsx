import React from "react";
import { siteContent } from "@/content/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MotionFade } from "@/components/ui/MotionFade";

export function About() {
  const content = siteContent.about;

  return (
    <SectionWrapper
      id="about"
      sectionNumber={content.sectionNumber}
      sectionName={content.sectionName}
      theme="paper"
    >
      <div className="space-y-16 lg:space-y-20">
        {/* Heading & Core Narrative */}
        <MotionFade>
          <div className="max-w-3xl">
            <h2 className="font-editorial-h2 text-ink mb-6">
              {content.headingPrefix}
              <span className="font-serif italic font-normal text-[1.1em] px-0.5">
                {content.headingEmphasized}
              </span>
              {content.headingSuffix}
            </h2>
            <p className="font-editorial-body text-ink/85 leading-relaxed text-pretty">
              {content.copy}
            </p>
          </div>
        </MotionFade>

        {/* Two-point Vertical Timeline Only */}
        <MotionFade delay={100}>
          <div className="border-t border-line pt-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-6">
              Institutional Evolution
            </h3>
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
                    <span className="text-base text-ink/80 mt-0.5 block">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionFade>

        {/* Vision and Mission Side-by-Side */}
        <MotionFade delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-line pt-10">
            <div className="border border-line bg-paper-2/40 p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold block mb-3">
                {content.vision.label}
              </span>
              <p className="text-lg font-medium text-ink leading-relaxed">
                &ldquo;{content.vision.text}&rdquo;
              </p>
            </div>
            <div className="border border-line bg-paper-2/40 p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold block mb-3">
                {content.mission.label}
              </span>
              <p className="text-lg font-medium text-ink leading-relaxed">
                &ldquo;{content.mission.text}&rdquo;
              </p>
            </div>
          </div>
        </MotionFade>

        {/* Our Approach: Horizontal 5-Step Line (Stacks on mobile) with thin connecting rule and saffron nodes */}
        <MotionFade delay={200}>
          <div className="border-t border-line pt-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-8">
              {content.approach.title}
            </h3>

            {/* Steps Container */}
            <div className="relative">
              {/* Horizontal Connecting Rule (desktop only) */}
              <div
                className="hidden lg:block absolute top-[13px] left-0 right-0 h-[1px] bg-line z-0"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                {content.approach.steps.map((step) => (
                  <div key={step.step} className="flex flex-col relative">
                    {/* Node with Step Number and Saffron Accent */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-paper border border-line flex items-center justify-center font-mono text-xs font-semibold text-ink flex-shrink-0 relative">
                        <span className="w-1.5 h-1.5 bg-accent absolute -top-1 -right-1" aria-hidden="true" />
                        {step.step}
                      </div>
                      <span className="font-semibold text-ink text-base">
                        {step.title}
                      </span>
                    </div>

                    <p className="text-sm text-ink/75 leading-relaxed pr-2">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionFade>
      </div>
    </SectionWrapper>
  );
}
