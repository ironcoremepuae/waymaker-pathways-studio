import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { Timeline, AudienceCards, QuoteBlock } from "@/components/site/Blocks";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import {
  Compass, Sparkles, Lightbulb, GraduationCap, Briefcase, Target, Brain, Heart, Eye, BookOpen,
  Users, ArrowRight,
} from "lucide-react";

const WHO = [
  { icon: Sparkles, title: "Individuals", desc: "Anyone seeking clarity and growth." },
  { icon: GraduationCap, title: "Students", desc: "Career, confidence, and life clarity." },
  { icon: Briefcase, title: "Professionals", desc: "Career direction and leadership growth." },
  { icon: Users, title: "Emerging leaders", desc: "Self-leadership and people skills." },
];

const AREAS = [
  { icon: Compass, title: "Personal clarity", desc: "Direction, decisions, and meaning." },
  { icon: Lightbulb, title: "Confidence building", desc: "Inner trust and steady self-belief." },
  { icon: GraduationCap, title: "Career readiness", desc: "Clarity, communication, and direction." },
  { icon: Heart, title: "Life skills", desc: "The skills life keeps asking for." },
  { icon: Briefcase, title: "Leadership growth", desc: "Self-leadership before team leadership." },
  { icon: Brain, title: "Habit & mindset", desc: "Patterns that compound over time." },
  { icon: Eye, title: "Reflection", desc: "Insight that becomes identity." },
  { icon: BookOpen, title: "Action planning", desc: "Clarity translated into committed action." },
  { icon: Target, title: "Purposeful action", desc: "From intent to consistent doing." },
];

const PROCESS = [
  { title: "Discover", desc: "Map context, strengths, and growth edges." },
  { title: "Reflect", desc: "Surface patterns, beliefs, and the real questions." },
  { title: "Plan", desc: "Design clear goals and an honest path forward." },
  { title: "Act", desc: "Commit to action between sessions." },
  { title: "Grow", desc: "Review, refine, and build durable capability." },
];

export const Route = createFileRoute("/coaching-mentoring")({
  head: () => ({
    ...pageMeta({
      title: "Coaching & Mentoring — WayMaker Skills™",
      description:
        "Guided growth for clarity, confidence, capability, and purposeful action — 1:1 and group coaching by WayMaker Skills™.",
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
      <PageHero
        eyebrow="Coaching & Mentoring"
        title="Guided growth for clarity, confidence, and purposeful action."
        subtitle="One-to-one and group journeys that turn reflection into clarity, and clarity into committed action."
        badges={["1:1 Coaching", "Group Journeys", "Career & Life", "Emerging Leaders"]}
      >
        <CTAButton to="/contact" variant="primary">Start a Conversation <ArrowRight className="h-4 w-4" /></CTAButton>
      </PageHero>

      <Section eyebrow="Who it is for" title="Built for the seekers and the next leaders." center>
        <AudienceCards items={WHO} />
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Areas of support" title="What we work on together." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map((a, i) => <FeatureCard key={a.title} icon={a.icon} title={a.title} delay={i * 40}>{a.desc}</FeatureCard>)}
        </div>
      </Section>

      <Section eyebrow="The process" title="Discover · Reflect · Plan · Act · Grow." center>
        <Timeline steps={PROCESS} />
      </Section>

      <Section>
        <QuoteBlock quote="Coaching is not advice. It's the structured space where your own clarity finally has room to surface." />
      </Section>

      <FinalCTA title="Start a coaching conversation." />
      <div className="h-16" />
    </Layout>
  );
}
