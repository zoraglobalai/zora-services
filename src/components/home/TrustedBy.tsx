import React from "react";

const TRUSTED_BY = [
  "Digital Innovators",
  "Global Finance",
  "Healthcare Systems",
  "Smart Manufacturing",
  "E-Commerce Leaders",
  "SaaS Platforms",
  "Data-Driven Enterprises",
  "Logistics Networks",
  "Cybersecurity Organizations",
  "Business Consultants",
  "Financial Operations Teams",
  "Growing Startups",
  "Corporate Enterprises",
  "Marketing Innovators",
  "Creative Brands",
  "HR & Workforce Leaders",
  "Accounting Professionals",
  "Strategy-Driven Organizations",
  "Service-Based Businesses",
];

const TrustedBy: React.FC = () => {
  const items = [...TRUSTED_BY, ...TRUSTED_BY];
  const itemsRowTwo = [...TRUSTED_BY.slice(8), ...TRUSTED_BY.slice(0, 8), ...TRUSTED_BY.slice(8), ...TRUSTED_BY.slice(0, 8)];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden isolate bg-transparent">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(67,56,202,0.16),transparent_58%),radial-gradient(circle_at_80%_75%,rgba(124,58,237,0.14),transparent_58%)]" />
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-indigo-700/12 rounded-full blur-[130px]" />
        <div className="absolute -bottom-28 right-0 w-[420px] h-[420px] bg-purple-800/12 rounded-full blur-[130px]" />
      </div>

      {/* ✅ Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-purple-400 mb-10">
          Trusted By Forward-Thinking Enterprises
        </h2>

        <p className="text-gray-200/85 max-w-3xl mx-auto mb-9 leading-snug font-serif text-lg sm:text-xl">
          Teams that value reliability, security, and scalable engineering choose
          us to build systems that grow with their business.
        </p>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:[mask-image:none] lg:[-webkit-mask-image:none]">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#010409] to-transparent z-10 lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#010409] to-transparent z-10 lg:hidden" />

          <div
            className="
              flex w-max gap-8 lg:gap-12 px-0
              [animation:zora-marquee-left_45s_linear_infinite]
              hover:[animation-play-state:paused]
            "
          >
            {items.map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="
                  px-6 py-3.5 lg:px-9 lg:py-5 rounded-full
                  border border-blue-900/40
                  bg-[#0e1626]/70
                  text-blue-100
                  font-semibold text-base lg:text-lg tracking-wide
                  whitespace-nowrap
                  hover:border-[#2aedf3]/55
                  transition-colors duration-300
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:[mask-image:none] lg:[-webkit-mask-image:none]">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#010409] to-transparent z-10 lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#010409] to-transparent z-10 lg:hidden" />

          <div className="flex w-max gap-8 lg:gap-12 px-0 [animation:zora-marquee-right_50s_linear_infinite] hover:[animation-play-state:paused]">
            {itemsRowTwo.map((item, idx) => (
              <div
                key={`${item}-row2-${idx}`}
                className="
                  px-6 py-3.5 lg:px-9 lg:py-5 rounded-full
                  border border-blue-900/40
                  bg-[#0e1626]/70
                  text-blue-100
                  font-semibold text-base lg:text-lg tracking-wide
                  whitespace-nowrap
                  hover:border-[#2aedf3]/55
                  transition-colors duration-300
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes zora-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes zora-marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
