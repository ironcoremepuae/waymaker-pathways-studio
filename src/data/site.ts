import logo from "@/assets/waymaker-logo.png";

export const BRAND = "WayMaker Skills\u2122";
export const TAGLINE = "Transforming Potential into Purpose";
export const EYEBROW = "Human Development • Applied Intelligence • Future Skills";
export const LOGO = logo;

export const CONTACT = {
  email: "hello@waymakerskills.com",
  phone: "+91 \u2014 (coming soon)",
  location: "India",
  founderSite: "https://sanjo.in",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/founder", label: "Founder" },
  {
    label: "Frameworks",
    children: [
      { to: "/nova", label: "NOVA\u2122 Methodology" },
      { to: "/lq", label: "LQ\u2122 Framework" },
    ],
  },
  {
    label: "Programs",
    children: [
      { to: "/programs", label: "All Programs" },
      { to: "/corporate-training", label: "Corporate Training" },
      { to: "/schools-youth", label: "Schools & Youth" },
      { to: "/leadership", label: "Leadership Development" },
      { to: "/communication", label: "Communication Excellence" },
      { to: "/emotional-intelligence", label: "Emotional Intelligence" },
      { to: "/coaching-mentoring", label: "Coaching & Mentoring" },
      { to: "/wami", label: "WAMI\u2122" },
    ],
  },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export const PROGRAMS = [
  { slug: "leadership", title: "Leadership Development", desc: "Self-leadership, responsible leadership, decision-making, and team leadership.", best: "Managers, leaders, entrepreneurs" },
  { slug: "communication", title: "Communication Excellence", desc: "Clarity, confidence, presentation skills, listening, and influence.", best: "Professionals, leaders, students" },
  { slug: "emotional-intelligence", title: "Emotional Intelligence", desc: "Self-awareness, regulation, empathy, resilience, and relationship skills.", best: "Everyone \u2014 from students to executives" },
  { slug: "critical-thinking", title: "Critical Thinking & Problem Solving", desc: "Structured thinking, decision frameworks, and applied reasoning.", best: "Students, professionals, leaders" },
  { slug: "future-skills", title: "Future Skills Development", desc: "Adaptability, creativity, digital fluency, and lifelong learning.", best: "Students, early-career, organizations" },
  { slug: "wellbeing", title: "Well-being & Resilience", desc: "Stress handling, mental fitness, and sustainable performance.", best: "Teams, leaders, families" },
  { slug: "coaching-mentoring", title: "Coaching & Mentoring", desc: "1:1 and group coaching for clarity, growth, and purpose-driven action.", best: "Individuals and emerging leaders" },
  { slug: "parents", title: "Parent Empowerment", desc: "Tools to raise confident, capable, emotionally intelligent children.", best: "Parents and families" },
  { slug: "teachers", title: "Teacher Development", desc: "Equipping educators with human development skills for the modern classroom.", best: "Schools and educators" },
  { slug: "wami", title: "WAMI\u2122 Programs", desc: "Children\u2019s learning ecosystem for confidence, creativity, and character.", best: "Children, schools, parents" },
  { slug: "assessments", title: "Assessments & Development Tools", desc: "Insight-led diagnostics that turn awareness into action.", best: "Individuals and organizations" },
];

export const AUDIENCES = [
  { title: "Schools & Educational Institutions", desc: "Future-ready learners, teachers, and ecosystems." },
  { title: "Students & Youth", desc: "Confidence, life skills, and clarity of direction." },
  { title: "Parents & Families", desc: "Tools to raise emotionally intelligent children." },
  { title: "Teachers & Educators", desc: "Human development capability for the classroom." },
  { title: "Professionals & Job Seekers", desc: "Skills that build careers, not just resumes." },
  { title: "Women & Growth Communities", desc: "Spaces for purposeful growth and leadership." },
  { title: "Corporate Teams", desc: "Behavioral and leadership development that sticks." },
  { title: "Leaders & Entrepreneurs", desc: "Self-leadership, vision, and execution." },
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
  { q: "What is WayMaker Skills\u2122?", a: "WayMaker Skills\u2122 is a human development and applied intelligence organization helping individuals, educators, leaders, families, and organizations develop the mindset, skills, and purpose-driven capabilities needed to thrive in a changing world." },
  { q: "Who are the programs designed for?", a: "Students, parents, teachers, professionals, leaders, corporate teams, schools, and growth communities." },
  { q: "Do you offer customized programs?", a: "Yes. Every program can be tailored to the audience, context, and learning outcomes you care about." },
  { q: "What is the NOVA\u2122 methodology?", a: "NOVA\u2122 is our evidence-informed human development methodology \u2014 Notice, Own, Visualize, Act \u2014 that turns awareness into action." },
  { q: "What is the LQ\u2122 Framework?", a: "LQ\u2122 (Life Intelligence Quotient) is our five-dimensional framework: THINK, FEEL, CONNECT, ACT, ADAPT." },
  { q: "What is WAMI\u2122?", a: "WAMI\u2122 is our children\u2019s learning ecosystem for confidence, creativity, communication, character, and future-ready life skills." },
  { q: "How can we collaborate with WayMaker Skills\u2122?", a: "Reach out via our contact page to discuss school programs, corporate engagements, partnerships, or pilots." },
];

export const FOOTER_LINKS = {
  Explore: [
    { to: "/about", label: "About" },
    { to: "/founder", label: "Founder" },
    { to: "/nova", label: "NOVA\u2122 Methodology" },
    { to: "/lq", label: "LQ\u2122 Framework" },
    { to: "/resources", label: "Resources" },
  ],
  Programs: [
    { to: "/programs", label: "All Programs" },
    { to: "/corporate-training", label: "Corporate Training" },
    { to: "/schools-youth", label: "Schools & Youth" },
    { to: "/leadership", label: "Leadership" },
    { to: "/wami", label: "WAMI\u2122" },
  ],
  Engage: [
    { to: "/contact", label: "Contact" },
    { to: "/contact", label: "Partner With Us" },
    { to: "/contact", label: "Book a Discovery Call" },
  ],
};
