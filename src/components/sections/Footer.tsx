import React from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";

interface FooterProps {
  onOpenProgramme: (programmeId: string) => void;
}

export function Footer({ onOpenProgramme }: FooterProps) {
  const content = siteContent.footer;
  const navLinks = siteContent.header.nav;

  // Real programmes to trigger detail panels
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
      <Container>
        {/* 4 Equal Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Wordmark & Narrative */}
          <div className="space-y-4">
            <Wordmark variant="paper" />
            <p className="font-editorial-body text-ink-muted text-sm leading-relaxed max-w-xs pt-1">
              {content.tagline}
            </p>
            <div className="pt-1">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent block">
                {siteContent.hero.sinceLabel}
              </span>
            </div>
          </div>

          {/* Col 2: Institutional Navigation */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold">
              Institutional Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="editorial-link-hover text-sm text-ink-muted hover:text-paper transition-colors py-0.5 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programme Specifications (Triggers Panels) */}
          <div className="space-y-4">
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
                    <span className="arrow-hover-nudge font-mono text-xs opacity-70" aria-hidden="true">
                      ↗
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal & Social */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold">
              Legal & Governance
            </h3>
            {validSocialLinks.length > 0 || validPolicyLinks.length > 0 ? (
              <div className="space-y-3">
                {validSocialLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {validSocialLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.url!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ink-muted hover:text-paper transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
                {validPolicyLinks.length > 0 && (
                  <div className="space-y-1 pt-2">
                    {validPolicyLinks.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.url!}
                          className="text-xs text-ink-muted hover:text-paper transition-colors"
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-xs text-ink-muted leading-relaxed max-w-xs">
                Audacious Dreams Foundation is an autonomous youth development organisation established in Vellore, Tamil Nadu, India.
              </p>
            )}
          </div>
        </div>

        {/* Hairline rule above copyright line */}
        <div className="border-t border-ink-line pt-8 mt-12 sm:mt-16">
          <p className="text-xs font-mono text-ink-muted text-left">
            {content.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}