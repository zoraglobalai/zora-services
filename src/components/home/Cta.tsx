import React from "react";
import { Link } from "react-router-dom";

const Cta: React.FC = () => {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden isolate">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-16 bg-gradient-to-b from-[#020010] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-16 bg-gradient-to-t from-[#020010] to-transparent" />

      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgrounds/cta-bg.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#020010]/45" />

      {/* Highlight boost */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.18), transparent 55%)",
        }}
      />

      {/* Brand tint overlay */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 22% 25%, rgba(125,69,150,0.45), transparent 58%)," +
            "radial-gradient(circle at 80% 55%, rgba(42,237,243,0.32), transparent 60%)," +
            "linear-gradient(to bottom, rgba(2,0,16,0.10), rgba(2,0,16,0.55))",
        }}
      />

      {/* Depth blur */}
      <div className="absolute inset-0 z-[4] pointer-events-none backdrop-blur-[0.6px]" />

      {/* ✅ Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-purple-300 mb-6 drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          Ready to Build Your Competitive Edge?
        </h2>

        <p className="text-gray-200/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tailored to your data - Enterprise-grade security - Measurable ROI from
          day one
        </p>

        <Link
          to="/services"
          className="
            group relative inline-flex sm:w-auto min-h-[40px] sm:min-h-[56px] items-center justify-center
            overflow-hidden rounded-xl px-6 sm:px-8 py-3 sm:py-4
            bg-gradient-to-r from-blue-500/85 via-indigo-500/75 to-purple-600/80
            font-sans font-semibold text-white
            border border-white/25 backdrop-blur-md
            shadow-[0_14px_38px_rgba(64,24,110,0.55),0_0_24px_rgba(168,85,247,0.25),inset_0_1px_0_rgba(255,255,255,0.35)]
            transition-all duration-300 ease-out
            sm:hover:-translate-y-[3px] sm:hover:shadow-[0_20px_48px_rgba(92,52,170,0.58),0_0_30px_rgba(168,85,247,0.34),inset_0_1px_0_rgba(255,255,255,0.45)]
            sm:hover:bg-gradient-to-r sm:hover:from-blue-500 sm:hover:via-indigo-500 sm:hover:to-violet-500
            active:scale-[0.97]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#16062d]
            will-change-transform
          "
        >
          <span className="pointer-events-none absolute inset-y-0 -left-1/2 hidden w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 sm:block sm:group-hover:translate-x-[260%]" />
          <span className="relative z-10 text-lg sm:text-xl font-bold">Explore Our Solutions</span>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
