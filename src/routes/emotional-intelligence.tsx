import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { OutcomeGrid, QuoteBlock } from "@/components/site/Blocks";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import {
  Eye, Waves, ShieldCheck, Sparkles, HeartHandshake, Users, Brain, Heart, Target, ArrowRight,
} from "lucide-react";

const TOPICS = [
  { icon: Eye, title: "Self-awareness", desc: "Know your patterns, triggers, and inner weather." },
  { icon: Waves, title: "Emotional regulation", desc: "Respond from steady ground, not reactivity." },
  { icon: ShieldCheck, title: "Resilience", desc: "Adaptive strength built on awareness." },
  { icon: Sparkles, title: "Confidence", desc: "Quiet self-trust that doesn't need to perform." },
  { icon: HeartHandshake, title: "Empathy", desc: "Understand others without losing yourself." },
  { icon: Users, title: "Relationship management", desc: "Build healthy, durable relationships." },
  { icon: Brain, title: "Stress handling", desc: "Tools for the realities of modern life." },
  { icon: Heart, title: "Well-being", desc: "Sustainable inner and outer health." },
  { icon: Target, title: "Personal effectiveness", desc: "Inner skills become outer results." },
];

const OUTCOMES = [
  "Greater self-awareness", "Calmer responses", "Stronger resilience",
  "Quieter confidence", "Healthier relationships", "Improved well-being",
];

export const Route = createFileRoute("/emotional-intelligence")({
  head: () => ({
    ...pageMeta({
      title: "Emotional Intelligence & Resilience — WayMaker Skills™",
      description:
        "Self-awareness, emotional regulation, empathy, resilience, and relationship effectiveness for life and work.",
      path: "/emotional-intelligence",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Emotional Intelligence", path: "/emotional-intelligence" }])),
      jsonLd(serviceLd("Emotional Intelligence", "Develop the inner capabilities that shape effective behavior and healthy relationships.", "/emotional-intelligence")),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="Emotional Intelligence & Resilience"
        title="Inner skills shape outer success."
        subtitle="Building self-awareness, emotional maturity, confidence, and healthier relationships across life, leadership, and work."
        badges={["Self-awareness", "Regulation", "Empathy", "Resilience"]}
      >
        <CTAButton to="/contact" variant="primary">Build Emotional Intelligence <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/coaching-mentoring" variant="secondary">Personal Coaching</CTAButton>
      </PageHero>

      <Section eyebrow="Why EI matters" title="The quiet engine of effective behavior.">
        <p className="max-w-3xl text-[color:var(--charcoal)] text-lg leading-relaxed">
          Emotional intelligence quietly shapes careers, relationships, and well-being. It's the inner architecture
          behind every effective behavior — from clear communication to wise decisions to healthy relationships.
        </p>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Capabilities" title="What we develop." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((t, i) => (
            <FeatureCard key={t.title} icon={t.icon} title={t.title} delay={i * 40}>{t.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Outcomes" title="What people carry forward." center>
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section>
        <QuoteBlock quote="Awareness is the first leadership skill. Regulation is the second. Everything else follows." />
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
