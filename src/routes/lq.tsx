import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { LQ_DIMENSIONS } from "@/data/site";

export const Route = createFileRoute("/lq")({
  head: () => ({
    ...pageMeta({
      title: "LQ™ — Life Intelligence Quotient",
      description:
        "The LQ™ Framework: five dimensions of applied intelligence — THINK, FEEL, CONNECT, ACT, ADAPT — that help people thrive in life, leadership, and work.",
      path: "/lq",
    }),
    scripts: [jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "LQ™", path: "/lq" }]))],
  }),
  component: LQPage,
});

function LQPage() {
  return (
    <Layout>
      <PageHero eyebrow="Framework" title="LQ™ — Life Intelligence Quotient"
        subtitle="Knowledge alone does not determine success. The ability to apply intelligence in real-life situations does." />

      <Section title="Why LQ™ matters">
        <p className="max-w-3xl text-lg text-[color:var(--charcoal)] leading-relaxed">
          LQ™ is WayMaker Skills'™ framework for the intelligences that help people navigate complexity, lead
          confidently, build relationships, and create meaningful impact. It maps five dimensions that, when developed
          together, make growth durable.
        </p>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="The five dimensions" title="Five lenses, one capable human." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {LQ_DIMENSIONS.map((d, i) => (
            <article key={d.code} className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft">
              <div className="text-xs tracking-widest font-semibold text-[color:var(--gold)]">DIMENSION 0{i + 1}</div>
              <h3 className="font-display text-3xl text-[color:var(--teal-dark)] mt-1">{d.code}</h3>
              <div className="text-sm font-semibold text-[color:var(--teal-deep)]">{d.name}</div>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--charcoal)]">
                {d.skills.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--teal-dark)] text-white" title="" center>
        <h2 className="text-white text-4xl md:text-5xl">Develop LQ™ across your people.</h2>
        <p className="mt-5 max-w-2xl mx-auto text-white/85 text-lg leading-relaxed">
          LQ™ maps to our programs across leadership, communication, emotional intelligence, future skills, and
          well-being — so growth is structured, integrated, and measurable.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <CTAButton to="/programs" variant="gold">Explore Programs</CTAButton>
          <CTAButton to="/contact" variant="ghost">Talk to Us</CTAButton>
        </div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
