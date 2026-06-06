import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { pageMeta, jsonLd } from "@/lib/seo";
import {
  PROGRAMS, AUDIENCES, LQ_DIMENSIONS, FAQS_GENERAL, EYEBROW, TAGLINE, LOGO,
} from "@/data/site";
import {
  Brain, HeartHandshake, MessagesSquare, Compass, Sparkles, Target,
  GraduationCap, Users, BookOpen, Briefcase, Lightbulb, ShieldCheck,
  Microscope, Globe2, Scale, Layers, ArrowRight, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: "WayMaker Skills\u2122 — Transforming Potential into Purpose",
      description:
        "Human development and applied intelligence for individuals, educators, leaders, and organizations. Discover NOVA\u2122, LQ\u2122, and our programs.",
      path: "/",
    }),
    scripts: [jsonLd(faqJsonLd(FAQS_GENERAL))],
  }),
  component: HomePage,
});

const HERO_CARDS = [
  { icon: Compass, label: "Leadership" },
  { icon: HeartHandshake, label: "Emotional Intelligence" },
  { icon: MessagesSquare, label: "Communication" },
  { icon: Sparkles, label: "Future Skills" },
  { icon: ShieldCheck, label: "Well-being" },
  { icon: Target, label: "Purpose" },
];

const WHY = [
  "Think critically", "Communicate effectively", "Lead responsibly", "Adapt confidently",
  "Build meaningful relationships", "Make sound decisions", "Transform ideas into action",
];

const WHAT_WE_DO = [
  { icon: Users, title: "Human Development Programs", desc: "Holistic growth across mindset, behavior, and skills." },
  { icon: Compass, title: "Leadership Development", desc: "From self-leadership to leading teams and systems." },
  { icon: MessagesSquare, title: "Communication Excellence", desc: "Speak, listen, and influence with clarity." },
  { icon: HeartHandshake, title: "Emotional Intelligence", desc: "Awareness, regulation, empathy, and resilience." },
  { icon: Sparkles, title: "Future Skills Development", desc: "Adaptability, creativity, and lifelong learning." },
  { icon: ShieldCheck, title: "Well-being & Resilience", desc: "Sustainable performance in life and work." },
  { icon: Lightbulb, title: "Coaching & Mentoring", desc: "Personalized growth journeys for individuals and leaders." },
  { icon: Microscope, title: "Assessments & Tools", desc: "Insight-led diagnostics that turn awareness into action." },
];

const DIFFERENCE = [
  { icon: Brain, title: "Psychology-based" },
  { icon: GraduationCap, title: "Experiential" },
  { icon: Globe2, title: "Future-focused" },
  { icon: Layers, title: "Holistic" },
  { icon: Scale, title: "Measurable" },
  { icon: Target, title: "Purpose-driven" },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-[color:var(--gold)]/25 blur-3xl floaty" aria-hidden />
        <div className="absolute -bottom-32 -left-24 w-[40rem] h-[40rem] rounded-full bg-[color:var(--teal-deep)]/25 blur-3xl floaty" aria-hidden />
        <div className="container-prose relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="reveal">
            <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--teal-deep)] font-semibold mb-5">{EYEBROW}</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              <span className="text-gradient-teal">WayMaker Skills</span>
              <span className="text-[color:var(--gold)] align-top text-2xl ml-1">\u2122</span>
            </h1>
            <p className="mt-5 text-2xl md:text-3xl font-display text-[color:var(--teal-dark)] italic">{TAGLINE}</p>
            <p className="mt-6 text-lg text-[color:var(--muted-ink)] leading-relaxed max-w-xl">
              WayMaker Skills\u2122 helps individuals, learners, educators, leaders, professionals, and organizations
              develop the intelligence, skills, confidence, and purpose-driven capabilities needed to thrive in life,
              learning, leadership, and work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/programs">Explore Programs <ArrowRight className="h-4 w-4" /></CTAButton>
              <CTAButton to="/contact" variant="secondary">Partner With Us</CTAButton>
            </div>
          </div>
          <div className="relative reveal" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-[color:var(--gold)]/30 blur-3xl glow" aria-hidden />
              <img src={LOGO} alt="WayMaker Skills logo" width={480} height={480} className="relative w-full drop-shadow-2xl" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {HERO_CARDS.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl bg-white/80 backdrop-blur border border-white/60 p-3 text-center shadow-soft card-lift">
                  <Icon className="h-5 w-5 mx-auto text-[color:var(--teal-deep)]" />
                  <div className="mt-1 text-[11px] font-semibold text-[color:var(--teal-dark)]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <Section eyebrow="Why Human Development Matters" title="Success today asks for more than knowledge."
        subtitle="The world is changing faster than curricula and corporate playbooks can keep up. People need deeper capabilities to navigate it well." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY.map((w) => (
            <div key={w} className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft text-center">
              <Star className="h-5 w-5 mx-auto text-[color:var(--gold)] mb-2" />
              <div className="font-semibold text-[color:var(--teal-dark)]">{w}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT WE DO */}
      <Section className="bg-gradient-to-b from-white to-[color:var(--teal-light)]"
        eyebrow="What We Do" title="A complete human development practice." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHAT_WE_DO.map((c) => (
            <FeatureCard key={c.title} icon={c.icon} title={c.title}>{c.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      {/* DIFFERENCE */}
      <Section eyebrow="The WayMaker Difference" title="Built on principles, designed for impact." center>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {DIFFERENCE.map(({ icon: Icon, title }) => (
            <div key={title} className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-6 text-center shadow-soft">
              <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-teal-gradient flex items-center justify-center text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div className="font-semibold text-[color:var(--teal-dark)]">{title}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* NOVA TEASER */}
      <Section className="bg-[color:var(--teal-dark)] text-white">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold-soft)] font-semibold mb-3">Methodology</div>
            <h2 className="text-white text-4xl md:text-5xl leading-tight">The NOVA\u2122 Human Development Methodology</h2>
            <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-2xl">
              NOVA\u2122 is the evidence-informed methodology used by WayMaker Skills\u2122 to transform awareness into
              action and potential into performance. It integrates psychology, human development, behavioral science,
              leadership principles, future skills, and experiential learning.
            </p>
            <div className="mt-6">
              <CTAButton to="/nova" variant="gold">Discover NOVA\u2122 <ArrowRight className="h-4 w-4" /></CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { l: "N", w: "Notice" }, { l: "O", w: "Own" },
              { l: "V", w: "Visualize" }, { l: "A", w: "Act" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-6">
                <div className="font-display text-5xl text-[color:var(--gold)]">{s.l}</div>
                <div className="mt-2 text-white font-semibold">{s.w}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LQ */}
      <Section eyebrow="LQ\u2122 Framework" title="Five dimensions of life intelligence." center
        subtitle="Knowledge alone does not determine success. The ability to apply intelligence in real-life situations does.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {LQ_DIMENSIONS.map((d, i) => (
            <div key={d.code} className="card-lift rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft">
              <div className="text-xs tracking-widest font-semibold text-[color:var(--gold)]">0{i + 1}</div>
              <div className="font-display text-3xl text-[color:var(--teal-dark)] mt-1">{d.code}</div>
              <div className="text-sm text-[color:var(--muted-ink)] mt-1">{d.name}</div>
              <ul className="mt-4 space-y-1 text-sm text-[color:var(--charcoal)]">
                {d.skills.map((s) => <li key={s} className="before:content-['•'] before:text-[color:var(--gold)] before:mr-2">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton to="/lq" variant="secondary">Explore LQ\u2122 Framework</CTAButton>
        </div>
      </Section>

      {/* WHO WE SERVE */}
      <Section className="bg-[color:var(--ivory)]" eyebrow="Who We Serve" title="Designed for the people who shape lives." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft">
              <div className="font-display text-xl text-[color:var(--teal-dark)]">{a.title}</div>
              <p className="mt-2 text-sm text-[color:var(--muted-ink)]">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURED PROGRAMS */}
      <Section eyebrow="Featured Programs" title="Where transformation begins." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.slice(0, 6).map((p) => (
            <Link key={p.slug} to={"/programs" as any}
              className="card-lift group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft block">
              <Briefcase className="h-5 w-5 text-[color:var(--gold)]" />
              <h3 className="font-display text-2xl text-[color:var(--teal-dark)] mt-3">{p.title}</h3>
              <p className="mt-2 text-[color:var(--muted-ink)] text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-4 text-sm font-semibold text-[color:var(--teal-deep)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton to="/programs">See All Programs</CTAButton>
        </div>
      </Section>

      {/* WAMI */}
      <Section className="bg-gradient-to-br from-[color:var(--teal-light)] to-[color:var(--ivory)]">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--teal-deep)] font-semibold mb-3">For Children</div>
            <h2 className="text-4xl md:text-5xl">WAMI\u2122 — The Superstar of Skills</h2>
            <p className="mt-5 text-[color:var(--muted-ink)] text-lg leading-relaxed">
              WAMI\u2122 is the children's learning ecosystem of WayMaker Skills\u2122. Through stories, challenges,
              activity books, games, and experiential learning, WAMI\u2122 helps children develop confidence,
              creativity, communication, character, and future-ready life skills.
            </p>
            <div className="mt-6">
              <CTAButton to="/wami" variant="gold">Discover WAMI\u2122</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Stories", "Challenges", "Activity Books", "Games", "Creativity", "Character"].map((t) => (
              <div key={t} className="rounded-2xl bg-white p-5 shadow-soft border border-white/80 card-lift text-center">
                <BookOpen className="h-5 w-5 mx-auto text-[color:var(--gold)] mb-2" />
                <div className="font-semibold text-[color:var(--teal-dark)]">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FOUNDER */}
      <Section eyebrow="Founder" title="A vision rooted in human potential.">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <p className="text-lg text-[color:var(--charcoal)] leading-relaxed">
              Founded by <strong>Sanjo Mathew</strong>, WayMaker Skills\u2122 brings together psychology, education,
              leadership, mentoring, coaching, and experiential learning to create meaningful human development experiences.
            </p>
            <p className="mt-4 text-[color:var(--muted-ink)]">
              Sanjo's personal profile is available at <a className="text-[color:var(--teal-deep)] underline underline-offset-4" href="https://sanjo.in" target="_blank" rel="noreferrer">sanjo.in</a>.
            </p>
            <div className="mt-6 flex gap-3">
              <CTAButton to="/founder">Meet the Founder</CTAButton>
            </div>
          </div>
          <div className="rounded-3xl bg-teal-gradient p-8 text-white shadow-elegant">
            <div className="text-sm tracking-widest uppercase text-[color:var(--gold-soft)] mb-2">Founder's note</div>
            <p className="font-display text-2xl leading-snug">
              "Human potential develops best when we work on the whole person — mind, heart, and action."
            </p>
          </div>
        </div>
      </Section>

      {/* RESOURCES */}
      <Section className="bg-[color:var(--ivory)]" eyebrow="Resources" title="Ideas worth growing with." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Leadership","Emotional Intelligence","Parenting","Student Development","Communication","Well-being","Future Skills","Human Development"].map((c) => (
            <Link key={c} to={"/resources" as any} className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft block">
              <BookOpen className="h-5 w-5 text-[color:var(--gold)]" />
              <div className="font-display text-xl text-[color:var(--teal-dark)] mt-3">{c}</div>
              <div className="text-sm text-[color:var(--muted-ink)] mt-1">Read articles & guides</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Common questions, answered." center>
        <div className="max-w-3xl mx-auto">
          <FAQList items={FAQS_GENERAL} />
        </div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
