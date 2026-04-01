import { motion, type Variants } from "framer-motion";

const EnterpriseDifferentiators: React.FC = () => {
  const differentiators = [
    {
      title: "Board-Level AI Strategy",
      desc: "We align artificial intelligence initiatives with executive business outcomes",
      image: "/it-hero/aiot.jpg",
      tag: "Strategy",
    },
    {
      title: "Security-First Architecture",
      desc: "Built with enterprise-grade compliance, data encryption and infrastructure resilience",
      image: "/it-hero/data-protection.jpg",
      tag: "Security",
    },
    {
      title: "Scalable AI Infrastructure",
      desc: "Cloud-native, modular systems designed for long-term digital growth",
      image: "/it-hero/cloud-architecture.jpg",
      tag: "Scalability",
    },
    {
      title: "Data-Driven Decision Intelligence",
      desc: "Real-time insights and predictive analytics that improve strategic and operational outcomes",
      image: "/it-hero/ml.jpg",
      tag: "Insights",
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 26, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden isolate bg-[#020010] py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(67,56,202,0.34),transparent_52%),radial-gradient(circle_at_78%_75%,rgba(124,58,237,0.30),transparent_52%)]" />
        <div className="absolute -top-28 -left-20 w-[440px] h-[440px] bg-indigo-700/26 rounded-full blur-[130px]" />
        <div className="absolute -bottom-24 right-0 w-[420px] h-[420px] bg-purple-800/24 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,0,16,0.15),rgba(2,0,16,0.6))]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-300/30 bg-purple-500/10 text-purple-200 text-xs sm:text-sm font-medium mb-4 sm:mb-5">
          Enterprise Advantage
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.32)] mb-4 sm:mb-5"
        >
          Why Enterprises Choose Us
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-purple-100/80 text-sm sm:text-lg leading-relaxed mb-10 sm:mb-14 px-1"
        >
          Built for high-stakes environments where reliability, security and long-term scalability are non-negotiable
        </motion.p>

        <div className="relative mt-2 sm:mt-4 max-w-5xl mx-auto">
          <div className="pointer-events-none absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/0 via-indigo-300/60 to-indigo-400/0" />
          <div className="space-y-2">
            {differentiators.map((item, idx) => (
              <motion.article
                key={item.title}
                variants={itemVariants}
                className="group relative pl-16 sm:pl-24 pr-4 sm:pr-6 py-6 sm:py-7 border-b border-white/10 transition-all duration-500 hover:translate-x-1 hover:-translate-y-0.5"
              >
                <span className="absolute left-[8px] sm:left-[18px] top-8 sm:top-9 h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] rounded-full border border-indigo-100/70 bg-gradient-to-br from-indigo-400 to-purple-400 shadow-[0_0_0_4px_rgba(99,102,241,0.18)] transition-all duration-500 group-hover:shadow-[0_0_0_6px_rgba(129,140,248,0.22),0_0_18px_rgba(168,85,247,0.55)] group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-y-3 left-10 sm:left-14 right-3 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-violet-400/10 to-cyan-300/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <span className="text-[11px] sm:text-xs tracking-[0.16em] uppercase text-indigo-200/80">
                        {item.tag}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-indigo-300/45 to-transparent" />
                      <span className="text-[11px] sm:text-xs text-indigo-100/60">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-semibold text-white transition-all duration-400 group-hover:text-indigo-100 group-hover:tracking-[0.01em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-purple-100/80 transition-colors duration-400 group-hover:text-purple-100">
                      {item.desc}
                    </p>
                    <div className="mt-4 h-px w-0 bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 transition-all duration-500 group-hover:w-full" />
                  </div>

                  <div className="hidden md:block relative w-40 h-24 overflow-hidden rounded-[999px] border border-white/20 shrink-0 transition-all duration-500 group-hover:border-indigo-200/60 group-hover:shadow-[0_0_28px_rgba(129,140,248,0.35)]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[0.6deg]" />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0618]/20 to-[#160a2a]/55" />
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnterpriseDifferentiators;
