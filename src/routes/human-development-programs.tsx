import { createFileRoute, Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Calendar,
  GraduationCap,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { AudienceCards, Timeline } from "@/components/site/Blocks";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { AUDIENCES, PROGRAMS } from "@/data/site";
import { ROUTES, SERVICE_ROUTE_BY_PROGRAM_SLUG } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

type LinkTo = ComponentProps<typeof Link>["to"];

const FAQS = [
  {
    q: "Are WayMaker Skills™ programs customized?",
    a: "Yes. Programs are shaped around the audience, context, depth, format, and outcomes you need.",
  },
  {
    q: "Can programs be delivered on-site or online?",
    a: "Yes. Depending on the audience and goals, delivery can be on-site, hybrid, or online.",
  },
  {
    q: "Do you offer programs for both schools and organizations?",
    a: "Yes. The portfolio spans schools, youth, leadership, organizations, coaching, and children’s life skills.",
  },
  {
    q: "Can a program include frameworks like NOVA™ or LQ™?",
    a: "Yes. Those frameworks can sit behind the learning design and help shape how the journey is delivered.",
  },
];

const TABS = [
  "All",
  "Schools",
  "Students",
  "Parents",
  "Professionals",
  "Corporate",
  "Leadership",
  "Children",
  "Personal Growth",
  "Youth",
];

const FORMATS = [
  {
    icon: Calendar,
    title: "Workshops",
    desc: "Half-day or full-day sessions for focused capability building.",
  },
  {
    icon: BookOpen,
    title: "Training Programs",
    desc: "Multi-session journeys designed for depth and reinforcement.",
  },
  {
    icon: Users,
    title: "Cohort Learning",
    desc: "Structured group progression for shared growth.",
  },
  {
    icon: Sparkles,
    title: "Coaching",
    desc: "Individual or small-group support for reflection and action.",
  },
  {
    icon: Briefcase,
    title: "Mentoring",
    desc: "Longer-view guidance for leaders and emerging professionals.",
  },
  {
    icon: GraduationCap,
    title: "School Partnerships",
    desc: "Whole-ecosystem development across students, teachers, and parents.",
  },
  {
    icon: Wrench,
    title: "Assessments",
    desc: "Insight tools that help define development priorities.",
  },
  {
    icon: Sparkles,
    title: "Experiential Learning",
    desc: "Activity-based and reflective formats that make learning stick.",
  },
];

const PROCESS = [
  {
    title: "Understand the audience",
    desc: "Clarify who the program is for and what the context demands.",
  },
  {
    title: "Define outcomes",
    desc: "Decide which capability shifts matter most in behavior and practice.",
  },
  {
    title: "Design the journey",
    desc: "Choose the right framework, format, sequence, and learning experience.",
  },
  {
    title: "Deliver with depth",
    desc: "Facilitate learning that goes beyond information transfer.",
  },
  {
    title: "Embed and extend",
    desc: "Use reflection, application, and next steps to support lasting growth.",
  },
];

export const Route = createFileRoute("/human-development-programs")({
  head: () => ({
    ...pageMeta({
      title: "Human Development Programs | WayMaker Skills™",
      description:
        "Explore WayMaker Skills™ human development programs for schools, leaders, organizations, professionals, families, and children.",
      path: ROUTES.programs,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "Human Development Programs", path: ROUTES.programs },
        ]),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () =>
      active === "All"
        ? PROGRAMS
        : PROGRAMS.filter(
            (program) =>
              program.tag === active || program.best.toLowerCase().includes(active.toLowerCase()),
          ),
    [active],
  );

  return (
    <Layout>
      <PageHero
        eyebrow="Human Development Programs"
        title="Programs by WayMaker Skills™."
        subtitle="A full portfolio of development experiences for schools, youth, professionals, leaders, teams, families, and children."
        badges={["Customizable", "On-site • Hybrid • Online", "Framework-led", "Outcome-focused"]}
      >
        <CTAButton to={ROUTES.contact} variant="primary">
          Find the Right Program <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.nova} variant="secondary">
          See the NOVA™ Methodology
        </CTAButton>
      </PageHero>

      <Section eyebrow="Designed for" title="Audiences we serve." center>
        <AudienceCards
          items={AUDIENCES.map((audience) => ({
            icon: Sparkles,
            title: audience.title,
            desc: audience.desc,
          }))}
        />
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Program portfolio"
        title="Explore the full range."
        center
      >
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === tab
                  ? "bg-teal-gradient text-white shadow-soft"
                  : "border border-[color:var(--border)] bg-white text-[color:var(--teal-deep)] hover:border-[color:var(--teal-deep)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program, index) => {
            const link =
              SERVICE_ROUTE_BY_PROGRAM_SLUG[
                program.slug as keyof typeof SERVICE_ROUTE_BY_PROGRAM_SLUG
              ] ?? ROUTES.contact;

            return (
              <Reveal key={program.slug} delay={index * 40}>
                <Link
                  to={link as LinkTo}
                  className="card-lift gradient-border group block h-full rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft"
                >
                  <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                    {program.tag}
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-[color:var(--teal-dark)]">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-ink)]">
                    {program.desc}
                  </p>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-[color:var(--teal-deep)]">
                    Best for
                  </div>
                  <div className="text-sm text-[color:var(--charcoal)]">{program.best}</div>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--teal-deep)] transition-all group-hover:gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Formats" title="Flexible by Design." center>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FORMATS.map((format, index) => (
            <Reveal key={format.title} delay={index * 40}>
              <div className="card-lift rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--teal-light)] text-[color:var(--teal-deep)]">
                  <format.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-lg text-[color:var(--teal-dark)]">
                  {format.title}
                </div>
                <div className="mt-1.5 text-sm text-[color:var(--muted-ink)]">{format.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="How programs are shaped"
        title="How every WayMaker program is crafted?"
        center
      >
        <Timeline steps={PROCESS} />
      </Section>

      <Section eyebrow="FAQ" title="Program Questions." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA
        title="Tell us who you are developing."
        text="We can recommend the right pathway for a school, organization, team, leader, parent group, or learner community."
      />
      <div className="h-16" />
    </Layout>
  );
}
