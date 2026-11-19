import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MotionFade } from "@/components/ui/MotionFade";

interface OrganisationProps {
  // Photo prop ready for future when real photo is supplied
  leaderPhotoUrl?: string | null;
}

export function Organisation({ leaderPhotoUrl = null }: OrganisationProps) {
  const content = siteContent.organisation;
  const photo = leaderPhotoUrl ?? content.leadership.photoUrl;

  return (
    <SectionWrapper
      id="organisation"
      sectionNumber={content.sectionNumber}
      sectionName={content.sectionName}
      theme="paper-2"
    >
      <div className="space-y-16">
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
              An ecosystem of complementary entities and project-focused initiatives advancing youth empowerment across local, national, and international spheres.
            </p>
          </div>
        </MotionFade>

        {/* Tree Diagram with Hairline Connectors */}
        <MotionFade delay={100}>
          <div className="border-t border-line pt-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-8">
              Ecosystem Architecture
            </h3>

            <div className="space-y-6">
              {/* Root Group Box */}
              <div className="border border-line bg-paper p-5 sm:p-6 max-w-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-accent rounded-none" aria-hidden="true" />
                  <h4 className="text-lg font-bold tracking-tight text-ink">
                    {content.tree.root.title}
                  </h4>
                </div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider">
                  {content.tree.root.description}
                </p>
              </div>

              {/* Connecting vertical hairline & branches */}
              <div className="relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-3 sm:before:left-4 before:top-0 before:bottom-3 before:w-[1px] before:bg-line">
                {content.tree.children.map((child, idx) => (
                  <div key={idx} className="relative flex items-start gap-3">
                    {/* Horizontal branch line */}
                    <div
                      className="absolute -left-3 sm:-left-4 top-5 w-3 sm:w-4 h-[1px] bg-line"
                      aria-hidden="true"
                    />
                    <div className="border border-line bg-paper p-4 sm:p-5 flex-1 max-w-lg hover:border-ink/50 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-accent">↳</span>
                        <h5 className="text-base font-semibold text-ink">
                          {child.title}
                        </h5>
                      </div>
                      <p className="font-mono text-xs text-muted">
                        {child.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionFade>

        {/* GUSD Callout Banner */}
        <MotionFade delay={150}>
          <div className="border border-line bg-paper p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h4 className="text-lg sm:text-xl font-semibold text-ink">
                {content.gusd.title}
              </h4>
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent border border-accent/60 px-2 py-0.5">
                {content.gusd.badge}
              </span>
            </div>
            <p className="text-base text-ink/85 leading-relaxed">
              {content.gusd.description}
            </p>
          </div>
        </MotionFade>

        {/* Leadership Card (Initials monogram block "DG", photo prop ready) */}
        <MotionFade delay={200}>
          <div className="border-t border-line pt-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-6">
              Executive Leadership
            </h3>

            <div className="border border-line bg-paper p-6 sm:p-8 max-w-2xl">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Monogram Block or Future Photo */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 border border-line bg-paper-2 flex items-center justify-center flex-shrink-0">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={content.leadership.name}
                      fill
                      className="object-cover grayscale"
                    />
                  ) : (
                    <span className="font-mono text-2xl sm:text-3xl font-bold tracking-widest text-ink select-none">
                      {content.leadership.initials}
                    </span>
                  )}
                  {/* Subtle corner mark */}
                  <span
                    className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Leadership Info */}
                <div className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                    {content.leadership.name}
                  </h4>
                  <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-medium">
                    {content.leadership.role}
                  </p>
                  <p className="font-editorial-body text-sm sm:text-base text-ink/85 pt-1 leading-relaxed">
                    {content.leadership.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionFade>
      </div>
    </SectionWrapper>
  );
}
