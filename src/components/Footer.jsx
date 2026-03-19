import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialIcons = [
  { icon: Github, href: 'https://github.com/KartheekNelloree', label: 'GitHub', hoverColor: 'hover:text-white' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/karthik-nellore-7193a025b/', label: 'LinkedIn', hoverColor: 'hover:text-blue-400' },
  { icon: Mail, href: 'mailto:karthik82477@gmail.com', label: 'Email', hoverColor: 'hover:text-indigo-400' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xs">
              KK
            </div>
            <p className="text-slate-600 text-sm">
              © {year} Karthik. Built with{' '}
              <Heart size={11} className="inline text-red-500/70 mx-0.5" />
              using React & Tailwind CSS.
            </p>
          </div>

          {/* Right: Social icons */}
          <div className="flex items-center gap-2">
            {socialIcons.map(({ icon: Icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-slate-600 ${hoverColor} transition-all duration-200 hover:scale-110`}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
