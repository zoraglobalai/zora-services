import React from "react";
import { Link } from "react-router-dom";
import FloatingLines from "../FloatingLines";

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden">
      {/* ✅ FULLSCREEN ANIMATION LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full will-change-transform">
          <FloatingLines
            linesGradient={["#E945F5", "#2F4BC0", "#E945F5"]}
            animationSpeed={1}
            interactive
            bendRadius={5}
            bendStrength={-0.5}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>

        {/* soft overlay */}
        <div className="absolute inset-0 bg-[#140a28]/40 pointer-events-none" />
      </div>

      <div className="absolute inset-0 z-10 flex justify-center pointer-events-none">
        <div
          className="w-[980px] h-[540px] blur-[150px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(42,237,243,0.14), transparent 65%)",
          }}
        />
      </div>

      {/* ✅ CONTENT */}
      <div className="relative z-20 px-6 max-w-6xl mx-auto">
        {/* ✅ HEADING */}
        <h1
          className="
            hero-heading mx-auto
            max-w-[90vw] sm:max-w-[18ch]
            text-[1.95rem] sm:text-5xl md:text-6xl lg:text-7xl
            mt-20 sm:mt-10 md:mt-12
            leading-[1.5] sm:leading-[1.08] md:leading-[1.04]
            font-serif font-semibold text-center tracking-tight
            bg-gradient-to-r from-violet-300 via-violet-500 to-indigo-700 bg-clip-text text-transparent
            [text-shadow:0_0_24px_rgba(76,29,149,0.25)]
            transition-all duration-[400ms] ease-in-out
            sm:hover:scale-[1.02] sm:hover:brightness-110
            will-change-transform
          "
        >
          Redefining Intelligence
        </h1>

        <p className="mt-8 text-white/80 text-xl max-w-4xl mx-auto leading-relaxed">
          Zora Global AI engineers intelligent digital ecosystems that merge
          artificial intelligence, cloud infrastructure, and enterprise strategy
          into one seamless transformation platform.
        </p>

        {/* ✅ BUTTON WITH WHITE OUTER SURROUND */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          {/* white outer border layer */}
          <div className="inline-flex rounded-[18px] p-[2px] bg-white/95 shadow-[0_0_20px_rgba(255,255,255,0.25)]">
            <Link
              to="/services"
              className="relative px-10 py-4 rounded-2xl font-semibold group overflow-hidden"
            >
              {/* glow */}
              <span
                className="absolute inset-0 blur-lg opacity-60 group-hover:opacity-95 transition"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(59,130,246,0.9), rgba(99,102,241,0.9), rgba(147,51,234,0.9))",
                }}
              />

              {/* gradient button */}
              <span
                className="absolute inset-0 rounded-2xl"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #3b82f6 0%, #6366f1 55%, #9333ea 100%)",
                }}
              />

              {/* text */}
              <span className="relative z-10 text-white">
                Explore Services
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
