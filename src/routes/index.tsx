import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta, jsonLd } from "@/lib/seo";
import {
  PROGRAMS, AUDIENCES, LQ_DIMENSIONS, NOVA_STEPS, FAQS_GENERAL, GROWTH_PATHS,
  OUTCOMES, ENGAGEMENT_STEPS, TAGLINE, LOGO, BRAND,
} from "@/data/site";
import {
  Brain, HeartHandshake, MessagesSquare, Compass, Sparkles, Target,
  GraduationCap, Users, BookOpen, Lightbulb, ShieldCheck,
  Microscope, Globe2, Scale, Layers, ArrowRight, Star,
  School, Baby, Briefcase, Building2, Crown, UserCircle2,
  Eye, Flag, TelescopeIcon, Rocket, ChevronDown, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: "WayMaker Skills™ — Transforming Potential into Purpose",
      description:
        "Human development and applied intelligence for individuals, educators, leaders, and organizations. Discover NOVA™, LQ™, and our programs.",
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
  { icon: Brain, t: "Think critically", d: "Reason clearly in a noisy, fast-changing world." },
  { icon: MessagesSquare, t: "Communicate effectively", d: "Speak, listen, and influence with clarity." },
  { icon: Crown, t: "Lead responsibly", d: "Decisions grounded in values and impact." },
  { icon: Sparkles, t: "Adapt confidently", d: "Move with change instead of resisting it." },
  { icon: HeartHandshake, t: "Build relationships", d: "Trust, empathy, and meaningful connection." },
  { icon: Scale, t: "Make sound decisions", d: "Frameworks that turn judgment into action." },
];

const WHAT_WE_DO = [
  { icon: Compass, title: "Leadership Development", desc: "From self-leadership to leading teams and systems.", badge: "Capability", span: "lg:col-span-2 lg:row-span-2", featured: true },
  { icon: HeartHandshake, title: "Emotional Intelligence", desc: "Awareness, regulation, empathy, resilience." , badge: "Behavior" },
  { icon: MessagesSquare, title: "Communication Excellence", desc: "Clarity, listening, presence, influence.", badge: "Skill" },
  { icon: Sparkles, title: "Future Skills", desc: "Adaptability, creativity, lifelong learning.", badge: "Mindset", span: "lg:col-span-2" },
  { icon: Lightbulb, title: "Coaching & Mentoring", desc: "Personalized growth journeys.", badge: "1:1" },
  { icon: ShieldCheck, title: "Well-being & Resilience", desc: "Sustainable performance.", badge: "Health" },
  { icon: Microscope, title: "Assessments & Tools", desc: "Diagnostics that turn awareness into action.", badge: "Insight" },
];

const DIFFERENCE = [
  { icon: Brain, title: "Psychology-based", d: "Grounded in human behavior research." },
  { icon: GraduationCap, title: "Experiential", d: "Learning through reflection and practice." },
  { icon: Globe2, title: "Future-focused", d: "Built for the world that's coming." },
  { icon: Layers, title: "Holistic", d: "Mind, heart, and action — together." },
  { icon: Scale, title: "Measurable", d: "Outcomes you can see and sustain." },
  { icon: Target, title: "Purpose-driven", d: "Capability shaped by meaning." },
];

const GROWTH_ICONS = [School, GraduationCap, Users, Briefcase, Building2, Crown, Baby];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-[color:var(--gold)]/25 blur-3xl floaty" aria-hidden />
        <div className="absolute -bottom-32 -left-24 w-[40rem] h-[40rem] rounded-full bg-[color:var(--teal-deep)]/25 blur-3xl floaty" aria-hidden />
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden />

        <div className="container-prose relative grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-white/60 px-4 py-1.5 text-[11px] tracking-[0.22em] uppercase text-[color:var(--teal-deep)] font-semibold shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              Human Development · Applied Intelligence
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              <span className="text-gradient-teal">WayMaker Skills</span>
              <span className="text-[color:var(--gold)] align-top text-2xl ml-1">™</span>
            </h1>
            <div className="mt-5 relative inline-block">
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[color:var(--gold)]/35 -z-10 rounded" aria-hidden />
              <p className="font-display italic text-2xl md:text-3xl text-[color:var(--teal-dark)]">{TAGLINE}</p>
            </div>
            <p className="mt-6 text-lg text-[color:var(--muted-ink)] leading-relaxed max-w-xl">
              {BRAND} helps individuals, learners, educators, leaders, professionals, and organizations
              build the intelligence, skills, confidence, and purpose-driven capabilities needed to thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact" className="btn-shine">Book a Discovery Call <ArrowRight className="h-4 w-4" /></CTAButton>
              <CTAButton to="/programs" variant="secondary">Explore Programs</CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-[color:var(--muted-ink)] font-semibold">
              <span className="text-[color:var(--teal-deep)]">Built for</span>
              <span>Schools</span><span>•</span><span>Professionals</span><span>•</span>
              <span>Leaders</span><span>•</span><span>Organizations</span>
            </div>
          </div>

          <div className="relative reveal" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto max-w-md aspect-square">
              <div className="absolute inset-6 rounded-full bg-[color:var(--gold)]/35 blur-3xl glow" aria-hidden />
              <div className="absolute inset-0 rounded-full bg-[color:var(--teal-deep)]/20 blur-3xl" aria-hidden />
              <img src={LOGO} alt="" width={480} height={480} className="relative w-full drop-shadow-2xl floaty" />

              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 glass rounded-2xl px-3 py-2 shadow-glass hidden sm:flex items-center gap-2">
                <Compass className="h-4 w-4 text-[color:var(--teal-deep)]" />
                <span className="text-xs font-semibold text-[color:var(--teal-dark)]">Leadership</span>
              </div>
              <div className="absolute top-1/3 -right-6 glass rounded-2xl px-3 py-2 shadow-glass hidden sm:flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-[color:var(--gold)]" />
                <span className="text-xs font-semibold text-[color:var(--teal-dark)]">Emotional IQ</span>
              </div>
              <div className="absolute -bottom-2 left-6 glass rounded-2xl px-3 py-2 shadow-glass hidden sm:flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[color:var(--teal-deep)]" />
                <span className="text-xs font-semibold text-[color:var(--teal-dark)]">Future Skills</span>
              </div>
              <div className="absolute bottom-10 -right-2 glass rounded-2xl px-3 py-2 shadow-glass hidden md:flex items-center gap-2">
                <Target className="h-4 w-4 text-[color:var(--gold)]" />
                <span className="text-xs font-semibold text-[color:var(--teal-dark)]">Purpose</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 lg:hidden">
              {HERO_CARDS.slice(0,6).map(({ icon: Icon, label }) => (
                <div key={label} className="glass rounded-xl p-3 text-center">
                  <Icon className="h-5 w-5 mx-auto text-[color:var(--teal-deep)]" />
                  <div className="mt-1 text-[11px] font-semibold text-[color:var(--teal-dark)]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center text-[color:var(--teal-deep)]/70">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-1">Scroll</span>
          <ChevronDown className="h-4 w-4 scroll-hint" />
        </div>
      </section>

      {/* CHOOSE YOUR GROWTH PATH */}
      <Section eyebrow="Choose Your Growth Path" title="Find the right WayMaker Skills™ experience."
        subtitle="One framework, many doorways. Pick the audience you're shaping." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GROWTH_PATHS.map((g, i) => {
            const Icon = GROWTH_ICONS[i % GROWTH_ICONS.length];
            return (
              <Reveal key={g.title} delay={i * 60}>
                <Link to={g.to as any} className="card-lift gradient-border group block rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-11 w-11 rounded-xl bg-[color:var(--teal-light)] text-[color:var(--teal-deep)] flex items-center justify-center group-hover:bg-teal-gradient group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-[color:var(--gold)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </div>
                  <div className="font-display text-xl text-[color:var(--teal-dark)]">{g.title}</div>
                  <p className="mt-2 text-sm text-[color:var(--muted-ink)] leading-relaxed">{g.outcome}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* WHY */}
      <Section className="bg-gradient-to-b from-[color:var(--ivory)] to-white relative overflow-hidden"
        eyebrow="Why Human Development Matters" title="Success today asks for more than knowledge."
        subtitle="The world is changing faster than curricula and corporate playbooks. People need deeper capabilities to navigate it." center>
        <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-30" aria-hidden />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 70}>
              <div className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft h-full">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-teal-gradient text-white flex items-center justify-center shrink-0">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-xl text-[color:var(--teal-dark)]">{w.t}</div>
                    <p className="text-sm text-[color:var(--muted-ink)] mt-1 leading-relaxed">{w.d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHAT WE DO - BENTO */}
      <Section className="bg-gradient-to-b from-white to-[color:var(--teal-light)]"
        eyebrow="What We Do" title="A complete human development practice." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {WHAT_WE_DO.map((c, i) => (
            <Reveal key={c.title} delay={i * 50} className={c.span ?? ""}>
              <div className={`card-lift gradient-border group h-full rounded-2xl border border-[color:var(--border)] p-6 shadow-soft flex flex-col justify-between ${c.featured ? "bg-teal-gradient text-white" : "bg-white"}`}>
                <div className="flex items-start justify-between">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${c.featured ? "bg-white/15 text-[color:var(--gold-soft)]" : "bg-[color:var(--teal-light)] text-[color:var(--teal-deep)] group-hover:bg-teal-gradient group-hover:text-white transition-colors"}`}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-[10px] tracking-[0.18em] uppercase font-semibold rounded-full px-2.5 py-1 ${c.featured ? "bg-white/15 text-white" : "bg-[color:var(--ivory)] text-[color:var(--teal-deep)] border border-[color:var(--border)]"}`}>
                    {c.badge}
                  </span>
                </div>
                <div>
                  <h3 className={`font-display text-2xl ${c.featured ? "text-white" : "text-[color:var(--teal-dark)]"}`}>{c.title}</h3>
                  <p className={`mt-1.5 text-sm leading-relaxed ${c.featured ? "text-white/85" : "text-[color:var(--muted-ink)]"}`}>{c.desc}</p>
                  <div className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:gap-2 transition-all ${c.featured ? "text-[color:var(--gold-soft)]" : "text-[color:var(--teal-deep)]"}`}>
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DIFFERENCE */}
      <Section eyebrow="The WayMaker Difference" title="Built on principles, designed for impact." center>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {DIFFERENCE.map(({ icon: Icon, title, d }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-5 text-center shadow-soft h-full">
                <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-teal-gradient flex items-center justify-center text-white shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-semibold text-[color:var(--teal-dark)] text-sm">{title}</div>
                <div className="text-[11px] text-[color:var(--muted-ink)] mt-1 leading-snug">{d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* NOVA */}
      <Section className="bg-[color:var(--teal-dark)] text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--gold)]/15 blur-3xl glow" aria-hidden />
        <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--teal-rich)]/30 blur-3xl" aria-hidden />
        <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold-soft)] font-semibold mb-3">Methodology</div>
            <h2 className="text-white text-4xl md:text-5xl leading-tight">The NOVA™ Human Development Methodology</h2>
            <p className="mt-5 text-white/80 text-lg leading-relaxed">
              NOVA™ is the evidence-informed methodology used by WayMaker Skills™ to transform awareness into
              action and potential into performance.
            </p>
            <div className="mt-6">
              <CTAButton to="/nova" variant="gold" className="btn-shine">Discover NOVA™ <ArrowRight className="h-4 w-4" /></CTAButton>
            </div>
          </div>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-[color:var(--gold)]/0 via-[color:var(--gold)]/50 to-[color:var(--gold)]/0" aria-hidden />
            <div className="space-y-4">
              {NOVA_STEPS.map((s, i) => (
                <Reveal key={s.code} delay={i * 120}>
                  <div className="flex gap-5 items-start">
                    <div className="relative shrink-0">
                      <div className="h-16 w-16 rounded-2xl bg-[color:var(--gold)] text-[color:var(--teal-dark)] flex items-center justify-center shadow-gold">
                        <span className="font-display text-3xl font-bold">{s.code}</span>
                      </div>
                    </div>
                    <div className="glass-dark rounded-2xl p-5 flex-1">
                      <div className="font-display text-2xl text-white">{s.name}</div>
                      <p className="text-white/75 text-sm mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* LQ — ORBIT */}
      <Section eyebrow="LQ™ Framework" title="Five dimensions of life intelligence." center
        subtitle="Knowledge alone does not determine success. The ability to apply intelligence in real-life situations does.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {LQ_DIMENSIONS.map((d, i) => (
            <Reveal key={d.code} delay={i * 80}>
              <div className="card-lift gradient-border group rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft h-full relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[color:var(--gold)]/0 group-hover:bg-[color:var(--gold)]/15 blur-2xl transition" aria-hidden />
                <div className="relative">
                  <div className="text-[10px] tracking-[0.22em] font-semibold text-[color:var(--gold)]">0{i + 1}</div>
                  <div className="font-display text-3xl text-[color:var(--teal-dark)] mt-1">{d.code}</div>
                  <div className="text-xs text-[color:var(--muted-ink)] mt-0.5 uppercase tracking-wider">{d.name}</div>
                  <ul className="mt-4 space-y-1.5 text-sm text-[color:var(--charcoal)]">
                    {d.skills.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--teal-deep)] mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton to="/lq" variant="secondary">Explore LQ™ Framework</CTAButton>
        </div>
      </Section>

      {/* WHO WE SERVE */}
      <Section className="bg-[color:var(--ivory)]" eyebrow="Who We Serve" title="Designed for the people who shape lives." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 50}>
              <Link to={a.to as any} className="card-lift gradient-border group block rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft h-full">
                <UserCircle2 className="h-5 w-5 text-[color:var(--gold)]" />
                <div className="font-display text-xl text-[color:var(--teal-dark)] mt-3">{a.title}</div>
                <p className="mt-1.5 text-sm text-[color:var(--muted-ink)]">{a.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--teal-deep)] group-hover:gap-2 transition-all">
                  {a.cta} <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FEATURED PROGRAMS */}
      <Section eyebrow="Featured Programs" title="Where transformation begins." center>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {["All","Schools","Corporate","Youth","Professionals","Children","Personal Growth"].map((t, i) => (
            <span key={t} className={`text-xs uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full border ${
              i === 0
                ? "bg-teal-gradient text-white border-transparent"
                : "bg-white text-[color:var(--teal-deep)] border-[color:var(--border)]"
            }`}>{t}</span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link to={"/programs" as any}
                className="card-lift gradient-border group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft block h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-semibold px-2.5 py-1 rounded-full bg-[color:var(--ivory)] text-[color:var(--teal-deep)] border border-[color:var(--border)]">
                    {p.tag}
                  </span>
                  <Briefcase className="h-4 w-4 text-[color:var(--gold)]" />
                </div>
                <h3 className="font-display text-2xl text-[color:var(--teal-dark)]">{p.title}</h3>
                <p className="mt-2 text-[color:var(--muted-ink)] text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 text-[10px] uppercase tracking-widest text-[color:var(--teal-deep)] font-semibold">Best for</div>
                <div className="text-sm text-[color:var(--charcoal)]">{p.best}</div>
                <div className="mt-5 text-sm font-semibold text-[color:var(--teal-deep)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton to="/programs">See All Programs</CTAButton>
        </div>
      </Section>

      {/* OUTCOMES */}
      <Section className="bg-gradient-to-b from-white to-[color:var(--teal-light)]"
        eyebrow="Outcomes We Help Build" title="What growth looks like, in practice." center
        subtitle="Capabilities you can see in real life, real work, and real relationships.">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o} delay={i * 35}>
              <div className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-5 text-center shadow-soft h-full">
                <CheckCircle2 className="h-5 w-5 mx-auto text-[color:var(--gold)] mb-2" />
                <div className="font-semibold text-[color:var(--teal-dark)] text-sm">{o}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* HOW ENGAGEMENT WORKS */}
      <Section eyebrow="How Engagement Works" title="A five-step partnership." center
        subtitle="From discovery to lasting capability — clear, collaborative, accountable.">
        <div className="relative">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[color:var(--teal-deep)]/35 to-transparent" aria-hidden />
          <div className="grid md:grid-cols-5 gap-6">
            {ENGAGEMENT_STEPS.map((s, i) => {
              const Icon = [Eye, Layers, Rocket, TelescopeIcon, Flag][i];
              return (
                <Reveal key={s.step} delay={i * 100}>
                  <div className="relative text-center">
                    <div className="relative mx-auto h-14 w-14 rounded-full bg-white border-2 border-[color:var(--teal-deep)] text-[color:var(--teal-deep)] flex items-center justify-center shadow-soft">
                      <Icon className="h-5 w-5" />
                      <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[color:var(--gold)] text-[color:var(--teal-dark)] text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div className="mt-4 font-display text-xl text-[color:var(--teal-dark)]">{s.step}</div>
                    <p className="mt-1.5 text-sm text-[color:var(--muted-ink)] leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* WAMI */}
      <Section className="bg-gradient-to-br from-[color:var(--teal-light)] via-[color:var(--ivory)] to-[color:var(--gold-soft)]/20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[color:var(--gold)]/15 blur-2xl glow" aria-hidden />
        <div className="grid lg:grid-cols-2 gap-10 items-center relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] tracking-[0.22em] uppercase text-[color:var(--teal-deep)] font-semibold shadow-soft">
              <Star className="h-3 w-3 text-[color:var(--gold)]" /> For Children
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl">WAMI™ — The Superstar of Skills</h2>
            <p className="mt-5 text-[color:var(--muted-ink)] text-lg leading-relaxed">
              WAMI™ is the children's learning ecosystem of WayMaker Skills™. Through stories, challenges,
              activity books, games, and experiential learning, WAMI™ helps children build confidence,
              creativity, communication, character, and future-ready life skills.
            </p>
            <div className="mt-6">
              <CTAButton to="/wami" variant="gold" className="btn-shine">Explore WAMI™ <ArrowRight className="h-4 w-4" /></CTAButton>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["Stories", "Challenges", "Activity Books", "Games", "Creativity", "Character", "Confidence", "Communication"].map((t, i) => (
              <Reveal key={t} delay={i * 50}>
                <div className="card-lift rounded-3xl bg-white p-5 shadow-soft border border-white/80 text-center h-full">
                  <BookOpen className="h-5 w-5 mx-auto text-[color:var(--gold)] mb-2" />
                  <div className="font-semibold text-[color:var(--teal-dark)] text-sm">{t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FOUNDER */}
      <Section eyebrow="Founder" title="A vision rooted in human potential.">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-stretch">
          <Reveal>
            <div className="relative rounded-3xl bg-teal-gradient p-8 text-white shadow-elegant overflow-hidden h-full">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[color:var(--gold)]/25 blur-3xl glow" aria-hidden />
              <div className="relative">
                <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold-soft)] mb-3">Founder's Note</div>
                <p className="font-display text-2xl md:text-3xl leading-snug">
                  "Human potential develops best when we work on the whole person — mind, heart, and action."
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                  <div className="h-14 w-14 rounded-full bg-white/15 border border-white/30 flex items-center justify-center font-display text-xl text-white">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sanjo Mathew</div>
                    <div className="text-xs text-white/70">Founder · WayMaker Skills™</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-white border border-[color:var(--border)] p-8 shadow-soft h-full">
              <p className="text-lg text-[color:var(--charcoal)] leading-relaxed">
                Founded by <strong>Sanjo Mathew</strong>, WayMaker Skills™ brings together psychology, education,
                leadership, mentoring, coaching, and experiential learning to create meaningful human development
                experiences for individuals and organizations.
              </p>
              <p className="mt-4 text-[color:var(--muted-ink)]">
                Sanjo's personal profile is available at{" "}
                <a className="text-[color:var(--teal-deep)] underline underline-offset-4 hover:text-[color:var(--gold)] transition" href="https://sanjo.in" target="_blank" rel="noreferrer">sanjo.in</a>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton to="/founder">Meet the Founder</CTAButton>
                <CTAButton to="/about" variant="secondary">Our Story</CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* RESOURCES */}
      <Section className="bg-[color:var(--ivory)]" eyebrow="Resources" title="Ideas worth growing with." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Leadership","Emotional Intelligence","Parenting","Student Development","Communication","Well-being","Future Skills","Human Development"].map((c, i) => (
            <Reveal key={c} delay={i * 40}>
              <Link to={"/resources" as any} className="card-lift gradient-border group block rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft h-full">
                <BookOpen className="h-5 w-5 text-[color:var(--gold)]" />
                <div className="font-display text-xl text-[color:var(--teal-dark)] mt-3">{c}</div>
                <div className="text-sm text-[color:var(--muted-ink)] mt-1">Read articles & guides</div>
              </Link>
            </Reveal>
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
