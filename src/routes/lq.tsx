import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { AudienceCards, OutcomeGrid } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { LQ_DIMENSIONS } from "@/data/site";
import {
  GraduationCap, HeartHandshake, BookOpen, Briefcase, Compass, Users, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/lq")({
  head: () => ({
    ...pageMeta({
      title: "LQ™ — Life Intelligence Quotient",
      description:
        "LQ™ — five dimensions of applied intelligence (THINK, FEEL, CONNECT, ACT, ADAPT) that help people thrive in life, leadership, and work.",
      path: "/lq",
    }),
    scripts: [jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "LQ™", path: "/lq" }]))],
  }),
  component: LQPage,
});

const OUTCOMES = [
  "Leadership Development", "Communication Excellence", "Emotional Intelligence",
  "Critical Thinking", "Problem Solving", "Creativity & Innovation",
  "Collaboration", "Adaptability", "Resilience",
  "Relationship Management", "Future-Ready Skills", "Purposeful Action",
];

const APPLIES = [
  { icon: GraduationCap, title: "For Students", desc: "Confidence, clarity, and life skills." },
  { icon: HeartHandshake, title: "For Parents", desc: "Tools to raise emotionally intelligent children." },
  { icon: BookOpen, title: "For Teachers", desc: "Human development for the classroom." },
  { icon: Briefcase, title: "For Professionals", desc: "Skills that build careers, not just resumes." },
  { icon: Compass, title: "For Leaders", desc: "Self-leadership and people leadership." },
  { icon: Users, title: "For Teams", desc: "Trust, communication, and collective action." },
];

function LQPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="LQ™ Framework"
        title="Life Intelligence Quotient."
        subtitle="Applying intelligence effectively in real-life situations — to navigate complexity, lead confidently, build relationships, adapt, and create meaningful impact."
        badges={["THINK", "FEEL", "CONNECT", "ACT", "ADAPT"]}
      >
        <CTAButton to="/programs" variant="primary">Build LQ™ Skills <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/contact" variant="secondary">Talk to Us</CTAButton>
      </PageHero>

      <Section eyebrow="Why LQ™ matters" title="Knowledge alone does not determine success.">
        <p className="max-w-3xl text-lg text-[color:var(--charcoal)] leading-relaxed">
          The ability to apply intelligence effectively in real-life situations enables people to navigate complexity,
          lead confidently, build relationships, adapt, and create meaningful impact. LQ™ is the WayMaker Skills™
          framework that maps the five dimensions of applied intelligence — and develops them together so growth is durable.
        </p>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="The five dimensions" title="Five lenses, one capable human." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {LQ_DIMENSIONS.map((d, i) => (
            <Reveal key={d.code} delay={i * 70}>
              <article className="card-lift gradient-border h-full rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft">
                <div className="text-xs tracking-widest font-semibold text-[color:var(--gold)]">
                  DIMENSION 0{i + 1}
                </div>
                <h3 className="font-display text-3xl text-[color:var(--teal-dark)] mt-1">{d.code}</h3>
                <div className="text-sm font-semibold text-[color:var(--teal-deep)]">{d.name}</div>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--charcoal)]">
                  {d.skills.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="From intelligence to capability" title="What LQ™ becomes in practice." center>
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="LQ™ in real life" title="Built for every life stage." center>
        <AudienceCards items={APPLIES} />
      </Section>

      <Section className="bg-[color:var(--teal-dark)] text-white" title="" center>
        <h2 className="text-white text-4xl md:text-5xl">Start building Life Intelligence.</h2>
        <p className="mt-5 max-w-2xl mx-auto text-white/85 text-lg leading-relaxed">
          LQ™ maps to our programs across leadership, communication, emotional intelligence, future skills,
          and well-being — so growth is structured, integrated, and measurable.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <CTAButton to="/programs" variant="gold">Explore Programs</CTAButton>
          <CTAButton to="/contact" variant="ghost">Talk to Us</CTAButton>
        </div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
