import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

/**
 * FAQ-based portfolio chatbot.
 *
 * To upgrade to real AI: replace `getResponse()` with an OpenAI API call:
 *   const res = await fetch('/api/chat', {
 *     method: 'POST',
 *     body: JSON.stringify({ message }),
 *   })
 *   return (await res.json()).reply
 *
 * System prompt for OpenAI:
 *   "You are Karthik's portfolio assistant. Answer questions about his skills,
 *    projects, experience, and contact info. Be friendly and concise."
 */

// ── Keyword-based response engine ──
function getResponse(message) {
  const msg = message.toLowerCase().trim()

  if (/^(hi|hello|hey|sup|yo)\b/.test(msg))
    return "Hi there! 👋 I'm Karthik's portfolio assistant. Ask me about his skills, projects, experience, or how to hire him!"

  if (/who|about|yourself|introduce|tell me/.test(msg))
    return "Karthik is a Frontend Developer & AI Enthusiast based in Bangalore. He specializes in React, Node.js, and Supabase — and is actively integrating AI into his projects. He's open to Full-Stack and AI Engineer roles! 🚀"

  if (/skill|technolog|tech|stack|know|use|tools/.test(msg))
    return "Karthik's stack:\n🎨 Frontend: React, JavaScript, Tailwind CSS\n⚙️ Backend: Node.js, Express.js\n🗄️ Database: Supabase, PostgreSQL\n🤖 AI: OpenAI API, Prompt Engineering\n🛠️ Tools: Git, Vercel, Render"

  if (/project|work|built|portfolio|showcase/.test(msg))
    return "Karthik has 3 key projects:\n\n🌿 Infinite Journey – Client booking platform with automated email + Telegram notifications\n\n🤖 AI Study Buddy – GPT-4 powered study assistant with quiz generation\n\n📊 TaskFlow – Real-time Kanban dashboard with Supabase Realtime\n\nClick 'Case Study' on each project to see the full breakdown!"

  if (/contact|email|reach|message|dm/.test(msg))
    return "You can reach Karthik at:\n📧 karthik82477@gmail.com\n💼 linkedin.com/in/karthik-nellore-7193a025b\n🐙 github.com/KartheekNelloree\n\nOr just use the Contact form on this page — he responds within 24 hours!"

  if (/available|hire|job|opportunit|freelance|work/.test(msg))
    return "Yes! Karthik is actively looking for Full-Stack Developer or AI Engineer roles. He's available immediately and open to both in-office (Bangalore) and remote work. Drop him a message! 💼"

  if (/resume|cv|download/.test(msg))
    return "You can download Karthik's resume using the 'Resume' button in the top navbar — it's always up to date. 📄"

  if (/ai|artificial intelligence|gpt|openai|llm|machine learning/.test(msg))
    return "AI is Karthik's biggest focus area right now! He works with OpenAI's GPT-4 API, prompt engineering, and is learning LangChain and RAG architectures. His goal: build Full-Stack apps with deep AI integration from end to end. 🤖"

  if (/experience|background|education|degree|certif/.test(msg))
    return "Karthik's background:\n🎓 BSc in Computer Science\n📜 Java Full Stack Certification\n💻 1+ years building real-world projects\n🚀 Shipped 3 production-ready apps"

  if (/location|where|bangalore|india|remote/.test(msg))
    return "Karthik is based in Marathahalli, Bangalore 🇮🇳. He's open to in-office roles in Bangalore and remote opportunities globally!"

  if (/thank|thanks|cool|great|awesome|nice/.test(msg))
    return "You're welcome! 😊 Is there anything else you'd like to know about Karthik?"

  return "Great question! I can best help with: skills, projects, experience, contact info, or availability. Try asking one of those! 💡"
}

// Initial greeting from bot
const INITIAL_MESSAGES = [
  {
    id: 'init',
    from: 'bot',
    text: "Hi! 👋 I'm Karthik's portfolio assistant.\nAsk me about his skills, projects, or how to hire him!",
  },
]

const QUICK_REPLIES = ['Skills', 'Projects', 'Available?', 'Contact']

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  // Scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  const addBotReply = async (userText) => {
    setIsTyping(true)
    // Simulate realistic typing delay
    await new Promise((res) => setTimeout(res, 700 + Math.random() * 500))
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: 'bot', text: getResponse(userText) },
    ])
    setIsTyping(false)
  }

  const sendMessage = (text) => {
    const trimmed = (text || input).trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { id: Date.now(), from: 'user', text: trimmed }])
    setInput('')
    addBotReply(trimmed)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* ── Chat window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] h-[500px] flex flex-col glass-card border-indigo-500/20 shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.06] bg-gradient-to-r from-indigo-600/15 to-purple-600/15">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Bot size={17} className="text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm leading-tight">Portfolio Assistant</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-[10px] font-medium">Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-500 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                aria-label="Close chat"
              >
                <X size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-none">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.from === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center ${
                    msg.from === 'bot'
                      ? 'bg-indigo-500/15 border border-indigo-500/25'
                      : 'bg-purple-500/15 border border-purple-500/25'
                  }`}>
                    {msg.from === 'bot'
                      ? <Bot size={12} className="text-indigo-400" />
                      : <User size={12} className="text-purple-400" />
                    }
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[76%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line break-words rounded-2xl ${
                    msg.from === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-sm'
                      : 'bg-white/[0.05] text-slate-300 border border-white/[0.08] rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
                    <Bot size={12} className="text-indigo-400" />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-white/[0.05] border border-white/[0.08]">
                    <div className="flex gap-1 items-center h-4">
                      {[0, 150, 300].map((delay) => (
                        <span
                          key={delay}
                          className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick reply chips */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-none border-t border-white/[0.05]">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/25 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400/50 transition-all duration-200"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input row */}
            <div className="p-3 border-t border-white/[0.05] flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/40 transition-all"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                aria-label="Send message"
              >
                <Send size={14} className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating action button ── */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 280 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat assistant"
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-xl shadow-indigo-600/40 flex items-center justify-center text-white"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-2xl bg-indigo-500 animate-ping opacity-25 pointer-events-none" />
        )}
      </motion.button>
    </>
  )
}
