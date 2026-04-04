import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { portfolioContent } from "@/lib/content/portfolioContent";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Proyectos de branding e identidad visual desarrollados para empresas en Colombia y Latinoamérica.",
  alternates: { canonical: "/portafolio" },
  openGraph: { url: "/portafolio", title: "Portafolio | Jhon Fragozo" },
};

const projects = portfolioContent.projects ?? [];

export default function PortafolioPage() {
  return (
    <main>
      <Section className="pb-16 pt-20 md:pt-24">
        <div className="space-y-5">
          <Badge>{portfolioContent.badge}</Badge>
          <h1 className="text-h1 font-heading font-bold text-brand-primary">{portfolioContent.title}</h1>
          <p className="max-w-3xl text-body-lg text-brand-neutral">
            {portfolioContent.description}
          </p>
        </div>
      </Section>

      <Section className="bg-slate-50 pt-0 dark:bg-slate-900">
        <SectionTitle
          title={portfolioContent.sectionTitle}
          description={portfolioContent.sectionDescription}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/portafolio/${project.slug}`} className="group block">
              <Card hoverable className="h-full p-5 transition-shadow group-hover:shadow-card md:p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-2.5 py-0.5 text-caption text-brand-neutral dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-body-lg font-semibold text-brand-primary">{project.name}</h2>
                <p className="mt-2 text-body text-brand-neutral">{project.summary}</p>
                <div className="mt-4 flex items-center justify-between text-small text-slate-500">
                  <span>{project.sector}</span>
                  <span className="font-medium text-[var(--secondary)] group-hover:underline underline-offset-2">
                    Ver caso →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
