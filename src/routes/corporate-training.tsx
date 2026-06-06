import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import { Compass, MessagesSquare, HeartHandshake, ShieldCheck, Users, Sparkles, Briefcase, Layers } from "lucide-react";

const SECTIONS = [
  { icon: Compass, title: "Leadership Development", desc: "From frontline managers to senior leaders." },
  { icon: MessagesSquare, title: "Communication & Collaboration", desc: "Clarity, listening, influence, and team communication." },
  { icon: HeartHandshake, title: "Emotional Intelligence at Work", desc: "Self-awareness, empathy, and relationship effectiveness." },
  { icon: ShieldCheck, title: "Resilience & Well-being", desc: "Sustainable performance and mental fitness." },
  { icon: Users, title: "Team Effectiveness", desc: "Trust, alignment, accountability, and results." },
  { icon: Sparkles, title: "Future-Ready Workplace Skills", desc: "Adaptability, creativity, and learning agility." },
  { icon: Briefcase, title: "Manager Capability Building", desc: "Coaching, feedback, and people development." },
  { icon: Layers, title: "Culture & Behavioral Transformation", desc: "Beliefs and behaviors that shape your organization." },
];

const OUTCOMES = [
  "Better communication", "Stronger leadership", "Improved collaboration",
  "Higher accountability", "Greater adaptability", "Healthier workplace culture",
];

const FAQS = [
  { q: "Do you customize for our industry?", a: "Yes. Programs are tailored to your context, leaders, and outcomes." },
  { q: "Do you measure impact?", a: "We design measurable behavior and capability outcomes for every engagement." },
  { q: "Can you run hybrid or online?", a: "Yes — on-site, hybrid, and online formats are all supported." },
];

export const Route = createFileRoute("/corporate-training")({
  head: () => ({
    ...pageMeta({
      title: "Corporate Training",
      description:
        "Leadership, communication, emotional intelligence, well-being, and future-ready capability building for corporate teams.",
      path: "/corporate-training",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Corporate Training", path: "/corporate-training" }])),
      jsonLd(serviceLd("Corporate Training", "Human development and capability building for organizations.", "/corporate-training")),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="For Organizations" title="Corporate training that develops people, not just performs delivery."
        subtitle="Behavior-shifting programs across leadership, communication, EI, resilience, and future skills — built around your context and outcomes." />

      <Section eyebrow="What we offer" title="A complete capability portfolio." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SECTIONS.map((s) => (
            <FeatureCard key={s.title} icon={s.icon} title={s.title}>{s.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Outcomes" title="Designed for real organizational impact." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {OUTCOMES.map((o) => (
            <div key={o} className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-5 text-center shadow-soft">
              <div className="font-semibold text-[color:var(--teal-dark)]">{o}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/contact" variant="gold">Discuss a Corporate Program</CTAButton>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Corporate program questions." center>
        <div className="max-w-3xl mx-auto"><FAQList items={FAQS} /></div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
