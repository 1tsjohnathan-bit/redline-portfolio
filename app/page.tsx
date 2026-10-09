
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "Wireless Gaming Mouse",
    category: "HARDWARE / R&D",
    image: "/projects/wireless-mouse.jpg",
    summary:
      "Exploring the design of a lightweight wireless computer mouse, including internal components, sensors, and hardware integration.",
    details:
      "The goal is to understand how the sensor, microcontroller, wireless communication, battery, and internal connections work together in a compact device.",
    tags: ["Hardware", "Electronics", "R&D"],
    status: "IN DEVELOPMENT",
  },
  {
    number: "02",
    title: "Minecraft Chess Set",
    category: "3D DESIGN",
    image: "/projects/minecraft-chess.jpg",
    summary:
      "A custom chess set inspired by Minecraft characters and items, designed using 3D modeling tools.",
    details:
      "The design explores part modeling, extrusions, mirroring, and turning recognizable game elements into distinct chess pieces.",
    tags: ["SolidWorks", "CAD", "3D Modeling"],
    status: "DESIGN PROJECT",
  },
  {
    number: "03",
    title: "Circuit Analysis",
    category: "ELECTRICAL ENGINEERING",
    image: "/projects/circuit-design.jpg",
    summary:
      "Analyzing electrical circuits using circuit laws, simulation software, and laboratory measurements.",
    details:
      "Work includes Ohm's law, Kirchhoff's laws, nodal analysis, mesh analysis, AC circuit behavior, and comparing calculated values with measured results.",
    tags: ["LTspice", "KCL / KVL", "Testing"],
    status: "COURSEWORK",
  },
  {
    number: "04",
    title: "MATLAB Adventure Game",
    category: "PROGRAMMING",
    image: "/projects/matlab-adventure.jpg",
    summary:
      "A Western-themed adventure game developed with MATLAB App Designer.",
    details:
      "The game uses player and enemy health, combat interactions, and a graphical interface to create a simple interactive game experience.",
    tags: ["MATLAB", "App Designer", "Logic"],
    status: "PROGRAMMING PROJECT",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Hardware & Circuits",
    description:
      "Analyzing, building, and testing electrical systems.",
    skills: [
      "Circuit Analysis",
      "LTspice",
      "Oscilloscopes",
      "Multimeters",
      "PCB Design",
    ],
  },
  {
    number: "02",
    title: "Programming",
    description:
      "Writing code to solve problems and build applications.",
    skills: ["C++", "Python", "MATLAB"],
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "Developing and modeling mechanical and electronic systems.",
    skills: ["SolidWorks", "Arduino", "Microcontrollers"],
  },
  {
    number: "04",
    title: "Engineering Workflow",
    description:
      "Developing, testing, and improving technical projects.",
    skills: [
      "Git",
      "GitHub",
      "Debugging",
      "Troubleshooting",
    ],
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#F87171]">
      <span>{number}</span>
      <span className="h-px w-8 bg-[#F87171]/60" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(
    null
  );

  return (
    <main className="portfolio-glow min-h-screen overflow-hidden">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#151010]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-[#F5EEEE]"
          >
            JN<span className="text-[#F87171]">.</span>
          </a>

          <div className="flex items-center gap-5 text-sm text-[#A89999] sm:gap-7">
            <a
              href="#about"
              className="transition-colors hover:text-[#F5EEEE]"
            >
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-[#F5EEEE]"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-[#F5EEEE]"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hidden transition-colors hover:text-[#F5EEEE] sm:block"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-6 py-24 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#F87171] shadow-[0_0_14px_#F87171]" />
            <span className="text-xs font-medium tracking-[0.2em] text-[#A89999]">
              ELECTRICAL ENGINEERING STUDENT
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-[#F5EEEE] sm:text-7xl md:text-8xl">
            JOHN
            <br />
            NEVIN<span className="text-[#F87171]">.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#A89999] sm:text-lg">
            Interested in electrical engineering, hardware development,
            and research and development. I enjoy working on
            project-driven problems and learning how things work from
            the circuit level up.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-[#F87171] px-6 py-3 text-sm font-semibold text-[#151010] transition-all hover:-translate-y-0.5 hover:bg-[#FDA4A4]"
            >
              Explore Projects <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/documents/resume.pdf"
              download="John-Nevin-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-[#F5EEEE] transition-all hover:border-[#F87171]/60 hover:bg-white/[0.04]"
            >
              Download Résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/[0.08] pt-6 text-xs tracking-wider text-[#A89999]">
          <span>01 / HARDWARE</span>
          <span>02 / CIRCUITS</span>
          <span>03 / R&D</span>
          <span>04 / PROTOTYPING</span>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10"
      >
        <SectionLabel number="01">ABOUT ME</SectionLabel>

        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-20">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#F5EEEE] sm:text-4xl md:text-5xl">
            Building, testing, and understanding{" "}
            <span className="text-[#F87171]">
              how things work.
            </span>
          </h2>

          <div className="space-y-5 text-sm leading-7 text-[#A89999] sm:text-base">
            <p>
              I am an Electrical and Computer Engineering student at
              Northeastern University interested in practical
              engineering and hands-on problem solving.
            </p>
            <p>
              Through coursework and personal projects, I am developing
              experience with circuit analysis, programming, simulation,
              and computer-aided design.
            </p>
            <p>
              I am especially interested in opportunities where I can
              contribute to a team, troubleshoot real engineering
              problems, and learn through building and testing.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10"
      >
        <SectionLabel number="02">SELECTED WORK</SectionLabel>

        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-semibold tracking-tight text-[#F5EEEE] sm:text-5xl">
            Projects<span className="text-[#F87171]">.</span>
          </h2>
          <p className="max-w-sm text-sm leading-6 text-[#A89999]">
            A collection of engineering, design, and programming
            projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;

            return (
              <motion.article
                key={project.number}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] transition-colors hover:border-[#F87171]/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#211717]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151010]/70 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-md border border-white/15 bg-[#151010]/75 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#F5EEEE] backdrop-blur">
                    {project.category}
                  </span>
                  <span className="absolute bottom-5 right-5 text-3xl font-bold tracking-tight text-white/80">
                    {project.number}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[#F87171]">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#F5EEEE] sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A89999]">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.09] px-2.5 py-1 text-xs text-[#C8BABA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedProject(isExpanded ? null : index)
                    }
                    className="mt-6 flex w-full items-center justify-between border-t border-white/[0.08] pt-4 text-left text-sm font-medium text-[#F5EEEE] transition-colors hover:text-[#F87171]"
                  >
                    {isExpanded ? "Show less" : "More about this project"}
                    <motion.span
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xl text-[#F87171]"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm leading-7 text-[#A89999]">
                          {project.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10"
      >
        <SectionLabel number="03">CAPABILITIES</SectionLabel>

        <div className="mb-12 grid gap-5 md:grid-cols-[1fr_0.65fr] md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight text-[#F5EEEE] sm:text-5xl md:text-6xl">
            Technical Skills<span className="text-[#F87171]">.</span>
          </h2>
          <p className="max-w-lg text-sm leading-7 text-[#A89999]">
            Tools and technologies I have used through coursework and
            projects, with a focus on circuits, hardware, programming,
            and design.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="group rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F87171]/40 hover:bg-white/[0.04] sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#F87171]">
                  {group.number} / 04
                </span>
                <span className="text-2xl text-[#F87171] transition-transform duration-300 group-hover:rotate-12">
                  +
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#F5EEEE]">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#A89999]">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#F87171]/20 bg-[#F87171]/[0.06] px-3 py-1.5 text-xs text-[#F5EEEE]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#F87171]/20 bg-[#F87171]/[0.04] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-lg font-semibold text-[#F5EEEE]">
              Want the full picture?
            </p>
            <p className="mt-1 text-sm leading-6 text-[#A89999]">
              View my résumé for additional details about my background
              and experience.
            </p>
          </div>

          <a
            href="/documents/resume.pdf"
            download="John-Nevin-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#F87171] px-5 py-3 text-sm font-semibold text-[#151010] transition-all hover:-translate-y-0.5 hover:bg-[#FDA4A4]"
          >
            Download Résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10"
      >
        <SectionLabel number="04">GET IN TOUCH</SectionLabel>

        <div className="rounded-3xl border border-white/[0.09] bg-white/[0.025] p-8 sm:p-12 md:p-16">
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#F5EEEE] sm:text-5xl md:text-6xl">
            Let's build something{" "}
            <span className="text-[#F87171]">useful.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#A89999] sm:text-base">
            I am interested in engineering co-op opportunities and
            projects involving electrical systems, hardware development,
            and R&D.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:nevin.j@northeastern.edu"
              className="rounded-lg bg-[#F87171] px-6 py-3 text-sm font-semibold text-[#151010] transition-all hover:-translate-y-0.5 hover:bg-[#FDA4A4]"
            >
              Email Me ↗
            </a>

            <a
              href="https://www.linkedin.com/JohNevin"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-[#F5EEEE] transition-colors hover:border-[#F87171]/60"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/1tsjohnathan-bit"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-[#F5EEEE] transition-colors hover:border-[#F87171]/60"
            >
              GitHub ↗
            </a>
          </div>
          <p className="mt-5 text-xs leading-5 text-[#A89999]">
            Remember to replace the example email and social links with
            your actual profiles.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-xs text-[#A89999] sm:flex-row sm:items-center sm:justify-between md:px-10">
          <span>
            JOHN NEVIN<span className="text-[#F87171]">.</span>
          </span>
          <span>Electrical & Computer Engineering</span>
          <a
            href="#home"
            className="transition-colors hover:text-[#F87171]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}