
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Home,
  Terminal,
  TriangleAlert,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { StarsBackground } from '@/components/animate-ui/backgrounds/stars';

const NotFound = () => {
  const location = useLocation();
  const pathname = location.pathname || '/unknown';

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <StarsBackground className="absolute inset-0 opacity-60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.14),transparent_35%),linear-gradient(to_bottom,#020617_0%,#020617_100%)]" />

        {/* Cyan glow */}
        <motion.div
          className="absolute left-1/2 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Violet glow */}
        <motion.div
          className="absolute bottom-[-10rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-violet-500/10 blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Top light */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-300/10 to-transparent" />

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 h-[180px] w-[150vw] -translate-x-1/2 rounded-t-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 opacity-20 blur-3xl" />
      </div>

      {/* ================= CONTENT ================= */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 sm:px-6">

        <div className="w-full max-w-6xl">

          {/* Small status pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex justify-center"
          >
            <div className="theme-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm">
              <motion.span
                className="h-2 w-2 rounded-full bg-cyan-300"
                animate={{
                  opacity: [0.35, 1, 0.35],
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />

              Route not found
            </div>
          </motion.div>

          {/* ================= 404 ================= */}
          <div className="text-center">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300 sm:text-sm"
            >
              ERR_ROUTE_NOT_FOUND
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.8,
                filter: 'blur(15px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 text-[clamp(7rem,25vw,15rem)] font-black leading-none tracking-[-0.08em]"
            >
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                404
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-2 text-2xl font-bold text-white sm:text-4xl"
            >
              This page went off the grid.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
            >
              The route you requested doesn't exist in this portfolio.
              The application is running normally — this endpoint simply
              couldn't be found.
            </motion.p>

            {/* ================= BUTTONS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Link
                to="/"
                className="theme-primary-button inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
              >
                <Home className="h-4 w-4" />
                Back Home
              </Link>

              <Link
                to="/#projects"
                className="theme-secondary-button inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* ================= TERMINAL ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: 'easeOut',
            }}
            className="mx-auto mt-14 w-full max-w-3xl"
          >
            <div className="theme-panel overflow-hidden rounded-2xl">

              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-cyan-400/15 bg-slate-950/70 px-4 py-3">

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
                  <span className="h-3 w-3 rounded-full bg-cyan-300" />
                  <span className="h-3 w-3 rounded-full bg-violet-300" />
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <Terminal className="h-4 w-4 text-cyan-300" />
                  router-debugger.tsx
                </div>

              </div>

              {/* Terminal body */}
              <div className="p-5 sm:p-6">

                <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                  <span className="text-cyan-300">~/jeevan.dev</span>
                  <span>$</span>
                  <span className="text-slate-300">
                    router.resolve()
                  </span>
                </div>

                <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">

                  {/* Requested route */}
                  <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-slate-500">
                        requested:
                      </span>

                      <span className="break-all text-cyan-200">
                        "{pathname}"
                      </span>
                    </div>
                  </div>

                  {/* Error */}
                  <div className="flex items-start gap-3 rounded-lg border border-red-400/10 bg-red-400/[0.04] p-3">

                    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-300" />

                    <div>
                      <p className="text-red-300">
                        ERROR: route not registered
                      </p>

                      <p className="mt-1 text-slate-500">
                        status: 404 / NOT_FOUND
                      </p>
                    </div>

                  </div>

                  {/* Fallback */}
                  <div className="flex items-center gap-3 rounded-lg border border-cyan-400/10 bg-cyan-400/[0.03] p-3">

                    <Code2 className="h-4 w-4 shrink-0 text-cyan-300" />

                    <div className="text-slate-400">
                      fallback:{' '}
                      <span className="text-cyan-200">
                        &lt;NotFound /&gt;
                      </span>
                    </div>

                  </div>

                </div>

                {/* Bottom status */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 font-mono text-[11px] uppercase tracking-[0.15em]">

                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    System operational
                  </div>

                  <div className="text-slate-600">
                    Jeevan.dev / 404
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

          {/* ================= BACK LINK ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-8 flex justify-center"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-300"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              />

              Return to Jeevan.dev
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
};

export default NotFound;
