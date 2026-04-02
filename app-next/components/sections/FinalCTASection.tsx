import { homeContent } from "@/lib/content/homeContent";
import { PrimaryLink, SecondaryLink } from "@/components/ui/Buttons";
import { ctaCopy, ctaLinks } from "@/lib/constants/cta";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/sections/Reveal";

export function FinalCTASection() {
  return (
    <Section className="bg-slate-50 dark:bg-surface-section" id="cta-final">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="text-small font-semibold uppercase tracking-wide text-brand-accent">CTA final</p>
        <h2 className="mt-4 text-h2 font-heading font-bold text-brand-primary">{homeContent.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-body text-brand-neutral">{homeContent.finalCta.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryLink href={homeContent.finalCta.actions.primary.href}>{homeContent.finalCta.actions.primary.label}</PrimaryLink>
          <SecondaryLink href={ctaLinks.secondary}>{ctaCopy.secondary}</SecondaryLink>
        </div>
      </Reveal>
    </Section>
  );
}
