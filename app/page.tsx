import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  Code2,
  Smartphone,
  Database,
  Network,
  Brain,
  Boxes,
} from "lucide-react";

const featuredProject = {
  title: "Rikly",
  image: "/projects/rikly-dashboard.png",
  description:
    "A production SaaS platform built with modern full-stack tools, authentication, payment integrations, email workflows, and production deployment.",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Stripe",
    "Paystack",
    "Resend",
    "Vercel",
  ],
  features: [
    "Built authentication and user account workflows",
    "Integrated Stripe and Paystack payment flows",
    "Implemented transactional emails with Resend",
    "Designed responsive dashboard interfaces",
    "Used Supabase for backend logic and database storage",
    "Deployed and managed production hosting on Vercel",
  ],
  liveUrl: "https://rikly.app",
  githubUrl: "",
};

const projects = [
  {
    title: "Stock Market App",
    image: "/projects/stock-app.png",
    icon: Smartphone,
    description:
      "Built a Flutter mobile app that integrates stock market APIs and news APIs to display market data, company information, and financial news.",
    stack: ["Flutter", "Dart", "REST APIs", "Stock API", "News API"],
  },
  {
    title: "Monte Carlo Simulation",
    image: "/projects/monte-carlo.png",
    icon: Database,
    description:
      "Implemented Python simulation models to estimate mathematical probabilities, analyze outcomes with NumPy, and visualize results using Matplotlib and Tableau.",
    stack: ["Python", "Probability", "NumPy", "Matplotlib", "Tableau"],
  },
  {
    title: "Neural Network Quantization",
    image: "/projects/neural-network.png",
    icon: Brain,
    description:
      "Worked on a research-style machine learning project involving model training, neural network quantization, evaluation, and optimization analysis.",
    stack: ["Machine Learning", "Model Training", "Neural Networks", "Quantization"],
  },
  {
    title: "Student Management System",
    image: "/projects/student-management.png",
    icon: Code2,
    description:
      "Built a C++ student management system with functionality to add, search, edit, and display student records, later upgraded with a GUI for better usability.",
    stack: ["C++", "GUI", "Data Management", "UX"],
  },
  {
    title: "Shipping Container Calculator",
    image: "/projects/shipping-container.png",
    icon: Boxes,
    description:
      "Built a Java application that calculates cargo weight, dimensions, and load constraints to recommend suitable shipping container sizes.",
    stack: ["Java", "OOP", "Calculations", "Logistics"],
  },
  {
    title: "Cisco Network Configuration",
    image: "/projects/cisco-network.png",
    icon: Network,
    description:
      "Configured and simulated network topologies using Cisco networking concepts including routing, switching, IP addressing, and device configuration.",
    stack: ["Cisco", "Networking", "Routing", "Switching", "IP Configuration"],
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Dart",
  "Python",
  "Java",
  "C++",
  "SQL",
  "Supabase",
  "PostgreSQL",
  "REST APIs",
  "Tailwind CSS",
  "Stripe",
  "Paystack",
  "Resend",
  "Git",
  "Vercel",
  "AWS",
  "NumPy",
  "Matplotlib",
];

const certifications = [
  {
    title: "Meta Back-End Developer",
    provider: "Coursera",
    date: "June 2025",
  },
  {
    title: "AWS Academy Cloud Foundations",
    provider: "AWS Academy",
    date: "January 2025",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-wide">
            anurika.dev
          </a>

          <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#stack" className="hover:text-white">
              Stack
            </a>
            <a href="#certifications" className="hover:text-white">
              Certifications
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center overflow-hidden px-6 pt-32">
        <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-zinc-500">
            Full-Stack Software Engineer
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Building production-ready SaaS products, mobile apps, and practical
            software systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            I build full-stack applications using React, Next.js, TypeScript,
            Flutter, Supabase, APIs, payment systems, cloud tools, and modern
            deployment platforms.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            Open to software engineering opportunities
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold tracking-tight">About</h2>

          <p className="text-lg leading-8 text-zinc-300">
            I am a full-stack software engineer focused on building practical,
            user-focused software products. My work spans SaaS platforms, mobile
            apps, API integrations, payment systems, simulations, networking,
            and machine learning projects. I enjoy turning ideas into working
            products and improving systems from prototype to production.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Selected Work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Featured Project
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.05] md:p-10">
          <div className="mb-10 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={featuredProject.image}
              alt="Rikly dashboard screenshot"
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-sm font-medium text-blue-400">
                Production SaaS Platform
              </p>

              <h3 className="text-4xl font-bold tracking-tight">
                {featuredProject.title}
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                {featuredProject.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-zinc-200"
                >
                  Live Demo <ArrowUpRight size={16} />
                </a>

               
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <div className="mb-5 flex items-center gap-3">
                <Database size={20} className="text-blue-400" />
                <h4 className="font-semibold">Engineering Highlights</h4>
              </div>

              <div className="grid gap-3">
                {featuredProject.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-20 text-3xl font-semibold tracking-tight">
          Other Projects
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
              >
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover"
                  />
                </div>

                <Icon size={26} className="text-blue-400" />

                <h3 className="mt-6 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Tools
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Tech Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Learning
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Certifications
            </h2>
          </div>

          <div className="grid gap-6">
            {certifications.map((certification) => (
              <div
                key={certification.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]"
              >
                <h3 className="text-xl font-semibold">
                  {certification.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {certification.provider} · {certification.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.05] md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Open to software engineering opportunities.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-zinc-300">
            I am interested in frontend, full-stack, SaaS, product engineering,
            and startup software engineering roles.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href="https://github.com/Nurik-tech"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/anurika-osuji/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:Anurikaosuji01@email.com"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
            >
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 anurika.dev</p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Nurik-tech"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/anurika-osuji/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:Anurikaosuji01@email.com"
              className="hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}