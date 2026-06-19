import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'CEO, Raza Electronics',
    location: 'Lahore, Pakistan',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "Hi-Z Tech Solution completely transformed our online presence. Their Google Ads campaign generated 3x more leads than we expected within the first month. Excellent team, transparent reporting, and outstanding results. Highly recommend!",
    service: 'Google Ads & SEO',
  },
  {
    name: 'Fatima Malik',
    role: 'Owner, Bloom Boutique',
    location: 'Islamabad, Pakistan',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "I hired Hi-Z Tech for social media marketing and the growth has been incredible. Our Instagram went from 3K to 45K followers in just 5 months! Sales doubled and our brand is now recognized in the market. Truly professional work.",
    service: 'Social Media Marketing',
  },
  {
    name: 'Usman Khan',
    role: 'Director, Khan Properties',
    location: 'Lahore, Pakistan',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "The website they built for us is stunning — fast, mobile-friendly, and professional. Combined with their SEO work, we now rank on the first page of Google for our top keywords. The ROI has been phenomenal. We could not be happier!",
    service: 'Website Development & SEO',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#080f1e] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 animate-on-scroll">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-on-scroll">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg animate-on-scroll">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6 animate-on-scroll" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-7 rounded-2xl bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Quote size={18} className="text-blue-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Service badge */}
              <span className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-5">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/30"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                  <div className="text-slate-500 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-center gap-6 text-center animate-on-scroll">
          <div>
            <div className="text-5xl font-extrabold text-white">5.0</div>
            <div className="flex gap-1 justify-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-white font-semibold text-lg">200+ Happy Clients</div>
            <div className="text-slate-400 text-sm">Across Pakistan</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-white font-semibold text-lg">95% Client Retention</div>
            <div className="text-slate-400 text-sm">Long-term partnerships</div>
          </div>
        </div>
      </div>
    </section>
  )
}
