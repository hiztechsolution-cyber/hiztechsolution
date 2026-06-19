import { Facebook, Instagram, Linkedin, MessageCircle, Phone, MapPin, ArrowRight, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Google Ads Management',
  'Facebook & Instagram Ads',
  'SEO Services',
  'Website Development',
  'E-Commerce Solutions',
  'Lead Generation',
]

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 hover:text-[#1877F2]' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-[#E1306C]/20 hover:border-[#E1306C]/40 hover:text-[#E1306C]' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 hover:text-[#0A66C2]' },
  { icon: MessageCircle, href: 'https://wa.me/923034747338', label: 'WhatsApp', color: 'hover:bg-[#25D366]/20 hover:border-[#25D366]/40 hover:text-[#25D366]' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#040810] border-t border-white/8">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">
                HZ
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block">Hi-Z Tech</span>
                <span className="text-blue-400 text-xs font-medium tracking-widest uppercase">Solution</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Lahore's premier digital marketing agency. We help businesses grow through data-driven strategies and professional web solutions.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200 ${social.color}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors group"
                  >
                    <ArrowRight size={12} className="text-blue-500 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors group"
                  >
                    <ArrowRight size={12} className="text-blue-500 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-0.5">Phone</div>
                  <a href="tel:+923034747338" className="text-slate-300 text-sm hover:text-white transition-colors">
                    +92 303 4747338
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle size={14} className="text-green-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-0.5">WhatsApp</div>
                  <a href="https://wa.me/923034747338" target="_blank" rel="noopener noreferrer" className="text-slate-300 text-sm hover:text-white transition-colors">
                    +92 303 4747338
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-rose-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-0.5">Address</div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    2nd Floor, Asif Building,<br />
                    97 McLeod Road, Opposite Saver Foods,<br />
                    Lahore, Pakistan
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Hi-Z Tech Solution. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Digital Marketing Agency | Lahore, Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
