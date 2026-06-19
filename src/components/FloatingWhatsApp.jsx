import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip/Popup */}
      {open && (
        <div className="w-72 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 animate-on-scroll visible">
          {/* Header */}
          <div className="bg-[#075E54] px-4 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold flex-shrink-0">
              HZ
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-sm">Hi-Z Tech Solution</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span className="text-green-200 text-xs">Online</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* Message preview */}
          <div className="bg-[#ECE5DD] px-4 py-4">
            <div className="inline-block bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-xs">
              <p className="text-[#111] text-sm leading-relaxed">
                Hello! How can we help you grow your business today? Contact us for a <strong>FREE consultation</strong>.
              </p>
              <div className="text-[#667781] text-xs mt-1 text-right">Just now</div>
            </div>
          </div>

          {/* Action button */}
          <a
            href="https://wa.me/923034747338?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20digital%20marketing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3.5 bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1da851] transition-colors"
          >
            <MessageCircle size={18} />
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:bg-[#1da851] hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-[#060b18] animate-pulse" />
        )}
      </button>
    </div>
  )
}
