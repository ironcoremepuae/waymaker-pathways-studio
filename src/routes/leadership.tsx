import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { OutcomeGrid, QuoteBlock } from "@/components/site/Blocks";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import {
  Compass, ShieldCheck, Target, Brain, MessagesSquare, HeartHandshake, Users,
  Sparkles, Layers, Lightbulb, Scale, ArrowRight,
} from "lucide-react";

const TOPICS = [
  { icon: Compass, title: "Self-leadership", desc: "Lead yourself before you lead others." },
  { icon: ShieldCheck, title: "Responsible leadership", desc: "Lead with integrity, ethics, and care." },
  { icon: MessagesSquare, title: "Communication & influence", desc: "Clarity, presence, and meaningful influence." },
  { icon: Scale, title: "Decision-making", desc: "Think clearly, decide wisely, act consistently." },
  { icon: Target, title: "Accountability", desc: "Own outcomes; deliver consistently." },
  { icon: Users, title: "Team leadership", desc: "Build trust, alignment, and high performance." },
  { icon: HeartHandshake, title: "Emotional maturity", desc: "Self-awareness and steady inner ground." },
  { icon: Brain, title: "Strategic thinking", desc: "See systems, patterns, and the longer game." },
  { icon: Lightbulb, title: "Execution", desc: "From intent to focused, consistent action." },
  { icon: Sparkles, title: "Influence", desc: "Move people with credibility and care." },
  { icon: Layers, title: "Future-ready leadership", desc: "Lead through complexity and change." },
];

const OUTCOMES = [
  "Clearer self-leadership", "Stronger communication", "Better decision-making",
  "Higher accountability", "Stronger teams", "Greater emotional maturity",
  "Sharper execution", "Future-ready mindset",
];

export const Route = createFileRoute("/leadership")({
  head: () => ({
    ...pageMeta({
      title: "Leadership Development — WayMaker Skills™",
      description:
        "Developing responsible, emotionally mature, and purpose-driven leaders — from self-leadership to team and organizational leadership.",
      path: "/leadership",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Leadership", path: "/leadership" }])),
      jsonLd(serviceLd("Leadership Development", "From self-leadership to team and organizational leadership.", "/leadership")),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="Leadership Development"
        title="Leaders who develop themselves develop everyone around them."
        subtitle="Programs that grow self-leadership, people leadership, and future-ready leadership in one coherent journey."
        badges={["Self-leadership", "People leadership", "Future-ready", "Emotionally mature"]}
      >
        <CTAButton to="/contact" variant="primary">Build Leadership Capability <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/corporate-training" variant="secondary">For Organizations</CTAButton>
      </PageHero>

      <Section eyebrow="What leadership means here" title="Leadership is a way of being, not a position.">
        <p className="max-w-3xl text-[color:var(--charcoal)] text-lg leading-relaxed">
          At WayMaker Skills™, leadership starts inside. We develop responsible, emotionally mature, and
          purpose-driven leaders who can think clearly, communicate well, decide responsibly, and grow the
          people around them.
        </p>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="What we develop" title="Capabilities that define modern leaders." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((t, i) => (
            <FeatureCard key={t.title} icon={t.icon} title={t.title} delay={i * 40}>{t.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership outcomes" title="What leaders carry out of our programs." center>
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section>
        <QuoteBlock quote="Leadership is the daily practice of becoming the kind of person others can trust, follow, and grow with." />
      </Section>

      <FinalCTA title="Develop responsible, capable leaders." />
      <div className="h-16" />
    </Layout>
  );
}
