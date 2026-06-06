import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA } from "@/components/site/CTA";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import { Compass, ShieldCheck, Target, Brain, MessagesSquare, HeartHandshake, Users, Sparkles, Layers, Lightbulb, Scale } from "lucide-react";

const TOPICS = [
  { icon: Compass, title: "Self-leadership" },
  { icon: ShieldCheck, title: "Responsible leadership" },
  { icon: Sparkles, title: "Influence" },
  { icon: Scale, title: "Decision-making" },
  { icon: Target, title: "Accountability" },
  { icon: Brain, title: "Strategic thinking" },
  { icon: MessagesSquare, title: "Communication" },
  { icon: HeartHandshake, title: "Emotional maturity" },
  { icon: Lightbulb, title: "Execution" },
  { icon: Users, title: "Team leadership" },
  { icon: Layers, title: "Future-ready leadership" },
];

export const Route = createFileRoute("/leadership")({
  head: () => ({
    ...pageMeta({
      title: "Leadership Development",
      description:
        "Develop leaders who think clearly, act responsibly, lead people well, and grow themselves continuously.",
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
      <PageHero eyebrow="Leadership Development" title="Leaders who develop themselves develop everyone around them."
        subtitle="Programs that grow self-leadership, people leadership, and future-ready leadership in one coherent journey." />
      <Section eyebrow="What we develop" title="Capabilities that define modern leaders." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((t) => <FeatureCard key={t.title} icon={t.icon} title={t.title}>Develop {t.title.toLowerCase()} through experiential, evidence-informed learning.</FeatureCard>)}
        </div>
      </Section>
      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
