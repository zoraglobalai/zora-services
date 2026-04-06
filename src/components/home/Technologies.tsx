import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import awsImage from "../../assets/amazonwebservice.webp";
import azureImage from "../../assets/microsoftazure.webp";
import gcpImage from "../../assets/googlecloudplatform.webp";
import firebaseImage from "../../assets/firebase.webp";

const TECH_STACK = [
  { name: "Amazon Web Services", image: awsImage },
  { name: "Microsoft Azure", image: azureImage },
  { name: "Google Cloud Platform", image: gcpImage },
  { name: "Firebase", image: firebaseImage },
];

const Technologies: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const tintY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden isolate"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-16 bg-gradient-to-b from-[#020010] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-16 bg-gradient-to-t from-[#020010] to-transparent" />

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/backgrounds/technologies-bg.webp')",
          y: bgY,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#020010]/45" />

      {/* Glow */}
      <motion.div
        className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen opacity-70 will-change-transform"
        style={{
          y: glowY,
          background:
            "radial-gradient(circle at 55% 55%, rgba(255,255,255,0.20), transparent 55%)",
        }}
      />

      {/* Brand Tint */}
      <motion.div
        className="absolute inset-0 z-[3] pointer-events-none opacity-100 will-change-transform"
        style={{
          y: tintY,
          background:
            "radial-gradient(circle at 18% 22%, rgba(125,69,150,0.45), transparent 55%)," +
            "radial-gradient(circle at 85% 70%, rgba(42,237,243,0.35), transparent 60%)," +
            "linear-gradient(to bottom, rgba(2,0,16,0.15), rgba(2,0,16,0.55))",
        }}
      />

      {/* Depth */}
      <div className="absolute inset-0 z-[4] pointer-events-none backdrop-blur-[0.6px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* ✅ CHANGED TO WHITE */}
        <h2 className="text-[clamp(1.2rem,6vw,1.65rem)] sm:text-4xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          <span className="block sm:hidden">
            <span className="block whitespace-nowrap">Built on a foundation</span>
            <span className="block whitespace-nowrap">of trusted technologies</span>
          </span>
          <span className="hidden sm:inline">Built on a foundation of trusted technologies</span>
        </h2>

        <p className="text-gray-200/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          We use proven cloud platforms and dependable tools to deliver secure,
          scalable and future-ready digital solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {TECH_STACK.map((tool) => (
            <div
              key={tool.name}
              className="
                group relative isolate
                rounded-[26px]
                overflow-hidden
                h-[260px] sm:h-[300px]
                p-0
                flex flex-col
                hover:-translate-y-1
                transition-all duration-300
                max-w-[280px] sm:max-w-[300px]
                mx-auto
                w-full
              "
            >
              <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[26px] border border-indigo-300/20">
                <div className="relative h-[180px] sm:h-[210px] overflow-hidden rounded-t-[26px]">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="absolute inset-0 h-full w-full rounded-t-[26px] object-cover opacity-68 brightness-95 contrast-100 saturate-95 transition-all duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 rounded-t-[26px] bg-gradient-to-t from-[#020010]/42 via-[#0a041f]/22 to-transparent" />
                  <div className="absolute inset-0 rounded-t-[26px] bg-white/2 mix-blend-screen" />
                  <div className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                </div>

                <div className="relative -mt-px flex h-[80px] sm:h-[90px] items-center justify-center border-t border-indigo-300/25 bg-[#070b18]/65 px-4 text-center backdrop-blur-md">
                  <p className="text-lg sm:text-xl text-indigo-100 font-serif font-semibold tracking-wide leading-snug transition-all duration-300 group-hover:text-violet-100 group-hover:drop-shadow-[0_0_16px_rgba(196,181,253,0.65)]">
                    {tool.name}
                  </p>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(99,102,241,0.30), 0 0 60px rgba(79,70,229,0.28)",
                }}
              />
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300/80 to-transparent scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              <div className="pointer-events-none absolute -inset-3 rounded-[26px] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 35%, rgba(129,140,248,0.24), transparent 65%)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
