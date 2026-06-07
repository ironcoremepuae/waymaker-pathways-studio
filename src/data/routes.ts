export const ROUTES = {
  home: "/",
  about: "/about-waymaker-skills",
  founder: "/sanjo-mathew-founder",
  nova: "/nova-human-development-methodology",
  lq: "/lq-life-intelligence-quotient-framework",
  programs: "/human-development-programs",
  corporateTraining: "/corporate-training-programs",
  schoolsYouth: "/school-youth-development-programs",
  leadership: "/leadership-development-training",
  communication: "/communication-skills-training",
  emotionalIntelligence: "/emotional-intelligence-training",
  coachingMentoring: "/coaching-and-mentoring",
  wami: "/wami-childrens-life-skills",
  resources: "/resources",
  contact: "/contact",
} as const;

export const LEGACY_ROUTE_REDIRECTS = {
  "/about": ROUTES.about,
  "/founder": ROUTES.founder,
  "/nova": ROUTES.nova,
  "/lq": ROUTES.lq,
  "/programs": ROUTES.programs,
  "/corporate-training": ROUTES.corporateTraining,
  "/schools-youth": ROUTES.schoolsYouth,
  "/leadership": ROUTES.leadership,
  "/communication": ROUTES.communication,
  "/emotional-intelligence": ROUTES.emotionalIntelligence,
  "/coaching-mentoring": ROUTES.coachingMentoring,
  "/wami": ROUTES.wami,
} as const;

export const CANONICAL_SITEMAP_ROUTES = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.founder,
  ROUTES.nova,
  ROUTES.lq,
  ROUTES.programs,
  ROUTES.corporateTraining,
  ROUTES.schoolsYouth,
  ROUTES.leadership,
  ROUTES.communication,
  ROUTES.emotionalIntelligence,
  ROUTES.coachingMentoring,
  ROUTES.wami,
  ROUTES.resources,
  ROUTES.contact,
] as const;

export const SERVICE_ROUTE_BY_PROGRAM_SLUG = {
  leadership: ROUTES.leadership,
  communication: ROUTES.communication,
  "emotional-intelligence": ROUTES.emotionalIntelligence,
  "coaching-mentoring": ROUTES.coachingMentoring,
  wami: ROUTES.wami,
} as const;
