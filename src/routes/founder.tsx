import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { QuoteBlock } from "@/components/site/Blocks";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import {
  ExternalLink, Brain, MessagesSquare, HeartHandshake, Compass, Sparkles, Target, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/founder")({
  head: () => ({
    ...pageMeta({
      title: "Founder — Sanjo Mathew | WayMaker Skills™",
      description:
        "Sanjo Mathew is the founder of WayMaker Skills™, a human development organization for individuals, educators, leaders, and institutions.",
      path: "/founder",
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Sanjo Mathew",
        jobTitle: "Founder, WayMaker Skills™",
        url: "https://sanjo.in",
        worksFor: { "@type": "Organization", name: "WayMaker Skills™" },
      }),
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Founder", path: "/founder" }])),
    ],
  }),
  component: FounderPage,
});

const PHILOSOPHY = [
  { icon: Brain, title: "Psychology-informed growth", desc: "Rooted in how people actually learn and change." },
  { icon: Sparkles, title: "Practical learning", desc: "Built for real life, real work, real classrooms." },
  { icon: HeartHandshake, title: "Emotional intelligence", desc: "The inner skills behind every outer result." },
  { icon: MessagesSquare, title: "Communication", desc: "Clear thinking, clear speaking, clear connection." },
  { icon: Compass, title: "Leadership", desc: "Self-leadership first, then leading people and systems." },
  { icon: Target, title: "Purposeful action", desc: "From insight to behavior to lasting capability." },
];

function FounderPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Founder of WayMaker Skills™"
        title="Sanjo Mathew"
        subtitle="The human development vision behind the organization."
        badges={["Human development", "Psychology & life skills", "Leadership & mentoring", "Speaker & educator"]}
      >
        <a href="https://sanjo.in" target="_blank" rel="noreferrer"
          className="btn-shine inline-flex items-center gap-2 rounded-full bg-teal-gradient text-white px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all">
          Visit sanjo.in <ExternalLink className="h-4 w-4" />
        </a>
        <CTAButton to="/programs" variant="secondary">Explore WayMaker Skills™</CTAButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <Reveal>
            <div className="relative rounded-3xl bg-teal-gradient text-white p-10 shadow-elegant overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[color:var(--gold)]/30 blur-3xl glow" aria-hidden />
              <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" aria-hidden />
              <div className="relative">
                <div className="h-28 w-28 rounded-2xl bg-[color:var(--gold)] text-[color:var(--teal-dark)] flex items-center justify-center font-display text-5xl shadow-gold">
                  SM
                </div>
                <h2 className="text-white font-display text-3xl mt-6">Sanjo Mathew</h2>
                <div className="text-white/80 text-sm mt-1">Founder, WayMaker Skills™</div>
                <div className="mt-6 text-sm text-white/85 leading-relaxed">
                  Personal brand & profile —{" "}
                  <a className="underline underline-offset-4" href="https://sanjo.in" target="_blank" rel="noreferrer">sanjo.in</a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5 text-[color:var(--charcoal)] leading-relaxed text-lg">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-2">Founder's vision</h2>
              <p>
                WayMaker Skills™ was created to help people think better, lead better, live better, and
                transform potential into purposeful action. The organization brings together human development,
                applied intelligence, and meaningful learning experiences for individuals, schools, leaders,
                and institutions.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Sanjo's work integrates psychology, life skills, leadership, education, and mentoring into
                programs designed for real-world capability building. Through WayMaker Skills™, that work
                becomes scalable — across audiences, formats, and contexts.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Human development philosophy" title="Six lenses that shape every program." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHILOSOPHY.map((p, i) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} delay={i * 60}>{p.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="From personal brand to company vision" title="Two distinct platforms, one shared purpose.">
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-3xl bg-white border border-[color:var(--border)] p-8 shadow-soft h-full">
              <div className="text-xs tracking-widest uppercase text-[color:var(--gold)] font-semibold">Personal brand</div>
              <h3 className="font-display text-2xl text-[color:var(--teal-dark)] mt-2">sanjo.in</h3>
              <p className="mt-3 text-[color:var(--muted-ink)] leading-relaxed">
                Sanjo's personal writing, speaking, and individual profile remain at sanjo.in — his personal
                brand and home on the web.
              </p>
              <a href="https://sanjo.in" target="_blank" rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal-deep)]">
                Visit sanjo.in <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-teal-gradient text-white p-8 shadow-elegant h-full relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-[color:var(--gold)]/25 blur-3xl" aria-hidden />
              <div className="text-xs tracking-widest uppercase text-[color:var(--gold-soft)] font-semibold relative">Company / organization</div>
              <h3 className="font-display text-2xl mt-2 relative">WayMaker Skills™</h3>
              <p className="mt-3 text-white/85 leading-relaxed relative">
                The organization platform created to deliver human development, life skills, leadership, and
                applied intelligence programs at scale — for schools, organizations, leaders, and communities.
              </p>
              <CTAButton to="/programs" variant="gold">
                Explore Programs <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <QuoteBlock
          quote="WayMaker Skills™ exists to help people move from potential to purposeful action through meaningful learning, reflection, and real-world capability building."
          author="Sanjo Mathew"
          role="Founder, WayMaker Skills™"
        />
      </Section>

      <FinalCTA
        title="Build human potential with WayMaker Skills™."
        text="Learn more about Sanjo at sanjo.in, or explore the WayMaker Skills™ programs designed for your audience."
      />
      <div className="h-16" />
    </Layout>
  );
}
