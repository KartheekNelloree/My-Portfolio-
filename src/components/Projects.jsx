import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/[0.04] to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">My Work</p>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Real-world applications built to solve real problems — from client websites to
            AI-powered tools. Click <span className="text-indigo-400 font-medium">Case Study</span> to see the full breakdown.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            More projects on{' '}
            <a
              href="https://github.com/KartheekNelloree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline"
            >
              GitHub →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
