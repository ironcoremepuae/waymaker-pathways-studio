import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { Timeline, AudienceCards } from "@/components/site/Blocks";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { NOVA_STEPS } from "@/data/site";
import {
  Brain, Layers, BookOpen, Compass, Sparkles, FlaskConical,
  GraduationCap, Users, Briefcase, HeartHandshake, UsersRound, School, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/nova")({
  head: () => ({
    ...pageMeta({
      title: "NOVA™ Human Development Methodology",
      description:
        "NOVA™ — the evidence-informed methodology of WayMaker Skills™. Notice, Own, Visualize, Act: turning awareness into action and potential into performance.",
      path: "/nova",
    }),
    scripts: [jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "NOVA™", path: "/nova" }]))],
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

const PROGRAM_PROCESS = [
  { title: "Discover strengths", desc: "Surface awareness, context, and starting capability." },
  { title: "Develop capabilities", desc: "Build the inner and applied skills the audience needs." },
  { title: "Practice through experience", desc: "Apply learning in safe, structured experiential settings." },
  { title: "Reflect and internalize", desc: "Convert insight into identity and durable behavior." },
  { title: "Apply in real-world situations", desc: "Carry capability into life, work, and leadership." },
];

const APPLIES = [
  { icon: GraduationCap, title: "Students", desc: "Confidence, life skills, and direction." },
  { icon: BookOpen, title: "Educators", desc: "Capability for the modern classroom." },
  { icon: HeartHandshake, title: "Parents", desc: "Tools to raise capable children." },
  { icon: Briefcase, title: "Professionals", desc: "Behavior change that builds careers." },
  { icon: Compass, title: "Leaders", desc: "Self-leadership and team leadership." },
  { icon: Users, title: "Corporate Teams", desc: "Behavior, culture, and performance." },
  { icon: UsersRound, title: "Communities", desc: "Purposeful growth at scale." },
  { icon: School, title: "Institutions", desc: "Whole-ecosystem human development." },
];

function NovaPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="NOVA™ Methodology"
        title="From awareness to action. From potential to performance."
        subtitle="NOVA™ is the human development methodology of WayMaker Skills™ — designed to move people from passive understanding to lived capability."
        badges={["Notice", "Own", "Visualize", "Act", "Evidence-informed"]}
      >
        <CTAButton to="/programs" variant="primary">Explore Programs <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/contact" variant="secondary">Talk to Us</CTAButton>
      </PageHero>

      <Section eyebrow="What is NOVA™?" title="A repeatable journey for human growth.">
        <div className="grid md:grid-cols-2 gap-8 text-[color:var(--charcoal)] leading-relaxed text-lg">
          <p>
            NOVA™ is the human development methodology behind every WayMaker Skills™ program. It moves people
            from "I know" to "I do" to "I am" — turning passive understanding into lived capability.
          </p>
          <p>
            Built for the way humans actually grow, NOVA™ integrates insight, ownership, direction, and action
            into a simple, repeatable journey that fits learners, leaders, teams, and organizations alike.
          </p>
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="The journey" title="Notice. Own. Visualize. Act." center>
        <Timeline
          steps={NOVA_STEPS.map((s) => ({ code: s.code, title: s.name, desc: s.desc }))}
        />
      </Section>

      <Section eyebrow="What it integrates" title="A multidisciplinary foundation." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTEGRATES.map((c, i) => (
            <FeatureCard key={c.title} icon={c.icon} title={c.title} delay={i * 60}>
              Insights and practices from {c.title.toLowerCase()} inform how every program experience is designed.
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="How NOVA™ works in programs" title="A five-stage learning arc." center>
        <Timeline steps={PROGRAM_PROCESS} />
      </Section>

      <Section eyebrow="Where NOVA™ applies" title="Designed for every life stage." center>
        <AudienceCards items={APPLIES} />
      </Section>

      <FinalCTA
        title="Design a NOVA™-based development experience."
        text="From classrooms to boardrooms, NOVA™ helps your audience move from awareness to capability."
      />
      <div className="h-16" />
    </Layout>
  );
}
