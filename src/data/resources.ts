import { ROUTES } from "./routes";

export type ResourceArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  intro: string;
  readTime: string;
  audience: string;
  sections: Array<{
    id: string;
    heading: string;
    paragraphs: string[];
  }>;
  relatedLinks: Array<{
    label: string;
    to: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
};

export const RESOURCE_CATEGORIES = [
  {
    name: "Human Development",
    description:
      "Foundational thinking on how people grow through awareness, reflection, practice, and applied capability.",
  },
  {
    name: "Leadership",
    description:
      "Self-leadership, influence, responsibility, and the behaviors that help people guide others well.",
  },
  {
    name: "Emotional Intelligence",
    description:
      "Practical insight into self-awareness, emotional regulation, empathy, and resilient decision-making.",
  },
  {
    name: "Communication",
    description:
      "Clear speaking, deep listening, collaboration, and the social skills that shape real-world outcomes.",
  },
  {
    name: "Parenting",
    description:
      "Resources for adults who want to support confidence, character, and life skills in children.",
  },
  {
    name: "Student Growth",
    description:
      "Articles on confidence, readiness, life skills, and the inner capabilities students need beyond academics.",
  },
  {
    name: "Future Skills",
    description:
      "Adaptability, learning agility, creativity, and the human capabilities needed in a fast-changing world.",
  },
  {
    name: "Well-being",
    description:
      "Resilience, emotional balance, and sustainable growth for learners, leaders, and teams.",
  },
] as const;

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    slug: "why-human-development-matters",
    category: "Human Development",
    title: "Why Human Development Matters More Than Ever",
    description:
      "Why building human capability matters for schools, workplaces, families, and leaders navigating change.",
    intro:
      "Human development is no longer a side conversation. It is central to how people learn, lead, work, adapt, and live with meaning.",
    readTime: "8 min read",
    audience: "Schools, organizations, parents, and leaders",
    sections: [
      {
        id: "more-than-information",
        heading: "More information does not automatically create capability",
        paragraphs: [
          "Most environments are still organized around the transfer of information. Students are expected to remember it, professionals are expected to apply it, and leaders are expected to perform with it. But real life repeatedly shows the gap between knowledge and capability.",
          "A person may understand the theory of communication and still struggle to speak with clarity in a tense meeting. A student may score well in exams and still lack confidence, self-direction, or resilience. A team may know what good collaboration looks like and still fall into blame, avoidance, or silos under pressure.",
          "Human development matters because it focuses on what helps people convert awareness into practical action. It develops the person who uses the knowledge, not just the knowledge itself.",
        ],
      },
      {
        id: "why-now",
        heading: "Why this matters now",
        paragraphs: [
          "The pace of change has made human capability more visible. People are asked to adapt more quickly, manage uncertainty more often, collaborate across differences, and make decisions with incomplete information.",
          "In that environment, qualities such as self-awareness, communication, emotional intelligence, adaptability, and leadership become core skills. They influence how people respond to stress, how they relate to others, how they keep learning, and how they move from intention to action.",
          "That is why human development is not a luxury. It is a readiness discipline for modern life.",
        ],
      },
      {
        id: "schools-workplaces-families",
        heading: "Human development strengthens every ecosystem",
        paragraphs: [
          "In schools, it helps learners develop confidence, social awareness, responsibility, and future readiness alongside academics. It helps educators create stronger learning cultures and equips parents to support growth in more intentional ways.",
          "In workplaces, it helps professionals communicate better, lead with greater maturity, handle pressure more responsibly, and contribute more effectively to teams. It improves the quality of execution by improving the quality of the human behaviors behind it.",
          "In families and communities, it shapes character, reflection, empathy, and purposeful action. These are not abstract values. They are lived capabilities that influence daily decisions and long-term outcomes.",
        ],
      },
      {
        id: "from-awareness-to-action",
        heading: "Growth becomes meaningful when it moves into behavior",
        paragraphs: [
          "Strong human development work does not stop with motivation or inspiration. It creates the conditions for reflection, practice, and application. That is where frameworks and methodologies matter.",
          "At WayMaker Skills™, our work links awareness with action through NOVA™ and helps people build broader applied capability through the LQ™ framework. The goal is not to create short-term enthusiasm. It is to create practical change that a person can carry into relationships, work, learning, and leadership.",
          "When human development is done well, people do not just feel better informed. They become more capable of living, learning, and leading with intention.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore NOVA™ Methodology", to: ROUTES.nova },
      { label: "See the LQ™ Framework", to: ROUTES.lq },
      { label: "Browse Programs", to: ROUTES.programs },
    ],
    faqs: [
      {
        q: "What does human development include?",
        a: "It includes inner and outer capabilities such as self-awareness, emotional intelligence, communication, leadership, resilience, decision-making, and purposeful action.",
      },
      {
        q: "Is human development only for students?",
        a: "No. It is relevant for students, educators, parents, professionals, leaders, teams, and organizations.",
      },
      {
        q: "How is human development different from content training?",
        a: "Content training focuses on information. Human development focuses on the person using that information and the behaviors needed to apply it well.",
      },
    ],
  },
  {
    slug: "emotional-intelligence-future-success",
    category: "Emotional Intelligence",
    title: "The Role of Emotional Intelligence in Future Success",
    description:
      "Why emotional intelligence remains one of the strongest predictors of how people handle growth, pressure, and relationships.",
    intro:
      "Emotional intelligence shapes how people understand themselves, respond to others, and stay effective under pressure.",
    readTime: "7 min read",
    audience: "Students, professionals, leaders, and parents",
    sections: [
      {
        id: "what-ei-really-means",
        heading: "Emotional intelligence is practical, not abstract",
        paragraphs: [
          "Emotional intelligence is often treated like a soft concept, but its impact is visible in daily life. It influences how a person handles disappointment, receives feedback, listens during conflict, manages stress, and communicates when stakes are high.",
          "In practical terms, emotional intelligence includes self-awareness, emotional regulation, empathy, relationship management, and the ability to respond rather than react. These capabilities affect performance because they affect judgment, connection, and consistency.",
        ],
      },
      {
        id: "success-needs-ei",
        heading: "Why future success depends on it",
        paragraphs: [
          "The future of work and learning rewards people who can collaborate, adapt, and navigate ambiguity. Those demands are not met by technical knowledge alone.",
          "A capable professional still needs emotional maturity to work across teams. A student still needs self-awareness and resilience to persist through difficulty. A leader still needs empathy, regulation, and clear communication to influence responsibly.",
          "Emotional intelligence helps people remain effective when plans shift, relationships get difficult, or pressure rises.",
        ],
      },
      {
        id: "can-be-developed",
        heading: "Emotional intelligence can be developed intentionally",
        paragraphs: [
          "People are not fixed at one level of emotional intelligence. With reflection, guided practice, and meaningful feedback, these capacities can grow.",
          "That means organizations can build healthier team cultures, schools can support more mature learners, and families can create environments where children develop stronger emotional awareness and self-management over time.",
          "Development matters because emotional intelligence grows through repeated use, not just through explanation.",
        ],
      },
      {
        id: "ei-and-lq",
        heading: "Emotional intelligence is one dimension of life intelligence",
        paragraphs: [
          "At WayMaker Skills™, emotional intelligence is part of a larger view of human capability. Within the LQ™ framework, the FEEL dimension focuses on self-awareness, emotional regulation, resilience, and confidence.",
          "That makes emotional intelligence part of a broader developmental system rather than an isolated topic. It connects directly with communication, leadership, action, and adaptability.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Emotional Intelligence Programs", to: ROUTES.emotionalIntelligence },
      { label: "Leadership Development", to: ROUTES.leadership },
      { label: "Contact WayMaker Skills™", to: ROUTES.contact },
    ],
    faqs: [
      {
        q: "Is emotional intelligence useful in corporate settings?",
        a: "Yes. It supports communication, feedback, collaboration, conflict handling, leadership, and resilience at work.",
      },
      {
        q: "Can emotional intelligence be taught to students?",
        a: "Yes. Students can build self-awareness, regulation, empathy, confidence, and relationship skills through intentional development work.",
      },
      {
        q: "How does emotional intelligence connect with leadership?",
        a: "Leaders rely on emotional maturity to make balanced decisions, build trust, handle pressure, and influence people well.",
      },
    ],
  },
  {
    slug: "children-confidence-life-skills",
    category: "Parenting",
    title: "Helping Children Build Confidence Through Life Skills",
    description:
      "How confidence grows when children experience reflection, communication, challenge, and practical life skills.",
    intro:
      "Confidence is not built by praise alone. It grows when children learn to try, reflect, communicate, and recover.",
    readTime: "8 min read",
    audience: "Parents, schools, and child development communities",
    sections: [
      {
        id: "confidence-is-capability",
        heading: "Confidence grows through capability",
        paragraphs: [
          "Children become more confident when they experience themselves as capable. That often comes from doing meaningful tasks, solving small problems, communicating ideas, trying again after mistakes, and receiving guidance that helps them improve.",
          "This is why life skills matter. They provide the everyday behaviors that strengthen a child's sense of competence. Communication, self-expression, emotional awareness, curiosity, cooperation, and reflection all contribute to real confidence.",
        ],
      },
      {
        id: "what-parents-can-do",
        heading: "What parents can do consistently",
        paragraphs: [
          "Parents can create confidence-building environments by inviting children to participate, not just perform. Ask questions that encourage thinking. Give responsibilities that match age and readiness. Notice effort, strategy, and learning rather than only outcome.",
          "It also helps to make reflection normal. When children talk about what they tried, what felt difficult, what they learned, and what they want to do differently next time, they begin to build internal confidence instead of depending only on external approval.",
        ],
      },
      {
        id: "what-schools-can-do",
        heading: "How schools support the same growth",
        paragraphs: [
          "Schools can reinforce confidence by making space for voice, participation, collaboration, and emotional safety. Confidence rises when learners know they can contribute, make mistakes, and keep growing.",
          "Programs that combine communication, social skills, emotional awareness, and problem-solving help children build a wider base of capability. That is especially important in a world where future readiness depends on more than academic recall.",
        ],
      },
      {
        id: "wami-connection",
        heading: "Life skills make confidence sustainable",
        paragraphs: [
          "A child who learns to communicate, collaborate, regulate emotions, and approach challenges with curiosity develops a stronger inner foundation. That confidence is more durable because it is tied to skill, not performance pressure alone.",
          "This is the kind of development that WAMI™ is designed to support through stories, activities, challenges, and playful learning formats that still build serious human capability.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore WAMI™", to: ROUTES.wami },
      { label: "Schools & Youth Programs", to: ROUTES.schoolsYouth },
      { label: "Start a Conversation", to: ROUTES.contact },
    ],
    faqs: [
      {
        q: "Are life skills the same as academic skills?",
        a: "No. Life skills support how children use academic learning in real situations through confidence, communication, regulation, and responsibility.",
      },
      {
        q: "Can confidence be developed in shy children?",
        a: "Yes. Confidence does not require loudness. It grows through safe participation, small wins, reflection, and skill-building over time.",
      },
      {
        q: "Why do parents matter in confidence-building?",
        a: "Parents shape the daily environment in which children interpret challenge, feedback, mistakes, and growth.",
      },
    ],
  },
  {
    slug: "communication-skills-leadership-life",
    category: "Communication",
    title: "Communication Skills for Leadership and Life",
    description:
      "Why communication is a core life skill for leadership, collaboration, trust, and influence.",
    intro:
      "Communication influences almost every outcome that depends on people working, learning, or growing together.",
    readTime: "7 min read",
    audience: "Students, professionals, leaders, and teams",
    sections: [
      {
        id: "communication-is-core",
        heading: "Communication is not an optional extra",
        paragraphs: [
          "People often treat communication as a presentation skill or a speaking skill. In reality, it is much broader. Communication includes listening, asking thoughtful questions, giving feedback, expressing disagreement constructively, and making ideas understandable.",
          "Because of that, communication shapes trust, learning, teamwork, leadership, and conflict handling. Weak communication causes avoidable friction. Strong communication improves clarity, connection, and execution.",
        ],
      },
      {
        id: "leadership-needs-it",
        heading: "Leadership rises or falls on communication",
        paragraphs: [
          "Leadership is not only about having direction. It is also about helping others understand that direction, believe in it, and act on it. That requires communication skills grounded in clarity, empathy, presence, and credibility.",
          "Leaders who communicate well are more likely to create alignment, handle difficult conversations responsibly, and maintain trust during uncertainty.",
        ],
      },
      {
        id: "life-skill-not-job-skill",
        heading: "It is a life skill as much as a professional skill",
        paragraphs: [
          "Communication affects relationships at home, in schools, in communities, and in workplaces. Students need it for confidence and collaboration. Parents need it for connection and guidance. Professionals need it for teamwork and influence.",
          "That is why communication development should begin early and continue across life stages. The skill deepens as context becomes more complex.",
        ],
      },
      {
        id: "communication-and-lq",
        heading: "Communication links multiple human capabilities",
        paragraphs: [
          "Good communication depends on more than vocabulary. It draws on emotional awareness, listening, confidence, social intelligence, and situational judgment.",
          "Within the LQ™ framework, communication sits close to CONNECT but also relies on FEEL, THINK, and ACT. That is why communication training works best when it is part of broader human development.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Communication Excellence", to: ROUTES.communication },
      { label: "Leadership Development", to: ROUTES.leadership },
      { label: "Explore Programs", to: ROUTES.programs },
    ],
    faqs: [
      {
        q: "Is communication training only for public speaking?",
        a: "No. It also includes listening, dialogue, collaboration, feedback, influence, and conflict handling.",
      },
      {
        q: "Why is communication important for students?",
        a: "It helps students express ideas, build confidence, collaborate well, and engage more effectively in learning.",
      },
      {
        q: "Can better communication improve team performance?",
        a: "Yes. Clearer communication reduces confusion, improves trust, and supports stronger collaboration and accountability.",
      },
    ],
  },
  {
    slug: "from-knowledge-to-capability",
    category: "Human Development",
    title: "From Knowledge to Capability: The WayMaker Approach",
    description:
      "How NOVA™ and LQ™ help move learning from information toward sustained human capability.",
    intro:
      "The real question in development is not what people heard. It is what they can now do differently.",
    readTime: "8 min read",
    audience: "Organizations, schools, and program partners",
    sections: [
      {
        id: "knowledge-gap",
        heading: "The gap between learning and lived behavior",
        paragraphs: [
          "Many programs succeed in delivering content but struggle to create sustained change. Participants leave with ideas, but those ideas do not always show up in decisions, relationships, habits, or leadership behaviors.",
          "That gap exists because behavior change requires more than exposure. People need a process for noticing patterns, taking ownership, clarifying direction, and practicing new action in real contexts.",
        ],
      },
      {
        id: "nova-role",
        heading: "NOVA™ helps people move from awareness to action",
        paragraphs: [
          "NOVA™ is the methodological backbone of WayMaker Skills™. Notice builds awareness. Own creates responsibility and mindset. Visualize clarifies direction. Act turns insight into deliberate behavior.",
          "This sequence matters because development is often lost when reflection remains disconnected from practical next steps. NOVA™ gives people a structured way to move through that change process.",
        ],
      },
      {
        id: "lq-role",
        heading: "LQ™ expands the picture of what capability includes",
        paragraphs: [
          "Capability is not one-dimensional. A person may need stronger thinking, emotional regulation, communication, initiative, or adaptability depending on context.",
          "The LQ™ framework helps map that broader capability landscape across THINK, FEEL, CONNECT, ACT, and ADAPT. It makes development more holistic and more usable.",
        ],
      },
      {
        id: "why-partners-value-it",
        heading: "Why this approach matters for partners",
        paragraphs: [
          "Schools, organizations, and communities need development work that is coherent. A disconnected set of workshops may create interest, but coherent frameworks create continuity.",
          "That is why the WayMaker Skills™ approach combines methodology, framework, and program design. The result is learning that is easier to apply, easier to reinforce, and more likely to shape durable behavior.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Read about NOVA™", to: ROUTES.nova },
      { label: "Explore LQ™", to: ROUTES.lq },
      { label: "Corporate Training", to: ROUTES.corporateTraining },
    ],
    faqs: [
      {
        q: "What is the difference between NOVA™ and LQ™?",
        a: "NOVA™ is the developmental methodology, while LQ™ is the broader framework for understanding applied life intelligence across five dimensions.",
      },
      {
        q: "Why do frameworks help in learning design?",
        a: "They create consistency, clarity, and repeatable structure so development can extend beyond a one-off session.",
      },
      {
        q: "Can this approach be customized for different audiences?",
        a: "Yes. The underlying framework stays coherent while the delivery, examples, and outcomes are adapted to each audience and context.",
      },
    ],
  },
  {
    slug: "building-resilience-changing-world",
    category: "Well-being",
    title: "Building Resilience in a Changing World",
    description:
      "Why resilience is better understood as adaptive strength rather than constant toughness.",
    intro:
      "Resilience is not about pretending pressure does not exist. It is about developing the inner and outer capacities to respond well.",
    readTime: "7 min read",
    audience: "Students, professionals, teams, and families",
    sections: [
      {
        id: "redefine-resilience",
        heading: "Resilience is adaptive strength",
        paragraphs: [
          "Resilience is often mistaken for endurance alone. But long-term growth requires more than pushing through. It requires awareness, flexibility, recovery, and the ability to keep responding constructively when circumstances change.",
          "That makes resilience an adaptive skill. It includes emotional regulation, perspective, confidence, support-seeking, and the willingness to learn through challenge.",
        ],
      },
      {
        id: "why-pressure-is-rising",
        heading: "Why resilience is increasingly important",
        paragraphs: [
          "People are now managing rapid change, uncertainty, social pressure, and rising expectations across many parts of life. Students face performance pressure. Professionals face complexity and pace. Leaders face responsibility under ambiguity.",
          "Without resilience, that pressure can lead to withdrawal, reactivity, or fatigue. With resilience, people become more able to recover, learn, and keep acting with intention.",
        ],
      },
      {
        id: "how-it-develops",
        heading: "How resilience develops",
        paragraphs: [
          "Resilience grows through repeated experiences of challenge supported by reflection, meaning, and skill-building. People need to notice what drains them, understand what steadies them, and build practical strategies they can return to under pressure.",
          "That may include better emotional awareness, clearer boundaries, healthier self-talk, stronger communication, and more intentional habits.",
        ],
      },
      {
        id: "resilience-in-programs",
        heading: "Resilience belongs in development programs",
        paragraphs: [
          "Whether the audience is a school, a workplace, or a family learning community, resilience should not be treated as an isolated well-being topic. It intersects with communication, leadership, confidence, and adaptability.",
          "That is why WayMaker Skills™ integrates resilience into broader human development rather than treating it as a standalone slogan.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Emotional Intelligence Training", to: ROUTES.emotionalIntelligence },
      { label: "Schools & Youth Programs", to: ROUTES.schoolsYouth },
      { label: "Coaching & Mentoring", to: ROUTES.coachingMentoring },
    ],
    faqs: [
      {
        q: "Is resilience the same as being mentally tough?",
        a: "Not exactly. Resilience includes awareness, recovery, flexibility, and support-seeking, not just endurance.",
      },
      {
        q: "Can resilience be developed in students?",
        a: "Yes. Students can develop resilience through emotional awareness, reflection, challenge, and supportive learning environments.",
      },
      {
        q: "Why does resilience matter at work?",
        a: "It helps people stay effective under pressure, adapt to change, and sustain performance more responsibly.",
      },
    ],
  },
];
