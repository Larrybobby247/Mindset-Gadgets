import { BrandData } from "../data/data";

export default function Hero() {
  const { hero } = BrandData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FFF0F3] via-[#FCE4EC] to-[#FFF9C4]"
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#FFC0CB]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full bg-[#FFD700]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-[#FF69B4]/10 blur-2xl pointer-events-none" />

      {/* Floating confetti dots */}
      {["top-20 left-16", "top-32 right-24", "bottom-40 left-32", "bottom-24 right-16", "top-1/2 left-8", "top-16 left-1/2"].map(
        (pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} w-3 h-3 rounded-full opacity-40 animate-bounce`}
            style={{
              backgroundColor: ["#D4527E", "#FFD700", "#9370DB", "#FF69B4", "#4682B4", "#32CD32"][i],
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          />
        )
      )}

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-7">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#D4527E]/20 text-[#8B1A4A] text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-[#D4527E] rounded-full animate-pulse" />
            Ibadan's Favourite Bakery
          </span>

          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D0A1E] leading-[1.1] tracking-tight">
            Exquisite Cakes<br />
            <span className="text-[#D4527E] italic font-semibold">for Every</span>
            <br />Moment
          </h1>

          <p className="text-[#6B2042] text-base md:text-lg leading-relaxed max-w-md font-light">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/2349066835891"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4527E] text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#B8395F] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-sm"
            >
              {hero.cta} 🎂
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-white/80 text-[#8B1A4A] font-semibold border border-[#D4527E]/30 px-8 py-3.5 rounded-full hover:bg-white hover:border-[#D4527E] transition-all duration-200 text-sm"
            >
              Browse Menu →
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-4 border-t border-[#D4527E]/10">
            {[
              { num: "500+", label: "Happy Customers" },
              { num: "50+", label: "Cake Designs" },
              { num: "5★", label: "Avg Rating" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-['Playfair_Display'] text-2xl font-bold text-[#D4527E]">{num}</p>
                <p className="text-xs text-[#6B2042]/70 tracking-wide mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative visual panel */}
        <div className="relative hidden md:flex justify-center items-center">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4527E]/30 animate-spin" style={{ animationDuration: "20s" }} />
            {/* Inner circle */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#FFC0CB]/60 to-[#FFD700]/30 backdrop-blur flex items-center justify-center border border-white/50 shadow-xl">
              <div className="text-center space-y-2">
                <div className="text-7xl">🎂</div>
                <p className="font-['Playfair_Display'] text-lg font-bold text-[#8B1A4A]">Made with</p>
                <p className="text-[#D4527E] text-sm italic font-light">love & sugar</p>
              </div>
            </div>

            {/* Floating product badges */}
            {[
              { emoji: "🎀", label: "Custom Orders", pos: "top-0 -left-6" },
              { emoji: "🚚", label: "Fast Delivery", pos: "bottom-4 -left-10" },
              { emoji: "💰", label: "Budget Friendly", pos: "-right-8 top-10" },
              { emoji: "⭐", label: "Top Rated", pos: "-right-4 bottom-8" },
            ].map(({ emoji, label, pos }) => (
              <div
                key={label}
                className={`absolute ${pos} bg-white shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 border border-[#FFC0CB]/40`}
              >
                <span className="text-lg">{emoji}</span>
                <span className="text-[#8B1A4A] text-xs font-semibold whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] text-[#8B1A4A] tracking-widest uppercase font-medium">Scroll</span>
        <span className="animate-bounce text-[#D4527E] text-lg">↓</span>
      </div>
    </section>
  );
}
