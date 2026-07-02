import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Compass,
  ExternalLink,
  HeartHandshake,
  MessagesSquare,
  Sparkles,
  Target,
} from "lucide-react";
import { QuoteBlock } from "@/components/site/Blocks";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { CONTACT } from "@/data/site";
import { ROUTES } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

const PHILOSOPHY = [
  {
    icon: Brain,
    title: "Human growth",
    desc: "Development begins with the person, not just the role.",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    desc: "Clear thinking and clear expression shape trust and leadership.",
  },
  {
    icon: HeartHandshake,
    title: "Emotional maturity",
    desc: "Inner awareness is a foundation for outer influence.",
  },
  {
    icon: Compass,
    title: "Purpose",
    desc: "Growth should move toward meaning, responsibility, and contribution.",
  },
  {
    icon: Sparkles,
    title: "Experiential learning",
    desc: "People change more through practice and reflection than information alone.",
  },
  {
    icon: Target,
    title: "Applied capability",
    desc: "Insight matters when it becomes behavior and action.",
  },
];

const FAQS = [
  {
    q: "Who is Sanjo Mathew?",
    a: "Sanjo Mathew is the founder of WayMaker Skills™ and the person behind its human development vision, frameworks, and learning direction.",
  },
  {
    q: "Is Sanjo Mathew’s personal website the same as WayMaker Skills™?",
    a: "No. sanjo.in is Sanjo Mathew’s personal brand and profile website. WayMaker Skills™ is the company website and organizational platform.",
  },
  {
    q: "What is Sanjo Mathew’s role in WayMaker Skills™?",
    a: "She shapes the philosophy, developmental direction, and strategic vision behind the organization’s frameworks, programs, and long-term growth.",
  },
  {
    q: "What areas of work shape her approach?",
    a: "Her work brings together human development, psychology, leadership, life skills, communication, mentoring, and experiential learning.",
  },
];

export const Route = createFileRoute("/sanjo-mathew-founder")({
  head: () => ({
    ...pageMeta({
      title: "Sanjo Mathew | Founder of WayMaker Skills™",
      description:
        "Meet Sanjo Mathew, founder of WayMaker Skills™, and understand the human development philosophy behind the organization’s work.",
      path: ROUTES.founder,
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Sanjo Mathew",
        jobTitle: "Founder, WayMaker Skills™",
        url: CONTACT.founderSite,
        worksFor: { "@type": "Organization", name: "WayMaker Skills™" },
      }),
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "Sanjo Mathew", path: ROUTES.founder },
        ]),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Founder of WayMaker Skills™"
        title="Sanjo Mathew"
        subtitle="Founder of WayMaker Skills™, a human development organization helping individuals, educators, leaders, and organizations transform potential into purposeful capability."
        badges={["Founder", "Human development", "Leadership", "Life skills"]}
      >
        <a
          href={CONTACT.founderSite}
          target="_blank"
          rel="noreferrer"
          className="btn-shine inline-flex items-center gap-2 rounded-full bg-teal-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-elegant"
        >
          Visit sanjo.in <ExternalLink className="h-4 w-4" />
        </a>
        <CTAButton to={ROUTES.about} variant="secondary">
          About WayMaker Skills™
        </CTAButton>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-teal-gradient p-10 text-white shadow-elegant">
              <div
                className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[color:var(--gold)]/30 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-[color:var(--gold)] text-5xl text-[color:var(--teal-dark)] shadow-gold">
                  SM
                </div>
                <h2 className="mt-6 font-display text-3xl text-white">Sanjo Mathew</h2>
                <p className="mt-1 text-sm text-white/80">Founder, WayMaker Skills™</p>
                <p className="mt-6 text-sm leading-relaxed text-white/85">
                  For Sanjo Mathew's personal profile, books, articles, and thought leadership,
                  visit{" "}
                  <a
                    className="underline underline-offset-4"
                    href={CONTACT.founderSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    sanjo.in
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5 text-lg leading-relaxed text-[color:var(--charcoal)]">
            <Reveal>
              <h2 className="mb-2 text-3xl md:text-4xl">Founder’s vision</h2>
              <p>
                WayMaker Skills™ was founded on a simple belief: human potential flourishes when
                development is intentional.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                Academic knowledge and technical expertise are important, but they are only part of
                what people need to thrive. Confidence, judgment, communication, leadership,
                resilience, and purposeful action are developed intentionally—not acquired by
                information alone.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Drawing on psychology, education, leadership, behavioural science, and experiential
                learning, Sanjo Mathew created WayMaker Skills™ as a platform where these
                disciplines work together to develop practical human capability.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p>
                Today, WayMaker Skills™ serves schools, organizations, leaders, families, and
                individuals through integrated frameworks, learning experiences, and development
                programs that transform knowledge into practical capability.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Leadership philosophy"
        title="The principles that shape the founder’s work."
        center
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PHILOSOPHY.map((item, index) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} delay={index * 60}>
              {item.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Company and personal platform"
        title="Two distinct platforms, one clear boundary."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
              Personal brand
            </div>
            <h3 className="mt-2 font-display text-2xl text-[color:var(--teal-dark)]">sanjo.in</h3>
            <p className="mt-3 leading-relaxed text-[color:var(--muted-ink)]">
              sanjo.in is Sanjo Mathew's personal platform for his profile, books, articles,
              speaking, and thought leadership. It reflects his individual work as the founder of
              WayMaker Skills™.
            </p>
          </div>
          <div className="rounded-3xl bg-teal-gradient p-8 text-white shadow-elegant">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold-soft)]">
              Company website
            </div>
            <h3 className="mt-2 font-display text-2xl text-white">WayMaker Skills™</h3>
            <p className="mt-3 leading-relaxed text-white/85">
              This is the official platform for WayMaker Skills™, bringing together our frameworks,
              development programs, learning experiences, and organizational partnerships.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton to={ROUTES.programs} variant="gold">
                Explore Programs <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton to={ROUTES.contact} variant="ghost">
                Contact the Team
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <QuoteBlock
          quote="Human development becomes powerful when insight is transformed into intentional action."
          author="Dr. Sanjo Cine Mathew"
          role="Founder, WayMaker Skills™"
        />
      </Section>

      <Section eyebrow="FAQ" title="Founder questions." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA
        title="Explore the organization Sanjo Mathew founded."
        text="If you want to understand the frameworks, services, and programs behind the vision, start with the main WayMaker Skills™ pathways."
      />
      <div className="h-16" />
    </Layout>
  );
}
