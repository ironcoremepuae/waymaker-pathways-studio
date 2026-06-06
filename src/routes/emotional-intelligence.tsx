import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA } from "@/components/site/CTA";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import { Eye, Waves, ShieldCheck, Sparkles, HeartHandshake, Users, Brain, Heart, Target } from "lucide-react";

const TOPICS = [
  { icon: Eye, title: "Self-awareness" },
  { icon: Waves, title: "Emotional regulation" },
  { icon: ShieldCheck, title: "Resilience" },
  { icon: Sparkles, title: "Confidence" },
  { icon: HeartHandshake, title: "Empathy" },
  { icon: Users, title: "Relationship management" },
  { icon: Brain, title: "Stress handling" },
  { icon: Heart, title: "Well-being" },
  { icon: Target, title: "Personal effectiveness" },
];

export const Route = createFileRoute("/emotional-intelligence")({
  head: () => ({
    ...pageMeta({
      title: "Emotional Intelligence",
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
      <PageHero eyebrow="Emotional Intelligence" title="Inner skills shape outer success."
        subtitle="Programs that build the EI capabilities people need to lead themselves and connect meaningfully with others." />
      <Section eyebrow="Capabilities" title="What we develop." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((t) => <FeatureCard key={t.title} icon={t.icon} title={t.title}>Develop {t.title.toLowerCase()} through experiential learning and applied practice.</FeatureCard>)}
        </div>
      </Section>
      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
