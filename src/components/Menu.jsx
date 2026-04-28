import { useState } from "react";
import { productList, categories } from "../data/data";

const tagColors = {
  "Best Seller": "bg-yellow-100 text-yellow-800",
  Premium: "bg-purple-100 text-purple-800",
  Popular: "bg-blue-100 text-blue-800",
  "Gift Idea": "bg-green-100 text-green-800",
  Fresh: "bg-emerald-100 text-emerald-800",
  Trending: "bg-pink-100 text-pink-800",
  Classic: "bg-red-100 text-red-800",
  Event: "bg-indigo-100 text-indigo-800",
  Romantic: "bg-rose-100 text-rose-800",
  Healthy: "bg-teal-100 text-teal-800",
  Hot: "bg-orange-100 text-orange-800",
  Sweet: "bg-amber-100 text-amber-800",
};

const emojisByCategory = {
  "Budget Cakes": "🎂",
  "Wedding & Anniversary": "💍",
  "Birthday Cakes": "🎉",
  "Surprise Packages": "📦",
  "Pastries & Chops": "🍩",
};

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState("All");

  const allFilters = ["All", ...categories.map((c) => c.name)];

  const filtered =
    activeFilter === "All"
      ? productList
      : productList.filter((p) => p.category === activeFilter);

  return (
    <section id="menu" className="bg-[#FFF9FB] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#D4527E] text-xs font-semibold tracking-widest uppercase">Our Menu</span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#3D0A1E] mt-2">
            Sweet Creations
          </h2>
          <p className="text-[#6B2042]/70 mt-3 max-w-md mx-auto text-sm">
            Handcrafted with love, baked fresh for your special moments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#D4527E] text-white border-[#D4527E] shadow-md"
                  : "bg-white text-[#8B1A4A] border-[#FFC0CB]/60 hover:border-[#D4527E] hover:bg-[#FFF0F3]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#FFC0CB]/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image placeholder with emoji + color */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: product.color + "33" }}
              >
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {emojisByCategory[product.category] || "🎂"}
                </span>

                {/* Tag badge */}
                <span
                  className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    tagColors[product.tag] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {product.tag}
                </span>

                {product.arrival === "top" && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#D4527E] text-white">
                    ★ Top Pick
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4 space-y-3">
                <p className="text-[8px] font-semibold tracking-widest uppercase text-[#D4527E]/70">
                  {product.category}
                </p>
                <h3 className="font-['Playfair_Display'] font-bold text-[#3D0A1E] text-base leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-lg font-bold text-[#D4527E]">{product.price}</span>
                  <a
                    href={`https://wa.me/2349066835891?text=Hi! I'd like to order: ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#FFF0F3] hover:bg-[#D4527E] text-[#D4527E] hover:text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-[#FFC0CB]/50 hover:border-[#D4527E] transition-all duration-200"
                  >
                    Order 💬
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
