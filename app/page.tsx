import Image from "next/image";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Boxes,
  Brain,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  Database,
  Download,
  Layers3,
  Mail,
  MapPin,
  Network,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";


const featuredProject = {
  title: "Rikly",
  eyebrow: "Founder & Full-Stack Software Engineer",
  image: "/projects/rikly-dashboard.png",
  description:
    "A multi-tenant SaaS platform that helps service businesses manage appointments, customers, products, payments, availability, and their online presence from one modern dashboard.",
  challenge:
    "Many independent service businesses depend on disconnected tools for bookings, payments, customer management, and online sales.",
  solution:
    "I designed and developed one integrated platform with secure authentication, business onboarding, booking management, payments, transactional emails, dashboards, analytics, and responsive public pages.",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Stripe",
    "Paystack",
    "Resend",
    "Vercel",
  ],
  highlights: [
    "Architected a multi-tenant SaaS platform for independent businesses",
    "Implemented secure authentication and business onboarding workflows",
    "Integrated Stripe and Paystack payment infrastructure",
    "Built appointment, customer, product, and availability management",
    "Developed transactional email workflows using Resend",
    "Created responsive business dashboards and public booking pages",
    "Implemented PostgreSQL Row Level Security with Supabase",
    "Deployed and managed the production application on Vercel",
  ],
  liveUrl: "https://rikly.app",
};

const projects = [
  {
    title: "Stock Market Mobile App",
    category: "Mobile Development",
    image: "/projects/stock-app.png",
    icon: Smartphone,
    description:
      "A cross-platform financial application that combines real-time market information, company data, and financial news in a structured mobile experience.",
    outcome:
      "Connected multiple third-party APIs and transformed complex market information into a responsive, user-friendly interface.",
    stack: ["Flutter", "Dart", "REST APIs", "Financial APIs"],
  },
  {
    title: "Monte Carlo Simulation",
    category: "Data & Simulation",
    image: "/projects/monte-carlo.png",
    icon: Database,
    description:
      "A probability simulation project built to model uncertain outcomes, analyze large experiment sets, and communicate results visually.",
    outcome:
      "Used numerical computation and data visualization to evaluate probability distributions and simulation outcomes.",
    stack: ["Python", "NumPy", "Matplotlib", "Tableau"],
  },
  {
    title: "Neural Network Quantization",
    category: "Machine Learning",
    image: "/projects/neural-network.png",
    icon: Brain,
    description:
      "A research-focused machine learning project examining neural network training, model compression, quantization, and performance evaluation.",
    outcome:
      "Compared model efficiency and predictive performance before and after quantization.",
    stack: [
      "Python",
      "Machine Learning",
      "Neural Networks",
      "Quantization",
    ],
  },
  {
    title: "Student Management System",
    category: "Desktop Software",
    image: "/projects/student-management.png",
    icon: Code2,
    description:
      "A record-management application for creating, finding, updating, and displaying student information through a graphical interface.",
    outcome:
      "Applied object-oriented programming and structured data-management principles to build a maintainable desktop application.",
    stack: ["C++", "OOP", "GUI", "Data Management"],
  },
  {
    title: "Shipping Container Calculator",
    category: "Business Software",
    image: "/projects/shipping-container.png",
    icon: Boxes,
    description:
      "A logistics application that evaluates cargo dimensions, weight, and capacity constraints to recommend suitable shipping containers.",
    outcome:
      "Converted practical logistics requirements into reusable object-oriented calculation logic.",
    stack: ["Java", "OOP", "Algorithms", "Logistics"],
  },
  {
    title: "Cisco Network Configuration",
    category: "Networking",
    image: "/projects/cisco-network.png",
    icon: Network,
    description:
      "A simulated enterprise network environment involving routing, switching, IP addressing, subnetting, and device configuration.",
    outcome:
      "Designed and validated network communication across multiple devices and logical network segments.",
    stack: ["Cisco", "Routing", "Switching", "TCP/IP"],
  },
];

const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: Layers3,
    description:
      "Responsive, accessible, and maintainable interfaces for web applications.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    description:
      "Application logic, databases, authentication, integrations, and APIs.",
    skills: [
      "Supabase",
      "PostgreSQL",
      "SQL",
      "REST APIs",
      "Authentication",
      "Row Level Security",
    ],
  },
  {
    title: "Mobile & Programming",
    icon: Smartphone,
    description:
      "Cross-platform applications and object-oriented software development.",
    skills: ["Flutter", "Dart", "Python", "Java", "C++"],
  },
  {
    title: "Cloud & Delivery",
    icon: Cloud,
    description:
      "Production deployment, version control, collaboration, and cloud tools.",
    skills: [
      "Vercel",
      "AWS",
      "Git",
      "GitHub",
      "CI/CD",
      "Jira",
      "Agile",
    ],
  },
  {
    title: "Payments & Communication",
    icon: BriefcaseBusiness,
    description:
      "Reliable payment processing and automated communication workflows.",
    skills: ["Stripe", "Paystack", "Resend", "Webhooks"],
  },
  {
    title: "Data & Machine Learning",
    icon: Brain,
    description:
      "Numerical analysis, visualization, simulations, and model optimization.",
    skills: [
      "NumPy",
      "Matplotlib",
      "Tableau",
      "Machine Learning",
      "Neural Networks",
    ],
  },
];

const certifications = [
  {
    title: "Meta Back-End Developer",
    provider: "Coursera",
    date: "June 2025",
    description:
      "Backend development, APIs, databases, version control, and application architecture.",
  },
  {
    title: "AWS Academy Cloud Foundations",
    provider: "AWS Academy",
    date: "January 2025",
    description:
      "Cloud concepts, AWS services, security, architecture, pricing, and support.",
  },
  {
    title: "Claude for Software Development",
    provider: "Coursera",
    date: "2026",
    description:
      "Practical use of Claude for software development, code generation, debugging, documentation, and AI-assisted engineering workflows.",
  },
];

const statistics = [
  {
    value: "1",
    label: "Production SaaS platform",
  },
  {
    value: "6+",
    label: "Software projects",
  },
  {
    value: "20+",
    label: "Technologies used",
  },
  {
    value: "Web + Mobile",
    label: "Engineering experience",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-blue-500/30">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#050505]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="group inline-flex items-center gap-3"
            aria-label="Go to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-sm font-bold transition group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
              AO
            </span>

            <span className="hidden text-sm font-semibold tracking-wide sm:block">
              Anurika Osuji
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-zinc-400 lg:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>

            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>

            <a className="transition hover:text-white" href="#stack">
              Expertise
            </a>

            <a
              className="transition hover:text-white"
              href="#certifications"
            >
              Certifications
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden pt-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-28 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
          <div className="absolute right-[8%] top-[35%] h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

          <div
            className="
              absolute inset-0 opacity-[0.035]
              [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              [background-size:64px_64px]
            "
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-2 text-sm text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Open to software engineering opportunities
            </div>

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-blue-400">
              Full-Stack Software Engineer
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              I build software products that solve{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                real business problems.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              I&apos;m Anurika, a full-stack engineer and product builder
              specialising in SaaS platforms, responsive web applications,
              mobile apps, payments, APIs, databases, and cloud deployment.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
              >
                Explore my work
                <ArrowDown size={16} />
              </a>

              <a
                href="/resume/Anurika_Osuji_wisdom_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <Download size={16} />
                View résumé
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-zinc-500" />
                Based in Leeds, England and Berlin, Germany.
              </span>

              <span className="inline-flex items-center gap-2">
                <Sparkles size={16} className="text-zinc-500" />
                Web, mobile and SaaS development
              </span>
            </div>
          </div>

          <div className="relative flex items-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-transparent to-violet-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Current focus
                    </p>

                    <h2 className="mt-2 text-xl font-semibold">
                      Product engineering
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                    <Code2 size={21} className="text-blue-300" />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Production-ready SaaS applications",
                    "Scalable frontend architecture",
                    "Secure backend and database systems",
                    "Payment and third-party integrations",
                    "Mobile-first user experiences",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/25 p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                        <Check size={14} className="text-emerald-400" />
                      </span>

                      <p className="text-sm text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-6">
                  <div>
                    <p className="text-xl font-semibold">Next.js</p>
                    <p className="mt-1 text-xs text-zinc-500">Web</p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold">Flutter</p>
                    <p className="mt-1 text-xs text-zinc-500">Mobile</p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold">Supabase</p>
                    <p className="mt-1 text-xs text-zinc-500">Backend</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
          {statistics.map((statistic, index) => (
            <div
              key={statistic.label}
              className={`
                px-4 py-8 sm:px-6
                ${index % 2 === 0 ? "border-r border-white/[0.08]" : ""}
                ${
                  index === 1
                    ? "lg:border-r"
                    : index === 2
                      ? "lg:border-r"
                      : ""
                }
              `}
            >
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {statistic.value}
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-400">
              About me
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Engineer.
              <br />
              Builder.
              <br />
              Problem solver.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-zinc-200 sm:text-2xl sm:leading-10">
              I combine software engineering, product thinking, and business
              awareness to transform ideas into practical digital products.
            </p>

            <div className="mt-8 grid gap-6 text-base leading-8 text-zinc-400 md:grid-cols-2">
              <p>
                My experience includes frontend and full-stack development,
                mobile applications, relational databases, cloud services,
                payment systems, API integrations, machine learning projects,
                simulations, and networking.
              </p>

              <p>
                I&apos;m particularly interested in building products from the
                ground up, improving user journeys, solving technical
                challenges, and developing systems that can grow from an early
                prototype into a production platform.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Product-minded",
                "User-focused",
                "Business-aware",
                "Production-oriented",
                "Continuous learner",
              ].map((quality) => (
                <span
                  key={quality}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 border-y border-white/[0.08] bg-[#080808] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-400">
              Selected work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Products and engineering projects
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              A selection of production, mobile, data, machine learning,
              desktop, logistics, and networking projects.
            </p>
          </div>

          <article className="group mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl transition duration-500 hover:border-blue-400/30">
            <div className="relative overflow-hidden border-b border-white/10 bg-[#0d0d0d] p-3 sm:p-5">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.08] via-transparent to-violet-500/[0.08]" />

              <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.08]">
                <Image
                  src={featuredProject.image}
                  alt="Rikly business dashboard"
                  width={1600}
                  height={1000}
                  priority
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.015]"
                />
              </div>
            </div>

            <div className="grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
                    Production SaaS
                  </span>

                  <span className="text-sm text-zinc-500">
                    {featuredProject.eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                  {featuredProject.description}
                </p>

                <div className="mt-9 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-5">
                    <p className="text-sm font-semibold text-white">
                      The challenge
                    </p>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {featuredProject.challenge}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-5">
                    <p className="text-sm font-semibold text-white">
                      The solution
                    </p>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {featuredProject.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredProject.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-1.5 text-xs text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-9">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
                  >
                    Visit live platform
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/[0.08] bg-black/30 p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                    <Database size={19} className="text-blue-300" />
                  </span>

                  <div>
                    <p className="font-semibold">Engineering highlights</p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Architecture, features and delivery
                    </p>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {featuredProject.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 border-b border-white/[0.07] pb-4 last:border-0 last:pb-0"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                        <Check size={13} className="text-emerald-400" />
                      </span>

                      <p className="text-sm leading-6 text-zinc-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="mt-24 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
                Additional projects
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Across multiple disciplines
              </h3>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-white/[0.025] transition duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:bg-white/[0.045]"
                >
                  <div className="overflow-hidden border-b border-white/[0.08] bg-black/30 p-3">
                    <div className="overflow-hidden rounded-[1.1rem] border border-white/[0.07]">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        width={1200}
                        height={800}
                        className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                        <Icon size={19} className="text-blue-300" />
                      </span>

                      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        {project.category}
                      </p>
                    </div>

                    <h4 className="mt-6 text-xl font-semibold">
                      {project.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-5 rounded-xl border border-white/[0.07] bg-black/25 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                        Engineering outcome
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-300">
                        {project.outcome}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.09] px-3 py-1 text-xs text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="stack" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-400">
                Technical expertise
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Tools I use to build and deliver.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
                My stack covers the complete product lifecycle, from interface
                development and business logic to data, integrations, testing,
                collaboration, and deployment.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article
                    key={group.title}
                    className="rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] p-6 transition hover:border-blue-400/25 hover:bg-white/[0.04]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                      <Icon size={20} className="text-blue-300" />
                    </span>

                    <h3 className="mt-5 text-lg font-semibold">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {group.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/[0.08] bg-black/20 px-2.5 py-1.5 text-xs text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="scroll-mt-24 border-y border-white/[0.08] bg-white/[0.02] py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-400">
              Certifications
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Continuous learning
            </h2>

            <p className="mt-5 max-w-md leading-8 text-zinc-400">
              Professional training supporting my experience in backend
              development, databases, APIs, version control, and cloud
              computing.
            </p>
          </div>

          <div className="grid gap-5">
            {certifications.map((certification) => (
              <article
                key={certification.title}
                className="group rounded-[1.5rem] border border-white/[0.09] bg-[#080808] p-6 transition hover:border-blue-400/30 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                    <Award size={21} className="text-blue-300" />
                  </span>

                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <h3 className="text-xl font-semibold">
                        {certification.title}
                      </h3>

                      <span className="text-sm text-zinc-500">
                        {certification.date}
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-medium text-blue-300">
                      {certification.provider}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {certification.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-0 left-[30%] h-56 w-56 rounded-full bg-violet-500/10 blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-400">
                  Let&apos;s connect
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Looking for an engineer who can turn ideas into working
                  products?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                  I&apos;m open to frontend, full-stack, SaaS, product
                  engineering, startup, and mobile development opportunities.
                </p>
              </div>

              <a
                href="mailto:Anurikaosuji01@gmail.com"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
              >
                <Mail size={17} />
                Send me an email
              </a>
            </div>

            <div className="relative mt-12 flex flex-wrap gap-3 border-t border-white/[0.08] pt-8">
              <a
                href="https://github.com/Nurik-tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/25 hover:text-white"
              >
                <FaGithub size={17} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anurika-osuji/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/25 hover:text-white"
              >
                <FaLinkedinIn size={17} />
                LinkedIn
              </a>

              <a
                href="/resume/Anurika_Osuji_Wisdom_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/25 hover:text-white"
              >
                <Download size={17} />
                Résumé
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] py-9">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 text-sm text-zinc-500 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="font-medium text-zinc-300">Anurika Osuji</p>
            <p className="mt-1">
              Full-Stack Software Engineer and Product Builder
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/Nurik-tech"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <FaGithub size={17} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/anurika-osuji/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <FaLinkedinIn size={17} />
              LinkedIn
            </a>

            <a
              href="mailto:Anurikaosuji01@gmail.com"
              className="transition hover:text-white"
            >
              Email
            </a>

            <p>© 2026</p>
          </div>
        </div>
      </footer>
    </main>
  );
}