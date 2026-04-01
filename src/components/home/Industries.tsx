import { motion, type Variants } from "framer-motion";

const Industries: React.FC = () => {
  const industries = [
    {
      step: "01",
      title: "Banking & Financial Services",
      desc: "Secure digital products and workflow automation",
    },
    {
      step: "02",
      title: "Healthcare & Life Sciences",
      desc: "Compliant platforms and patient-centered experiences",
    },
    {
      step: "03",
      title: "Manufacturing & Supply Chain",
      desc: "Operational visibility and process optimization",
    },
    {
      step: "04",
      title: "Retail & E-Commerce",
      desc: "Conversion-focused commerce and customer journeys",
    },
    {
      step: "05",
      title: "Telecommunications",
      desc: "Scalable systems for service delivery and support",
    },
    {
      step: "06",
      title: "Enterprise SaaS",
      desc: "Reliable multi-tenant products built for growth",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden isolate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-300/25 text-purple-200 font-medium">
              Industries
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.32)]"
          >
            Industries We Serve
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
            Focused domain expertise and AI-first execution across high-impact sectors
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden lg:block w-px -translate-x-1/2 bg-gradient-to-b from-purple-900/30 via-purple-400/45 to-white/40" />

          <div className="relative space-y-8 md:space-y-10">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -90 : 90 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.35 }}
                className="relative lg:grid lg:grid-cols-2 lg:items-center"
              >
                <div
                  className={`hidden lg:block ${
                    i % 2 === 0 ? "lg:pr-14" : "lg:col-start-2 lg:pl-14"
                  }`}
                >
                  <div
                    className={`relative group rounded-2xl w-full max-w-[500px] ${
                      i % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/30 via-violet-300/10 to-purple-600/25 opacity-40 transition duration-500 group-hover:opacity-100" />
                    <div className="relative overflow-hidden p-4 sm:p-5 md:p-6 bg-gradient-to-br from-violet-700/85 via-violet-600/70 to-violet-500/45 border border-purple-200/25 rounded-2xl backdrop-blur-[2px] shadow-[0_10px_30px_rgba(91,33,182,0.3)] transition-all duration-500 transform-gpu group-hover:from-violet-600/90 group-hover:via-violet-500/78 group-hover:to-purple-500/56 group-hover:border-purple-200/45 group-hover:-translate-y-1 group-hover:shadow-[0_18px_44px_rgba(139,92,246,0.38)] group-active:scale-[0.99]">
                      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
                      <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-500 group-hover:text-purple-100">
                        {industry.title}
                      </h3>
                      <p className="mt-3 text-base text-purple-100/90 transition-colors duration-500 group-hover:text-white">
                        {industry.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:hidden flex items-start gap-4">
                  <div className="relative w-8 shrink-0 flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-white text-[#1a1030] text-xs font-bold flex items-center justify-center border border-[#010409]">
                      {industry.step}
                    </div>
                    {i !== industries.length - 1 && (
                      <div className="absolute top-9 bottom-[-2.25rem] w-px bg-gradient-to-b from-purple-400/60 to-white/20" />
                    )}
                  </div>
                  <div className="relative group rounded-2xl w-full pb-8">
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/30 via-violet-300/10 to-purple-600/25 opacity-40 transition duration-500 group-hover:opacity-100" />
                    <div className="relative overflow-hidden p-4 sm:p-5 bg-gradient-to-br from-violet-700/85 via-violet-600/70 to-violet-500/45 border border-purple-200/25 rounded-2xl backdrop-blur-[2px] shadow-[0_10px_30px_rgba(91,33,182,0.3)] transition-all duration-500 transform-gpu group-hover:from-violet-600/90 group-hover:via-violet-500/78 group-hover:to-purple-500/56 group-hover:border-purple-200/45 group-active:scale-[0.99]">
                      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
                      <h3 className="text-lg sm:text-xl font-bold text-white transition-colors duration-500 group-hover:text-purple-100">
                        {industry.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-purple-100/90 transition-colors duration-500 group-hover:text-white">
                        {industry.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-white text-[#1a1030] text-sm font-bold flex items-center justify-center border-2 border-[#010409] shadow-[0_0_0_6px_rgba(192,132,252,0.18)]">
                    {industry.step}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
