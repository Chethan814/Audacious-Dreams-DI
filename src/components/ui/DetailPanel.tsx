"use client";

import React, { useEffect, useRef } from "react";
import { ProgrammeDetail, EnquiryTypeValue } from "@/content/site";

interface DetailPanelProps {
  programme: ProgrammeDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (enquiryType: EnquiryTypeValue) => void;
}

export function DetailPanel({
  programme,
  isOpen,
  onClose,
  onEnquire,
}: DetailPanelProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      previousActiveElementRef.current = document.activeElement as HTMLElement | null;
      if (!dialog.open) {
        dialog.showModal();
        document.body.style.overflow = "hidden";
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = "";
      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus();
      }
    }

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!programme) return null;

  const handleCtaClick = () => {
    onClose();
    onEnquire(programme.enquiryType);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="editorial-dialog fixed inset-0 z-50 m-0 w-full h-full bg-transparent p-0 overflow-hidden"
      onClick={(e) => {
        // Close when clicking the backdrop
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
    >
      <div className="fixed inset-0 flex justify-end pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-2xl h-full bg-ink text-paper border-l border-ink-line flex flex-col transform transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-labelledby="dialog-title"
          aria-modal="true"
        >
          {/* Header Bar */}
          <div className="px-6 py-5 border-b border-ink-line flex items-center justify-between bg-ink/95 sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-accent inline-block flex-shrink-0 rounded-none" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold">
                Programme Specification
              </span>
              {programme.badge && (
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted border border-ink-line px-2 py-0.5">
                  {programme.badge}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-ink-muted hover:text-paper font-mono text-xs uppercase tracking-wider px-2 py-1 border border-ink-line hover:border-paper transition-colors focus-visible:outline-2"
              aria-label="Close programme details modal"
            >
              Close [ESC]
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
            <div>
              <h3
                id="dialog-title"
                className="text-2xl md:text-3xl font-semibold tracking-tight text-paper mb-2"
              >
                {programme.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
                {programme.subtitle}
              </p>
            </div>

            <div className="border-t border-ink-line pt-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
                Overview
              </h4>
              <p className="text-paper/90 text-base leading-relaxed">
                {programme.fullOverview}
              </p>
            </div>

            {/* Components Table (GIP) */}
            {programme.componentsTable && (
              <div className="border-t border-ink-line pt-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-4">
                  Programme Components & Exposure
                </h4>
                <div className="border border-ink-line">
                  <div className="grid grid-cols-1 md:grid-cols-12 bg-white/[0.03] border-b border-ink-line px-4 py-2 font-mono text-xs uppercase tracking-wider text-accent font-medium">
                    <div className="md:col-span-4">Component</div>
                    <div className="md:col-span-8">Areas of Exposure</div>
                  </div>
                  {programme.componentsTable.map((row, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 md:grid-cols-12 border-b border-ink-line last:border-b-0 px-4 py-3 text-sm gap-2"
                    >
                      <div className="md:col-span-4 font-semibold text-paper">
                        {row.component}
                      </div>
                      <div className="md:col-span-8 text-ink-muted leading-relaxed">
                        {row.exposure}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What Participants Gain (GIP) */}
            {programme.gains && (
              <div className="border-t border-ink-line pt-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
                  What Participants Gain
                </h4>
                <ul className="space-y-2.5">
                  {programme.gains.map((gain, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-paper/90">
                      <span className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-1.5 rounded-none" aria-hidden="true" />
                      <span>{gain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Offerings (GIIP) */}
            {programme.offerings && (
              <div className="border-t border-ink-line pt-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
                  What GIIP Offers
                </h4>
                <ul className="space-y-2.5">
                  {programme.offerings.map((offering, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-paper/90">
                      <span className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-1.5 rounded-none" aria-hidden="true" />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Delivery Models (GIIP) */}
            {programme.deliveryModels && (
              <div className="border-t border-ink-line pt-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-4">
                  Institutional Delivery Models
                </h4>
                <div className="space-y-3">
                  {programme.deliveryModels.map((model, idx) => (
                    <div
                      key={idx}
                      className="border border-ink-line p-4 bg-white/[0.02]"
                    >
                      <h5 className="font-semibold text-paper text-sm mb-1.5">
                        {model.name}
                      </h5>
                      <p className="text-ink-muted text-xs leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Global Learning Pathways (GIIP) */}
            {programme.learningPathways && (
              <div className="border-t border-ink-line pt-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
                  Global Learning Pathways
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {programme.learningPathways.map((path, idx) => (
                    <div
                      key={idx}
                      className="border border-ink-line p-3 bg-white/[0.02]"
                    >
                      <div className="font-mono text-xs text-accent uppercase font-medium">
                        {path.destination}
                      </div>
                      <div className="text-xs text-paper/80 mt-1">
                        {path.focus}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Focus Areas (GCIP, Internships, Leadership Meetings) */}
            {programme.focusAreas && (
              <div className="border-t border-ink-line pt-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
                  Core Focus Areas
                </h4>
                <ul className="space-y-2.5">
                  {programme.focusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-paper/90">
                      <span className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-1.5 rounded-none" aria-hidden="true" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* UNICEF Skill Development Highlights */}
            {programme.unicefHighlights && (
              <div className="border-t border-ink-line pt-6 space-y-4">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
                    Key Learning Areas
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {programme.unicefHighlights.areas.map((area, idx) => (
                      <li key={idx} className="border border-ink-line px-3 py-2 text-xs text-paper">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-ink-line p-4 bg-white/[0.02]">
                  <h5 className="font-mono text-xs uppercase tracking-[0.08em] text-accent mb-1.5">
                    ADF Facilitation Role
                  </h5>
                  <p className="text-xs text-paper/90 leading-relaxed">
                    {programme.unicefHighlights.role}
                  </p>
                </div>
                <div className="font-mono text-[11px] text-ink-muted italic border-l-2 border-accent pl-3">
                  {programme.unicefHighlights.disclaimer}
                </div>
              </div>
            )}

            {/* GIIP-LITE 5 Stages */}
            {programme.giipLiteStages && (
              <div className="border-t border-ink-line pt-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
                  UN SDG Action-Based Project Stages
                </h4>
                <div className="space-y-2.5">
                  {programme.giipLiteStages.map((stg, idx) => (
                    <div
                      key={idx}
                      className="border border-ink-line p-3 bg-white/[0.02]"
                    >
                      <div className="font-mono text-xs text-accent font-semibold">
                        {stg.stage}
                      </div>
                      <div className="text-xs text-paper/80 mt-1 leading-relaxed">
                        {stg.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GIIP-LITE Modules */}
            {programme.giipLiteModules && (
              <div className="border-t border-ink-line pt-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
                  Curriculum Modules & Engagement
                </h4>
                <ul className="space-y-2.5">
                  {programme.giipLiteModules.map((mod, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-paper/90">
                      <span className="w-1.5 h-1.5 bg-accent flex-shrink-0 mt-1.5 rounded-none" aria-hidden="true" />
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Programme Qualifier Notes */}
            {programme.notes && (
              <div className="border-t border-ink-line pt-4">
                <p className="font-mono text-xs text-ink-muted leading-relaxed">
                  * {programme.notes}
                </p>
              </div>
            )}
          </div>

          {/* Footer with CTA */}
          <div className="p-6 border-t border-ink-line bg-ink/95 sticky bottom-0 z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-ink-muted text-center sm:text-left">
              Connect with institutional desk
            </span>
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-ink hover:bg-[#e09b00] font-semibold text-sm px-6 py-3 rounded-[2px] transition-colors cursor-pointer"
            >
              <span>{programme.ctaText}</span>
              <span className="font-mono text-sm">→</span>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
