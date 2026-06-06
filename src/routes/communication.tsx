import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA } from "@/components/site/CTA";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import { MessagesSquare, Mic, Ear, Users, HeartHandshake, Sparkles, Handshake, Briefcase } from "lucide-react";

const TOPICS = [
  { icon: Mic, title: "Speaking with clarity" },
  { icon: Ear, title: "Listening" },
  { icon: Sparkles, title: "Confidence" },
  { icon: Briefcase, title: "Presentation skills" },
  { icon: Users, title: "Interpersonal communication" },
  { icon: HeartHandshake, title: "Empathy" },
  { icon: Handshake, title: "Collaboration" },
  { icon: MessagesSquare, title: "Conflict handling" },
  { icon: Sparkles, title: "Influence" },
  { icon: Briefcase, title: "Professional communication" },
];

export const Route = createFileRoute("/communication")({
  head: () => ({
    ...pageMeta({
      title: "Communication Excellence",
      description:
        "Speak, listen, present, and influence with clarity. Communication excellence for students, professionals, and leaders.",
      path: "/communication",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Communication", path: "/communication" }])),
      jsonLd(serviceLd("Communication Excellence", "Programs that build clarity, confidence, and influence in communication.", "/communication")),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="Communication Excellence" title="Clear thinking. Clear speaking. Clear results."
        subtitle="Programs that build the communication capabilities people need across life, leadership, and work." />
      <Section eyebrow="Capabilities" title="What we develop." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((t) => <FeatureCard key={t.title} icon={t.icon} title={t.title}>Build {t.title.toLowerCase()} through practice, feedback, and reflection.</FeatureCard>)}
        </div>
      </Section>
      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
