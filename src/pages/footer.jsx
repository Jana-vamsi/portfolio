
import { GithubIcon, LinkedinIcon, Mail, ArrowUpRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    'Home',
    'About',
    'Projects',
    'Skills',
    'Experience',
    'Education',
    'Contact',
  ];

  const services = [
    'Frontend Development',
    'React Development',
    'React Native Apps',
    'Responsive UI Design',
  ];

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/15 bg-[#020617] pt-14 pb-8 text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-3xl font-black text-transparent">
              Vamsi Jana
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Frontend developer passionate about building responsive web and
              mobile applications with React, React Native, Flutter, and the
              MERN stack.
            </p>

            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
              Build • Learn • Create
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">
              Navigation
            </h4>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-400">
              {navigation.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group inline-flex items-center gap-1 transition-colors hover:text-cyan-300"
                  >
                    {item}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">
              What I Build
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-center text-sm text-slate-500 md:text-left">
            © {currentYear}{' '}
            <span className="text-slate-300">
              Vamsi Jana
            </span>
            . All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/Jana-vamsi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <GithubIcon className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/vamsijana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>

            <a
              href="mailto:janavamsi6@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-violet-300"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

          </div>
        </div>

        {/* Small Status */}
        <div className="mt-7 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/5 px-4 py-2 font-mono text-xs text-[#22c55e]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
            Available for opportunities
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
