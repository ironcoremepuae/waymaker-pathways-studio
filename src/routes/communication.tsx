import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { OutcomeGrid, QuoteBlock } from "@/components/site/Blocks";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import {
  MessagesSquare, Mic, Ear, Users, HeartHandshake, Sparkles, Handshake, Briefcase, ArrowRight,
} from "lucide-react";

const TOPICS = [
  { icon: Mic, title: "Speaking with clarity", desc: "Structure thought, then speak it with confidence." },
  { icon: Ear, title: "Listening & empathy", desc: "Hear what is said and what is meant." },
  { icon: Sparkles, title: "Presentation confidence", desc: "Presence, message, and audience connection." },
  { icon: Briefcase, title: "Professional communication", desc: "Workplace clarity across writing and speaking." },
  { icon: Users, title: "Interpersonal communication", desc: "Conversations that build trust and connection." },
  { icon: HeartHandshake, title: "Collaboration", desc: "Communicate to align, not just to inform." },
  { icon: MessagesSquare, title: "Conflict handling", desc: "Move from heat to clarity to resolution." },
  { icon: Handshake, title: "Influence", desc: "Move people with credibility, not pressure." },
];

const OUTCOMES = [
  "Clearer thinking", "Confident speaking", "Stronger listening",
  "Better presentations", "Healthier conversations", "Greater influence",
];

export const Route = createFileRoute("/communication")({
  head: () => ({
    ...pageMeta({
      title: "Communication Excellence — WayMaker Skills™",
      description:
        "Express clearly, listen deeply, connect meaningfully, and influence responsibly — communication excellence for students, professionals, and leaders.",
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
      <PageHero
        eyebrow="Communication Excellence"
        title="Express clearly. Listen deeply. Connect meaningfully."
        subtitle="Helping people speak with clarity, listen with empathy, and influence with responsibility — in life, leadership, and work."
        badges={["Clarity", "Confidence", "Listening", "Influence"]}
      >
        <CTAButton to="/contact" variant="primary">Improve Communication Skills <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/programs" variant="secondary">See Programs</CTAButton>
      </PageHero>

      <Section eyebrow="Why communication matters" title="The most underrated leadership skill.">
        <p className="max-w-3xl text-[color:var(--charcoal)] text-lg leading-relaxed">
          Communication shapes everything — careers, relationships, teams, families, classrooms, and cultures.
          We help people develop the inner clarity and outer skills that make communication land with confidence and care.
        </p>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Core capabilities" title="What we develop." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((t, i) => (
            <FeatureCard key={t.title} icon={t.icon} title={t.title} delay={i * 40}>{t.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Communication outcomes" title="What people carry forward." center>
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section>
        <QuoteBlock quote="Clarity inside becomes clarity outside. Develop the thinker, and the communicator follows." />
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
