
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Database,
  Droplets,
  Github,
  Globe2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';

const projects = [
  {
    title: 'Language Nest Website',
    category: 'Full-Stack Web Application',
    icon: Globe2,
    number: '01',
    description:
      'A full-stack web application designed with the MERN stack, featuring dynamic user interactions, responsive interfaces, RESTful APIs, and secure data management.',
    highlights: [
      'Built responsive UI components with React.js',
      'Integrated RESTful APIs using Node.js and Express.js',
      'Managed application data with MongoDB',
      'Implemented complete end-to-end functionality',
    ],
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'REST APIs',
    ],
    gradient: 'from-cyan-400/20 via-sky-400/10 to-transparent',
  },
  {
    title: 'Smart Water Bottle App',
    category: 'Mobile Application',
    icon: Droplets,
    number: '02',
    description:
      'A smart hydration mobile application that tracks real-time water intake, manages personalized hydration goals, and provides visual insights into user progress.',
    highlights: [
      'Tracked real-time water intake',
      'Created personalized hydration goals',
      'Integrated IoT data with backend services',
      'Implemented smart notifications and reminders',
      'Generated weekly and monthly analytical reports',
    ],
    technologies: [
      'React Native',
      'IoT',
      'Firebase',
      'Backend Integration',
      'Data Visualization',
    ],
    gradient: 'from-blue-400/20 via-cyan-400/10 to-transparent',
  },
  {
    title: 'Civic Pulse App',
    category: 'Mobile + AI + Blockchain',
    icon: ShieldCheck,
    number: '03',
    description:
      'A civic issue reporting mobile application that enables citizens to report, track, and engage with community issues through secure and personalized user flows.',
    highlights: [
      'Implemented secure authentication and onboarding',
      'Created personalized civic issue reporting flows',
      'Integrated machine learning for issue classification',
      'Used ML to assess issue severity',
      'Implemented blockchain-based data management',
      'Enabled transparent issue status tracking',
    ],
    technologies: [
      'React Native',
      'Machine Learning',
      'Blockchain',
      'Firebase',
      'Mobile Development',
    ],
    gradient: 'from-violet-400/20 via-fuchsia-400/10 to-transparent',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-20 text-white sm:px-6 md:py-24 lg:px-8"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-[-10rem] top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-1/2 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="theme-pill mb-5 inline-flex items-center gap-2 rounded-full px-5 py-2">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-medium tracking-wide">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Projects I&apos;ve{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <div className="theme-section-line mx-auto mt-5 h-1 w-24 rounded-full" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A collection of web and mobile applications focused on practical
            solutions, intuitive interfaces, and modern technology.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Outer Glow */}
                <div
                  className={`pointer-events-none absolute -inset-1 rounded-[1.7rem] bg-gradient-to-br ${project.gradient} opacity-0 blur-xl transition duration-500 group-hover:opacity-100`}
                />

                {/* Card */}
                <div className="theme-panel relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-cyan-400/10 transition-all duration-500 group-hover:border-cyan-300/30 group-hover:shadow-[0_20px_70px_rgba(34,211,238,0.12)]">
                  {/* Top Visual Area */}
                  <div className="relative h-52 overflow-hidden border-b border-cyan-400/10 bg-slate-950/70">
                    {/* Decorative Grid */}
                    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(34,211,238,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.2)_1px,transparent_1px)] [background-size:30px_30px]" />

                    {/* Glow */}
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

                    {/* Number */}
                    <span className="absolute right-5 top-5 font-mono text-xs tracking-[0.25em] text-slate-500">
                      PROJECT_{project.number}
                    </span>

                    {/* Icon */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 backdrop-blur-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 250 }}
                    >
                      <Icon className="h-10 w-10" />
                    </motion.div>

                    {/* Floating Decoration */}
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-cyan-400/10 bg-slate-950/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                        {project.title}
                      </h3>

                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6">
                      <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                        <Zap className="h-3.5 w-3.5" />
                        Key Features
                      </p>

                      <ul className="space-y-2.5">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-sm leading-5 text-slate-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-auto pt-7">
                      <div className="mb-3 flex items-center gap-2">
                        <Code2Icon />
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                          Tech Stack
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-cyan-400/10 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-200"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-cyan-400/10 pt-5">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        {project.category.includes('Mobile') ? (
                          <Smartphone className="h-4 w-4" />
                        ) : (
                          <Database className="h-4 w-4" />
                        )}
                        <span>Built with modern technologies</span>
                      </div>

                      {/* Add project links here when available */}
                      <div className="flex gap-2">
                        <span
                          title="Project link can be added here"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/10 bg-slate-950/60 text-slate-500"
                        >
                          <Github className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* Small reusable icon component */
const Code2Icon = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-md border border-violet-400/20 bg-violet-400/10">
    <span className="font-mono text-[9px] text-violet-200">
      &lt;/&gt;
    </span>
  </span>
);

export default Projects;
