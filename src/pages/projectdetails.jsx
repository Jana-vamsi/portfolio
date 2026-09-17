
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Droplets,
  Globe2,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import Header from './header';

const projects = {
  'language-nest': {
    title: 'Language Nest Website',
    category: 'Full-Stack Web Application',
    icon: Globe2,
    number: '01',
    description:
      'A full-stack web application developed using the MERN stack, focused on dynamic user interaction, responsive interfaces, RESTful API integration, and secure data management.',
    goal:
      'The project focuses on creating a complete web application experience where the frontend, backend, APIs, and database work together as a connected system.',
    features: [
      'Responsive user interface built with React.js',
      'Dynamic user interaction',
      'RESTful API integration',
      'Backend functionality using Node.js and Express.js',
      'Database operations using MongoDB',
      'End-to-end full-stack functionality',
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

  'smart-water-bottle': {
    title: 'Smart Water Bottle App',
    category: 'Mobile Application',
    icon: Droplets,
    number: '02',
    description:
      'A mobile application designed to track real-time water intake, manage personalized hydration goals, and display user progress through intuitive dashboards.',
    goal:
      'The goal of the application is to help users maintain consistent hydration habits by combining real-time water tracking, personalized goals, notifications, and analytical reports.',
    features: [
      'Real-time water intake tracking',
      'Personalized hydration goals',
      'Intuitive progress dashboards',
      'IoT data handling',
      'Backend integration for incoming data',
      'Smart notifications and reminders',
      'Weekly analytical reports',
      'Monthly analytical reports',
      'Visual charts and hydration trends',
      'Application synchronization',
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

  'civic-pulse': {
    title: 'Civic Pulse App',
    category: 'Mobile + ML + Blockchain',
    icon: ShieldCheck,
    number: '03',
    description:
      'A civic issue reporting mobile application that enables citizens to report, track, and engage with community issues through secure authentication and personalized user flows.',
    goal:
      'The project focuses on making civic issue reporting more structured and transparent by combining mobile application development with machine learning and blockchain-based data management.',
    features: [
      'Secure user authentication',
      'User onboarding flows',
      'Personalized user experiences',
      'Civic issue reporting',
      'Issue tracking',
      'Machine learning based issue classification',
      'Issue severity assessment',
      'Relevant issue recommendations',
      'Location-based interactions',
      'Blockchain-based data management',
      'Tamper-proof issue records',
      'Transparent status tracking',
      'Community voting and reporting',
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
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => {
    return projects[id];
  }, [id]);

  if (!project) {
    return (
      <>
        <Header />

        <section className="flex min-h-screen items-center justify-center bg-[#020617] px-6 text-white">
          <div className="text-center">
            <p className="mb-3 font-mono text-sm text-cyan-300">
              ERROR_404
            </p>

            <h1 className="text-4xl font-black">
              Project Not Found
            </h1>

            <p className="mt-4 text-slate-400">
              The requested project could not be found.
            </p>

            <button
              onClick={() => navigate('/#projects')}
              className="theme-primary-button mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </button>
          </div>
        </section>
      </>
    );
  }

  const Icon = project.icon;

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className={`absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl`}
          />

          <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-400/5 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:60px_60px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          {/* Back */}
          <motion.button
            onClick={() => navigate('/#projects')}
            className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </motion.button>

          {/* Hero */}
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="theme-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
                <Sparkles className="h-4 w-4 text-cyan-300" />

                <span className="font-mono text-xs uppercase tracking-wider">
                  Project {project.number}
                </span>
              </div>

              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
                {project.category}
              </p>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                {project.title}
              </h1>

              <div className="theme-section-line mt-6 h-1 w-24 rounded-full" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {project.description}
              </p>

              {/* Quick Stats */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-slate-950/60 px-4 py-3">
                  <Code2 className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm text-slate-300">
                    Modern Development
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-violet-400/10 bg-slate-950/60 px-4 py-3">
                  <Zap className="h-4 w-4 text-violet-300" />
                  <span className="text-sm text-slate-300">
                    Practical Solution
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div
                className={`absolute -inset-8 rounded-[3rem] bg-gradient-to-br ${project.gradient} opacity-60 blur-3xl`}
              />

              <motion.div
                className="theme-panel relative overflow-hidden rounded-[2rem] border border-cyan-400/15 p-8"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {/* Browser/App Header */}
                <div className="flex items-center justify-between border-b border-cyan-400/10 pb-5">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <span className="font-mono text-xs text-slate-500">
                    project.ts
                  </span>
                </div>

                {/* Icon */}
                <div className="flex min-h-[300px] items-center justify-center">
                  <motion.div
                    className="relative flex h-40 w-40 items-center justify-center rounded-[2.5rem] border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_80px_rgba(34,211,238,0.12)]"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="absolute inset-3 rounded-[2rem] border border-cyan-300/10" />

                    <Icon className="h-20 w-20" />
                  </motion.div>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t border-cyan-400/10 pt-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Status
                    </p>

                    <p className="mt-1 text-sm font-semibold text-cyan-200">
                      Completed Project
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Goal */}
          <motion.section
            className="mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                  01 / Overview
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Project Goal
                </h2>
              </div>

              <div className="theme-panel rounded-2xl p-7">
                <p className="text-base leading-8 text-slate-300">
                  {project.goal}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            className="mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                02 / Functionality
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Key Features
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="theme-panel group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    </div>

                    <p className="text-sm leading-6 text-slate-300">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technology */}
          <motion.section
            className="mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-300">
                03 / Technology
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Technology Stack
              </h2>
            </div>

            <div className="theme-panel rounded-2xl p-6">
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology, index) => (
                  <motion.div
                    key={technology}
                    className="group flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-slate-950/60 px-4 py-3 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <Layers3 className="h-4 w-4 text-cyan-300" />

                    <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-200">
                      {technology}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Architecture-style summary */}
          <motion.section
            className="mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="theme-panel overflow-hidden rounded-3xl">
              <div className="border-b border-cyan-400/10 bg-slate-950/50 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-cyan-300" />

                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                    Development Approach
                  </span>
                </div>
              </div>

              <div className="grid gap-6 p-6 sm:grid-cols-3 sm:p-8">
                <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
                  <Smartphone className="mb-4 h-6 w-6 text-cyan-300" />

                  <h3 className="font-bold text-white">
                    User Experience
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Focused on intuitive interfaces and practical user flows.
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-400/10 bg-violet-400/5 p-5">
                  <Code2 className="mb-4 h-6 w-6 text-violet-300" />

                  <h3 className="font-bold text-white">
                    Development
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Built using modern frameworks, APIs, and development
                    technologies.
                  </p>
                </div>

                <div className="rounded-2xl border border-sky-400/10 bg-sky-400/5 p-5">
                  <Zap className="mb-4 h-6 w-6 text-sky-300" />

                  <h3 className="font-bold text-white">
                    Practical Impact
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Designed around practical problems and real-world users.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Bottom CTA */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
              Explore more
            </p>

            <h2 className="mt-3 text-3xl font-black">
              More projects coming soon.
            </h2>

            <button
              onClick={() => navigate('/#projects')}
              className="theme-primary-button mt-7 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ProjectDetails;
