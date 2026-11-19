"use client";

import React, { useState } from "react";
import { siteContent, ProgrammeDetail, EnquiryTypeValue } from "@/content/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MotionFade } from "@/components/ui/MotionFade";
import { DetailPanel } from "@/components/ui/DetailPanel";

interface ProgrammesProps {
  onSelectEnquiry: (type: EnquiryTypeValue) => void;
  activeModalId?: string | null;
  onCloseModal?: () => void;
}

export function Programmes({
  onSelectEnquiry,
  activeModalId,
  onCloseModal,
}: ProgrammesProps) {
  const [selectedProgramme, setSelectedProgramme] = useState<ProgrammeDetail | null>(null);
  const content = siteContent.programmes;

  const allProgrammes = [...content.flagship, ...content.secondary];

  // If externally controlled activeModalId is passed (e.g. from footer links)
  const currentActiveProgramme = activeModalId
    ? allProgrammes.find((p) => p.id === activeModalId) || null
    : selectedProgramme;

  const handleOpen = (prog: ProgrammeDetail) => {
    setSelectedProgramme(prog);
  };

  const handleClose = () => {
    setSelectedProgramme(null);
    if (onCloseModal) onCloseModal();
  };

  return (
    <>
      <SectionWrapper
        id="programmes"
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
                Structured institutional frameworks connecting academic curricula with real-world industry practice, diplomatic exposure, and global mobility.
              </p>
            </div>
          </MotionFade>

          {/* Four Flagship Programmes as Large Full-Width Rows */}
          <MotionFade delay={100}>
            <div className="border-t border-ink-line divide-y divide-ink-line">
              {content.flagship.map((prog) => (
                <div
                  key={prog.id}
                  onClick={() => handleOpen(prog)}
                  className="group py-8 first:pt-6 last:pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpen(prog);
                    }
                  }}
                  aria-label={`View details for ${prog.title}`}
                >
                  <div className="flex items-start gap-5 sm:gap-8 flex-1">
                    <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-accent/80 group-hover:text-accent transition-colors flex-shrink-0">
                      {prog.number}
                    </span>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-paper group-hover:text-paper/90 transition-colors">
                          {prog.title}
                        </h3>
                        {prog.badge && (
                          <span className="font-mono text-[11px] uppercase tracking-wider text-accent border border-accent/40 px-2 py-0.5">
                            {prog.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
                        {prog.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-center font-mono text-xs uppercase tracking-wider text-accent flex-shrink-0 pt-2 md:pt-0">
                    <span className="editorial-link-hover">View details</span>
                    <span className="arrow-hover-nudge font-mono text-sm leading-none" aria-hidden="true">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </MotionFade>

          {/* Three Secondary Rows Under Hairline */}
          <MotionFade delay={150}>
            <div className="border-t border-ink-line pt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-6">
                Specialized & Complementary Initiatives
              </h3>
              <div className="border-t border-ink-line divide-y divide-ink-line">
                {content.secondary.map((prog) => (
                  <div
                    key={prog.id}
                    onClick={() => handleOpen(prog)}
                    className="group py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpen(prog);
                      }
                    }}
                    aria-label={`View details for ${prog.title}`}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6 flex-1">
                      <span className="font-mono text-sm font-semibold tracking-wider text-accent/70">
                        {prog.number}
                      </span>
                      <div>
                        <h4 className="text-lg font-medium text-paper group-hover:text-accent transition-colors">
                          {prog.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-ink-muted mt-0.5">
                          {prog.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-ink-muted group-hover:text-paper transition-colors self-start md:self-center">
                      <span>Specifications</span>
                      <span className="arrow-hover-nudge font-mono text-sm leading-none">
                        →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionFade>
        </div>
      </SectionWrapper>

      {/* Right-Side Detail Slide-Over Modal */}
      <DetailPanel
        programme={currentActiveProgramme}
        isOpen={!!currentActiveProgramme}
        onClose={handleClose}
        onEnquire={onSelectEnquiry}
      />
    </>
  );
}
