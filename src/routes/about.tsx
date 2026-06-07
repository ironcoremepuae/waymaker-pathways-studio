import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { EcosystemGrid, QuoteBlock } from "@/components/site/Blocks";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import {
  Compass, Eye, Target, HeartHandshake, Sparkles, GraduationCap,
  BookOpen, Lightbulb, Brain, Flame, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageMeta({
      title: "About WayMaker Skills™",
      description:
        "WayMaker Skills™ is a human development and applied intelligence organization helping people transform potential into purpose.",
      path: "/about",
    }),
    scripts: [jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))],
  }),
  component: AboutPage,
});

const PHILOSOPHY = [
  { icon: Brain, title: "Built on psychology", desc: "Rooted in how humans actually think, feel, and grow." },
  { icon: Compass, title: "Designed for real life", desc: "Programs that travel from the room into work and life." },
  { icon: Flame, title: "Learning through experience", desc: "Practice, reflection, and applied capability." },
  { icon: Eye, title: "Growth through reflection", desc: "Insight becomes change through structured reflection." },
  { icon: Sparkles, title: "Capability over information", desc: "We build what people can DO, not just what they know." },
  { icon: Target, title: "Purpose-driven transformation", desc: "Anchored in meaning, not just performance." },
];

const ECOSYSTEM = [
  { tag: "Methodology", title: "NOVA™", desc: "Notice · Own · Visualize · Act — the human development methodology behind every program.", to: "/nova" },
  { tag: "Framework", title: "LQ™ Framework", desc: "Five dimensions of applied intelligence: THINK, FEEL, CONNECT, ACT, ADAPT.", to: "/lq" },
  { tag: "Process", title: "WAYFRAME™ Learning Process", desc: "A repeatable learning architecture: discover, develop, practice, reflect, apply.", to: "/programs" },
  { tag: "Children", title: "WAMI™ Ecosystem", desc: "Children's learning world of stories, challenges, games, and character building.", to: "/wami" },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About WayMaker Skills™"
        title="A human development organization for a changing world."
        subtitle="Human Development • Applied Intelligence • Future Skills — helping people transform potential into purpose."
        badges={["Psychology-informed", "Experiential", "For schools, workplaces & communities", "Outcome-focused"]}
      >
        <CTAButton to="/programs" variant="primary">Explore Programs <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/contact" variant="secondary">Partner With Us</CTAButton>
      </PageHero>

      <Section eyebrow="Brand story" title="The work of developing the whole human.">
        <div className="grid md:grid-cols-2 gap-8 text-[color:var(--charcoal)] leading-relaxed text-lg">
          <p>
            WayMaker Skills™ is a human development and applied intelligence organization helping people
            transform potential into purpose. We bring together psychology, education, behavioral science,
            leadership development, and experiential learning into programs that are practical, evidence-informed,
            and built for the realities of today's schools, workplaces, and communities.
          </p>
          <p>
            We believe that confidence, communication, leadership, emotional intelligence, and adaptability are not
            soft extras — they are the foundations of meaningful lives, capable careers, and healthy organizations.
            Our work is to make that growth as intentional as academic achievement.
          </p>
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Why we exist" title="The world needs more than information." center>
        <div className="max-w-3xl mx-auto text-[color:var(--charcoal)] text-lg leading-relaxed text-center">
          Success today asks more than academic results or technical knowledge. People need critical thinking,
          emotional intelligence, communication, adaptability, leadership, resilience, and purposeful action.
          We exist to develop those capabilities — at scale, with depth, and with care.
        </div>
      </Section>

      <Section eyebrow="What guides us" title="Vision & Mission." center>
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <FeatureCard icon={Eye} title="Vision">
            "To create a future where human potential is developed as intentionally as academic achievement."
          </FeatureCard>
          <FeatureCard icon={Target} title="Mission" delay={80}>
            "To transform potential into purpose by developing future-ready individuals, educators, leaders, and
            organizations through human development, applied intelligence, and meaningful learning experiences."
          </FeatureCard>
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Our philosophy" title="What we believe." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHILOSOPHY.map((p, i) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} delay={i * 60}>{p.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="The ecosystem" title="One coherent system for human development." center>
        <EcosystemGrid items={ECOSYSTEM} />
      </Section>

      <Section className="bg-[color:var(--teal-dark)] text-white" center
        eyebrow="What makes us different" title="Built for depth, not just delivery.">
        <p className="text-white/85 max-w-3xl mx-auto text-lg leading-relaxed">
          We are not a content provider. We are a human development practice. Our methodology (NOVA™), our framework
          (LQ™), our learning process (WAYFRAME™), and our children's ecosystem (WAMI™) come together to create
          coherent, repeatable, and meaningful growth across every audience we serve.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <CTAButton to="/founder" variant="ghost">Meet the Founder</CTAButton>
          <CTAButton to="/programs" variant="gold">Explore Programs</CTAButton>
        </div>
      </Section>

      <Section>
        <QuoteBlock
          quote="When we develop the human, performance, leadership, and meaning follow naturally."
          author="WayMaker Skills™"
        />
      </Section>

      <FinalCTA title="Build human potential with WayMaker Skills™." />
      <div className="h-16" />
    </Layout>
  );
}
