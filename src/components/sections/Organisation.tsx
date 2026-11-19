import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionFade } from "@/components/ui/MotionFade";

interface OrganisationProps {
  leaderPhotoUrl?: string | null;
}

export function Organisation({ leaderPhotoUrl = null }: OrganisationProps) {
  const content = siteContent.organisation;
  const photo = leaderPhotoUrl ?? content.leadership.photoUrl;

  return (
    <section
      id="organisation"
      aria-labelledby="organisation-heading"
      className="relative w-full border-b border-line bg-paper-2 py-[clamp(72px,9vw,128px)]"
    >
      <Container>
        {/* Centred Header Block */}
        <MotionFade>
          <SectionHeader
            eyebrow={content.eyebrow}
            headingPrefix={content.headingPrefix}
            headingEmphasized={content.headingEmphasized}
            headingSuffix={content.headingSuffix}
            intro="An ecosystem of complementary entities and project-focused initiatives advancing youth empowerment across local, national, and international spheres."
            theme="paper-2"
          />
        </MotionFade>

        <div className="space-y-16 lg:space-y-20">
          {/* Centred Tree Diagram */}
          <MotionFade delay={100}>
            <div className="max-w-4xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted block text-center mb-8">
                Ecosystem Architecture
              </span>

              {/* Group Node: Centred on Top */}
              <div className="border border-line bg-paper p-5 sm:p-6 max-w-md mx-auto text-center">
                <div className="inline-flex items-center justify-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-accent rounded-none" aria-hidden="true" />
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink">
                    {content.tree.root.title}
                  </h3>
                </div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider">
                  {content.tree.root.description}
                </p>
              </div>

              {/* Connector lines on Desktop (>= 768px): Vertical drop + Horizontal rail */}
              <div className="hidden md:block relative h-12 w-full">
                {/* Vertical stem from parent */}
                <div
                  className="absolute top-0 bottom-6 left-1/2 -translate-x-1/2 w-[1px] bg-line"
                  aria-hidden="true"
                />
                {/* Horizontal rail spanning the 3 children (16.6% to 83.3%) */}
                <div
                  className="absolute bottom-6 left-[16.666%] right-[16.666%] h-[1px] bg-line"
                  aria-hidden="true"
                />
                {/* 3 vertical stems dropping into the 3 child boxes */}
                <div
                  className="absolute bottom-0 top-6 left-[16.666%] w-[1px] bg-line"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 top-6 left-1/2 -translate-x-1/2 w-[1px] bg-line"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 top-6 right-[16.666%] w-[1px] bg-line"
                  aria-hidden="true"
                />
              </div>

              {/* Mobile stem (< 768px): vertical line down */}
              <div className="block md:hidden h-8 w-[1px] bg-line mx-auto" aria-hidden="true" />

              {/* 3 Child Nodes in One Row on Desktop, Stack with Left Rail on Mobile */}
              <div className="relative pl-6 md:pl-0 space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 before:absolute before:left-2 before:top-0 before:bottom-3 before:w-[1px] before:bg-line md:before:hidden">
                {content.tree.children.map((child, idx) => {
                  const isFoundation = idx === 0;
                  return (
                    <div
                      key={idx}
                      className={`relative border bg-paper p-5 sm:p-6 flex flex-col justify-between hover:border-ink/50 transition-colors ${
                        isFoundation
                          ? "border-line border-t-2 border-t-accent"
                          : "border-line"
                      }`}
                    >
                      {/* Mobile horizontal branch marker */}
                      <div
                        className="md:hidden absolute -left-6 top-6 w-6 h-[1px] bg-line"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-ink mb-1.5">
                          {child.title}
                        </h4>
                        <p className="font-mono text-xs text-muted leading-relaxed">
                          {child.description}
                        </p>
                      </div>
                      {isFoundation && (
                        <div className="mt-4 pt-3 border-t border-line/60">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                            Primary Institutional Entity
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionFade>

          {/* Full-Width GUSD Band in Two Columns */}
          <MotionFade delay={150}>
            <div className="border border-line bg-paper p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Title and Tag Left (5 cols) */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-semibold text-ink">
                      {content.gusd.title}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent border border-accent/60 px-2 py-0.5">
                      {content.gusd.badge}
                    </span>
                  </div>
                </div>

                {/* Description and Note Right (7 cols) */}
                <div className="lg:col-span-7">
                  <p className="text-base text-ink/85 leading-relaxed">
                    {content.gusd.description}
                  </p>
                </div>
              </div>
            </div>
          </MotionFade>

          {/* Leadership: Centred Card, max-w-[760px], Monogram Left and Text Right */}
          <MotionFade delay={200}>
            <div className="max-w-[760px] mx-auto">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted block text-center mb-6">
                Executive Leadership
              </span>

              <div className="border border-line bg-paper p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
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
                  <div className="space-y-2 flex-1">
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
      </Container>
    </section>
  );
}
