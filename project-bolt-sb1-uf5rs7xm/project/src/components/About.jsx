import { CheckCircle, Target, Users, TrendingUp } from 'lucide-react'

const highlights = [
  'Results-driven approach with measurable KPIs',
  'Serving startups, local businesses & growing brands',
  'Innovative digital marketing strategies',
  'Professional web solutions & technical expertise',
  'Transparent reporting & dedicated client support',
  'Competitive pricing with maximum ROI focus',
]

const pillars = [
  { icon: Target, title: 'Mission', desc: 'Deliver measurable growth through innovative digital strategies tailored to each client.', color: 'from-blue-500 to-blue-600' },
  { icon: Users, title: 'Team', desc: 'A passionate team of digital experts with proven expertise across all marketing channels.', color: 'from-cyan-500 to-cyan-600' },
  { icon: TrendingUp, title: 'Results', desc: 'We track every campaign metric to optimize performance and maximize your investment.', color: 'from-indigo-500 to-indigo-600' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#080f1e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 animate-on-scroll">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-on-scroll">
            About Hi-Z Tech Solution
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto animate-on-scroll" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image / Visual */}
          <div className="relative animate-on-scroll-left">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hi-Z Tech Solution team working"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/60 via-transparent to-transparent rounded-3xl" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[#0a1628] border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  HZ
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Lahore, Pakistan</div>
                  <div className="text-slate-400 text-xs">McLeod Road HQ</div>
                </div>
              </div>
            </div>

            {/* Years badge */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-4 shadow-xl shadow-blue-500/30">
              <div className="text-white font-extrabold text-2xl leading-none">5+</div>
              <div className="text-blue-100 text-xs font-medium mt-0.5">Years</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-on-scroll-right">
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Hi-Z Tech Solution is a <span className="text-white font-semibold">results-driven digital marketing agency</span> based in Lahore, Pakistan. We help startups, local businesses, and growing brands achieve measurable growth through innovative digital marketing strategies and professional web solutions.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/923034747338"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Talk to Our Team
            </a>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 group animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <p.icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
