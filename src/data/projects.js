/**
 * Portfolio project data — update liveUrl and githubUrl with your real links.
 * Each project follows a case-study format: problem → solution → results.
 */
export const projects = [
  {
    id: 1,
    title: 'Infinite Journey Reiki Healing',
    subtitle: 'Client Web Application',
    description:
      'A production-ready appointment booking platform built for a wellness business. Clients can browse services, select time slots, and receive instant confirmation — all without a single phone call.',
    emoji: '🌿',
    tags: ['React', 'Node.js', 'Supabase', 'Vercel', 'Render', 'Nodemailer'],
    color: 'from-emerald-500 to-teal-600',
    shadowColor: 'shadow-emerald-500/20',
    problem:
      'The client was manually managing all appointments via phone and WhatsApp — leading to double bookings, missed follow-ups, and a poor customer experience that was costing her time every single day.',
    solution:
      'Built a full-stack booking platform with React frontend and a Node.js + Supabase backend. Integrated automated email confirmations via Nodemailer and real-time Telegram notifications for the admin, so every booking is handled without human intervention.',
    results: [
      '100% elimination of manual scheduling overhead',
      'Automated email confirmations to clients on every booking',
      'Instant Telegram alerts to admin — zero missed appointments',
      'Fully mobile-responsive for clients on any device',
      'Deployed on Vercel (frontend) + Render (backend) with zero downtime',
    ],
    liveUrl: 'https://infinitejourny.org/', // Update with actual URL
    githubUrl: 'https://github.com/KartheekNelloree/infinite-journey', // Update with actual URL
    featured: true,
  },
  {
    id: 2,
    title: 'AI Study Buddy',
    subtitle: 'GPT-4 Powered Learning Assistant',
    description:
      'An intelligent study tool that ingests your notes or PDFs and transforms them into concise summaries, custom quiz questions, and step-by-step concept explanations — powered by OpenAI GPT-4.',
    emoji: '🤖',
    tags: ['React', 'Node.js', 'OpenAI API', 'Supabase', 'Vercel', 'Render'],
    color: 'from-indigo-500 to-purple-600',
    shadowColor: 'shadow-indigo-500/20',
    problem:
      'Students spend hours passively re-reading notes before exams, with no efficient way to identify knowledge gaps or generate targeted practice questions from their own study material.',
    solution:
      'Built an AI-powered study assistant that accepts text, PDFs, or DOCX input. Users can generate TL;DR summaries, create custom quiz question banks, and ask follow-up questions about any concept. All sessions are saved to Supabase for history and review.',
    results: [
      '70% reduction in study preparation time reported by beta users',
      'Supports PDF, DOCX, and plain text input formats',
      'Generates contextual quiz questions with GPT-4 in under 3 seconds',
      'Persistent session history stored in Supabase per user',
      'Used prompt engineering techniques to minimize hallucinations',
    ],
    liveUrl: '#', // Update with actual URL
    githubUrl: 'https://github.com/KartheekNelloree/ai-study-buddy', // Update with actual URL
    featured: true,
  },
  {
    id: 3,
    title: 'TaskFlow Dashboard',
    subtitle: 'Real-Time Project Management App',
    description:
      'A lightweight Kanban-style project management dashboard with real-time collaboration, role-based access control, and built-in analytics — designed for small teams who outgrew spreadsheets.',
    emoji: '📊',
    tags: ['React', 'Supabase', 'Node.js', 'Tailwind CSS', 'Vercel'],
    color: 'from-orange-500 to-rose-500',
    shadowColor: 'shadow-orange-500/20',
    problem:
      'Small teams often rely on spreadsheets or pay for expensive tools like Jira that are overkill. They need something fast, collaborative, and purpose-built for their workflow — not a bloated enterprise tool.',
    solution:
      'Built a full-stack Kanban board with Supabase Realtime for live task sync, drag-and-drop columns, and an analytics panel showing task completion rates and team velocity. Role-based access lets team leads control permissions.',
    results: [
      'Real-time task sync across all team members using Supabase Realtime',
      'Role-based access: Admin, Member, and Viewer permissions',
      'Drag-and-drop Kanban with To Do → In Progress → Done columns',
      'Built-in analytics: task completion rate, overdue tracking',
      'Deployed on Vercel — sub-second load times on Lighthouse audit',
    ],
    liveUrl: '#', // Update with actual URL
    githubUrl: 'https://github.com/KartheekNelloree/taskflow', // Update with actual URL
    featured: false,
  },
]

/**
 * Skills data grouped by category.
 * Shown as badge-style chips in the Skills section.
 */
export const skillCategories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    colorClass: 'text-sky-400',
    borderClass: 'border-sky-500/25',
    bgClass: 'bg-sky-500/8',
    hoverGlow: 'hover:border-sky-400/50 hover:bg-sky-500/15',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design', 'React Hooks', 'Context API'],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    colorClass: 'text-violet-400',
    borderClass: 'border-violet-500/25',
    bgClass: 'bg-violet-500/8',
    hoverGlow: 'hover:border-violet-400/50 hover:bg-violet-500/15',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Webhooks', 'CORS & Middleware'],
  },
  {
    title: 'Database',
    emoji: '🗄️',
    colorClass: 'text-emerald-400',
    borderClass: 'border-emerald-500/25',
    bgClass: 'bg-emerald-500/8',
    hoverGlow: 'hover:border-emerald-400/50 hover:bg-emerald-500/15',
    skills: ['Supabase', 'PostgreSQL', 'Supabase Realtime', 'Firebase', 'SQL Queries'],
  },
  {
    title: 'DevOps & Tools',
    emoji: '🛠️',
    colorClass: 'text-amber-400',
    borderClass: 'border-amber-500/25',
    bgClass: 'bg-amber-500/8',
    hoverGlow: 'hover:border-amber-400/50 hover:bg-amber-500/15',
    skills: ['Git & GitHub', 'Vercel', 'Render', 'VS Code', 'npm / yarn', 'Environment Config'],
  },
  {
    title: 'AI & Emerging',
    emoji: '🤖',
    colorClass: 'text-pink-400',
    borderClass: 'border-pink-500/25',
    bgClass: 'bg-pink-500/8',
    hoverGlow: 'hover:border-pink-400/50 hover:bg-pink-500/15',
    skills: ['OpenAI API (GPT-4)', 'Prompt Engineering', 'LangChain (Learning)', 'RAG Basics', 'AI API Integration'],
  },
]
