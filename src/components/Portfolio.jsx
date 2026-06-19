import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Store Redesign',
    category: 'Website Development',
    desc: 'Complete redesign and development of an online retail store with 300% increase in conversion rate.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'E-Commerce', 'UI/UX'],
    badge: 'Web Dev',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  },
  {
    title: 'Google Ads Campaign',
    category: 'Google Ads Management',
    desc: 'Managed PPC campaign for a real estate firm generating 200+ qualified leads per month at 4x ROAS.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Google Ads', 'PPC', 'Lead Gen'],
    badge: 'Google Ads',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  },
  {
    title: 'Restaurant Brand Identity',
    category: 'Graphic Design',
    desc: 'Complete brand identity including logo, menu design, social media kit, and signage for a Lahore restaurant.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Branding', 'Logo', 'Design'],
    badge: 'Design',
    badgeColor: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  },
  {
    title: 'Social Media Growth',
    category: 'Social Media Marketing',
    desc: 'Grew a fashion brand from 2K to 50K+ Instagram followers in 6 months through strategic content and ads.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Instagram', 'Content', 'Growth'],
    badge: 'Social Media',
    badgeColor: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  },
  {
    title: 'SEO Organic Growth',
    category: 'Search Engine Optimization',
    desc: 'Achieved page 1 rankings for 50+ competitive keywords resulting in 180% organic traffic increase.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['SEO', 'Content', 'Rankings'],
    badge: 'SEO',
    badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  },
  {
    title: 'B2B Lead Generation',
    category: 'Lead Generation',
    desc: 'Generated 500+ qualified B2B leads for a software company using targeted LinkedIn and Facebook campaigns.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['LinkedIn', 'B2B', 'Leads'],
    badge: 'Lead Gen',
    badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#060b18] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 animate-on-scroll">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-on-scroll">
            Portfolio & Case Studies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg animate-on-scroll">
            Real campaigns, real results. Explore how we've helped businesses grow across Pakistan.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6 animate-on-scroll" />
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white/3 border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/80 via-[#060b18]/20 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold border ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-blue-400 text-xs font-medium mb-2">{project.category}</p>
                <h3 className="text-white font-bold text-base mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-slate-400 mb-4">Want similar results for your business?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
