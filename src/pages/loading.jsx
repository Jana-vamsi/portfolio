
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { StarsBackground } from '@/components/animate-ui/backgrounds/stars';
import { Terminal, ChevronRight } from 'lucide-react';

const BOOT_MESSAGES = [
  'Initializing portfolio',
  'Loading creative stack',
  'Building digital experience',
  'Ready',
];

const BOOT_INTERVAL = 900;
const NAME_REVEAL_TIME = 3900;
const EXIT_DURATION = 750;

const LoadingScreen = ({ isVisible }) => {
  const [renderOverlay, setRenderOverlay] = useState(isVisible);
  const [isExiting, setIsExiting] = useState(false);
  const [bootIndex, setBootIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  const name = useMemo(() => ['V', 'A', 'M', 'S', 'I'], []);
  const surname = useMemo(() => ['J', 'A', 'N', 'A'], []);

  useEffect(() => {
    let exitTimer;

    if (!isVisible) {
      setIsExiting(true);

      exitTimer = window.setTimeout(() => {
        setRenderOverlay(false);
      }, EXIT_DURATION);

      return () => {
        if (exitTimer) {
          window.clearTimeout(exitTimer);
        }
      };
    }

    setRenderOverlay(true);
    setIsExiting(false);
    setBootIndex(0);
    setShowName(false);

    const timers = [
      window.setTimeout(() => setBootIndex(1), BOOT_INTERVAL),
      window.setTimeout(() => setBootIndex(2), BOOT_INTERVAL * 2),
      window.setTimeout(() => setBootIndex(3), BOOT_INTERVAL * 3),
      window.setTimeout(() => setShowName(true), NAME_REVEAL_TIME),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));

      if (exitTimer) {
        window.clearTimeout(exitTimer);
      }
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {renderOverlay && (
        <motion.div
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#020617] text-white"
          initial={{ opacity: 1 }}
          animate={
            isExiting
              ? {
                  opacity: 0,
                  scale: 1.025,
                  filter: 'blur(10px)',
                }
              : {
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                }
          }
          transition={{
            duration: isExiting ? 0.75 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* BACKGROUND */}
          <div className="absolute inset-0 overflow-hidden">
            <StarsBackground className="absolute inset-0 opacity-50" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.12),transparent_32%),linear-gradient(to_bottom,#020617_0%,#020617_55%,#000_100%)]" />

            <motion.div
              className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              className="absolute left-[58%] top-[48%] h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[110px]"
              animate={{
                x: [0, -40, 0],
                y: [0, 30, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* TOP LIGHT */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-300/[0.06] to-transparent" />

            {/* BOTTOM GLOW */}
            <div className="absolute bottom-[-8rem] left-1/2 h-64 w-[120vw] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-cyan-400/20 via-sky-400/20 to-violet-500/20 blur-3xl" />

            {/* GRID */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
            <div className="w-full max-w-5xl">

              {/* TERMINAL HEADER */}
              <motion.div
                className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-cyan-300/15 bg-slate-950/50 px-4 py-2 backdrop-blur-xl"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                />

                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-300 sm:text-xs">
                  Vamsi Jana / Portfolio
                </span>
              </motion.div>

              <AnimatePresence mode="wait">

                {/* BOOT SEQUENCE */}
                {!showName ? (
                  <motion.div
                    key="boot"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 1.04,
                      filter: 'blur(8px)',
                    }}
                    transition={{ duration: 0.45 }}
                    className="mx-auto w-full max-w-2xl"
                  >
                    <div className="overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950/60 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl">

                      {/* TERMINAL BAR */}
                      <div className="flex items-center justify-between border-b border-cyan-300/10 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                        </div>

                        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                          <Terminal className="h-3.5 w-3.5" />
                          portfolio.init
                        </div>
                      </div>

                      {/* TERMINAL CONTENT */}
                      <div className="p-5 sm:p-7">
                        <div className="mb-6 font-mono text-xs text-slate-500">
                          <span className="text-cyan-300">$</span>{' '}
                          ./initialize-vamsi
                        </div>

                        <div className="space-y-3">
                          {BOOT_MESSAGES.slice(0, bootIndex + 1).map(
                            (message, index) => {
                              const active = index === bootIndex;
                              const completed = index < bootIndex;

                              return (
                                <motion.div
                                  key={message}
                                  initial={{
                                    opacity: 0,
                                    x: -12,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    duration: 0.35,
                                  }}
                                  className="flex items-center gap-3 font-mono text-xs sm:text-sm"
                                >
                                  <span
                                    className={
                                      completed
                                        ? 'text-cyan-300'
                                        : 'text-violet-300'
                                    }
                                  >
                                    {completed ? '✓' : '›'}
                                  </span>

                                  <span
                                    className={
                                      completed
                                        ? 'text-slate-400'
                                        : 'text-slate-100'
                                    }
                                  >
                                    {message}
                                  </span>

                                  {active && (
                                    <motion.span
                                      className="h-4 w-[2px] bg-cyan-300"
                                      animate={{
                                        opacity: [1, 0, 1],
                                      }}
                                      transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                      }}
                                    />
                                  )}
                                </motion.div>
                              );
                            }
                          )}
                        </div>

                        {/* PROGRESS */}
                        <div className="mt-7">
                          <div className="mb-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
                            <span>Loading experience</span>
                            <span>{Math.min((bootIndex + 1) * 25, 100)}%</span>
                          </div>

                          <div className="h-[2px] overflow-hidden bg-slate-800">
                            <motion.div
                              className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400"
                              animate={{
                                width: `${Math.min(
                                  (bootIndex + 1) * 25,
                                  100
                                )}%`,
                              }}
                              transition={{
                                duration: 0.7,
                                ease: 'easeOut',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (

                  /* NAME REVEAL */
                  <motion.div
                    key="name"
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                      filter: 'blur(14px)',
                    }}
                    animate={
                      isExiting
                        ? {
                            opacity: 0,
                            scale: 1.05,
                            y: -20,
                            filter: 'blur(10px)',
                          }
                        : {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            filter: 'blur(0px)',
                          }
                    }
                    transition={{
                      duration: isExiting ? 0.65 : 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-center"
                  >
                    {/* SMALL LABEL */}
                    <motion.p
                      className="mb-5 font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-300/70 sm:text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15,
                        duration: 0.4,
                      }}
                    >
                      Welcome to my digital space
                    </motion.p>

                    {/* NAME */}
                    <div className="relative">
                      <motion.div
                        className="flex flex-wrap justify-center gap-x-[0.04em]"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.09,
                              delayChildren: 0.15,
                            },
                          },
                        }}
                      >
                        {name.map((letter, index) => (
                          <motion.span
                            key={`name-${letter}-${index}`}
                            className="text-[clamp(4rem,17vw,9rem)] font-black uppercase leading-[0.85] tracking-[-0.06em]"
                            variants={{
                              hidden: {
                                opacity: 0,
                                y: 50,
                                scale: 0.8,
                                filter: 'blur(12px)',
                              },
                              visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: 'blur(0px)',
                              },
                            }}
                            transition={{
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                              color:
                                index === 0
                                  ? '#f8fafc'
                                  : 'transparent',
                              backgroundImage:
                                index === 0
                                  ? 'none'
                                  : 'linear-gradient(135deg,#22d3ee,#38bdf8,#a78bfa)',
                              WebkitBackgroundClip:
                                index === 0 ? 'initial' : 'text',
                              backgroundClip:
                                index === 0 ? 'initial' : 'text',
                              textShadow:
                                index === 0
                                  ? '0 0 35px rgba(255,255,255,0.08)'
                                  : '0 0 35px rgba(56,189,248,0.25)',
                            }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* LIGHT SWEEP */}
                      <motion.div
                        className="pointer-events-none absolute inset-y-0 -left-[15%] w-[18%] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-xl"
                        initial={{ x: '-20%' }}
                        animate={{ x: '620%' }}
                        transition={{
                          duration: 1.3,
                          delay: 0.65,
                          ease: 'easeOut',
                        }}
                      />
                    </div>

                    {/* SURNAME */}
                    <motion.div
                      className="mt-2 flex justify-center gap-[0.06em]"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.65,
                          },
                        },
                      }}
                    >
                      {surname.map((letter, index) => (
                        <motion.span
                          key={`surname-${letter}-${index}`}
                          className="text-[clamp(2.4rem,9vw,5rem)] font-black uppercase leading-none tracking-[0.08em]"
                          variants={{
                            hidden: {
                              opacity: 0,
                              y: 25,
                              filter: 'blur(8px)',
                            },
                            visible: {
                              opacity: 1,
                              y: 0,
                              filter: 'blur(0px)',
                            },
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{
                            color: 'transparent',
                            backgroundImage:
                              'linear-gradient(135deg,#22d3ee,#38bdf8,#a78bfa)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* DIVIDER */}
                    <motion.div
                      className="mx-auto mt-8 h-px w-full max-w-md bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
                      initial={{
                        scaleX: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scaleX: 1,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 1,
                      }}
                    />

                    {/* TAGLINE */}
                    <motion.div
                      className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400 sm:text-xs sm:tracking-[0.4em]"
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 1.15,
                      }}
                    >
                      <span>Developer</span>
                      <span className="text-cyan-300/60">•</span>
                      <span>Designer</span>
                      <span className="text-violet-300/60">•</span>
                      <span>Builder</span>
                    </motion.div>

                    {/* FINAL STATUS */}
                    <motion.div
                      className="mt-7 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.28em] text-cyan-300/60"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 1.35,
                        duration: 0.4,
                      }}
                    >
                      <ChevronRight className="h-3 w-3" />
                      Experience ready
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CORNER DETAILS */}
          <div className="pointer-events-none absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600 sm:left-7">
            VJ / 2026
          </div>

          <div className="pointer-events-none absolute bottom-5 right-5 font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600 sm:right-7">
            React • MERN • Mobile
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

