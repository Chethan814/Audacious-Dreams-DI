"use client";

import React, { useState, useRef } from "react";
import { siteContent, ProgrammeDetail, EnquiryTypeValue } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const content = siteContent.programmes;

  const allProgrammes = [...content.flagship, ...content.secondary];

  // If externally controlled activeModalId is passed (e.g. from footer links)
  const currentActiveProgramme = activeModalId
    ? allProgrammes.find((p) => p.id === activeModalId) || null
    : selectedProgramme;

  const handleOpen = (prog: ProgrammeDetail, e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      lastTriggerRef.current = e.currentTarget as HTMLElement;
    } else {
      lastTriggerRef.current = document.activeElement as HTMLElement;
    }
    setSelectedProgramme(prog);
  };

  const handleClose = () => {
    setSelectedProgramme(null);
    if (onCloseModal) onCloseModal();
    // Return focus to the element that triggered the modal
    requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  };

  return (
    <>
      <section
        id="programmes"
        aria-labelledby="programmes-heading"
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
              intro="Structured institutional frameworks connecting academic curricula with real-world industry practice, diplomatic exposure, and global mobility."
              theme="ink"
            />
          </MotionFade>

          {/* Flagship Programme Rows: Full-width with 5/5/2 grid, no numerals */}
          <MotionFade delay={100}>
            <div className="border-t border-ink-line divide-y divide-ink-line">
              {content.flagship.map((prog) => (
                <div
                  key={prog.id}
                  onClick={(e) => handleOpen(prog, e)}
                  className="group py-7 sm:py-8 flex flex-col md:grid md:grid-cols-12 md:items-baseline gap-4 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpen(prog, e);
                    }
                  }}
                  aria-label={`View details for ${prog.title}`}
                >
                  {/* Title & Badge: 5 cols */}
                  <div className="md:col-span-5 space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-paper group-hover:text-accent transition-colors">
                        {prog.title}
                      </h3>
                      {prog.badge && (
                        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-accent border border-accent/40 px-2 py-0.5">
                          {prog.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description: 5 cols */}
                  <div className="md:col-span-5">
                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                      {prog.shortDescription}
                    </p>
                  </div>

                  {/* View Details Action: 2 cols, right-aligned */}
                  <div className="md:col-span-2 flex items-center justify-end gap-2 font-mono text-xs uppercase tracking-wider text-accent pt-2 md:pt-0">
                    <span className="editorial-link-hover">View details</span>
                    <span
                      className="arrow-hover-nudge font-mono text-sm leading-none"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </MotionFade>

          {/* Secondary Programmes: 3 Equal Columns with 1px hairlines and centred heading */}
          <MotionFade delay={150}>
            <div className="mt-16 lg:mt-20 pt-12 border-t border-ink-line">
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold text-center mb-8">
                Specialized & Complementary Initiatives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {content.secondary.map((prog) => (
                  <div
                    key={prog.id}
                    onClick={(e) => handleOpen(prog, e)}
                    className="border border-ink-line p-6 sm:p-8 flex flex-col justify-between hover:border-accent/60 transition-colors cursor-pointer bg-white/[0.01]"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpen(prog, e);
                      }
                    }}
                    aria-label={`View details for ${prog.title}`}
                  >
                    <div className="space-y-3 mb-6">
                      {prog.badge && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted border border-ink-line px-2 py-0.5 inline-block">
                          {prog.badge}
                        </span>
                      )}
                      <h4 className="text-lg sm:text-xl font-semibold text-paper group-hover:text-accent transition-colors">
                        {prog.title}
                      </h4>
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {prog.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-ink-line flex items-center justify-between font-mono text-xs uppercase tracking-wider text-accent">
                      <span>View Specifications</span>
                      <span className="arrow-hover-nudge font-mono text-sm leading-none">
                        →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionFade>
        </Container>
      </section>

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
