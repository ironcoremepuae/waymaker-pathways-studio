import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Timeline, AudienceCards } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { PROGRAMS, AUDIENCES } from "@/data/site";
import {
  ArrowRight, Sparkles, Users, Calendar, GraduationCap, Briefcase, BookOpen, Wrench,
} from "lucide-react";

const FAQS = [
  { q: "Are programs customized?", a: "Yes — every engagement is shaped to the audience, context, and outcomes you need." },
  { q: "Can you run programs in our location?", a: "We run programs on-site, hybrid, and online. We'll recommend the best format together." },
  { q: "What duration are programs?", a: "From short workshops to multi-month journeys, depending on depth and outcomes." },
  { q: "How are programs measured?", a: "We define behavioral and capability outcomes upfront and design reflection and application checkpoints into the journey." },
];

const TABS = ["All", "Schools", "Students", "Parents", "Professionals", "Corporate", "Leadership", "Children", "Personal Growth", "Youth"];

const FORMATS = [
  { icon: Calendar, title: "Workshops", desc: "Half-day or full-day focused experiences." },
  { icon: BookOpen, title: "Training Programs", desc: "Multi-session journeys for depth." },
  { icon: Users, title: "Cohort Programs", desc: "Group learning with structured progression." },
  { icon: Sparkles, title: "Coaching", desc: "1:1 guided growth for individuals." },
  { icon: Briefcase, title: "Mentoring", desc: "Long-term capability and direction." },
  { icon: GraduationCap, title: "School Programs", desc: "Whole-school human development." },
  { icon: Wrench, title: "Assessments", desc: "Insight-led diagnostics for development." },
  { icon: Sparkles, title: "Activity-Based Learning", desc: "Experiential, playful, applied." },
];

const PROCESS = [
  { title: "Understand audience", desc: "Listen for context, people, and goals." },
  { title: "Define outcomes", desc: "Clarify the behavioral and capability shifts that matter." },
  { title: "Design experience", desc: "Customize the program for your reality." },
  { title: "Deliver program", desc: "Facilitate with depth, energy, and applied focus." },
  { title: "Reflect & improve", desc: "Capture insight, embed learning, design next." },
];

export const Route = createFileRoute("/programs")({
  head: () => ({
    ...pageMeta({
      title: "Programs — WayMaker Skills™",
      description:
        "Development experiences for learners, educators, professionals, leaders, families, and organizations — the full WayMaker Skills™ program portfolio.",
      path: "/programs",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Programs", path: "/programs" }])),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? PROGRAMS : PROGRAMS.filter((p) => p.tag === active || p.best.toLowerCase().includes(active.toLowerCase()))),
    [active]
  );

  return (
    <Layout>
      <PageHero
        eyebrow="Programs"
        title="Programs by WayMaker Skills™."
        subtitle="Development experiences for learners, educators, professionals, leaders, families, and organizations."
        badges={["Customizable", "Outcome-focused", "On-site · Hybrid · Online", "All ages"]}
      >
        <CTAButton to="/contact" variant="primary">Find a Program <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/contact" variant="secondary">Contact Us</CTAButton>
      </PageHero>

      <Section eyebrow="Designed for" title="Audiences we serve." center>
        <AudienceCards items={AUDIENCES.map((a) => ({ icon: Sparkles, title: a.title, desc: a.desc }))} />
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="All programs" title="The full portfolio." center>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === t
                  ? "bg-teal-gradient text-white shadow-soft"
                  : "bg-white border border-[color:var(--border)] text-[color:var(--teal-deep)] hover:border-[color:var(--teal-deep)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => {
            const link = ["leadership", "communication", "emotional-intelligence", "coaching-mentoring", "wami"].includes(p.slug)
              ? `/${p.slug}` : "/contact";
            return (
              <Reveal key={p.slug} delay={i * 40}>
                <Link to={link as any}
                  className="card-lift gradient-border group h-full rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft block">
                  <div className="text-xs tracking-widest uppercase font-semibold text-[color:var(--gold)]">{p.tag}</div>
                  <h3 className="font-display text-2xl text-[color:var(--teal-dark)] mt-2">{p.title}</h3>
                  <p className="mt-2 text-[color:var(--muted-ink)] text-sm leading-relaxed">{p.desc}</p>
                  <div className="mt-4 text-xs uppercase tracking-widest text-[color:var(--teal-deep)] font-semibold">Best for</div>
                  <div className="text-sm text-[color:var(--charcoal)]">{p.best}</div>
                  <div className="mt-5 text-sm font-semibold text-[color:var(--teal-deep)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Program delivery formats" title="Flexible by design." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FORMATS.map((f, i) => (
            <Reveal key={f.title} delay={i * 50}>
              <div className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--teal-light)] text-[color:var(--teal-deep)]">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-lg text-[color:var(--teal-dark)]">{f.title}</div>
                <div className="text-sm text-[color:var(--muted-ink)] mt-1.5">{f.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="How we customize programs" title="Built around your context." center>
        <Timeline steps={PROCESS} />
      </Section>

      <Section eyebrow="FAQ" title="Program questions." center>
        <div className="max-w-3xl mx-auto"><FAQList items={FAQS} /></div>
      </Section>

      <FinalCTA title="Tell us your audience and goals." />
      <div className="h-16" />
    </Layout>
  );
}
