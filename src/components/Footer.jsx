import { BrandData, categories } from "../data/data";

export default function Footer() {
  const { footer, contact } = BrandData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#3D0A1E] text-white px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎂</span>
              <span className="font-['Playfair_Display'] text-xl font-bold">
                Biana<span className="text-[#FFC0CB] font-normal italic"> Cakes</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{footer.shortDesc}</p>
            <div className="flex gap-3">
              {[
                { label: "IG", link: "https://instagram.com", emoji: "📸" },
                { label: "TT", link: "https://tiktok.com", emoji: "🎵" },
                { label: "WA", link: "https://wa.me/2349066835891", emoji: "💬" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4527E] flex items-center justify-center text-sm transition-colors duration-200"
                  title={s.label}
                >
                  {s.emoji}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FFC0CB] text-xs font-semibold tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#menu"
                    className="text-white/60 hover:text-[#FFC0CB] text-sm transition-colors flex items-center gap-2"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#FFC0CB] text-xs font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <span>📍</span>
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <span>📞</span>
                <a href={`tel:${contact.phone}`} className="hover:text-[#FFC0CB] transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <span>🕐</span>
                <span>{contact.workingDays}</span>
              </li>
            </ul>

            <a
              href="https://wa.me/2349066835891"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1ebe5d] transition-colors"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {year} Biana Cakes nd More. All rights reserved.</p>
          <p>Made with ❤️ in Ibadan, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
