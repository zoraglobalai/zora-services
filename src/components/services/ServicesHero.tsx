import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FloatingLines from "../FloatingLines";

const ServicesHero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: isMobile ? 8 : 16 }, (_, i) => ({
        id: i,
        left: `${6 + ((i * 11) % 88)}%`,
        top: `${8 + ((i * 7) % 78)}%`,
        delay: (i % 6) * 0.6,
        duration: 6 + (i % 5) * 1.4,
      })),
    [isMobile]
  );

  const heroVideoSrc = isMobile
    ? "/services/services-hero-mobile.mp4"
    : "/services/services-hero-desktop.mp4";

  return (
    <section className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden -mt-20">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        {!videoFailed ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/services/it-services.jpg"
            className="h-full w-full object-cover"
            onError={() => setVideoFailed(true)}
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/services/it-services.jpg')" }}
          />
        )}
      </div>

      {/* Base color and readability overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#04010d]/80 via-[#0e0522]/70 to-[#020108]/85" />
      <div className="absolute inset-0 z-[1] opacity-65">
        <FloatingLines
          linesGradient={["#22d3ee", "#6366f1", "#a855f7"]}
          animationSpeed={0.9}
          interactive={false}
          bendRadius={4}
          bendStrength={-0.25}
          parallax
          parallaxStrength={0.08}
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.14),transparent_45%),radial-gradient(circle_at_82%_14%,rgba(168,85,247,0.18),transparent_42%),radial-gradient(circle_at_52%_88%,rgba(99,102,241,0.16),transparent_45%)]" />
      <div className={`absolute inset-0 z-[2] bg-[rgba(10,10,30,0.6)] ${isMobile ? "backdrop-blur-sm" : "backdrop-blur-lg"}`} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-b from-transparent via-[#060212]/55 to-[#05010f]" />
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(147,197,253,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.1) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          animate={{ backgroundPosition: ["0px 0px, 0px 0px", "0px 44px, 0px 44px"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Floating particles */}
      {!prefersReducedMotion && (
        <div className="pointer-events-none absolute inset-0 z-[4]">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute h-[2px] w-[2px] rounded-full bg-cyan-200/70 shadow-[0_0_12px_rgba(34,211,238,0.65)]"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -18, 0], opacity: [0.22, 0.95, 0.22], scale: [1, 1.3, 1] }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="
              hero-heading mx-auto mb-5
              max-w-[90vw] sm:max-w-[18ch]
              text-[1.95rem] sm:text-5xl md:text-6xl lg:text-7xl
              leading-[1.5] sm:leading-[1.08] md:leading-[1.04]
              font-serif font-extrabold text-center tracking-tight
              bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent
              [text-shadow:0_0_30px_rgba(168,85,247,0.25)]
              transition-all duration-[400ms] ease-in-out
              sm:hover:scale-[1.02] sm:hover:brightness-110
              will-change-transform
            "
          >
            Advanced Service Architecture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-sm leading-relaxed tracking-[0.01em] text-purple-100/85 sm:text-lg md:text-xl"
          >
            Enterprise-grade solutions engineered for high-performance, scalable, and secure
            digital ecosystems.
          </motion.p>
        </div>
      </div>

    </section>
  );
};

export default ServicesHero;
