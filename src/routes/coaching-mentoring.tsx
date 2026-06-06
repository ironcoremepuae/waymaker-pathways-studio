import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA } from "@/components/site/CTA";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import { Compass, Sparkles, Lightbulb, GraduationCap, Briefcase, Target, Brain, Heart, Eye, BookOpen } from "lucide-react";

const TOPICS = [
  { icon: Sparkles, title: "Individual development" },
  { icon: Compass, title: "Personal clarity" },
  { icon: Lightbulb, title: "Confidence" },
  { icon: GraduationCap, title: "Career readiness" },
  { icon: Heart, title: "Life skills" },
  { icon: Briefcase, title: "Leadership growth" },
  { icon: Brain, title: "Habit & mindset" },
  { icon: Target, title: "Purpose-driven action" },
  { icon: Eye, title: "Guided reflection" },
  { icon: BookOpen, title: "Action planning" },
];

export const Route = createFileRoute("/coaching-mentoring")({
  head: () => ({
    ...pageMeta({
      title: "Coaching & Mentoring",
      description:
        "1:1 and group coaching for individuals and emerging leaders — clarity, confidence, capability, and purpose-driven action.",
      path: "/coaching-mentoring",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Coaching & Mentoring", path: "/coaching-mentoring" }])),
      jsonLd(serviceLd("Coaching & Mentoring", "Personalized growth journeys for individuals and emerging leaders.", "/coaching-mentoring")),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="Coaching & Mentoring" title="Personalized growth, guided with intention."
        subtitle="One-to-one and group journeys that turn reflection into clarity, and clarity into committed action." />
      <Section eyebrow="What we work on" title="Areas of growth." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((t) => <FeatureCard key={t.title} icon={t.icon} title={t.title}>Work on {t.title.toLowerCase()} with structured guidance and accountability.</FeatureCard>)}
        </div>
      </Section>
      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
