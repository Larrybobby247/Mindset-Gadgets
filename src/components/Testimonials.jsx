import { testimonials } from "../data/data";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-[#FFD700]" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const avatarColors = ["#D4527E", "#9370DB", "#4682B4", "#32CD32"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#D4527E] text-xs font-semibold tracking-widest uppercase">
            Happy Customers
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#3D0A1E] mt-2">
            What They're Saying
          </h2>
          <p className="text-[#6B2042]/60 mt-3 text-sm">
            Real words from real sweet-tooths across Ibadan.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="relative bg-[#FFF9FB] border border-[#FFC0CB]/30 rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-5 text-5xl text-[#FFC0CB]/40 font-serif leading-none select-none">
                "
              </span>

              <StarRating rating={t.rating} />

              <p className="mt-4 text-[#5C1A35]/80 text-sm leading-relaxed italic">
                "{t.comment}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: avatarColors[i % avatarColors.length] }}
                >
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="text-[#3D0A1E] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#6B2042]/50 text-xs">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-gradient-to-r from-[#FFC0CB]/30 via-[#FFF0F3] to-[#FFD700]/20 rounded-3xl p-8 text-center border border-[#FFC0CB]/40">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#3D0A1E]">
            Ready to Create Your Own Sweet Memory?
          </h3>
          <p className="text-[#6B2042]/70 text-sm mt-2 mb-6">
            Place your order today and get a free consultation for custom designs.
          </p>
          <a
            href="https://wa.me/2349066835891"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4527E] text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#B8395F] transition-all duration-200 text-sm"
          >
            Get a Free Quote 💬
          </a>
        </div>
      </div>
    </section>
  );
}
