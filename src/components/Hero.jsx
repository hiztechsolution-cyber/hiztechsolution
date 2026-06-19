import { ArrowRight, MessageCircle, ChevronDown, BarChart3, Search, Globe, Megaphone } from 'lucide-react'

const stats = [
  { value: '200+', label: 'Clients Served' },
  { value: '95%', label: 'Client Retention' },
  { value: '5+', label: 'Years Experience' },
  { value: '3x', label: 'Avg. ROI Growth' },
]

const floatingBadges = [
  { icon: BarChart3, text: 'Google Ads', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30', iconColor: 'text-blue-400', top: '18%', left: '5%' },
  { icon: Search, text: 'SEO', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30', iconColor: 'text-cyan-400', top: '60%', left: '2%' },
  { icon: Globe, text: 'Web Dev', color: 'from-indigo-500/20 to-indigo-600/10', border: 'border-indigo-500/30', iconColor: 'text-indigo-400', top: '20%', right: '4%' },
  { icon: Megaphone, text: 'Social Media', color: 'from-sky-500/20 to-sky-600/10', border: 'border-sky-500/30', iconColor: 'text-sky-400', top: '65%', right: '3%' },
]

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#060b18]"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[100px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating badges - hidden on mobile */}
      {floatingBadges.map((badge, i) => (
        <div
          key={i}
          className="absolute hidden xl:flex items-center gap-2 px-3 py-2 rounded-xl glass-card animate-pulse-slow"
          style={{ top: badge.top, left: badge.left, right: badge.right, animationDelay: `${i * 0.5}s` }}
        >
          <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${badge.color} border ${badge.border} flex items-center justify-center`}>
            <badge.icon size={14} className={badge.iconColor} />
          </div>
          <span className="text-white/80 text-xs font-medium">{badge.text}</span>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-on-scroll">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Lahore's Premier Digital Marketing Agency
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-on-scroll">
          Grow Your Business With{' '}
          <span className="gradient-text">Data-Driven</span>{' '}
          Digital Marketing
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-on-scroll">
          Hi-Z Tech Solution helps businesses increase leads, sales, and online visibility through{' '}
          <span className="text-slate-300">Google Ads, SEO, Social Media Marketing,</span> and{' '}
          <span className="text-slate-300">Website Development.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-on-scroll">
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 text-base w-full sm:w-auto justify-center"
          >
            Get Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/923034747338"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold rounded-2xl hover:bg-[#25D366]/20 hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-1 transition-all duration-300 text-base w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-on-scroll">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/8 transition-all duration-300"
            >
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce-slow"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
