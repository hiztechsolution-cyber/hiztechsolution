import { Award, DollarSign, Zap, TrendingUp, BarChart2, Settings } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Experienced Team',
    desc: 'Our team of certified digital marketing experts brings years of hands-on experience across diverse industries.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    desc: "Premium digital marketing services at competitive prices. We ensure maximum value for every rupee you invest.",
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Zap,
    title: 'Fast Support',
    desc: 'Dedicated account managers available via WhatsApp, phone, and email. Quick responses, real solutions.',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    desc: 'We have a track record of delivering measurable results — more leads, higher conversions, and better ROI.',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    icon: BarChart2,
    title: 'Transparent Reporting',
    desc: 'Regular, detailed performance reports with clear metrics. Know exactly where your budget is going.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Settings,
    title: 'Customized Strategies',
    desc: 'No cookie-cutter solutions. Every campaign is crafted specifically for your business goals and target audience.',
    color: 'from-rose-500 to-pink-600',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#080f1e] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 animate-on-scroll">
            Our Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-on-scroll">
            Why Choose Hi-Z Tech Solution?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg animate-on-scroll">
            We are more than just a marketing agency — we are your dedicated growth partner.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6 animate-on-scroll" />
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative p-7 rounded-2xl bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 animate-on-scroll overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Background number */}
              <span className="absolute top-4 right-5 text-6xl font-extrabold text-white/3 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon size={24} className="text-white" />
              </div>

              <h3 className="text-white font-bold text-lg mb-3">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
