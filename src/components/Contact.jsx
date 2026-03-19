import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2 } from 'lucide-react'

// ⚠️ Update these with your actual contact details
const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    display: 'karthik82477@gmail.com',
    href: 'mailto:karthik82477@gmail.com',
    colorClass: 'text-indigo-400',
    bgClass: 'bg-indigo-500/[0.07]',
    borderClass: 'border-indigo-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    display: 'linkedin.com/in/karthik-nellore-7193a025b',
    href: 'https://www.linkedin.com/in/karthik-nellore-7193a025b/',
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-500/[0.07]',
    borderClass: 'border-blue-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    display: 'github.com/KartheekNelloree',
    href: 'https://github.com/KartheekNelloree',
    colorClass: 'text-slate-300',
    bgClass: 'bg-white/[0.04]',
    borderClass: 'border-white/10',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    /**
     * TODO: Connect a real form handler here.
     * Options:
     *   1. Formspree: fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form) })
     *   2. EmailJS: emailjs.send(serviceId, templateId, form, publicKey)
     *   3. Your own Node.js endpoint on Render
     */
    await new Promise((res) => setTimeout(res, 1600)) // simulate network delay
    setStatus('success')
  }

  const resetForm = () => {
    setForm({ name: '', email: '', message: '' })
    setStatus('idle')
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/[0.04] to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Let's Talk</p>
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle max-w-xl mx-auto mb-6">
            Open to full-stack and AI engineering opportunities. Let's build something remarkable together.
          </p>
          {/* Availability indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let's connect</h3>
              <p className="text-slate-400 leading-relaxed">
                Whether you have a project in mind, want to discuss a role, or just want to say hi —
                my inbox is always open. I respond within 24 hours.
              </p>
            </div>

            {/* Social link cards */}
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, display, href, colorClass, bgClass, borderClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl ${bgClass} border ${borderClass} hover:scale-[1.02] hover:border-opacity-60 transition-all duration-200 group`}
                >
                  <div className={`w-10 h-10 rounded-xl ${bgClass} border ${borderClass} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={17} className={colorClass} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-600 font-semibold uppercase tracking-widest mb-0.5">{label}</p>
                    <p className={`text-sm font-medium ${colorClass} group-hover:underline underline-offset-2`}>{display}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-slate-500 text-sm pt-1">
              <MapPin size={15} className="text-indigo-400 flex-shrink-0" />
              Marathahalli, Bangalore, India · Open to Remote
            </div>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            {status === 'success' ? (
              // Success state
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center h-full flex flex-col items-center justify-center gap-5 min-h-80"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="text-indigo-400 text-sm hover:text-indigo-300 hover:underline underline-offset-2 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              // Form
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.04] transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.04] transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.04] transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full gap-2 text-sm py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/25 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
