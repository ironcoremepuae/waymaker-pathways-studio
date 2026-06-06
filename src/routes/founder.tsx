import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { ExternalLink, Quote } from "lucide-react";

export const Route = createFileRoute("/founder")({
  head: () => ({
    ...pageMeta({
      title: "Founder — Sanjo Mathew",
      description:
        "Sanjo Mathew is the founder of WayMaker Skills™, a human development professional working across psychology, life skills, education, mentoring, training, and personal growth.",
      path: "/founder",
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Sanjo Mathew",
        jobTitle: "Founder, WayMaker Skills™",
        url: "https://sanjo.in",
        worksFor: { "@type": "Organization", name: "WayMaker Skills™" },
      }),
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Founder", path: "/founder" }])),
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <Layout>
      <PageHero eyebrow="Founder" title="Sanjo Mathew"
        subtitle="Founder of WayMaker Skills™. Human development practitioner working across psychology, life skills, education, mentoring, training, and personal growth." />

      <Section>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div className="space-y-5 text-[color:var(--charcoal)] leading-relaxed text-lg">
            <p>
              Sanjo Mathew is the founder of WayMaker Skills™ and a human development professional with
              experience across psychology, life skills, education, mentoring, training, and personal growth.
            </p>
            <p>
              His work focuses on helping individuals and organizations build the inner capabilities — clarity,
              confidence, emotional intelligence, leadership, and purpose — that make outer success sustainable.
            </p>
            <p>
              Through WayMaker Skills™, Sanjo brings together a methodology (NOVA™), a framework (LQ™),
              and a children's ecosystem (WAMI™) to create coherent human development experiences for students,
              educators, professionals, leaders, families, and institutions.
            </p>

            <div className="mt-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--teal-light)]/50 p-6">
              <div className="text-xs tracking-widest uppercase font-semibold text-[color:var(--teal-deep)]">Personal brand website</div>
              <p className="mt-2 text-[color:var(--charcoal)]">
                Sanjo's personal work, writing, and speaking are available at his personal brand website.
              </p>
              <a href="https://sanjo.in" target="_blank" rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-gradient text-white px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all">
                Visit sanjo.in <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="rounded-3xl bg-teal-gradient p-8 text-white shadow-elegant relative overflow-hidden">
            <Quote className="h-8 w-8 text-[color:var(--gold-soft)] mb-3" />
            <p className="font-display text-2xl leading-snug">
              "When we develop the human, performance, leadership, and meaning follow naturally."
            </p>
            <div className="mt-4 text-sm text-white/70">— Sanjo Mathew</div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[color:var(--gold)]/30 rounded-full blur-3xl" aria-hidden />
          </aside>
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" title="Where Sanjo works through WayMaker Skills™" center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {["Schools & Educators","Students & Youth","Professionals","Leaders & Teams","Parents & Families","Coaching & Mentoring","Speaking & Training","Program Design"].map((t) => (
            <div key={t} className="rounded-2xl bg-white border border-[color:var(--border)] p-5 text-center shadow-soft card-lift">
              <div className="font-semibold text-[color:var(--teal-dark)]">{t}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/contact">Invite Sanjo / WayMaker Skills™</CTAButton>
        </div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
