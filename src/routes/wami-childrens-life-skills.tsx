import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Gamepad2,
  GraduationCap,
  Heart,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  Palette,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { AudienceCards } from "@/components/site/Blocks";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { ROUTES } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta, serviceLd } from "@/lib/seo";

const ELEMENTS = [
  {
    icon: BookOpen,
    title: "Stories",
    desc: "Stories that build confidence, courage, and character.",
  },
  {
    icon: Palette,
    title: "Activity books",
    desc: "Hands-on work that turns ideas into experience.",
  },
  {
    icon: Trophy,
    title: "Skill challenges",
    desc: "Small but meaningful ways for children to practice capability.",
  },
  {
    icon: Gamepad2,
    title: "Games",
    desc: "Playful formats that help learning stay memorable and alive.",
  },
  {
    icon: Sparkles,
    title: "Creative tasks",
    desc: "Imagination and expression that support child development.",
  },
  {
    icon: MessagesSquare,
    title: "Communication practice",
    desc: "Voice, listening, and social confidence.",
  },
  {
    icon: Heart,
    title: "Reflection activities",
    desc: "Gentle prompts that grow awareness and understanding.",
  },
  {
    icon: Star,
    title: "Character building",
    desc: "Values, responsibility, kindness, and confidence in action.",
  },
];

const SKILLS = [
  {
    icon: Lightbulb,
    title: "Confidence",
    desc: "Self-belief built through experience, not only praise.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    desc: "Imagination and original thinking that children can use.",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    desc: "Expression, listening, and social connection.",
  },
  { icon: Heart, title: "Character", desc: "Values, integrity, and responsibility in daily life." },
  { icon: Star, title: "Curiosity", desc: "A love of exploring, asking, and learning." },
  { icon: Users, title: "Collaboration", desc: "Working, sharing, and growing with others." },
  {
    icon: HeartHandshake,
    title: "Emotional awareness",
    desc: "Naming and navigating feelings with support.",
  },
  {
    icon: Trophy,
    title: "Problem-solving",
    desc: "Facing small challenges with thought and confidence.",
  },
];

const FAQS = [
  {
    q: "What is WAMI™?",
    a: "WAMI™ is the children’s life skills ecosystem within WayMaker Skills™. It uses stories, activities, games, and challenges to help children build practical human capability.",
  },
  {
    q: "Who is WAMI™ for?",
    a: "WAMI™ is for children, as well as the schools, parents, and learning communities that support their growth.",
  },
  {
    q: "Can WAMI™ be used in schools?",
    a: "Yes. WAMI™ can support school programs, child-focused learning experiences, and wider youth development pathways.",
  },
  {
    q: "What kinds of skills does WAMI™ help build?",
    a: "It supports confidence, communication, creativity, character, emotional awareness, curiosity, collaboration, and problem-solving.",
  },
];

export const Route = createFileRoute("/wami-childrens-life-skills")({
  head: () => ({
    ...pageMeta({
      title: "WAMI™ | Children’s Life Skills Ecosystem",
      description:
        "Discover WAMI™, the children’s life skills ecosystem from WayMaker Skills™, built around confidence, creativity, communication, and character.",
      path: ROUTES.wami,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "WAMI™", path: ROUTES.wami },
        ]),
      ),
      jsonLd(
        serviceLd(
          "WAMI™ Children's Life Skills Ecosystem",
          "Children's life skills experiences built through stories, activities, play, and reflection.",
          ROUTES.wami,
        ),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: WamiPage,
});

function WamiPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="WAMI™ · Children’s Life Skills"
        title="A children’s world built for growing humans."
        subtitle="WAMI™ is the WayMaker Skills™ ecosystem for helping children build confidence, creativity, communication, character, and practical life skills."
        badges={["Stories", "Games", "Activities", "Life skills"]}
        variant="playful"
      >
        <CTAButton to={ROUTES.contact} variant="gold">
          Explore WAMI™ <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.schoolsYouth} variant="secondary">
          School and Youth Programs
        </CTAButton>
      </PageHero>

      <Section eyebrow="What WAMI™ is" title="Serious child development through joyful formats.">
        <div className="max-w-3xl text-lg leading-relaxed text-[color:var(--charcoal)]">
          WAMI™ helps children grow through stories, activities, games, challenges, and reflection.
          The aim is not entertainment alone. It is to create experiences children can enjoy while
          also building confidence, communication, character, creativity, and life skills they can
          carry forward.
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Learning elements"
        title="How WAMI™ comes alive."
        center
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ELEMENTS.map((element, index) => (
            <Reveal key={element.title} delay={index * 50}>
              <div className="card-lift gradient-border h-full rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-soft">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--gold)] text-[color:var(--teal-dark)]">
                  <element.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-[color:var(--teal-dark)]">
                  {element.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-ink)]">
                  {element.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills WAMI™ supports" title="Core child development outcomes." center>
        <AudienceCards items={SKILLS} />
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="For parents and schools"
        title="Built to support both home and learning communities."
        center
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--gold)]/20 text-[color:var(--teal-deep)]">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-2xl text-[color:var(--teal-dark)]">
              For parents
            </h3>
            <p className="mt-2 leading-relaxed text-[color:var(--muted-ink)]">
              WAMI™ offers child-friendly ways to reinforce confidence, communication, values, and
              reflection at home.
            </p>
          </div>
          <div className="rounded-3xl bg-teal-gradient p-8 text-white shadow-elegant">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-2xl text-white">For schools</h3>
            <p className="mt-2 leading-relaxed text-white/85">
              WAMI™ can support child-focused life skills work through school pathways, classroom
              experiences, or broader youth development partnerships.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="WAMI™ questions." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA
        title="Bring WAMI™ to your learning community."
        text="If you are exploring child-focused life skills work for a school, parent group, or partner context, we can continue the conversation."
      />
      <div className="h-16" />
    </Layout>
  );
}
