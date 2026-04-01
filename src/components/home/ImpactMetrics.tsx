import Counter from "./Counter";

const ImpactMetrics: React.FC = () => {
  const metrics = [
    { target: 40, suffix: "%", label: "Operational Cost Reduction" },
    { target: 3, suffix: "x", label: "Faster Decision Making" },
    { target: 99.9, suffix: "%", label: "Platform Uptime" },
    { target: 60, suffix: "%", label: "Customer Satisfaction Increase" },
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#060216] via-[#0b031f] to-[#12042a]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.32)] mb-16">
          Measurable Business Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="group relative">
              <div className="pointer-events-none absolute -inset-[1.5px] rounded-[20px] opacity-55 blur-[1px] bg-[conic-gradient(from_0deg,rgba(59,130,246,0.85),rgba(99,102,241,0.78),rgba(168,85,247,0.82),rgba(34,211,238,0.78),rgba(59,130,246,0.85))]" />
              <div className="pointer-events-none absolute -inset-[1px] rounded-[20px] bg-gradient-to-b from-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative p-8 lg:p-10 min-h-[220px] rounded-[20px] border border-indigo-200/25 bg-gradient-to-br from-[#0f0b24]/92 via-[#141b34]/88 to-[#1a1540]/90 shadow-[0_16px_40px_rgba(7,10,28,0.52)] transition-all duration-500 will-change-transform group-hover:-translate-y-1.5 group-hover:border-cyan-300/45 group-hover:shadow-[0_24px_54px_rgba(34,211,238,0.18)]">
                <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/10 via-transparent to-indigo-200/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <h3 className="relative text-4xl lg:text-5xl font-bold text-blue-300 mb-3 transition-colors duration-300 group-hover:text-cyan-200">
                  <Counter target={metric.target} suffix={metric.suffix} />
                </h3>
                <p className="relative text-gray-300/90 text-base lg:text-lg leading-snug">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
