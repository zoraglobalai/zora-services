import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageSEO from "../../../components/PageSEO";

const services = [
  {
    title: "Business & Strategy Consulting",
    desc: "Strategic advisory services to optimize operations, efficiency and long-term growth.",
    slug: "business-strategy-consulting",
  },
  {
    title: "Branding & Creative Services",
    desc: "Creative solutions that strengthen brand identity and market presence.",
    slug: "branding-creative-services",
  },
  {
    title: "Accounting & Financial Operations",
    desc: "Reliable financial management and operational accounting services.",
    slug: "accounting-financial-operations",
  },
  {
    title: "Digital Marketing Services",
    desc: "Performance-driven digital marketing and growth strategies.",
    slug: "digital-marketing-services",
  },
  {
    title: "Staff Augmentation & Workforce Solutions",
    desc: "Flexible staffing solutions to help businesses scale non-IT teams quickly with qualified professionals.",
    slug: "staff-augmentation-workforce-solutions",
  },
];

const imageMap: Record<string, string> = {
  "business-strategy-consulting": "/non-it-hero/business-process-optimisation.webp",
  "branding-creative-services": "/non-it-hero/brand-identity-positioning.webp",
  "accounting-financial-operations": "/non-it-hero/accounting-management.webp",
  "digital-marketing-services": "/non-it-hero/lead-generation-campaigns.webp",
  "staff-augmentation-workforce-solutions": "/non-it-hero/non-it-staff-augmentation.webp",
};

const NonITServices: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <section className="relative bg-[#050510] text-white min-h-screen overflow-hidden">
      <PageSEO
        title="Business & Marketing Services — Strategy, Branding & Finance | Zora Global AI"
        description="Business strategy consulting, staff augmentation, branding, digital marketing, accounting and financial operations services for growing companies."
        canonical="/services/non-it"
      />
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[700px] h-[700px] bg-indigo-700 opacity-30 blur-[180px] rounded-full top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-25 blur-[150px] rounded-full bottom-[-150px] right-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Background Typography */}
      <div className="absolute text-[22vw] sm:text-[18vw] font-black text-white/5 top-24 sm:top-20 left-1/2 -translate-x-1/2 select-none tracking-widest" aria-hidden="true">
        BUSINESS
      </div>

      <div className="relative max-w-7xl mx-auto pt-24 sm:pt-32 pb-24 sm:pb-32 px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 sm:mb-24 md:mb-32"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Business & Marketing Services
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Comprehensive services designed to strengthen your organization's operations, growth and market position.
          </p>

          <div className="w-24 sm:w-32 md:w-40 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto mt-6 sm:mt-8 rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500" />

              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(79,70,229,0.3)] hover:shadow-[0_0_100px_rgba(59,130,246,0.5)] transition duration-500 h-full flex flex-col">

                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-black/40">
                  <img
                    src={imageMap[service.slug]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-indigo-300 transition duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <Link
                    to={`/services/non-it/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                    border border-white
                    bg-gradient-to-r from-indigo-600 to-blue-600
                    hover:from-indigo-500 hover:to-blue-500
                    text-white font-semibold text-sm transition duration-300 w-fit"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NonITServices;
