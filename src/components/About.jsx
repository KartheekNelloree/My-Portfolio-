import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, Zap, Bot } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Projects Shipped', icon: Briefcase, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  { value: '5+', label: 'Technologies', icon: Zap, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { value: 'BSc', label: 'Computer Science', icon: GraduationCap, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { value: 'AI', label: 'Focus Area', icon: Bot, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
]

const highlights = [
  { text: 'BSc Computer Science', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/[0.07]' },
  { text: 'Java Full Stack Certified', color: 'text-purple-400 border-purple-500/30 bg-purple-500/[0.07]' },
  { text: 'React Specialist', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/[0.07]' },
  { text: 'AI Integration', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/[0.07]' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 relative">
      {/* Subtle tinted gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/[0.04] to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label">Get to Know Me</p>
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A developer who bridges beautiful interfaces with intelligent backends
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Professional story ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm{' '}
              <span className="text-white font-semibold">Karthik</span>, a Frontend Developer and
              aspiring AI Engineer based in Bangalore. With a strong Computer Science foundation and
              hands-on experience shipping real-world applications, I specialize in crafting
              responsive, performant web experiences.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My journey started with a{' '}
              <span className="text-slate-300">Java Full Stack certification</span>, which gave me a
              deep understanding of both client-side and server-side architecture. I've since focused
              on the React ecosystem — building production-ready apps using{' '}
              <span className="text-indigo-400">React, Node.js, and Supabase</span> deployed on
              Vercel and Render.
            </p>

            <p className="text-slate-400 leading-relaxed">
              What excites me most today is where web development meets AI. I'm actively integrating{' '}
              <span className="text-purple-400">OpenAI APIs and intelligent features</span> into my
              work, aiming to become a Full-Stack Developer who can build AI-native applications
              end-to-end — the next generation of intelligent web products.
            </p>

            {/* Highlight tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {highlights.map(({ text, color }) => (
                <span
                  key={text}
                  className={`px-3 py-1.5 rounded-lg border text-sm font-medium ${color}`}
                >
                  {text}
                </span>
              ))}
            </div>

            {/* AI callout box */}
            <div className="p-4 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/[0.07] to-purple-500/[0.07]">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-indigo-400 font-semibold">Currently exploring:</span>{' '}
                LangChain, vector databases, RAG architectures, and building AI-native web apps.
                Looking for Full-Stack or AI Engineer roles where I can grow fast. 🚀
              </p>
            </div>
          </motion.div>

          {/* ── Right: Stats + code card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, label, icon: Icon, color, bg, border }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className="glass-card p-6 text-center group hover:border-white/15 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={color} />
                </div>
                <div className={`text-3xl font-black mb-1 ${color}`}>{value}</div>
                <div className="text-slate-500 text-xs font-medium">{label}</div>
              </motion.div>
            ))}

            {/* Code snippet card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="col-span-2 glass-card p-5 font-mono text-xs leading-relaxed"
            >
              {/* Window chrome dots */}
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              {/* Code block */}
              <div className="space-y-0.5">
                <p><span className="text-purple-400">const</span> <span className="text-cyan-300">karthik</span> <span className="text-white">= {'{'}</span></p>
                <p className="pl-4"><span className="text-indigo-300">role</span><span className="text-white">:</span> <span className="text-green-400">"Full-Stack & AI Engineer"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-indigo-300">stack</span><span className="text-white">:</span> <span className="text-yellow-400">["React", "Node.js", "OpenAI"]</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-indigo-300">location</span><span className="text-white">:</span> <span className="text-green-400">"Bangalore, India"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-indigo-300">available</span><span className="text-white">:</span> <span className="text-orange-400">true</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-indigo-300">openTo</span><span className="text-white">:</span> <span className="text-green-400">"Full-Stack & AI roles"</span><span className="text-white">,</span></p>
                <p><span className="text-white">{'}'}</span></p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
