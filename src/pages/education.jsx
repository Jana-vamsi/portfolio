
import { motion } from 'framer-motion';
import {
  Award,
  ArrowUpRight,
  Calendar,
  ChevronRight,
  GraduationCap,
  Trophy,
  Users,
  Code2,
  Sparkles,
} from 'lucide-react';

/* =========================================================
   EDUCATION
========================================================= */

const education = [
  {
    degree: 'B.Tech — Electronics & Communication Engineering',
    school: 'Sagi Ramakrishnam Raju Engineering College',
    location: 'Bhimavaram, Andhra Pradesh',
    period: '2023 — 2027',
    status: 'Currently Pursuing',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate Education',
    school: 'Nagarjuna Junior College',
    location: 'Sankarapuarm, Andhra Pradesh',
    period: '2021 — 2023',
    status: 'Completed',
    icon: Award,
  },
  {
    degree: 'Secondary School Education',
    school: 'Teja Sri E M High School',
    location: 'Duddukuru, Andhra Pradesh',
    period: '2019 — 2021',
    status: 'Completed',
    icon: GraduationCap,
  },
];

/* =========================================================
   ACHIEVEMENTS
========================================================= */

const achievements = [
  {
    title: 'Google Student Ambassador',
    description:
      'Selected as a Google Student Ambassador at SRKR Engineering College during Q4 2025.',
    icon: Award,
    tag: 'Recognition',
  },
  {
    title: 'IETE Executive Body',
    description:
      'Honoured as a member of the Executive Body of the Institution of Electronics and Telecommunication Engineering at SRKREC.',
    icon: Trophy,
    tag: 'Leadership',
  },
  {
    title: '250+ LeetCode Problems',
    description:
      'Solved 250+ DSA problems covering arrays, strings, hashing, recursion, and other core problem-solving concepts.',
    icon: Code2,
    tag: 'DSA',
    link: 'https://leetcode.com/u/vamsi_jana/',
    linkText: 'View LeetCode Profile',
  },
  {
    title: 'SoloLearn Certifications',
    description:
      'Completed SoloLearn certifications in C and Python, strengthening core programming fundamentals.',
    icon: Code2,
    tag: 'Certification',
  },
  {
    title: 'HackerRank Python',
    description:
      'Earned the HackerRank Python (Basic) Certificate.',
    icon: Code2,
    tag: 'Certification',
  },
  {
    title: 'Art of Living Volunteer',
    description:
      'Volunteered in organizing wellness programs, sessions, and student engagement activities with the Art of Living.',
    icon: Users,
    tag: 'Volunteering',
  },
];

/* =========================================================
   EDUCATION COMPONENT
========================================================= */

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 md:py-32 lg:px-8"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[-12rem] top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-12rem] right-[-10rem] h-[35rem] w-[35rem] rounded-full bg-violet-500/10 blur-[140px]"
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300">
              Education
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Learning the
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                fundamentals.
              </span>
            </h2>

            <p className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end">
              My academic journey has given me a strong foundation while
              projects, hackathons and extracurricular activities continue to
              shape me as a developer.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            EDUCATION TIMELINE
        ====================================================== */}

        <div className="relative">

          {/* Timeline line */}
          <div className="absolute bottom-0 left-[1.35rem] top-0 w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={edu.degree}
                  initial={{
                    opacity: 0,
                    x: isRight ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className={`relative grid md:grid-cols-2 ${
                    isRight ? 'md:text-left' : ''
                  }`}
                >

                  {/* Timeline node */}
                  <div className="absolute left-[0.55rem] top-8 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.25)] md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  </div>

                  <div
                    className={`pl-14 md:pl-0 ${
                      isRight
                        ? 'md:col-start-2 md:pl-16'
                        : 'md:col-start-1 md:pr-16'
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.055]"
                    >
                      <div className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                      <div className="relative">
                        <div className="flex items-start justify-between gap-4">

                          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                            <Icon className="h-6 w-6" />
                          </div>

                          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-slate-400">
                            <Calendar className="h-3.5 w-3.5" />
                            {edu.period}
                          </span>
                        </div>

                        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
                          {edu.status}
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                          {edu.degree}
                        </h3>

                        <p className="mt-2 font-medium text-slate-300">
                          {edu.school}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {edu.location}
                        </p>

                        <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                          <span className="h-px w-8 bg-cyan-400/40" />
                          Academic Journey
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            ACHIEVEMENTS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-300">
                Recognition & Growth
              </p>

              <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                Achievements & Recognition
              </h3>
            </div>

            <Award className="hidden h-8 w-8 text-violet-300 sm:block" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-violet-400/30"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="rounded-xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="mt-6 text-lg font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>

                    {/* LeetCode Profile Link */}
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-xs text-slate-500 transition group-hover:text-violet-300"
                      >
                        {item.linkText || 'View Profile'}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <div className="mt-5 flex items-center gap-2 text-xs text-slate-600 transition group-hover:text-violet-300">
                        Explore
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-cyan-400/[0.035] p-8 text-center sm:p-10"
        >
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[80px]" />

          <div className="relative">
            <GraduationCap className="mx-auto h-7 w-7 text-cyan-300" />

            <h3 className="mt-4 text-xl font-bold sm:text-2xl">
              Learning never stops.
            </h3>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-slate-400">
              Alongside my degree, I continue experimenting with new
              technologies and turning what I learn into practical projects.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
