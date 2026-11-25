import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionFade } from "@/components/ui/MotionFade";

export function InPractice() {
  const content = siteContent.inPractice;

  return (
    <section
      id="in-practice"
      aria-label={content.eyebrow}
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
            intro={content.intro}
            theme="ink"
          />
        </MotionFade>

        {/* 3x2 Hairline Photo Record Grid */}
        <MotionFade delay={100}>
          <div className="border border-ink-line bg-ink-line grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            {content.moments.map((moment) => {
              const positionClass =
                moment.objectPosition === "top"
                  ? "object-top"
                  : moment.objectPosition === "leaders"
                  ? "object-[50%_42%]"
                  : "object-center";

              return (
                <figure
                  key={moment.image}
                  className="bg-ink flex flex-col justify-between m-0"
                >
                  <div className="relative w-full aspect-[3/2] overflow-hidden border-b border-ink-line bg-ink">
                    <Image
                      src={moment.image}
                      alt={moment.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className={`object-cover ${positionClass}`}
                    />
                  </div>

                  <figcaption className="p-6 sm:p-7 flex-1 flex flex-col space-y-2.5">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-medium block">
                      {moment.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-paper leading-snug">
                      {moment.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {moment.caption}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
