import React from "react";

const PARTNER_LOGOS = [
  "/clients/acer-1.png",
  "/clients/asus-1.png",
  "/clients/auo-6.png",
  "/clients/boe-5.png",
  "/clients/ceretonic.png",
  "/clients/ck-telecom-1.png",
  "/clients/foxconn-5.png",
  "/clients/haei.png",
  "/clients/hisense-6.png",
  "/clients/huawei-1.png",
  "/clients/innolux-2.png",
  "/clients/inventec-2.png",
  "/clients/lenovo-6-1.png",
  "/clients/lg-1.png",
  "/clients/oppo-1.png",
  "/clients/raken-6.png",
  "/clients/redmi-1.png",
  "/clients/samsung-1.png",
  "/clients/sony-1.png",
  "/clients/tcl-5.png",
  "/clients/tvp.png",
];

const ClientLogos: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 px-0 overflow-hidden isolate bg-gradient-to-br from-[#05010d] via-[#120424] to-[#020008]">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(67,56,202,0.18),transparent_58%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.16),transparent_58%)]" />
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-indigo-700/12 rounded-full blur-[130px]" />
        <div className="absolute -bottom-28 right-0 w-[420px] h-[420px] bg-purple-800/12 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 w-full text-center">
        <p className="text-indigo-100/90 text-lg sm:text-2xl font-bold tracking-[0.08em] uppercase mb-6 px-4">
          Trusted by Industry Leaders
        </p>
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-32 sm:h-36 -translate-y-1/2 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.15) 38%, rgba(255,255,255,0.07) 58%, rgba(255,255,255,0) 80%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          />
          <div className="relative z-10 flex w-max items-center gap-5 sm:gap-8 brand-marquee hover:[animation-play-state:paused]">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="group relative w-48 sm:w-[250px] h-24 sm:h-28 flex items-center justify-center px-2 sm:px-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="pointer-events-none absolute inset-x-8 sm:inset-x-10 inset-y-6 rounded-full bg-violet-300/35 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={src}
                  alt={`brand-logo-${idx}`}
                  loading="lazy"
                  className="relative max-h-20 sm:max-h-24 max-w-full object-contain opacity-95 brightness-110 contrast-110 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:drop-shadow-[0_8px_22px_rgba(192,132,252,0.55)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .brand-marquee {
          animation: brandMarquee 40s linear infinite;
        }
        @keyframes brandMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
