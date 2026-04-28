import { whyChooseUs } from "../data/data";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-[#3D0A1E] via-[#6B1A3A] to-[#8B1A4A] py-24 px-6 relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#FFC0CB] text-xs font-semibold tracking-widest uppercase">Why Us?</span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mt-3">
            The Biana Difference
          </h2>
          <p className="text-[#FFC0CB]/70 mt-3 text-sm max-w-sm mx-auto">
            We don't just bake cakes — we bake memories.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: item.color + "30", border: `2px solid ${item.color}50` }}
              >
                {item.emoji}
              </div>
              <h3 className="font-['Playfair_Display'] text-white font-semibold text-base mb-2">
                {item.title}
              </h3>
              <p className="text-[#FFC0CB]/70 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
