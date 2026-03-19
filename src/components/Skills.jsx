import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data/projects'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/[0.04] to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">What I Work With</p>
          <h2 className="section-title gradient-text">Skills & Technologies</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A full-stack toolkit with a growing focus on AI-powered development
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(({ title, emoji, colorClass, borderClass, bgClass, hoverGlow, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`glass-card p-6 border ${borderClass} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl ${bgClass} border ${borderClass} flex items-center justify-center text-2xl`}>
                  {emoji}
                </div>
                <div>
                  <h3 className={`font-bold ${colorClass}`}>{title}</h3>
                  <p className="text-slate-600 text-xs mt-0.5">{skills.length} technologies</p>
                </div>
              </div>

              {/* Gradient rule */}
              <div className={`h-px mb-5 rounded-full opacity-40`}
                style={{ background: `linear-gradient(to right, currentColor, transparent)` }}
              />

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-badge px-2.5 py-1.5 rounded-lg text-xs font-medium ${bgClass} border ${borderClass} text-slate-400 hover:text-slate-200 ${hoverGlow} transition-all duration-200 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-6 glass-card p-5 text-center border border-white/[0.06]"
        >
          <p className="text-slate-400 text-sm">
            <span className="text-indigo-400 font-semibold">📚 Currently Learning: </span>
            <span className="text-slate-500">
              LangChain · Vector Databases (Pinecone, Chroma) · Retrieval Augmented Generation (RAG) · TypeScript · Next.js 14
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
