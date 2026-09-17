
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Building2,
  Code2,
  Smartphone,
  ArrowUpRight,
} from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Frontend Developer Intern',
    company: 'Vashatkaraa',
    location: 'Remote',
    period: 'April 2025 – December 2025',
    type: 'Internship',

    description: [
      'Developed the mobile application frontend for a cross-border real estate platform, enabling US-based users to browse, list, and manage properties in India.',
      'Implemented user-centric UI flows including authentication, property listings, search and filters, and detailed property views.',
      'Built responsive layouts and reusable UI components to maintain a consistent and intuitive mobile experience.',
      'Applied efficient state handling and frontend optimization techniques to improve usability and application performance.',
    ],

    technologies: [
      'React Native',
      'JavaScript',
      'REST APIs',
      'Firebase',
      'Git',
      'Figma',
    ],
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="theme-pill mb-5 inline-flex items-center gap-2 rounded-full px-5 py-2">
            <Code2 className="h-4 w-4 text-cyan-300" />

            <span className="text-sm font-medium">
              Professional Journey
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Work Experience
          </h2>

          <div className="theme-section-line mx-auto mt-5 h-1 w-24 rounded-full" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            My professional experience building practical mobile
            applications and user-focused digital products.
          </p>
        </motion.div>


        {/* ================= TIMELINE ================= */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/70 via-violet-400/50 to-transparent md:block" />


          {/* Timeline Item */}
          <motion.div
            className="relative md:pl-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Timeline Dot */}
            <div className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.9)] md:block" />


            {/* ================= EXPERIENCE CARD ================= */}
            <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-slate-950/50 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_20px_70px_rgba(34,211,238,0.12)] sm:p-8">

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />


              {/* ================= TOP ================= */}
              <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                <div className="flex gap-4">

                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Smartphone className="h-7 w-7" />
                  </div>


                  {/* Job Information */}
                  <div>

                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {experience.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-cyan-300">

                      <Building2 className="h-4 w-4" />

                      <span className="font-medium">
                        {experience.company}
                      </span>

                    </div>

                  </div>
                </div>


                {/* Internship Badge */}
                <span className="w-fit rounded-full border border-violet-400/25 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-violet-200">
                  {experience.type}
                </span>

              </div>


              {/* ================= META ================= */}
              <div className="relative mt-6 flex flex-wrap gap-4 border-y border-cyan-400/10 py-4 text-sm text-slate-400">

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-cyan-300" />

                  {experience.period}
                </div>


                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-300" />

                  {experience.location}
                </div>

              </div>


              {/* ================= DESCRIPTION ================= */}
              <div className="relative mt-6">

                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
                  What I worked on
                </p>


                <ul className="space-y-4">

                  {experience.description.map((item, index) => (

                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                    >

                      {/* Bullet */}
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />

                      <span>
                        {item}
                      </span>

                    </motion.li>

                  ))}

                </ul>

              </div>


              {/* ================= TECHNOLOGIES ================= */}
              <div className="relative mt-7">

                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-200">
                  Technologies
                </p>


                <div className="flex flex-wrap gap-2">

                  {experience.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/15"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

              </div>


              {/* ================= FOOTER ================= */}
              <div className="relative mt-8 flex items-center justify-between border-t border-cyan-400/10 pt-5">

                <span className="font-mono text-xs text-slate-500">
                  frontend-development.log
                </span>

                <ArrowUpRight className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;

