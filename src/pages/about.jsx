
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
  Zap,
} from 'lucide-react';

const technologies = [
  'React.js',
  'React Native',
  'Flutter',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'Firebase',
  'Python',
  'C++',
  'SQL',
  'Git',
  'GitHub',
  'Postman',
  'Figma',
];

const highlights = [
  {
    number: '01',
    title: 'Frontend',
    text: 'Responsive interfaces and interactive experiences.',
    icon: Code2,
  },
  {
    number: '02',
    title: 'Mobile',
    text: 'Cross-platform applications with React Native and Flutter.',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Backend',
    text: 'APIs, databases and reliable application flows.',
    icon: Briefcase,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 md:py-32 lg:px-8"
    >
      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-12rem] right-[-10rem] h-[35rem] w-[35rem] rounded-full bg-violet-500/10 blur-[140px]"
        />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* floating particles */}
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]"
        />

        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_15px_#a78bfa]"
        />

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-[20%] left-[30%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]"
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <motion.span
              animate={{ width: ['2rem', '4rem', '2rem'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-px bg-cyan-400"
            />

            <span className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300">
              About Me
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">

            <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Developer.
              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Problem Solver.
              </span>
            </h2>

            <p className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end">
              I enjoy turning ideas into clean, responsive and practical
              digital experiences across web and mobile platforms.
            </p>

          </div>
        </motion.div>

        {/* =====================================================
            MAIN PROFILE CARD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-white/[0.035] p-1"
        >

          {/* animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-violet-400/20 opacity-50 transition duration-700 group-hover:opacity-100" />

          <div className="relative rounded-[1.85rem] bg-slate-950/90 p-7 sm:p-10">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              {/* LEFT */}
              <div>

                <div className="relative mb-8 flex h-28 w-28 items-center justify-center">

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30"
                  />

                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_50px_rgba(34,211,238,0.15)]"
                  >
                    <Code2 className="h-9 w-9" />
                  </motion.div>

                </div>

                <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
                  Hello, I'm
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Vamsi Jana
                </h3>

                <p className="mt-3 text-cyan-300">
                  Frontend Developer
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  Bhimavaram, Andhra Pradesh
                </div>

              </div>

              {/* RIGHT */}
              <div>

                <p className="text-lg leading-8 text-slate-300 sm:text-xl">
                  I am a final-year B.Tech student in Electronics and
                  Communication Engineering at Sagi Ramakrishnam Raju
                  Engineering College.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  I am passionate about frontend and application development.
                  I enjoy building responsive interfaces, developing web and
                  mobile applications, connecting APIs, and continuously
                  exploring new technologies.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                    Final Year Student
                  </span>

                  <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
                    ECE Engineering
                  </span>

                  <span className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                    Open to Opportunities
                  </span>

                </div>

              </div>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            HIGHLIGHTS
        ====================================================== */}

        <div className="mt-6 grid gap-4 md:grid-cols-3">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >

                <div className="absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-xs text-slate-600">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* =====================================================
            EXPERIENCE + EDUCATION
        ====================================================== */}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          {/* EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-50 transition group-hover:opacity-100" />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-300">
                  <Briefcase className="h-6 w-6" />
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-600 transition group-hover:text-cyan-300" />

              </div>

              <p className="mt-7 font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
                Experience
              </p>

              <h3 className="mt-2 text-2xl font-black">
                Frontend Developer Intern
              </h3>

              <p className="mt-1 text-cyan-300">
                Vashatkaraa
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Worked on mobile application interfaces for a cross-border
                real estate platform, implementing authentication, property
                listings, search, filters, and property detail views.
              </p>

              <div className="mt-6 flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

                <span className="font-mono text-xs text-slate-500">
                  APR 2025 — DEC 2025
                </span>

              </div>

            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl opacity-50 transition group-hover:opacity-100" />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4 text-violet-300">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-600 transition group-hover:text-violet-300" />

              </div>

              <p className="mt-7 font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
                Education
              </p>

              <h3 className="mt-2 text-2xl font-black">
                B.Tech ECE
              </h3>

              <p className="mt-1 text-violet-300">
                S.R.K.R. Engineering College
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Pursuing Electronics and Communication Engineering while
                developing strong programming, application development,
                problem-solving, and technical skills.
              </p>

              <div className="mt-6 flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />

                <span className="font-mono text-xs text-slate-500">
                  SEP 2023 — APR 2027
                </span>

              </div>

            </div>
          </motion.div>

        </div>

        {/* =====================================================
            TECHNOLOGY CLOUD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-9"
        >

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                My Toolkit
              </p>

              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Technologies I enjoy working with
              </h3>

            </div>

            <Code2 className="h-7 w-7 text-cyan-300" />

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.03,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                className="cursor-default rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {technology}
              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-6 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.06] via-transparent to-violet-400/[0.06] p-8 text-center sm:p-12"
        >

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/[0.06]"
          />

          <div className="relative">

            <Sparkles className="mx-auto h-6 w-6 text-cyan-300" />

            <p className="mx-auto mt-5 max-w-3xl text-xl font-medium leading-9 text-slate-300 sm:text-2xl">
              Always learning. Always building. Always looking for the next
              problem worth solving.
            </p>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
              Vamsi Jana
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;

