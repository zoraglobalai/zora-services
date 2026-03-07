// src/components/home/Hero.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aurora from "../Aurora";
import SplitText from "../SplitText";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [canSpotlight, setCanSpotlight] = useState(false);
  const [spotlightVisible, setSpotlightVisible] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const rippleIdRef = useRef(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = () => setCanSpotlight(finePointer.matches);
    onChange();
    finePointer.addEventListener("change", onChange);
    return () => finePointer.removeEventListener("change", onChange);
  }, []);

  const waveAmplitude = isMobile ? 0.72 : 1.0;
  const waveBlend = isMobile ? 0.45 : 0.55;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!canSpotlight || isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--spot-x", `${x}px`);
    e.currentTarget.style.setProperty("--spot-y", `${y}px`);
  };

  const handleRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = rippleIdRef.current++;
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => canSpotlight && setSpotlightVisible(true)}
      onMouseLeave={() => setSpotlightVisible(false)}
      className="
        relative isolate box-border w-full overflow-hidden overflow-x-clip
        h-[85vh] min-h-[85vh] sm:h-[92svh] md:h-[100svh]
        pt-0 sm:pt-[var(--nav-h,0px)]
      "
    >
      {/* Soft blend into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#120424]" />

      {/* ================= BACKGROUND ================= */}
      <div className="hero-bg-shift absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#0b0318] via-[#120424] to-[#16062d] will-change-[background-position] transition-all duration-700">
        <div className="absolute inset-0 opacity-80 hero-radial-drift will-change-transform">
          <Aurora
            colorStops={["#f5ecff", "#a855f7", "#7c3aed"]}
            blend={waveBlend}
            amplitude={waveAmplitude}
            speed={1}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.34),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(192,132,252,0.28),transparent_45%)] hero-radial-drift will-change-transform" />
        <div className="hero-orb hero-orb-a absolute -top-24 -left-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl will-change-transform" />
        <div className="hero-orb hero-orb-b absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl will-change-transform" />
        <div className="absolute inset-x-0 bottom-0 h-[36vh] opacity-60 [transform:scaleY(-1)]">
          <Aurora
            colorStops={["#f5ecff", "#a855f7", "#7c3aed"]}
            blend={waveBlend}
            amplitude={waveAmplitude}
            speed={1}
          />
        </div>
        {canSpotlight && !isMobile && (
          <div
            className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${spotlightVisible ? "opacity-100" : "opacity-0"}`}
            style={{
              background:
                "radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(129,140,248,0.16), transparent 58%)",
            }}
          />
        )}
      </div>

      {/* ✅ CONTENT WRAPPER */}
      <div
        className="
          relative z-10 w-full
          h-full md:h-[calc(100svh-var(--nav-h,0px))]
          flex items-center justify-center
          px-6 sm:px-10 py-4 sm:py-0
        "
      >
        <div className="max-w-7xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="-translate-y-1 sm:translate-y-0 -translate-x-1 sm:translate-x-0 mt-0 sm:mt-1 font-serif font-black tracking-tight leading-tight"
          >
            <SplitText
            text={"Built On Trust\nDriven by intelligence"} 
            className="
              hero-heading mx-auto 
              max-w-[90vw] sm:max-w-[18ch] 
              whitespace-pre-line 
              text-[1.78rem] sm:text-5xl md:text-6xl lg:text-7xl
              mt-20 sm:mt-10 md:mt-28 lg:mt-20
              px-0 sm:px-0
              leading-[1.5] sm:leading-[1.08] md:leading-[1.04]
              font-extrabold text-center
              bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent
              [text-shadow:0_0_30px_rgba(168,85,247,0.25)]
              transition-all duration-[400ms] ease-in-out
              sm:hover:scale-[1.02] sm:hover:brightness-110
              will-change-transform
            "
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="220px 0px"
            textAlign="center"
            showCallback
          />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.85 }}
            className="mt-4 sm:mt-6 text-purple-100/80 max-w-3xl mx-auto text-base sm:text-lg font-sans leading-relaxed transition-opacity duration-300 sm:hover:opacity-100"
          >
            Designed with reliability at the core and flexibility for the future,
            our technology evolves alongside your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMobile ? { opacity: 1, y: [0, -4, 0] } : { opacity: 1, y: 0 }}
            transition={
              isMobile
                ? { delay: 0.42, duration: 1.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
                : { delay: 0.42, duration: 0.8 }
            }
            className="mt-6 sm:mt-10"
          >
            <Link
              to="/book-appointment"
              onClick={handleRipple}
              className="
                group hero-mobile-cta relative inline-flex sm:w-auto min-h-[40px] sm:min-h-[56px] items-center justify-center
                overflow-hidden rounded-xl px-3 sm:px-8 py-3 sm:py-4
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
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="pointer-events-none absolute h-2 w-2 rounded-full bg-white/45 animate-[heroRipple_700ms_ease-out_forwards]"
                  style={{ left: ripple.x, top: ripple.y }}
                />
              ))}
              <span className="relative z-10 text-lg sm:text-xl font-bold">Start Discussion</span>
            </Link>
          </motion.div>
        </div>
      </div>
      <style>{`
        .hero-bg-shift {
          background-size: 120% 120%;
          animation: heroGradientShift 22s ease-in-out infinite alternate;
        }
        .hero-radial-drift {
          animation: heroRadialDrift 16s ease-in-out infinite alternate;
        }
        .hero-orb {
          opacity: 0.28;
          animation: heroOrbFloat 20s ease-in-out infinite;
        }
        .hero-orb-b {
          animation-delay: -8s;
          opacity: 0.2;
        }
        @keyframes heroGradientShift {
          0% { background-position: 48% 0%; }
          100% { background-position: 52% 100%; }
        }
        @keyframes heroRadialDrift {
          0% { transform: translate3d(0px, 0px, 0) scale(1); }
          100% { transform: translate3d(0px, -10px, 0) scale(1.03); }
        }
        @keyframes heroOrbFloat {
          0% { transform: translate3d(0px, 0px, 0) scale(1); }
          50% { transform: translate3d(12px, -18px, 0) scale(1.06); }
          100% { transform: translate3d(-10px, 8px, 0) scale(0.98); }
        }
        @keyframes heroRipple {
          from { transform: translate(-50%, -50%) scale(1); opacity: 0.45; }
          to { transform: translate(-50%, -50%) scale(24); opacity: 0; }
        }
        @keyframes heroMobileCtaPulse {
          0%, 100% {
            box-shadow: 0 14px 38px rgba(64,24,110,0.55), 0 0 18px rgba(168,85,247,0.22), inset 0 1px 0 rgba(255,255,255,0.35);
          }
          50% {
            box-shadow: 0 16px 42px rgba(64,24,110,0.58), 0 0 28px rgba(168,85,247,0.4), inset 0 1px 0 rgba(255,255,255,0.42);
          }
        }
        @media (max-width: 639px) {
          .hero-bg-shift,
          .hero-radial-drift,
          .hero-orb {
            animation-duration: 0.01ms;
            animation-iteration-count: 1;
          }
          .hero-mobile-cta {
            animation: heroMobileCtaPulse 2.4s ease-in-out infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-bg-shift,
          .hero-radial-drift,
          .hero-orb,
          .hero-mobile-cta {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
