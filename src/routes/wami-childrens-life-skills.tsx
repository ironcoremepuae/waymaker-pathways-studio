import { Link, createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
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
import type { CSSProperties, ReactNode } from "react";
import wamiMascot from "@/assets/wami-logo.png";
import wamiWordmark from "@/assets/wami-text.png";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { ROUTES } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta, serviceLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Tone = "yellow" | "blue" | "red" | "sky";
type WamiStarTone = "yellow" | "blue" | "red" | "white";
type WamiStarSize = "sm" | "md" | "lg" | "xl";
type WamiStarMotion = "float" | "twinkle" | "spin" | "drift";

type IconCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tone: Tone;
};

type WamiStarSpec = {
  className: string;
  tone: WamiStarTone;
  size: WamiStarSize;
  motion: WamiStarMotion;
  style?: CSSProperties;
};

const PAGE_VARS: CSSProperties = {
  "--wami-yellow": "#FFD21F",
  "--wami-yellow-strong": "#FFC928",
  "--wami-blue": "#064AAD",
  "--wami-blue-strong": "#0755C8",
  "--wami-red": "#E83B2E",
  "--wami-sky": "#EAF7FF",
  "--wami-sky-strong": "#D7F0FF",
  "--wami-cream": "#FFF8E6",
  "--wami-ink": "#17324D",
} as CSSProperties;

const TRUST_CHIPS = ["Stories", "Games", "Activities", "Life skills", "Confidence"];
const FLOATING_LABELS = ["Confidence", "Creativity", "Kindness", "Communication"];

const STAR_FIELDS: Record<
  "hero" | "intro" | "activity" | "outcomes" | "audience" | "world" | "faq" | "cta",
  WamiStarSpec[]
> = {
  hero: [
    { className: "left-[4%] top-[18%]", tone: "yellow", size: "md", motion: "float" },
    { className: "left-[15%] top-[63%]", tone: "white", size: "sm", motion: "twinkle" },
    { className: "left-[31%] top-[24%]", tone: "blue", size: "sm", motion: "drift" },
    { className: "right-[33%] top-[18%]", tone: "yellow", size: "sm", motion: "twinkle" },
    { className: "right-[22%] top-[10%]", tone: "red", size: "md", motion: "float" },
    { className: "right-[9%] top-[32%]", tone: "blue", size: "sm", motion: "spin" },
    { className: "right-[15%] bottom-[18%]", tone: "yellow", size: "lg", motion: "drift" },
    { className: "left-[42%] bottom-[14%]", tone: "white", size: "md", motion: "twinkle" },
    {
      className: "right-[18%] top-[21%]",
      tone: "white",
      size: "xl",
      motion: "spin",
      style: { opacity: 0.22 },
    },
    {
      className: "right-[6%] bottom-[28%]",
      tone: "yellow",
      size: "xl",
      motion: "float",
      style: { opacity: 0.18 },
    },
  ],
  intro: [
    { className: "left-[3%] top-[17%]", tone: "yellow", size: "sm", motion: "twinkle" },
    { className: "right-[5%] top-[15%]", tone: "blue", size: "md", motion: "float" },
    { className: "left-[48%] bottom-[10%]", tone: "red", size: "sm", motion: "drift" },
    { className: "right-[24%] bottom-[18%]", tone: "white", size: "sm", motion: "twinkle" },
  ],
  activity: [
    { className: "left-[23%] top-[10%]", tone: "yellow", size: "sm", motion: "twinkle" },
    { className: "left-[47%] top-[15%]", tone: "blue", size: "sm", motion: "float" },
    { className: "right-[25%] top-[12%]", tone: "red", size: "sm", motion: "drift" },
    { className: "right-[10%] bottom-[14%]", tone: "white", size: "md", motion: "twinkle" },
  ],
  outcomes: [
    { className: "left-[8%] top-[18%]", tone: "blue", size: "md", motion: "drift" },
    { className: "left-[18%] bottom-[12%]", tone: "yellow", size: "sm", motion: "twinkle" },
    { className: "right-[13%] top-[13%]", tone: "yellow", size: "lg", motion: "float" },
    { className: "right-[7%] bottom-[20%]", tone: "white", size: "sm", motion: "spin" },
  ],
  audience: [
    { className: "left-[6%] top-[20%]", tone: "yellow", size: "sm", motion: "twinkle" },
    { className: "right-[8%] top-[18%]", tone: "blue", size: "sm", motion: "float" },
    { className: "left-[45%] bottom-[8%]", tone: "red", size: "sm", motion: "drift" },
  ],
  world: [
    { className: "left-[3%] top-[4%]", tone: "yellow", size: "md", motion: "float" },
    { className: "left-[4%] top-[33%]", tone: "blue", size: "sm", motion: "twinkle" },
    { className: "left-[4%] top-[63%]", tone: "red", size: "sm", motion: "spin" },
    { className: "right-[7%] top-[10%]", tone: "white", size: "sm", motion: "twinkle" },
    { className: "right-[5%] bottom-[16%]", tone: "yellow", size: "md", motion: "drift" },
  ],
  faq: [
    { className: "left-[10%] top-[9%]", tone: "yellow", size: "sm", motion: "twinkle" },
    { className: "right-[12%] top-[13%]", tone: "blue", size: "sm", motion: "float" },
    { className: "left-[15%] bottom-[12%]", tone: "white", size: "md", motion: "drift" },
    { className: "right-[9%] bottom-[18%]", tone: "red", size: "sm", motion: "twinkle" },
  ],
  cta: [
    { className: "left-[5%] top-[18%]", tone: "yellow", size: "md", motion: "float" },
    { className: "left-[18%] bottom-[18%]", tone: "white", size: "sm", motion: "twinkle" },
    { className: "left-[42%] top-[11%]", tone: "red", size: "sm", motion: "drift" },
    { className: "right-[34%] bottom-[15%]", tone: "yellow", size: "sm", motion: "spin" },
    { className: "right-[18%] top-[11%]", tone: "white", size: "md", motion: "twinkle" },
    { className: "right-[8%] top-[42%]", tone: "yellow", size: "lg", motion: "float" },
    { className: "right-[3%] bottom-[13%]", tone: "blue", size: "sm", motion: "drift" },
  ],
};

const ELEMENTS: IconCard[] = [
  {
    icon: BookOpen,
    title: "Stories",
    desc: "Meaningful stories that help children talk about courage, kindness, and choices.",
    tone: "yellow",
  },
  {
    icon: Palette,
    title: "Activity books",
    desc: "Hands-on prompts that turn ideas into colourful practice and reflection.",
    tone: "sky",
  },
  {
    icon: Trophy,
    title: "Skill challenges",
    desc: "Short, joyful tasks that build confidence through everyday wins.",
    tone: "red",
  },
  {
    icon: Gamepad2,
    title: "Games",
    desc: "Playful formats that keep life skills memorable, active, and easy to revisit.",
    tone: "blue",
  },
  {
    icon: Sparkles,
    title: "Creative tasks",
    desc: "Drawing, making, and imagining that help children express what they learn.",
    tone: "yellow",
  },
  {
    icon: MessagesSquare,
    title: "Communication practice",
    desc: "Listening, speaking, and social confidence built in child-friendly ways.",
    tone: "sky",
  },
  {
    icon: Heart,
    title: "Reflection activities",
    desc: "Gentle prompts that help children notice feelings, strengths, and next steps.",
    tone: "red",
  },
  {
    icon: Star,
    title: "Character building",
    desc: "Values, responsibility, kindness, and confidence made practical.",
    tone: "blue",
  },
];

const OUTCOMES: IconCard[] = [
  {
    icon: Lightbulb,
    title: "Confidence",
    desc: "Children practise trying, speaking up, and bouncing back.",
    tone: "yellow",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    desc: "Imagination turns into ideas, expression, and purposeful action.",
    tone: "red",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    desc: "Children learn to listen well, speak clearly, and connect kindly.",
    tone: "blue",
  },
  {
    icon: Heart,
    title: "Character",
    desc: "Values and responsibility become habits, not abstract words.",
    tone: "yellow",
  },
  {
    icon: Star,
    title: "Curiosity",
    desc: "Questions, wonder, and exploration are treated as strengths.",
    tone: "sky",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Children learn to share, contribute, and grow with others.",
    tone: "red",
  },
  {
    icon: HeartHandshake,
    title: "Emotional awareness",
    desc: "Children build language for feelings and support for healthy choices.",
    tone: "sky",
  },
  {
    icon: Trophy,
    title: "Problem-solving",
    desc: "Small challenges become safe places to think, decide, and adapt.",
    tone: "blue",
  },
];

const WAMI_WORLD: IconCard[] = [
  {
    icon: BookOpen,
    title: "Story missions",
    desc: "Children follow meaningful stories that open conversations about choices, courage, kindness, and growth.",
    tone: "yellow",
  },
  {
    icon: Gamepad2,
    title: "Game-based learning",
    desc: "Simple games make life skills easier to understand, remember, and practise.",
    tone: "blue",
  },
  {
    icon: Palette,
    title: "Creative expression",
    desc: "Drawing, writing, speaking, and making activities help children express what they learn.",
    tone: "red",
  },
  {
    icon: Heart,
    title: "Reflection moments",
    desc: "Gentle prompts help children notice feelings, decisions, strengths, and next steps.",
    tone: "sky",
  },
];

const FAQS = [
  {
    q: "What is WAMI™?",
    a: "WAMI™ is the children's life skills world within WayMaker Skills™. It uses stories, games, activities, and challenges to help children build practical human capability.",
  },
  {
    q: "Who is WAMI™ for?",
    a: "WAMI™ is for children, as well as the parents, schools, and learning communities that support their growth.",
  },
  {
    q: "Can WAMI™ be used in schools?",
    a: "Yes. WAMI™ can support school pathways, child-focused classroom experiences, and wider youth development partnerships.",
  },
  {
    q: "What kinds of skills does WAMI™ help build?",
    a: "It helps build confidence, creativity, communication, character, curiosity, collaboration, emotional awareness, and problem-solving.",
  },
];

const TONE_STYLES: Record<
  Tone,
  {
    badge: string;
    card: string;
    icon: string;
    accent: string;
  }
> = {
  yellow: {
    badge:
      "bg-[color:var(--wami-yellow)] text-[color:var(--wami-blue)] border-[color:var(--wami-yellow-strong)]",
    card: "border-[color:var(--wami-yellow)]/70 bg-[linear-gradient(180deg,#FFFFFF_0%,var(--wami-cream)_100%)]",
    icon: "bg-[color:var(--wami-yellow)] text-[color:var(--wami-blue)]",
    accent: "bg-[color:var(--wami-yellow)]",
  },
  blue: {
    badge: "bg-[color:var(--wami-blue)] text-white border-[color:var(--wami-blue-strong)]",
    card: "border-[color:var(--wami-blue)]/20 bg-white",
    icon: "bg-[color:var(--wami-blue)] text-white",
    accent: "bg-[color:var(--wami-blue)]",
  },
  red: {
    badge: "bg-[color:var(--wami-red)] text-white border-[color:var(--wami-red)]",
    card: "border-[color:var(--wami-red)]/20 bg-[linear-gradient(180deg,white_0%,#FFF3EF_100%)]",
    icon: "bg-[color:var(--wami-red)] text-white",
    accent: "bg-[color:var(--wami-red)]",
  },
  sky: {
    badge:
      "bg-[color:var(--wami-sky)] text-[color:var(--wami-blue)] border-[color:var(--wami-sky-strong)]",
    card: "border-[color:var(--wami-sky-strong)] bg-[color:var(--wami-sky)]/65",
    icon: "bg-white text-[color:var(--wami-blue)]",
    accent: "bg-[color:var(--wami-sky-strong)]",
  },
};

export const Route = createFileRoute("/wami-childrens-life-skills")({
  head: () => ({
    ...pageMeta({
      title: "WAMI™ Children's Life Skills | WayMaker Skills™",
      description:
        "WAMI™ is the WayMaker Skills™ children's life skills world with stories, games, activities, and challenges that help children build confidence, creativity, communication, character, and practical life skills.",
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
          "WAMI™ Children's Life Skills",
          "Children's life skills experiences built through stories, games, activities, creative tasks, and reflection.",
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
      <div
        style={PAGE_VARS}
        className="overflow-hidden bg-[linear-gradient(180deg,#FFFDF4_0%,#F9FCFF_36%,#FFF7E7_100%)] text-[color:var(--wami-ink)]"
      >
        <section className="relative isolate overflow-hidden pt-10 pb-20 md:pt-14 md:pb-24">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,31,0.42),transparent_33%),radial-gradient(circle_at_top_right,rgba(234,247,255,0.96),transparent_34%),linear-gradient(180deg,#FFF7D7_0%,#F4FBFF_56%,#FFF8E6_100%)]"
            aria-hidden
          />
          <div
            className="absolute -left-20 top-28 h-56 w-56 rounded-full bg-[color:var(--wami-yellow)]/30 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[color:var(--wami-sky-strong)]/90 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute left-[9%] top-52 hidden h-8 w-8 rounded-full bg-white shadow-[0_18px_45px_-24px_rgba(6,74,173,0.25)] md:block"
            aria-hidden
          />
          <Star
            aria-hidden
            className="absolute left-[7%] top-32 hidden h-8 w-8 fill-[color:var(--wami-yellow)] text-[color:var(--wami-blue)] md:block floaty [animation-duration:7.8s]"
          />
          <Star
            aria-hidden
            className="absolute right-[18%] top-20 h-7 w-7 fill-[color:var(--wami-yellow)] text-[color:var(--wami-blue)] floaty [animation-duration:9.6s]"
          />
          <Star
            aria-hidden
            className="absolute right-[10%] bottom-20 h-5 w-5 fill-[color:var(--wami-red)] text-[color:var(--wami-red)] floaty [animation-duration:8.2s]"
          />
          <WamiStarField stars={STAR_FIELDS.hero} className="z-[1]" />

          <div className="container-prose relative">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_31rem] lg:gap-8">
              <div className="max-w-2xl">
                <WamiReveal>
                  <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--wami-blue)] shadow-[0_16px_36px_-24px_rgba(6,74,173,0.35)] backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--wami-red)]" />
                    WAMI&#8482; &#8226; Children's Life Skills
                  </div>
                </WamiReveal>
                <WamiReveal delay={70}>
                  <img
                    src={wamiWordmark}
                    alt="WAMI™ The Way Maker Star"
                    className="mt-6 h-auto w-full max-w-[15rem] sm:max-w-[18rem]"
                  />
                </WamiReveal>
                <WamiReveal delay={130}>
                  <h1 className="mt-5 max-w-xl text-5xl leading-[0.98] text-[color:var(--wami-blue)] sm:text-6xl lg:text-7xl">
                    Meet WAMI&#8482;, the WayMaker Star for growing humans.
                  </h1>
                </WamiReveal>
                <WamiReveal delay={190}>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--wami-ink)]/88 sm:text-xl">
                    Stories, games, activities, and joyful challenges that help children build
                    confidence, creativity, communication, character, and practical life skills.
                  </p>
                </WamiReveal>
                <WamiReveal delay={250}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <WamiButton to={ROUTES.contact} variant="primary">
                      Explore WAMI&#8482; <ArrowRight className="h-4 w-4" aria-hidden />
                    </WamiButton>
                    <WamiButton to={ROUTES.schoolsYouth} variant="secondary">
                      School &amp; Parent Programs
                    </WamiButton>
                  </div>
                </WamiReveal>
                <WamiReveal delay={320}>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {TRUST_CHIPS.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/70 bg-white/82 px-3.5 py-1.5 text-sm font-semibold text-[color:var(--wami-blue)] shadow-[0_14px_30px_-26px_rgba(6,74,173,0.42)] backdrop-blur"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </WamiReveal>
              </div>

              <WamiReveal delay={160}>
                <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto">
                  <div
                    className="absolute inset-x-5 bottom-4 top-8 rounded-[2.8rem] border-4 border-white/65 bg-[linear-gradient(180deg,rgba(255,210,31,0.88)_0%,rgba(234,247,255,0.98)_100%)] shadow-[0_36px_80px_-42px_rgba(6,74,173,0.5)]"
                    aria-hidden
                  />
                  <div
                    className="absolute left-1 top-20 h-16 w-24 rounded-full bg-white/70 blur-sm md:left-6"
                    aria-hidden
                  />
                  <div
                    className="absolute right-2 top-16 h-14 w-20 rounded-full bg-white/75 blur-sm md:right-8"
                    aria-hidden
                  />
                  <Star
                    aria-hidden
                    className="absolute left-4 top-6 h-9 w-9 fill-[color:var(--wami-yellow)] text-[color:var(--wami-blue)] floaty [animation-duration:7.2s]"
                  />
                  <Star
                    aria-hidden
                    className="absolute right-10 top-10 h-6 w-6 fill-[color:var(--wami-red)] text-[color:var(--wami-red)] floaty [animation-duration:8.4s]"
                  />
                  <img
                    src={wamiMascot}
                    alt="WAMI™ star mascot"
                    className="relative z-10 mx-auto h-auto w-full max-w-[30rem] drop-shadow-[0_26px_35px_rgba(6,74,173,0.24)] floaty [animation-duration:7.4s]"
                  />
                  {FLOATING_LABELS.map((label, index) => (
                    <span
                      key={label}
                      className={cn(
                        "absolute z-20 hidden rounded-full border-2 px-3 py-1.5 text-sm font-bold shadow-[0_18px_34px_-20px_rgba(6,74,173,0.36)] md:inline-flex",
                        index % 2 === 0
                          ? "border-[color:var(--wami-blue)]/20 bg-white text-[color:var(--wami-blue)]"
                          : "border-[color:var(--wami-red)]/20 bg-[color:var(--wami-cream)] text-[color:var(--wami-red)]",
                        index === 0 && "-left-4 top-[18%]",
                        index === 1 && "right-0 top-[30%]",
                        index === 2 && "left-2 bottom-[23%]",
                        index === 3 && "right-4 bottom-[16%]",
                      )}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </WamiReveal>
            </div>
          </div>
        </section>

        <WamiSection
          label="What is WAMI™?"
          title="A joyful world where children practise real-life skills through stories and play."
          subtitle="WAMI™ helps children grow through stories, activities, games, challenges, reflection, and character-building experiences that feel bright, safe, and memorable."
          stars={STAR_FIELDS.intro}
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <WamiReveal delay={80}>
              <div className="rounded-[2rem] border-2 border-[color:var(--wami-yellow)]/55 bg-white p-7 shadow-[0_28px_60px_-38px_rgba(6,74,173,0.34)] md:p-8">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-[color:var(--wami-blue)] text-white shadow-[0_18px_30px_-18px_rgba(6,74,173,0.35)]">
                    <Star className="h-7 w-7 fill-[color:var(--wami-yellow)] text-[color:var(--wami-yellow)]" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--wami-blue)]">
                    WayMaker Skills&#8482; for children
                  </div>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-[color:var(--wami-ink)]/88">
                  WAMI&#8482; is designed to help children enjoy the learning process while building
                  capabilities they can carry into home, school, friendships, and the wider world.
                </p>
                <div className="mt-6 rounded-[1.6rem] border border-[color:var(--wami-sky-strong)] bg-[color:var(--wami-sky)]/75 p-5">
                  <img
                    src={wamiWordmark}
                    alt="WAMI™ The Way Maker Star"
                    className="h-auto w-full max-w-[11rem]"
                  />
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--wami-ink)]/80">
                    Built to bring stories, activities, reflection, and practical life skills
                    together in one child-friendly experience.
                  </p>
                </div>
              </div>
            </WamiReveal>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <MiniCard
                title="Learn by doing"
                text="Children explore ideas through action, not only explanation."
                tone="yellow"
              />
              <MiniCard
                title="Grow through stories"
                text="Stories create meaningful moments for courage, empathy, and imagination."
                tone="blue"
              />
              <MiniCard
                title="Reflect with confidence"
                text="Gentle prompts help children notice feelings, choices, and strengths."
                tone="red"
              />
            </div>
          </div>
        </WamiSection>

        <WamiSection
          className="bg-white/65"
          label="How WAMI™ comes alive"
          title="Colourful activity tiles children can keep coming back to."
          subtitle="Every part of WAMI™ is designed to feel playful on the surface and meaningful underneath."
          center
          stars={STAR_FIELDS.activity}
        >
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {ELEMENTS.map((item, index) => (
              <WamiReveal key={item.title} delay={index * 45}>
                <IconStickerCard item={item} />
              </WamiReveal>
            ))}
          </div>
        </WamiSection>

        <WamiSection
          label="Skills WAMI™ helps children build"
          title="Core child development outcomes with brighter energy and stronger meaning."
          subtitle="WAMI™ keeps the tone joyful while helping children build capabilities parents and schools care about."
        >
          <div className="relative overflow-hidden rounded-[2.4rem] border-2 border-[color:var(--wami-blue)]/10 bg-[linear-gradient(145deg,#FFFFFF_0%,#EAF7FF_58%,#FFF8E6_100%)] p-6 shadow-[0_36px_80px_-48px_rgba(6,74,173,0.38)] md:p-8 lg:p-10">
            <div
              className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[color:var(--wami-yellow)]/35 blur-2xl"
              aria-hidden
            />
            <div
              className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[color:var(--wami-sky-strong)]/85 blur-3xl"
              aria-hidden
            />
            <Star
              aria-hidden
              className="absolute right-8 top-8 h-11 w-11 fill-[color:var(--wami-yellow)] text-[color:var(--wami-blue)]"
            />
            <WamiStarField stars={STAR_FIELDS.outcomes} />
            <div className="relative grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {OUTCOMES.map((item, index) => (
                <WamiReveal key={item.title} delay={index * 45}>
                  <IconStickerCard item={item} compact />
                </WamiReveal>
              ))}
            </div>
          </div>
        </WamiSection>

        <WamiSection
          className="bg-[linear-gradient(180deg,rgba(255,248,230,0.8)_0%,rgba(255,255,255,0.72)_100%)]"
          label="For parents and schools"
          title="Two pathways, one joyful learning world."
          subtitle="WAMI™ stays child-friendly while still feeling trustworthy for adults who are shaping learning environments."
          center
          id="parents-and-schools"
          stars={STAR_FIELDS.audience}
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <WamiReveal>
              <AudiencePanel
                title="For parents"
                text="WAMI™ offers child-friendly ways to reinforce confidence, communication, values, creativity, and reflection at home."
                cta="Explore parent support"
                to={ROUTES.contact}
                tone="yellow"
                icon={HeartHandshake}
              />
            </WamiReveal>
            <WamiReveal delay={90}>
              <AudiencePanel
                title="For schools"
                text="WAMI™ can support child-focused life skills work through school pathways, classroom experiences, and broader youth development partnerships."
                cta="Discuss school programs"
                to={ROUTES.schoolsYouth}
                tone="blue"
                icon={GraduationCap}
              />
            </WamiReveal>
          </div>
        </WamiSection>

        <WamiSection
          label="Inside the WAMI™ world"
          title="A journey of stories, games, creativity, and reflection."
          subtitle="The WAMI™ world is designed to feel like a path children can follow one playful step at a time."
          center
          stars={STAR_FIELDS.world}
        >
          <div className="relative">
            <div
              className="pointer-events-none absolute left-6 top-10 hidden h-[calc(100%-5rem)] border-l-4 border-dashed border-[color:var(--wami-sky-strong)] lg:block"
              aria-hidden
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {WAMI_WORLD.map((item, index) => (
                <WamiReveal key={item.title} delay={index * 70}>
                  <div className={cn(index % 2 === 1 ? "lg:translate-y-16" : "", "relative")}>
                    <JourneyCard item={item} index={index} />
                  </div>
                </WamiReveal>
              ))}
            </div>
          </div>
        </WamiSection>

        <WamiSection
          className="pb-14"
          label="FAQ"
          title="WAMI questions"
          subtitle="A cheerful overview for parents, schools, and partners exploring the WAMI™ world."
          center
          stars={STAR_FIELDS.faq}
        >
          <div className="mx-auto max-w-4xl rounded-[2.2rem] border-2 border-[color:var(--wami-yellow)]/50 bg-[linear-gradient(180deg,#FFF8E6_0%,#F1FAFF_100%)] p-4 shadow-[0_30px_70px_-46px_rgba(6,74,173,0.38)] md:p-6">
            <FAQList
              items={FAQS}
              className="overflow-hidden rounded-[1.6rem] border-0 bg-transparent shadow-none"
              itemClassName="mb-3 rounded-[1.35rem] border border-[color:var(--wami-blue)]/10 bg-white/90 shadow-[0_14px_34px_-28px_rgba(6,74,173,0.32)] last:mb-0"
              summaryClassName="rounded-[1.35rem] px-5 py-5 hover:bg-[color:var(--wami-sky)]/70 focus-visible:bg-[color:var(--wami-sky)]/70 md:px-6"
              questionClassName="text-xl text-[color:var(--wami-blue)]"
              iconClassName="text-[color:var(--wami-red)]"
              answerClassName="px-5 pb-5 text-[color:var(--wami-ink)]/82 md:px-6"
            />
          </div>
        </WamiSection>

        <section className="pb-20">
          <div className="container-prose">
            <div className="relative overflow-hidden rounded-[2.6rem] bg-[linear-gradient(135deg,#0755C8_0%,#064AAD_40%,#E83B2E_100%)] px-6 py-8 text-white shadow-[0_40px_90px_-48px_rgba(6,74,173,0.55)] md:px-10 md:py-12 lg:px-12 lg:py-14">
              <div
                className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-[color:var(--wami-yellow)]/30 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute right-10 top-0 h-32 w-32 rounded-full bg-white/12 blur-3xl"
                aria-hidden
              />
              <WamiStarField stars={STAR_FIELDS.cta} className="z-[1]" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
                <div className="max-w-2xl">
                  <img
                    src={wamiWordmark}
                    alt="WAMI™ The Way Maker Star"
                    className="h-auto w-full max-w-[10rem] brightness-0 invert"
                  />
                  <h2 className="mt-5 text-4xl leading-tight text-white md:text-5xl">
                    Bring WAMI&#8482; to your learning community.
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/86">
                    Whether you are a parent, school, or partner, WAMI&#8482; can help children
                    practise life skills in a joyful, memorable way.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <WamiButton to={ROUTES.contact} variant="light">
                      Start a Conversation
                    </WamiButton>
                    <WamiButton to={ROUTES.programs} variant="outline-light">
                      Explore Programs
                    </WamiButton>
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-[15rem] lg:max-w-none">
                  <div
                    className="absolute inset-x-4 bottom-2 top-8 rounded-[2rem] bg-white/16 blur-xl"
                    aria-hidden
                  />
                  <img
                    src={wamiMascot}
                    alt="WAMI™ star mascot"
                    className="relative z-10 mx-auto h-auto w-full max-w-[18rem] translate-y-1 drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)] lg:max-w-[19rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function WamiSection({
  label,
  title,
  subtitle,
  children,
  className,
  center = false,
  id,
  stars,
}: {
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  center?: boolean;
  id?: string;
  stars?: WamiStarSpec[];
}) {
  return (
    <section id={id} className={cn("relative isolate overflow-hidden py-16 md:py-24", className)}>
      {stars ? <WamiStarField stars={stars} /> : null}
      <div className="container-prose relative">
        <WamiReveal>
          <div className={cn("mb-10 max-w-3xl md:mb-14", center && "mx-auto text-center")}>
            <div className="inline-flex rounded-full border border-[color:var(--wami-blue)]/10 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--wami-blue)] shadow-[0_16px_34px_-30px_rgba(6,74,173,0.45)]">
              {label}
            </div>
            <h2 className="mt-4 text-4xl leading-tight text-[color:var(--wami-blue)] md:text-5xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 text-lg leading-relaxed text-[color:var(--wami-ink)]/82">
                {subtitle}
              </p>
            ) : null}
          </div>
        </WamiReveal>
        {children}
      </div>
    </section>
  );
}

function WamiStarField({ stars, className }: { stars: WamiStarSpec[]; className?: string }) {
  return (
    <div className={cn("wami-star-field", className)} aria-hidden="true">
      {stars.map((star, index) => (
        <span
          key={`${star.className}-${index}`}
          className={cn(
            "wami-star",
            `wami-star--${star.tone}`,
            `wami-star--${star.size}`,
            `wami-star--${star.motion}`,
            star.className,
          )}
          style={
            {
              "--wami-star-delay": `${(index % 5) * 0.42}s`,
              "--wami-star-duration": `${3.8 + (index % 6) * 0.72}s`,
              ...star.style,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function WamiButton({
  to,
  variant,
  children,
}: {
  to: string;
  variant: "primary" | "secondary" | "light" | "outline-light";
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--wami-red)] sm:px-6",
        variant === "primary" &&
          "bg-[color:var(--wami-blue)] text-white shadow-[0_22px_44px_-26px_rgba(6,74,173,0.55)] hover:bg-[color:var(--wami-blue-strong)]",
        variant === "secondary" &&
          "border-2 border-[color:var(--wami-blue)]/14 bg-white/88 text-[color:var(--wami-blue)] shadow-[0_18px_40px_-30px_rgba(6,74,173,0.38)] hover:border-[color:var(--wami-blue)]/30 hover:bg-white",
        variant === "light" &&
          "bg-[color:var(--wami-yellow)] text-[color:var(--wami-blue)] shadow-[0_22px_44px_-26px_rgba(255,210,31,0.72)] hover:bg-[color:var(--wami-yellow-strong)]",
        variant === "outline-light" &&
          "border-2 border-white/30 bg-white/10 text-white hover:bg-white/16",
      )}
    >
      {children}
    </Link>
  );
}

function MiniCard({ title, text, tone }: { title: string; text: string; tone: Tone }) {
  const styles = TONE_STYLES[tone];

  return (
    <WamiReveal>
      <div
        className={cn(
          "rounded-[1.7rem] border-2 p-5 shadow-[0_20px_44px_-34px_rgba(6,74,173,0.34)]",
          styles.card,
        )}
      >
        <span
          className={cn(
            "inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]",
            styles.badge,
          )}
        >
          {title}
        </span>
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--wami-ink)]/82">{text}</p>
      </div>
    </WamiReveal>
  );
}

function IconStickerCard({ item, compact = false }: { item: IconCard; compact?: boolean }) {
  const styles = TONE_STYLES[item.tone];

  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-[1.9rem] border-2 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-36px_rgba(6,74,173,0.35)]",
        styles.card,
        compact ? "min-h-[15.5rem]" : "min-h-[16.75rem]",
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-2", styles.accent)} aria-hidden />
      <span
        className="wami-star wami-star--yellow wami-star--sm wami-card-sparkle right-5 top-5"
        aria-hidden="true"
      />
      <div
        className={cn(
          "inline-flex h-14 w-14 items-center justify-center rounded-[1.15rem] shadow-sm",
          styles.icon,
        )}
      >
        <item.icon className={cn("h-6 w-6", compact && "h-5 w-5")} aria-hidden />
      </div>
      <h3 className="mt-5 text-2xl leading-tight text-[color:var(--wami-blue)]">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--wami-ink)]/82">{item.desc}</p>
    </div>
  );
}

function AudiencePanel({
  title,
  text,
  cta,
  to,
  tone,
  icon: Icon,
}: {
  title: string;
  text: string;
  cta: string;
  to: string;
  tone: "yellow" | "blue";
  icon: LucideIcon;
}) {
  const isBlue = tone === "blue";

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[2rem] border-2 p-7 shadow-[0_28px_60px_-38px_rgba(6,74,173,0.34)] md:p-8",
        isBlue
          ? "border-[color:var(--wami-blue)]/10 bg-[linear-gradient(180deg,#0A57C8_0%,#064AAD_100%)] text-white"
          : "border-[color:var(--wami-yellow)]/60 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF8E6_100%)] text-[color:var(--wami-ink)]",
      )}
    >
      <span
        className={cn(
          "wami-star wami-star--md wami-star--twinkle absolute right-5 top-5 opacity-70",
          isBlue ? "wami-star--white" : "wami-star--yellow",
        )}
        aria-hidden="true"
      />
      <div className="flex items-center justify-between gap-4">
        <div
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-[1.15rem]",
            isBlue
              ? "bg-white/14 text-white"
              : "bg-[color:var(--wami-yellow)] text-[color:var(--wami-blue)]",
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <img
          src={wamiWordmark}
          alt="WAMI™ The Way Maker Star"
          className={cn("h-auto w-24", isBlue && "brightness-0 invert")}
        />
      </div>
      <h3
        className={cn(
          "mt-6 text-3xl leading-tight",
          isBlue ? "text-white" : "text-[color:var(--wami-blue)]",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-3 flex-1 leading-relaxed",
          isBlue ? "text-white/84" : "text-[color:var(--wami-ink)]/82",
        )}
      >
        {text}
      </p>
      <div className="mt-6">
        <WamiButton to={to} variant={isBlue ? "outline-light" : "primary"}>
          {cta}
        </WamiButton>
      </div>
    </div>
  );
}

function JourneyCard({ item, index }: { item: IconCard; index: number }) {
  const styles = TONE_STYLES[item.tone];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border-2 p-6 shadow-[0_24px_54px_-38px_rgba(6,74,173,0.3)] md:p-7",
        styles.card,
      )}
    >
      <span
        className="wami-star wami-star--white wami-star--sm wami-star--twinkle absolute right-5 top-5 opacity-80"
        aria-hidden="true"
      />
      <div className="mb-4 flex items-center gap-3">
        <span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-bold shadow-sm",
            styles.badge,
          )}
        >
          {index + 1}
        </span>
        <div
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-[1rem]",
            styles.icon,
          )}
        >
          <item.icon className="h-5 w-5" aria-hidden />
        </div>
      </div>
      <h3 className="text-2xl leading-tight text-[color:var(--wami-blue)]">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--wami-ink)]/82">{item.desc}</p>
    </div>
  );
}

function WamiReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={cn("reveal", className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
