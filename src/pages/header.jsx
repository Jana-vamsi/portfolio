
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const location = useLocation();

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-50% 0px -45% 0px',
        threshold: 0.1,
      }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);

      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (element) {
      const header = document.querySelector('header');

      const target =
        element.querySelector('.theme-pill, h1, h2') || element;

      const headerOffset = (header?.offsetHeight ?? 72) + 12;

      const targetTop =
        target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, targetTop - headerOffset),
        behavior: 'smooth',
      });
    }

    setIsMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? 'border-b border-cyan-400/25 bg-[#020617]/95 shadow-lg shadow-cyan-500/10 backdrop-blur-xl'
          : 'border-b border-cyan-400/15 bg-[#020617]/88 backdrop-blur-md'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <motion.button
            onClick={() => scrollToSection('#home')}
            className="group relative flex items-center gap-3 text-left focus:outline-none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Logo Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Code2 className="h-5 w-5" />

              <motion.div
                className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-md"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Name */}
            <div className="hidden sm:block">
              <div className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-xl font-black text-transparent">
                Vamsi Jana
              </div>

              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                Frontend Developer
              </div>
            </div>

            {/* Mobile Name */}
            <div className="sm:hidden">
              <div className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-lg font-black text-transparent">
                Vamsi
              </div>
            </div>
          </motion.button>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center space-x-5 lg:flex xl:space-x-7">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                aria-label={`Go to ${item.name}`}
                onClick={() => scrollToSection(item.href)}
                className={`group relative font-medium text-sm tracking-wide transition-all duration-300 focus:outline-none ${
                  activeSection === item.href
                    ? 'text-cyan-300'
                    : 'text-slate-300 hover:text-cyan-300'
                }`}
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                }}
              >
                {item.name}

                <span
                  className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-cyan-400 to-violet-400 transition-transform duration-300 ${
                    activeSection === item.href
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </motion.button>
            ))}
          </nav>

          {/* ================= CTA ================= */}
          <motion.div
            className="hidden md:block"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.8,
            }}
          >
            <motion.button
              aria-label="Contact section"
              onClick={() => scrollToSection('#contact')}
              className="theme-primary-button rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Let's Talk
            </motion.button>
          </motion.div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <motion.div
            className="lg:hidden"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <motion.button
              aria-label={
                isMenuOpen
                  ? 'Close menu'
                  : 'Open menu'
              }
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
              className="rounded-full p-2 text-slate-300 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-300 focus:outline-none"
              whileTap={{
                scale: 0.9,
              }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* ================= MOBILE NAV ================= */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="overflow-hidden border-t border-cyan-400/15 lg:hidden"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 20,
              }}
            >
              <div className="flex flex-col gap-2 py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    aria-label={`Go to ${item.name}`}
                    onClick={() =>
                      scrollToSection(item.href)
                    }
                    className={`relative rounded-lg px-3 py-3 text-left text-sm font-medium transition-all ${
                      activeSection === item.href
                        ? 'bg-cyan-400/10 text-cyan-300'
                        : 'text-slate-300 hover:bg-cyan-400/5 hover:text-cyan-300'
                    }`}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * index,
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-cyan-400/50">
                        0{index + 1}
                      </span>

                      {item.name}
                    </span>
                  </motion.button>
                ))}

                {/* Mobile CTA */}
                <motion.button
                  aria-label="Contact section"
                  onClick={() =>
                    scrollToSection('#contact')
                  }
                  className="theme-primary-button mt-2 w-full rounded-lg py-3 text-sm font-semibold"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.7,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  Let's Talk
                </motion.button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

