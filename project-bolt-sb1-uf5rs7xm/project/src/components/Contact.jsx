import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 303 4747338',
    href: 'tel:+923034747338',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+92 303 4747338',
    href: 'https://wa.me/923034747338',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '2nd Floor, Asif Building, 97 McLeod Road, Opposite Saver Foods, Lahore, Pakistan',
    href: null,
    color: 'from-rose-500 to-pink-600',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const services = [
    'Google Ads Management',
    'Facebook & Instagram Ads',
    'Search Engine Optimization (SEO)',
    'Website Development',
    'E-Commerce Solutions',
    'Social Media Marketing',
    'Graphic Design',
    'Lead Generation',
    'Other',
  ]

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#060b18] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 animate-on-scroll">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-on-scroll">
            Contact Hi-Z Tech Solution
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg animate-on-scroll">
            Ready to grow your business? Get a free consultation with our experts today.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6 animate-on-scroll" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="animate-on-scroll-left space-y-6">
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Let's Start a Conversation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out through any of the channels below. Our team responds within 1 business hour.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-medium mb-1">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-white font-medium text-sm hover:text-blue-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative">
              <div className="absolute inset-0 bg-[#0a1628] flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <MapPin size={24} className="text-blue-400" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">Hi-Z Tech Solution</p>
                  <p className="text-slate-400 text-xs mt-1">97 McLeod Road, Lahore</p>
                  <a
                    href="https://maps.google.com/?q=97+McLeod+Road+Lahore+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs rounded-lg hover:bg-blue-600/30 transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="animate-on-scroll-right">
            <div className="p-8 rounded-3xl bg-white/3 border border-white/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm mb-6">Thank you for reaching out. Our team will contact you within 1 business hour.</p>
                  <a
                    href="https://wa.me/923034747338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold rounded-xl hover:bg-[#25D366]/20 transition-colors text-sm"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp for Faster Response
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-white text-lg font-bold mb-6">Send Us a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                      >
                        <option value="" className="bg-[#0a1628]">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#0a1628]">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project and goals..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-slate-500 text-xs">
                    Or contact us directly via{' '}
                    <a href="https://wa.me/923034747338" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">
                      WhatsApp
                    </a>
                    {' '}for instant response.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
