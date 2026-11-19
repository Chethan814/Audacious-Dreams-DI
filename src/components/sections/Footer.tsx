import React from "react";
import { siteContent } from "@/content/site";
import { Wordmark } from "@/components/ui/Wordmark";

interface FooterProps {
  onOpenProgramme: (programmeId: string) => void;
}

export function Footer({ onOpenProgramme }: FooterProps) {
  const content = siteContent.footer;
  const navLinks = siteContent.header.nav;

  // Real programmes to trigger modals
  const programmeLinks = [
    { id: "gip", name: "Global Immersion Programme (GIP)" },
    { id: "giip", name: "Global Industry Integrated Programme (GIIP)" },
    { id: "giip-lite", name: "GIIP-LITE" },
    { id: "gcip", name: "Global Career Integrated Programme (GCIP)" },
    { id: "unicef", name: "UNICEF Skill Development Initiative" },
    { id: "internships", name: "Internships & International Fellowships" },
  ];

  // Filter only social and policy links that have a non-empty, valid URL
  const validSocialLinks = content.socialLinks.filter(
    (item) => item.url !== null && item.url !== "" && item.url !== "#"
  );

  const validPolicyLinks = content.policyLinks.filter(
    (item) => item.url !== null && item.url !== "" && item.url !== "#"
  );

  return (
    <footer
      aria-label="Footer"
      className="w-full bg-ink text-paper border-t border-ink-line py-16 lg:py-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Grid: Wordmark & Narrative | Navigation Links | Programme Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-ink-line pb-16">
          {/* Col 1: Wordmark & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <Wordmark variant="paper" />
            <p className="font-editorial-body text-ink-muted text-sm sm:text-base max-w-sm pt-2">
              {content.tagline}
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent block">
                {siteContent.hero.sinceLabel}
              </span>
            </div>
          </div>

          {/* Col 2: Institutional Sections */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold">
              Institutional Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="editorial-link-hover text-sm text-ink-muted hover:text-paper transition-colors py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programme Specifications (Triggers Modals) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold">
              Programme Specifications
            </h3>
            <ul className="space-y-2.5">
              {programmeLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onOpenProgramme(item.id);
                    }}
                    className="editorial-link-hover text-left text-sm text-ink-muted hover:text-paper transition-colors py-0.5 cursor-pointer flex items-center gap-1.5 focus-visible:outline-2"
                  >
                    <span>{item.name}</span>
                    <span className="arrow-hover-nudge font-mono text-xs opacity-70">
                      ↗
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Social (if any), Policies (if any) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 text-xs font-mono text-ink-muted">
          <p>{content.copyright}</p>

          {/* Social Links (only when valid URL exists) */}
          {validSocialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {validSocialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Policy Links (only when valid URL exists) */}
          {validPolicyLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {validPolicyLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url!}
                  className="hover:text-paper transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
