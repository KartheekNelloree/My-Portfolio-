import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

// Stagger animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

export default function Hero() {
  const typedText = useTypewriter(
    ['Frontend Developer', 'AI Enthusiast', 'Full-Stack Builder', 'React Specialist'],
    85,
    48,
    2400,
  )

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* ── Layered gradient background ── */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* ── Animated glow orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[15%] w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-[15%] w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            Open to Work · Full-Stack & AI Roles
            <Sparkles size={13} />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p {...fadeUp(0.2)} className="text-slate-400 text-xl mb-2 font-medium">
          Hi there, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.3)}
          className="text-7xl sm:text-8xl md:text-9xl font-black mb-5 gradient-text leading-none"
        >
          Karthik
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          {...fadeUp(0.4)}
          className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-7 h-10 flex items-center justify-center"
        >
          <span>{typedText}</span>
          <span className="typewriter-cursor ml-1" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.5)}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build{' '}
          <span className="text-white font-semibold">intelligent, high-performance web apps</span>{' '}
          that solve real problems — from pixel-perfect UIs to AI-powered backends.
          I ship products that matter.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-primary gap-2 text-base px-8 py-3.5"
          >
            View Projects
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-outline text-base px-8 py-3.5"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Tech stack pill badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {['React', 'Node.js', 'Supabase', 'OpenAI API', 'Vercel'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] text-slate-500 border border-white/[0.08] hover:text-slate-300 hover:border-white/20 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => scrollTo('#about')}
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown size={16} className="group-hover:text-indigo-400 transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  )
}
