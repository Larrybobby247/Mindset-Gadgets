import { categories } from "../data/data";

export default function Categories() {
  return (
    <section id="about" className="bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#D4527E] text-xs font-semibold tracking-widest uppercase">What We Offer</span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#3D0A1E] mt-2">
            Browse by Category
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#menu"
              className="group flex items-center gap-3 bg-[#FFF0F3] hover:bg-[#D4527E] border border-[#FFC0CB]/50 hover:border-[#D4527E] rounded-2xl px-6 py-4 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-sm font-semibold text-[#8B1A4A] group-hover:text-white transition-colors">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
