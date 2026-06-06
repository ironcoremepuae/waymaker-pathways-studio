import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA } from "@/components/site/CTA";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { NOVA_STEPS } from "@/data/site";
import { Brain, Layers, BookOpen, Compass, Sparkles, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/nova")({
  head: () => ({
    ...pageMeta({
      title: "NOVA\u2122 Human Development Methodology",
      description:
        "NOVA\u2122 — the evidence-informed methodology of WayMaker Skills\u2122. Notice, Own, Visualize, Act: turning awareness into action and potential into performance.",
      path: "/nova",
    }),
    scripts: [jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "NOVA\u2122", path: "/nova" }]))],
  }),
  component: NovaPage,
});

const INTEGRATES = [
  { icon: Brain, title: "Psychology" },
  { icon: Layers, title: "Human Development" },
  { icon: FlaskConical, title: "Behavioral Science" },
  { icon: Compass, title: "Leadership Principles" },
  { icon: Sparkles, title: "Future Skills" },
  { icon: BookOpen, title: "Experiential Learning" },
];

function NovaPage() {
  return (
    <Layout>
      <PageHero eyebrow="Methodology" title="NOVA\u2122 — Human Development Methodology"
        subtitle="An evidence-informed approach that turns awareness into action and potential into performance." />

      <Section title="What is NOVA\u2122?">
        <div className="grid md:grid-cols-2 gap-8 text-[color:var(--charcoal)] leading-relaxed text-lg">
          <p>
            NOVA\u2122 is the human development methodology behind every WayMaker Skills\u2122 program. It is designed to
            move people from passive understanding to lived capability — from "I know" to "I do" to "I am."
          </p>
          <p>
            Built for the way humans actually grow, NOVA\u2122 integrates insight, ownership, direction, and action into a
            simple, repeatable journey that fits learners, leaders, teams, and organizations alike.
          </p>
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="What it integrates" title="A multidisciplinary foundation." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTEGRATES.map((c) => (
            <FeatureCard key={c.title} icon={c.icon} title={c.title}>
              Insights and practices drawn from {c.title.toLowerCase()} inform how we design every program experience.
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="The journey" title="Notice. Own. Visualize. Act." center>
        <ol className="relative max-w-3xl mx-auto border-l-2 border-[color:var(--teal-deep)]/30 pl-8 space-y-10">
          {NOVA_STEPS.map((s, i) => (
            <li key={s.code} className="relative">
              <div className="absolute -left-[2.4rem] top-0 h-12 w-12 rounded-full bg-teal-gradient text-white flex items-center justify-center font-display text-2xl shadow-elegant">
                {s.code}
              </div>
              <div className="ml-2">
                <div className="text-xs tracking-widest uppercase text-[color:var(--gold)] font-semibold">Step {i + 1}</div>
                <h3 className="font-display text-3xl text-[color:var(--teal-dark)] mt-1">{s.name}</h3>
                <p className="mt-2 text-[color:var(--muted-ink)] text-lg leading-relaxed">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <FinalCTA title="Apply NOVA\u2122 to your people." text="From classrooms to boardrooms, NOVA\u2122 helps your audience move from awareness to capability." />
      <div className="h-16" />
    </Layout>
  );
}
