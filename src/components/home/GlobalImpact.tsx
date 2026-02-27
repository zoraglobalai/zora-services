// src/components/home/GlobalImpact.tsx
import React from "react";
import Counter from "./Counter";

const GlobalImpact: React.FC = () => {
  const impactMetrics = [
    { id: 1, target: 850, suffix: "+", label: "Projects Delivered" },
    { id: 2, target: 900, suffix: "+", label: "Clients" },
    { id: 3, target: 45, suffix: "+", label: "Countries" },
    { id: 4, target: 2015, suffix: "", label: "Established" },
    { id: 5, target: 11, suffix: "+", label: "Years of Excellence" },
    { id: 6, target: 20, suffix: "+", label: "Ongoing Projects" },
  ];

  const valuePoints = [
    "Enterprise-grade architecture designed for scalability, resilience, and security.",
    "AI-powered automation and analytics that improve operational efficiency and accelerate growth.",
    "Cloud-native and future-ready platforms enabling global collaboration and digital expansion.",
  ];

  return (
    <section
      className="
        relative bg-transparent text-white overflow-hidden isolate
        mt-0
        pt-2 sm:pt-4 md:pt-6
        pb-20 sm:pb-24 md:pb-28
      "
    >
      {/* ================= BACKGROUND (CLIPPED + SAFE) ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(67,56,202,0.18),transparent_58%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.16),transparent_58%)]" />
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-indigo-700/14 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-purple-800/14 rounded-full blur-[140px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ✅ LABEL */}
        <div className="mb-10 lg:mb-12 text-center lg:text-left">
          <span className="inline-block px-4 py-2 bg-indigo-900/40 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold">
            Our Global Impact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              <span className="font-serif text-white text-[1.08em]">Intelligent Digital </span>
              <span className="font-serif bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>

            <p className="mt-5 sm:mt-6 text-justify text-gray-300 text-sm sm:text-lg leading-relaxed">
              Zora Global Technologies Pvt Ltd delivers AI-driven software,
              enterprise platforms, and scalable digital transformation solutions
              powered by intelligent automation frameworks enabling rapid enterprise
              innovation.
            </p>

            <p className="mt-4 text-justify text-gray-200 text-sm sm:text-lg leading-relaxed font-semibold">
              Zora Global AI Technologies provides{" "}
              <span className="text-white font-extrabold">48+ services</span> within{" "}
              <span className="text-white font-extrabold">48 hours</span> using{" "}
              <span className="text-white font-extrabold">AI automation</span>.
            </p>

            <div className="mt-6 sm:mt-7 space-y-3 sm:space-y-4">
              {valuePoints.map((text, idx) => (
                <p key={idx} className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {impactMetrics.map((metric) => (
                <div key={metric.id} className="relative group">
                  <div className="relative overflow-hidden rounded-2xl p-4 sm:p-6 min-h-[120px] sm:min-h-[145px] flex flex-col items-center justify-center text-center border border-blue-900/40 bg-[#0e1626]/70 backdrop-blur-sm transition-all duration-300 transform-gpu group-hover:border-[#2aedf3]/55 group-hover:-translate-y-1 group-hover:shadow-[0_16px_34px_rgba(42,237,243,0.18)]">
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/0 to-cyan-200/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute -left-16 top-0 h-full w-14 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                    <p className="relative text-3xl sm:text-4xl font-black text-blue-100 leading-none transition duration-300 group-hover:text-cyan-100">
                      <Counter target={metric.target} suffix={metric.suffix} startFrom={1} />
                    </p>
                    <h3 className="relative mt-2 text-sm sm:text-base font-semibold text-blue-100/90 leading-snug transition duration-300 group-hover:text-cyan-100">
                      {metric.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;
