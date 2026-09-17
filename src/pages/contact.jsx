
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  ArrowUpRight,
  CheckCircle,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/* ----------------------------- UI COMPONENTS ----------------------------- */

const Card = ({ children, className = '', ...props }) => (
  <div
    className={`theme-panel rounded-3xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full rounded-xl border border-cyan-400/15 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-slate-950/80 focus:ring-2 focus:ring-cyan-400/10 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = '', ...props }) => (
  <textarea
    className={`w-full resize-none rounded-xl border border-cyan-400/15 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-slate-950/80 focus:ring-2 focus:ring-cyan-400/10 ${className}`}
    {...props}
  />
);

const Label = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="mb-2 block text-sm font-medium text-slate-300"
  >
    {children}
  </label>
);

/* ----------------------------- TYPEWRITER ----------------------------- */

const TypewriterTextLoop = ({
  texts,
  typingSpeed = 75,
  pauseTime = 1500,
}) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return undefined;

    const fullText = texts[index];

    if (!isDeleting && displayedText === fullText) {
      timerRef.current = setTimeout(
        () => setIsDeleting(true),
        pauseTime
      );

      return () => clearTimeout(timerRef.current);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return undefined;
    }

    timerRef.current = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timerRef.current);
  }, [
    displayedText,
    index,
    isDeleting,
    paused,
    texts,
    typingSpeed,
    pauseTime,
  ]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="font-mono text-lg font-semibold text-white sm:text-xl"
    >
      {displayedText}

      <span className="ml-1 inline-block h-5 border-r-2 border-cyan-300 animate-pulse align-middle" />
    </div>
  );
};

/* ----------------------------- ANIMATIONS ----------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};

const successVariant = {
  initial: {
    opacity: 0,
    scale: 0.85,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.3,
    },
  },
};

/* ----------------------------- CONTACT ----------------------------- */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { toast } = useToast();

  /* ----------------------------- FORM ----------------------------- */

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast({
        title: 'Missing information',
        description: 'Please complete all fields before sending.',
        variant: 'destructive',
      });

      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });

      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_coxs2d4',
        'template_0okl6vf',
        formData,
        'Xlh9orUaqZ2c3UTEF'
      );

      setIsSuccess(true);

      toast({
        title: 'Message sent successfully',
        description:
          "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 4500);
    } catch (error) {
      console.error(error);

      toast({
        title: 'Unable to send',
        description:
          'Something went wrong. Please try again or contact me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-400/5 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="relative z-10 container mx-auto px-4"
      >
        {/* ----------------------------- HEADER ----------------------------- */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="theme-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <Sparkles className="h-4 w-4 text-cyan-300" />

            <span className="text-sm font-medium">
              Let's build something together
            </span>
          </div>

          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
            CONTACT / CONNECT
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Let's{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              create
            </span>{' '}
            something.
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Have a project, opportunity, collaboration, or just an idea
            you'd like to discuss? Send me a message and let's connect.
          </p>
        </div>

        {/* ----------------------------- CONTENT ----------------------------- */}

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT SIDE */}

          <div className="flex flex-col gap-6">

            {/* RESUME */}

            <Card className="p-6 sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                    PROFILE
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    My Resume
                  </h3>
                </div>

                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                  <Eye className="h-5 w-5" />
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-400">
                Explore my education, technical skills, projects, and
                professional experience.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                {/* VIEW RESUME */}

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-primary-button inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-105"
                >
                  <Eye className="h-4 w-4" />
                  View Resume
                </a>

                {/* DOWNLOAD RESUME */}

                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="theme-secondary-button inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-105"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>

              </div>
            </Card>

            {/* DIRECT CONTACT */}

            <Card className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />

              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                DIRECT CONTACT
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Prefer email?
              </h3>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-cyan-400/15 bg-slate-950/50 p-4">
                <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                  <Mail className="h-5 w-5" />
                </div>

                <TypewriterTextLoop
                  texts={['janavamsi6@gmail.com']}
                />
              </div>

              {/* SOCIALS */}

              <div className="mt-6 flex flex-wrap gap-3">

                <a
                  href="https://linkedin.com/in/vamsijana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/15 bg-slate-950/50 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn

                  <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                </a>

                <a
                  href="https://github.com/Jana-vamsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/15 bg-slate-950/50 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <Github className="h-4 w-4" />
                  GitHub

                  <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                </a>

              </div>
            </Card>

            {/* AVAILABILITY */}

            <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-slate-950/50 to-violet-400/10 p-6">
              <div className="flex items-center gap-3">

                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300" />
                </span>

                <span className="text-sm font-semibold text-white">
                  Open to opportunities
                </span>

              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Available for frontend development, web applications,
                mobile applications, and collaborative projects.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE — FORM */}

          <Card className="overflow-hidden">

            <div className="border-b border-cyan-400/15 bg-slate-950/50 p-6 sm:p-8">

              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                    MESSAGE
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Send me a message
                  </h3>
                </div>

                <div className="hidden rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 sm:block">
                  <Send className="h-5 w-5" />
                </div>

              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Tell me a little about yourself and what you'd like to
                build.
              </p>

            </div>

            <div className="p-6 sm:p-8">

              <AnimatePresence mode="wait">

                {isSuccess ? (

                  <motion.div
                    key="success"
                    variants={successVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex min-h-[430px] flex-col items-center justify-center text-center"
                  >

                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-300">
                      <CheckCircle className="h-12 w-12" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                      Message sent!
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                      Thanks for reaching out. Your message has been
                      delivered successfully.
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="theme-secondary-button mt-7 rounded-xl px-5 py-3 text-sm font-semibold"
                    >
                      Send another message
                    </button>

                  </motion.div>

                ) : (

                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

                    <div className="grid gap-5 sm:grid-cols-2">

                      <div>
                        <Label htmlFor="name">
                          Full Name{' '}
                          <span className="text-cyan-300">*</span>
                        </Label>

                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">
                          Email Address{' '}
                          <span className="text-cyan-300">*</span>
                        </Label>

                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                    </div>

                    <div>
                      <Label htmlFor="subject">
                        Subject{' '}
                        <span className="text-cyan-300">*</span>
                      </Label>

                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">
                        Message{' '}
                        <span className="text-cyan-300">*</span>
                      </Label>

                      <Textarea
                        id="message"
                        name="message"
                        rows={7}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, opportunity, or idea..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="theme-primary-button group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold"
                    >

                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending message...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          Send Message
                        </>
                      )}

                    </button>

                    <p className="text-center text-xs leading-5 text-slate-500">
                      Your message will be sent securely through EmailJS.
                    </p>

                  </motion.form>

                )}

              </AnimatePresence>

            </div>

          </Card>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
