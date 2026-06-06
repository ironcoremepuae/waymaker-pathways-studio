import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { PROGRAMS, AUDIENCES } from "@/data/site";
import { ArrowRight, Sparkles } from "lucide-react";

const FAQS = [
  { q: "Are programs customized?", a: "Yes — every engagement is shaped to the audience, context, and outcomes you need." },
  { q: "Can you run programs in our location?", a: "We run programs on-site, hybrid, and online. We'll recommend the best format together." },
  { q: "What duration are programs?", a: "From short workshops to multi-month journeys, depending on depth and outcomes." },
];

export const Route = createFileRoute("/programs")({
  head: () => ({
    ...pageMeta({
      title: "Programs",
      description:
        "Explore WayMaker Skills™ programs across leadership, communication, emotional intelligence, future skills, well-being, coaching, parents, teachers, and children.",
      path: "/programs",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Programs", path: "/programs" }])),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Programs" title="Human development programs for every life stage."
        subtitle="A complete portfolio across leadership, communication, emotional intelligence, future skills, well-being, coaching, and children's development." />

      <Section eyebrow="Designed for" title="Audiences we serve." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-5 shadow-soft">
              <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
              <div className="font-display text-lg text-[color:var(--teal-dark)] mt-2">{a.title}</div>
              <div className="text-sm text-[color:var(--muted-ink)] mt-1">{a.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="All programs" title="The full portfolio." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((p) => {
            const link = ["leadership", "communication", "emotional-intelligence", "coaching-mentoring", "wami"].includes(p.slug)
              ? `/${p.slug}` : "/contact";
            return (
              <Link key={p.slug} to={link as any}
                className="card-lift group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft block">
                <h3 className="font-display text-2xl text-[color:var(--teal-dark)]">{p.title}</h3>
                <p className="mt-2 text-[color:var(--muted-ink)] text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 text-xs uppercase tracking-widest text-[color:var(--teal-deep)] font-semibold">Best for</div>
                <div className="text-sm text-[color:var(--charcoal)]">{p.best}</div>
                <div className="mt-5 text-sm font-semibold text-[color:var(--teal-deep)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Program questions." center>
        <div className="max-w-3xl mx-auto"><FAQList items={FAQS} /></div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
