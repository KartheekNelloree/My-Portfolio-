import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, AlertCircle, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  // Alternate layout direction for visual variety
  const isReversed = index % 2 !== 0

  return (
    <div className={`glass-card overflow-hidden project-card group hover:border-white/15`}>
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

        {/* ── Visual panel (left/right based on index) ── */}
        <div className={`lg:w-2/5 p-10 flex flex-col items-center justify-center min-h-52 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          {/* Emoji icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
            transition={{ duration: 0.4 }}
            className="text-6xl mb-4 drop-shadow-lg relative z-10 select-none"
          >
            {project.emoji}
          </motion.div>

          <p className="relative z-10 text-white/80 text-sm font-semibold text-center tracking-wide">
            {project.subtitle}
          </p>

          {project.featured && (
            <div className="relative z-10 mt-3 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-wide">
              ✨ Featured
            </div>
          )}
        </div>

        {/* ── Content panel ── */}
        <div className="lg:w-3/5 p-8 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Github size={13} />
              GitHub
            </a>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/[0.07] transition-all duration-200 ml-auto"
            >
              Case Study
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.22 }}>
                <ChevronDown size={13} />
              </motion.span>
            </button>
          </div>

          {/* ── Expandable Case Study ── */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-4">
                  {/* Problem */}
                  <div className="p-4 rounded-xl bg-red-500/[0.05] border border-red-500/15">
                    <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2">
                      <AlertCircle size={14} />
                      Problem
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-xl bg-indigo-500/[0.05] border border-indigo-500/15">
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-2">
                      <Lightbulb size={14} />
                      Solution
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/15">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-3">
                      <TrendingUp size={14} />
                      Results & Impact
                    </div>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                          <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
