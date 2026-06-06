import logo from "@/assets/waymaker-logo.png";

export const BRAND = "WayMaker Skills™";
export const TAGLINE = "Transforming Potential into Purpose";
export const EYEBROW = "Human Development • Applied Intelligence • Future Skills";
export const LOGO = logo;

export const CONTACT = {
  email: "hello@waymakerskills.com",
  phone: "+91 — (coming soon)",
  location: "India",
  founderSite: "https://sanjo.in",
};

export type NavChild = { to: string; label: string; desc?: string };
export type NavItem =
  | { to: string; label: string }
  | { label: string; children: NavChild[] };

export const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/founder", label: "Founder" },
  {
    label: "Frameworks",
    children: [
      { to: "/nova", label: "NOVA™ Methodology", desc: "Notice · Own · Visualize · Act — from awareness to action." },
      { to: "/lq", label: "LQ™ Framework", desc: "Five dimensions of applied life intelligence." },
    ],
  },
  {
    label: "Programs",
    children: [
      { to: "/programs", label: "All Programs", desc: "Explore the full portfolio across audiences." },
      { to: "/corporate-training", label: "Corporate Training", desc: "Leadership, culture, and capability for teams." },
      { to: "/schools-youth", label: "Schools & Youth", desc: "Life skills, character, and future readiness." },
      { to: "/leadership", label: "Leadership Development", desc: "From self-leadership to leading systems." },
      { to: "/communication", label: "Communication Excellence", desc: "Clarity, presence, listening, influence." },
      { to: "/emotional-intelligence", label: "Emotional Intelligence", desc: "Awareness, regulation, empathy, resilience." },
      { to: "/coaching-mentoring", label: "Coaching & Mentoring", desc: "1:1 and group journeys for growth." },
      { to: "/wami", label: "WAMI™ — Children", desc: "Children's learning ecosystem of WayMaker Skills™." },
    ],
  },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export const PROGRAMS = [
  { slug: "leadership", title: "Leadership Development", desc: "Self-leadership, responsible leadership, decision-making, and team leadership.", best: "Managers, leaders, entrepreneurs", tag: "Leadership" },
  { slug: "communication", title: "Communication Excellence", desc: "Clarity, confidence, presentation skills, listening, and influence.", best: "Professionals, leaders, students", tag: "Professionals" },
  { slug: "emotional-intelligence", title: "Emotional Intelligence", desc: "Self-awareness, regulation, empathy, resilience, and relationship skills.", best: "Everyone — from students to executives", tag: "Personal Growth" },
  { slug: "critical-thinking", title: "Critical Thinking & Problem Solving", desc: "Structured thinking, decision frameworks, and applied reasoning.", best: "Students, professionals, leaders", tag: "Professionals" },
  { slug: "future-skills", title: "Future Skills Development", desc: "Adaptability, creativity, digital fluency, and lifelong learning.", best: "Students, early-career, organizations", tag: "Youth" },
  { slug: "wellbeing", title: "Well-being & Resilience", desc: "Stress handling, mental fitness, and sustainable performance.", best: "Teams, leaders, families", tag: "Corporate" },
  { slug: "coaching-mentoring", title: "Coaching & Mentoring", desc: "1:1 and group coaching for clarity, growth, and purpose-driven action.", best: "Individuals and emerging leaders", tag: "Personal Growth" },
  { slug: "parents", title: "Parent Empowerment", desc: "Tools to raise confident, capable, emotionally intelligent children.", best: "Parents and families", tag: "Schools" },
  { slug: "teachers", title: "Teacher Development", desc: "Equipping educators with human development skills for the modern classroom.", best: "Schools and educators", tag: "Schools" },
  { slug: "wami", title: "WAMI™ Programs", desc: "Children's learning ecosystem for confidence, creativity, and character.", best: "Children, schools, parents", tag: "Children" },
  { slug: "assessments", title: "Assessments & Development Tools", desc: "Insight-led diagnostics that turn awareness into action.", best: "Individuals and organizations", tag: "Corporate" },
];

export const AUDIENCES = [
  { title: "Schools & Educational Institutions", desc: "Future-ready learners, teachers, and ecosystems.", cta: "Plan a School Program", to: "/schools-youth" },
  { title: "Students & Youth", desc: "Confidence, life skills, and clarity of direction.", cta: "Build Life Skills", to: "/schools-youth" },
  { title: "Parents & Families", desc: "Tools to raise emotionally intelligent children.", cta: "Support Child Growth", to: "/wami" },
  { title: "Teachers & Educators", desc: "Human development capability for the classroom.", cta: "Empower Educators", to: "/schools-youth" },
  { title: "Professionals & Job Seekers", desc: "Skills that build careers, not just resumes.", cta: "Grow Career Skills", to: "/programs" },
  { title: "Women & Growth Communities", desc: "Spaces for purposeful growth and leadership.", cta: "Build Confidence", to: "/coaching-mentoring" },
  { title: "Corporate Teams", desc: "Behavioral and leadership development that sticks.", cta: "Improve Team Capability", to: "/corporate-training" },
  { title: "Leaders & Entrepreneurs", desc: "Self-leadership, vision, and execution.", cta: "Lead With Purpose", to: "/leadership" },
];

export const LQ_DIMENSIONS = [
  { code: "THINK", name: "Thinking Intelligence", skills: ["Critical Thinking", "Decision Making", "Problem Solving", "Strategic Thinking"] },
  { code: "FEEL", name: "Emotional Intelligence", skills: ["Self-Awareness", "Emotional Regulation", "Resilience", "Confidence"] },
  { code: "CONNECT", name: "Social Intelligence", skills: ["Communication", "Collaboration", "Empathy", "Influence"] },
  { code: "ACT", name: "Action Intelligence", skills: ["Leadership", "Initiative", "Accountability", "Execution"] },
  { code: "ADAPT", name: "Context Intelligence", skills: ["Adaptability", "Creativity", "Innovation", "Situational Awareness"] },
];

export const NOVA_STEPS = [
  { code: "N", name: "Notice", desc: "Build awareness of self, others, and situation." },
  { code: "O", name: "Own", desc: "Accept responsibility and develop a growth mindset." },
  { code: "V", name: "Visualize", desc: "Create direction, purpose, and a path forward." },
  { code: "A", name: "Act", desc: "Apply learning in real life with consistent action." },
];

export const FAQS_GENERAL = [
  { q: "What is WayMaker Skills™?", a: "WayMaker Skills™ is a human development and applied intelligence organization helping individuals, educators, leaders, families, and organizations develop the mindset, skills, and purpose-driven capabilities needed to thrive in a changing world." },
  { q: "Who are the programs designed for?", a: "Students, parents, teachers, professionals, leaders, corporate teams, schools, and growth communities." },
  { q: "Do you offer customized programs?", a: "Yes. Every program can be tailored to the audience, context, and learning outcomes you care about." },
  { q: "What is the NOVA™ methodology?", a: "NOVA™ is our evidence-informed human development methodology — Notice, Own, Visualize, Act — that turns awareness into action." },
  { q: "What is the LQ™ Framework?", a: "LQ™ (Life Intelligence Quotient) is our five-dimensional framework: THINK, FEEL, CONNECT, ACT, ADAPT." },
  { q: "What is WAMI™?", a: "WAMI™ is our children's learning ecosystem for confidence, creativity, communication, character, and future-ready life skills." },
  { q: "How can we collaborate with WayMaker Skills™?", a: "Reach out via our contact page to discuss school programs, corporate engagements, partnerships, or pilots." },
];

export const FOOTER_LINKS = {
  Explore: [
    { to: "/about", label: "About" },
    { to: "/founder", label: "Founder" },
    { to: "/nova", label: "NOVA™ Methodology" },
    { to: "/lq", label: "LQ™ Framework" },
    { to: "/resources", label: "Resources" },
  ],
  Programs: [
    { to: "/programs", label: "All Programs" },
    { to: "/corporate-training", label: "Corporate Training" },
    { to: "/schools-youth", label: "Schools & Youth" },
    { to: "/leadership", label: "Leadership" },
    { to: "/wami", label: "WAMI™" },
  ],
  Engage: [
    { to: "/contact", label: "Contact" },
    { to: "/contact", label: "Partner With Us" },
    { to: "/contact", label: "Book a Discovery Call" },
  ],
};

export const GROWTH_PATHS = [
  { title: "For Schools", outcome: "Build future-ready students, teachers, and ecosystems.", to: "/schools-youth" },
  { title: "For Students", outcome: "Confidence, life skills, and direction for the journey ahead.", to: "/schools-youth" },
  { title: "For Parents", outcome: "Raise emotionally intelligent, capable children.", to: "/wami" },
  { title: "For Professionals", outcome: "Skills that build careers, not just resumes.", to: "/programs" },
  { title: "For Corporate Teams", outcome: "Behavioral capability and leadership that sticks.", to: "/corporate-training" },
  { title: "For Leaders", outcome: "Self-leadership, vision, and purposeful execution.", to: "/leadership" },
  { title: "For Children", outcome: "Stories, games, and challenges that grow character.", to: "/wami" },
];

export const OUTCOMES = [
  "Confidence", "Communication", "Emotional Maturity", "Leadership",
  "Resilience", "Adaptability", "Purposeful Action", "Relationship Skills",
  "Decision Making", "Future Readiness",
];

export const ENGAGEMENT_STEPS = [
  { step: "Discover", desc: "Understand audience, context, and goals." },
  { step: "Design", desc: "Customize the learning experience and outcomes." },
  { step: "Deliver", desc: "Facilitate engaging, evidence-informed sessions." },
  { step: "Reflect", desc: "Capture insight and embed the learning." },
  { step: "Grow", desc: "Support action and long-term capability." },
];
