import { Link } from "react-router-dom";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="mt-44 mb-36 relative w-full overflow-x-clip">
      {/* Top soft wash */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-x-0 top-0 h-[60%] blur-[90px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(125,69,150,0.14), transparent)",
          }}
        />
      </div>

      {/* Outer glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden rounded-[44px]">
        <div
          className="absolute -inset-1 blur-2xl opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(42,237,243,0.20), rgba(125,69,150,0.25), rgba(124,58,237,0.18))",
          }}
        />
      </div>

      <div className="relative bg-[#0f0b1d]/75 backdrop-blur-3xl border border-white/10 rounded-[44px] p-8 sm:p-10 md:p-16 shadow-[0_0_90px_rgba(125,69,150,0.18)] overflow-hidden">
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-80 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #2aedf3, #7d4596, #7c3aed)",
          }}
        />

        <div className="relative">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-tight break-words bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Why Choose Zora Global AI
            </h2>

            <p className="mt-5 md:mt-6 text-white/75 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-1">
              Enterprise-grade engineering, AI acceleration, and consulting
              discipline delivered with speed, security, and measurable
              outcomes.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "48 Services in 48 Hours",
                desc: "Rapid execution powered by automation frameworks, enabling faster delivery without compromising quality.",
              },
              {
                title: "Enterprise Architecture",
                desc: "Systems designed for scalability, security, performance, and long-term maintainability across industries.",
              },
              {
                title: "AI + Business Strategy",
                desc: "We connect AI engineering with business objectives to deliver transformation that drives measurable value.",
              },
              {
                title: "Security & Governance",
                desc: "Responsible AI, compliance readiness, and secure-by-design practices embedded into every solution.",
              },
              {
                title: "End-to-End Delivery",
                desc: "From discovery and design to deployment and optimization — one partner for the complete lifecycle.",
              },
              {
                title: "Long-Term Partnership",
                desc: "We build relationships, not just projects — supporting teams as systems evolve and scale.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group overflow-visible">
                <div
                  className="absolute -inset-1 rounded-[28px] blur-xl opacity-25 group-hover:opacity-55 transition pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(42,237,243,0.55), rgba(125,69,150,0.55), rgba(124,58,237,0.45))",
                  }}
                />

                <div className="relative bg-[#0f0b1d]/55 border border-white/10 backdrop-blur-xl rounded-[28px] p-7 sm:p-8 transform group-hover:-translate-y-2 transition duration-500 overflow-hidden">
                  <h3 className="text-lg sm:text-xl font-serif font-extrabold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>

                  <p className="text-white/75 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  <div
                    className="mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #2aedf3, #7d4596, #7c3aed)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-serif font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Ready to accelerate your transformation?
              </h3>
              <p className="text-white/75 mt-2">
                Explore our services or book a consultation with our experts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* ✅ WHITE BORDER BUTTON */}
              <div className="inline-flex rounded-2xl p-[2px] bg-white/95 shadow-[0_0_18px_rgba(255,255,255,0.25)] w-full sm:w-auto">
                <Link
                  to="/services"
                  className="relative px-6 py-3 rounded-2xl font-semibold group overflow-hidden w-full text-center"
                >
                  <span
                    className="absolute inset-0 blur-lg opacity-60 group-hover:opacity-100 transition"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(147,51,234,0.9), rgba(124,58,237,0.9), rgba(109,40,217,0.9))",
                    }}
                  />
                  <span
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #9333ea 0%, #7c3aed 55%, #6d28d9 100%)",
                    }}
                  />
                  <span className="relative z-10 text-white">
                    Explore Services
                  </span>
                </Link>
              </div>

              <Link
                to="/book-appointment"
                className="px-6 py-3 rounded-2xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition w-full sm:w-auto text-center"
              >
                Book Appointment →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
