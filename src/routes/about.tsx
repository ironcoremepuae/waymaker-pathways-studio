import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { Compass, Eye, Target, HeartHandshake, Sparkles, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageMeta({
      title: "About WayMaker Skills™",
      description:
        "Learn about WayMaker Skills™ — our vision, mission, philosophy, and why we exist to develop human potential intentionally.",
      path: "/about",
    }),
    scripts: [jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="About" title="A human development organization for a changing world."
        subtitle="WayMaker Skills™ exists because the world needs more than information — it needs developed human beings who can think, feel, connect, act, and adapt with depth." />
      <Section title="Our story">
        <div className="grid md:grid-cols-2 gap-8 text-[color:var(--charcoal)] leading-relaxed">
          <p>
            WayMaker Skills™ was created to make human development as intentional as academic achievement. We believe
            that confidence, communication, leadership, emotional intelligence, and adaptability are not soft extras —
            they are the foundations of meaningful lives, capable careers, and healthy organizations.
          </p>
          <p>
            Our work brings together psychology, education, behavioral science, leadership development, and experiential
            learning into programs that are practical, evidence-informed, and built for the realities of today's
            schools, workplaces, and communities.
          </p>
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="What guides us" title="Vision, Mission, Purpose." center>
        <div className="grid md:grid-cols-3 gap-5">
          <FeatureCard icon={Eye} title="Vision">
            To create a future where human potential is developed as intentionally as academic achievement.
          </FeatureCard>
          <FeatureCard icon={Target} title="Mission">
            To transform potential into purpose by developing future-ready individuals, educators, leaders, and
            organizations through human development, applied intelligence, and meaningful learning experiences.
          </FeatureCard>
          <FeatureCard icon={Compass} title="Purpose">
            To help every person we serve think better, lead better, and live better.
          </FeatureCard>
        </div>
      </Section>

      <Section eyebrow="Our philosophy" title="What we believe.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={GraduationCap} title="Whole-person development">
            We grow people across mind, heart, and action — not just skills in isolation.
          </FeatureCard>
          <FeatureCard icon={Sparkles} title="Applied intelligence">
            Knowledge becomes capability when it shows up in real life and real work.
          </FeatureCard>
          <FeatureCard icon={HeartHandshake} title="Purpose over performance">
            Performance is sustainable when it's anchored in purpose, not pressure.
          </FeatureCard>
          <FeatureCard icon={Compass} title="Evidence-informed">
            We integrate psychology, behavioral science, and human development research.
          </FeatureCard>
          <FeatureCard icon={Target} title="Designed for context">
            Programs adapt to schools, organizations, leaders, families, and communities.
          </FeatureCard>
          <FeatureCard icon={Eye} title="Measurable growth">
            We design outcomes you can see, feel, and track over time.
          </FeatureCard>
        </div>
      </Section>

      <Section className="bg-[color:var(--teal-dark)] text-white" center
        eyebrow="What makes us different" title="Built for depth, not just delivery.">
        <p className="text-white/85 max-w-3xl mx-auto text-lg leading-relaxed">
          We are not a content provider. We are a human development practice. Our methodology (NOVA™), our framework
          (LQ™), and our children's ecosystem (WAMI™) come together to create coherent, repeatable, and
          meaningful growth across every audience we serve.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <CTAButton to="/programs" variant="gold">Explore Programs</CTAButton>
          <CTAButton to="/contact" variant="ghost">Partner With Us</CTAButton>
        </div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
