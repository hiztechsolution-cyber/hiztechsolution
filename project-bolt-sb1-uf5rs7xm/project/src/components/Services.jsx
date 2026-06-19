import { BarChart3, Instagram, Search, Globe, ShoppingCart, Share2, Palette, Users } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Google Ads Management',
    desc: 'Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns. From search to display, we optimize every dollar.',
    color: 'from-blue-500 to-blue-600',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Instagram,
    title: 'Facebook & Instagram Ads',
    desc: 'Reach your ideal audience with compelling social ad campaigns. We create, manage, and optimize Meta Ads for maximum conversions.',
    color: 'from-pink-500 to-rose-600',
    glow: 'shadow-pink-500/20',
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    desc: 'Rank higher on Google organically. Our SEO strategies improve your visibility, drive quality traffic, and boost long-term growth.',
    color: 'from-orange-500 to-amber-600',
    glow: 'shadow-orange-500/20',
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Professional, fast-loading, and mobile-responsive websites built to convert visitors into customers. Custom designs that reflect your brand.',
    color: 'from-cyan-500 to-teal-600',
    glow: 'shadow-cyan-500/20',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    desc: 'Launch and scale your online store with powerful e-commerce platforms. Seamless shopping experiences that drive sales.',
    color: 'from-green-500 to-emerald-600',
    glow: 'shadow-green-500/20',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Build a powerful brand presence across all social platforms. Strategic content, community management, and growth tactics.',
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Visually stunning designs that communicate your brand story. Logos, banners, social creatives, and complete brand identity packages.',
    color: 'from-fuchsia-500 to-pink-600',
    glow: 'shadow-fuchsia-500/20',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    desc: 'Fill your sales pipeline with qualified leads. We implement proven multi-channel strategies to attract and convert your target customers.',
    color: 'from-sky-500 to-blue-600',
    glow: 'shadow-sky-500/20',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#060b18] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 animate-on-scroll">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-on-scroll">
            Our Digital Marketing Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg animate-on-scroll">
            Comprehensive digital solutions designed to grow your brand, increase leads, and maximize your return on investment.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6 animate-on-scroll" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/6 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg ${service.glow} group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={22} className="text-white" />
              </div>

              <h3 className="text-white font-bold text-base mb-3 leading-snug">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>

              {/* Hover line */}
              <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${service.color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 text-center animate-on-scroll">
          <h3 className="text-white text-2xl font-bold mb-3">Ready to Grow Your Business?</h3>
          <p className="text-slate-400 mb-6">Let's discuss which services are right for you. Get a free consultation today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Free Consultation
            </button>
            <a
              href="https://wa.me/923034747338"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-[#25D366]/40 text-[#25D366] font-semibold rounded-xl hover:bg-[#25D366]/10 transition-all duration-200"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
