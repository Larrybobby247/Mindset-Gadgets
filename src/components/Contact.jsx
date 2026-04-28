import { BrandData } from "../data/data";

export default function Contact() {
  const { contact } = BrandData;

  const contactItems = [
    {
      emoji: "📍",
      label: "Visit Us",
      value: contact.address,
      link: `https://maps.google.com?q=${encodeURIComponent(contact.address)}`,
    },
    {
      emoji: "📞",
      label: "Call Us",
      value: contact.phone,
      link: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    {
      emoji: "🕐",
      label: "Working Hours",
      value: contact.workingDays,
      link: null,
    },
    {
      emoji: "💬",
      label: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/2349066835891",
    },
  ];

  return (
    <section id="contact" className="bg-[#FFF9FB] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#D4527E] text-xs font-semibold tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#3D0A1E] mt-2">
            Let's Talk Cake
          </h2>
          <p className="text-[#6B2042]/60 mt-3 text-sm max-w-md mx-auto">
            {contact.shortDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map((item) => (
              <div key={item.label}>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4 bg-white border border-[#FFC0CB]/30 hover:border-[#D4527E]/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 block"
                  >
                    <span className="text-2xl mt-0.5">{item.emoji}</span>
                    <div>
                      <p className="text-[8px] font-semibold tracking-widest uppercase text-[#D4527E]/70 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-[#3D0A1E] group-hover:text-[#D4527E] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 bg-white border border-[#FFC0CB]/30 rounded-2xl p-5 shadow-sm">
                    <span className="text-2xl mt-0.5">{item.emoji}</span>
                    <div>
                      <p className="text-[8px] font-semibold tracking-widest uppercase text-[#D4527E]/70 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-[#3D0A1E]">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Message Box */}
          <div className="bg-white rounded-3xl p-8 border border-[#FFC0CB]/30 shadow-sm">
            <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#3D0A1E] mb-6">
              Send a Message
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-[#6B2042]/70 tracking-wide uppercase block mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-[#FFC0CB]/40 rounded-xl px-4 py-2.5 text-sm text-[#3D0A1E] focus:outline-none focus:border-[#D4527E] transition-colors bg-[#FFF9FB]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-[#6B2042]/70 tracking-wide uppercase block mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+234..."
                    className="w-full border border-[#FFC0CB]/40 rounded-xl px-4 py-2.5 text-sm text-[#3D0A1E] focus:outline-none focus:border-[#D4527E] transition-colors bg-[#FFF9FB]"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] font-semibold text-[#6B2042]/70 tracking-wide uppercase block mb-1.5">
                  What are you ordering?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday cake for 50 people"
                  className="w-full border border-[#FFC0CB]/40 rounded-xl px-4 py-2.5 text-sm text-[#3D0A1E] focus:outline-none focus:border-[#D4527E] transition-colors bg-[#FFF9FB]"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-[#6B2042]/70 tracking-wide uppercase block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your order..."
                  className="w-full border border-[#FFC0CB]/40 rounded-xl px-4 py-2.5 text-sm text-[#3D0A1E] focus:outline-none focus:border-[#D4527E] transition-colors bg-[#FFF9FB] resize-none"
                />
              </div>
              <a
                href={`https://wa.me/2349066835891?text=Hello Biana Cakes! I'd like to place an order.`}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-[#D4527E] text-white font-bold py-3 rounded-xl hover:bg-[#B8395F] transition-colors text-sm shadow-md"
              >
                Send via WhatsApp 💬
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
