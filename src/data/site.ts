import logo from "@/assets/waymaker-logo.png";
import { normalizeBasePath, normalizeSiteUrl } from "@/lib/site-config";
import { ROUTES } from "./routes";

export const BRAND = "WayMaker Skills™";
export const TAGLINE = "Transforming Potential into Purpose";
export const EYEBROW = "Human Development • Applied Intelligence • Future Skills";
export const LOGO = logo;
export const SITE_URL = normalizeSiteUrl(import.meta.env.VITE_SITE_URL);
export const BASE_PATH = normalizeBasePath(
  import.meta.env.VITE_BASE_PATH || new URL(`${SITE_URL}/`).pathname,
);

export const CONTACT = {
  email: "waymakerskills@gmail.com",
  phone: "+91 96453 43777",
  location: "India",
  founderSite: "https://sanjo.in",
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "" },
  { label: "Instagram", href: "" },
  { label: "YouTube", href: "" },
] as const;

export type NavChild = { to: string; label: string; desc?: string };
export type NavItem = { to: string; label: string } | { label: string; children: NavChild[] };

export const NAV: NavItem[] = [
  { to: ROUTES.home, label: "Home" },
  { to: ROUTES.about, label: "About" },
  { to: ROUTES.founder, label: "Founder" },
  {
    label: "Frameworks",
    children: [
      {
        to: ROUTES.nova,
        label: "NOVA™ Methodology",
        desc: "Notice • Own • Visualize • Act — from awareness to action.",
      },
      {
        to: ROUTES.lq,
        label: "LQ™ Framework",
        desc: "Five dimensions of applied life intelligence.",
      },
    ],
  },
  {
    label: "Programs",
    children: [
      {
        to: ROUTES.programs,
        label: "All Programs",
        desc: "Explore the full portfolio across audiences.",
      },
      {
        to: ROUTES.corporateTraining,
        label: "Corporate Training",
        desc: "Leadership, culture, and capability for teams.",
      },
      {
        to: ROUTES.schoolsYouth,
        label: "Schools & Youth",
        desc: "Life skills, character, and future readiness.",
      },
      {
        to: ROUTES.leadership,
        label: "Leadership Development",
        desc: "From self-leadership to leading systems.",
      },
      {
        to: ROUTES.communication,
        label: "Communication Excellence",
        desc: "Clarity, presence, listening, influence.",
      },
      {
        to: ROUTES.emotionalIntelligence,
        label: "Emotional Intelligence",
        desc: "Awareness, regulation, empathy, resilience.",
      },
      {
        to: ROUTES.coachingMentoring,
        label: "Coaching & Mentoring",
        desc: "1:1 and group journeys for growth.",
      },
      {
        to: ROUTES.wami,
        label: "WAMI™ — Children",
        desc: "Children's learning ecosystem of WayMaker Skills™.",
      },
    ],
  },
  { to: ROUTES.resources, label: "Resources" },
  { to: ROUTES.contact, label: "Contact" },
];

export const PROGRAMS = [
  {
    slug: "leadership",
    title: "Leadership Development",
    desc: "Self-leadership, responsible leadership, decision-making, and team leadership.",
    best: "Managers, leaders, entrepreneurs",
    tag: "Leadership",
  },
  {
    slug: "communication",
    title: "Communication Excellence",
    desc: "Clarity, confidence, presentation skills, listening, and influence.",
    best: "Professionals, leaders, students",
    tag: "Professionals",
  },
  {
    slug: "emotional-intelligence",
    title: "Emotional Intelligence",
    desc: "Self-awareness, regulation, empathy, resilience, and relationship skills.",
    best: "Everyone — from students to executives",
    tag: "Personal Growth",
  },
  {
    slug: "critical-thinking",
    title: "Critical Thinking & Problem Solving",
    desc: "Structured thinking, decision frameworks, and applied reasoning.",
    best: "Students, professionals, leaders",
    tag: "Professionals",
  },
  {
    slug: "future-skills",
    title: "Future Skills Development",
    desc: "Adaptability, creativity, digital fluency, and lifelong learning.",
    best: "Students, early-career, organizations",
    tag: "Youth",
  },
  {
    slug: "wellbeing",
    title: "Well-being & Resilience",
    desc: "Stress handling, mental fitness, and sustainable performance.",
    best: "Teams, leaders, families",
    tag: "Corporate",
  },
  {
    slug: "coaching-mentoring",
    title: "Coaching & Mentoring",
    desc: "1:1 and group coaching for clarity, growth, and purpose-driven action.",
    best: "Individuals and emerging leaders",
    tag: "Personal Growth",
  },
  {
    slug: "parents",
    title: "Parent Empowerment",
    desc: "Tools to raise confident, capable, emotionally intelligent children.",
    best: "Parents and families",
    tag: "Schools",
  },
  {
    slug: "teachers",
    title: "Teacher Development",
    desc: "Equipping educators with human development skills for the modern classroom.",
    best: "Schools and educators",
    tag: "Schools",
  },
  {
    slug: "wami",
    title: "WAMI™ Programs",
    desc: "Children's learning ecosystem for confidence, creativity, and character.",
    best: "Children, schools, parents",
    tag: "Children",
  },
  {
    slug: "assessments",
    title: "Assessments & Development Tools",
    desc: "Insight-led diagnostics that turn awareness into action.",
    best: "Individuals and organizations",
    tag: "Corporate",
  },
  {
    slug: "assessments",
    title: "Productivity & Personal Effectiveness",
    desc: "Build habits, focus, time management, decision-making, and execution for sustained success.",
    best: "Students, professionals, leaders",
    tag: "Personal Growth",
  },
];

export const AUDIENCES = [
  {
    title: "Schools & Educational Institutions",
    desc: "Future-ready learners, teachers, and ecosystems.",
    cta: "Plan a School Program",
    to: ROUTES.schoolsYouth,
  },
  {
    title: "Students & Youth",
    desc: "Confidence, life skills, and clarity of direction.",
    cta: "Build Life Skills",
    to: ROUTES.schoolsYouth,
  },
  {
    title: "Parents & Families",
    desc: "Tools to raise emotionally intelligent children.",
    cta: "Support Child Growth",
    to: ROUTES.wami,
  },
  // {
  //   title: "Educators",
  //   desc: "Empowering teachers with practical tools for impactful learning.",
  //   cta: "Empower Educators",
  //   to: ROUTES.schoolsYouth,
  // },
  {
    title: "Teachers & Educators",
    desc: "Human development capability for the classroom.",
    cta: "Empower Educators",
    to: ROUTES.schoolsYouth,
  },
  {
    title: "Professionals & Job Seekers",
    desc: "Skills that build careers, not just resumes.",
    cta: "Grow Career Skills",
    to: ROUTES.programs,
  },
  {
    title: "Women & Growth Communities",
    desc: "Spaces for purposeful growth and leadership.",
    cta: "Build Confidence",
    to: ROUTES.coachingMentoring,
  },
  {
    title: "Corporate Teams",
    desc: "Behavioral and leadership development that sticks.",
    cta: "Improve Team Capability",
    to: ROUTES.corporateTraining,
  },
  {
    title: "Leaders & Entrepreneurs",
    desc: "Self-leadership, vision, and execution.",
    cta: "Lead With Purpose",
    to: ROUTES.leadership,
  },
];

export const LQ_DIMENSIONS = [
  {
    code: "THINK",
    name: "Thinking Intelligence",
    skills: ["Critical Thinking", "Decision Making", "Problem Solving", "Strategic Thinking"],
  },
  {
    code: "FEEL",
    name: "Emotional Intelligence",
    skills: ["Self-Awareness", "Emotional Regulation", "Resilience", "Confidence"],
  },
  {
    code: "CONNECT",
    name: "Social Intelligence",
    skills: ["Communication", "Collaboration", "Empathy", "Influence"],
  },
  {
    code: "ACT",
    name: "Action Intelligence",
    skills: ["Leadership", "Initiative", "Accountability", "Execution"],
  },
  {
    code: "ADAPT",
    name: "Context Intelligence",
    skills: ["Adaptability", "Creativity", "Innovation", "Situational Awareness"],
  },
];

export const NOVA_STEPS = [
  { code: "N", name: "Notice", desc: "Build awareness of self, others, and situation." },
  { code: "O", name: "Own", desc: "Accept responsibility and develop a growth mindset." },
  { code: "V", name: "Visualize", desc: "Create direction, purpose, and a path forward." },
  { code: "A", name: "Act", desc: "Apply learning in real life with consistent action." },
];

export const FAQS_GENERAL = [
  {
    q: "What is WayMaker Skills™?",
    a: "WayMaker Skills™ is a human development and applied intelligence organization helping individuals, educators, leaders, families, and organizations develop the mindset, skills, and purpose-driven capabilities needed to thrive in a changing world.",
  },
  {
    q: "Who are the programs designed for?",
    a: "Students, parents, teachers, professionals, leaders, corporate teams, schools, and growth communities.",
  },
  {
    q: "Do you offer customized programs?",
    a: "Yes. Every program can be tailored to the audience, context, and learning outcomes you care about.",
  },
  {
    q: "What NOVA™ is?",
    a: "The human development methodology behind WayMaker Skills™.",
  },
  {
    q: "What is the LQ™ Framework?",
    a: "LQ™ (Life Intelligence Quotient) is our five-dimensional framework: THINK, FEEL, CONNECT, ACT, ADAPT.",
  },
  {
    q: "What is WAMI™?",
    a: "WAMI™ is our children's learning ecosystem for confidence, creativity, communication, character, and future-ready life skills.",
  },
  {
    q: "How can we collaborate with WayMaker Skills™?",
    a: "Reach out via our contact page to discuss school programs, corporate engagements, partnerships, or pilots.",
  },
];

export const FOOTER_LINKS = {
  Explore: [
    { to: ROUTES.about, label: "About" },
    { to: ROUTES.founder, label: "Founder" },
    { to: ROUTES.nova, label: "NOVA™ Methodology" },
    { to: ROUTES.lq, label: "LQ™ Framework" },
    { to: ROUTES.resources, label: "Resources" },
  ],
  Programs: [
    { to: ROUTES.programs, label: "All Programs" },
    { to: ROUTES.corporateTraining, label: "Corporate Training" },
    { to: ROUTES.schoolsYouth, label: "Schools & Youth" },
    { to: ROUTES.leadership, label: "Leadership" },
    { to: ROUTES.wami, label: "WAMI™" },
  ],
  Engage: [
    { to: ROUTES.contact, label: "Contact" },
    { to: ROUTES.contact, label: "Partner With Us" },
    { to: ROUTES.contact, label: "Book a Discovery Call" },
  ],
};

export const GROWTH_PATHS = [
  {
    title: "For Schools",
    outcome: "Build future-ready students, teachers, and ecosystems.",
    to: ROUTES.schoolsYouth,
  },
  {
    title: "For Educators",
    outcome: "Empowering teachers with practical tools for impactful learning.",
    to: ROUTES.schoolsYouth,
  },
  {
    title: "For Students",
    outcome: "Confidence, life skills, and direction for the journey ahead.",
    to: ROUTES.schoolsYouth,
  },
  {
    title: "For Parents",
    outcome: "Raise emotionally intelligent, capable children.",
    to: ROUTES.wami,
  },
  {
    title: "For Professionals",
    outcome: "Skills that build careers, not just resumes.",
    to: ROUTES.programs,
  },
  {
    title: "For Corporate Teams",
    outcome: "Behavioral capability and leadership that sticks.",
    to: ROUTES.corporateTraining,
  },
  {
    title: "For Leaders",
    outcome: "Self-leadership, vision, and purposeful execution.",
    to: ROUTES.leadership,
  },
  {
    title: "For Children",
    outcome: "Stories, games, and challenges that grow character.",
    to: ROUTES.wami,
  },
];

export const OUTCOMES = [
  "Confidence",
  "Communication",
  "Emotional Maturity",
  "Leadership",
  "Resilience",
  "Adaptability",
  "Purposeful Action",
  "Relationship Skills",
  "Decision Making",
  "Future Readiness",
];

export const ENGAGEMENT_STEPS = [
  { step: "Discover", desc: "Understand audience, context, and goals." },
  { step: "Design", desc: "Customize the learning experience and outcomes." },
  { step: "Deliver", desc: "Facilitate engaging, evidence-informed sessions." },
  { step: "Reflect", desc: "Capture insight and embed the learning." },
  { step: "Grow", desc: "Support action and long-term capability." },
];
