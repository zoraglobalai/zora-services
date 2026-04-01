import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IT_SERVICE_CATEGORIES } from "../../../data/itServicesData";
import PageSEO from "../../../components/PageSEO";

const ITServices: React.FC = () => {
  const navigate = useNavigate();

  const imageMap: Record<string, string> = {
    "website-web-application-services": "/it-hero/website.jpg",
    "mobile-application-development": "/it-hero/android.jpg",
    "ai-automation-solutions": "/it-hero/aiot.jpg",
    "custom-enterprise-software": "/it-hero/custom-software.jpg",
    "cloud-infrastructure-services": "/it-hero/infrastructure.jpg",
    "cybersecurity-solutions": "/it-hero/data-protection.jpg",
    "staff-augmentation-it-consulting": "/it-hero/integrations.jpg",
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, []);

  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-0">
      <PageSEO
        title="IT Services — Web, Mobile, AI, Cloud & Cybersecurity | Zora Global AI"
        description="Expert IT services including website development, mobile apps, AI automation, cloud infrastructure, custom enterprise software, and cybersecurity solutions."
        canonical="/services/it"
      />
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-60 -left-60 w-[800px] h-[800px] bg-[#7d4596]/30 blur-[180px] rounded-full" />
        <div className="absolute -bottom-60 -right-60 w-[800px] h-[800px] bg-[#2aedf3]/20 blur-[180px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:80px_80px]"
        />
      </div>

      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-[#2aedf3] to-[#7d4596] bg-clip-text text-transparent">
              IT Services
            </span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
            Explore enterprise-grade solutions designed for scalability,
            performance, and intelligent automation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {IT_SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeSlug === cat.slug;

            return (
              <div
                key={cat.slug}
                className={[
                  "relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-br from-[#7d4596]/40 to-[#2aedf3]/30 border border-[#2aedf3]"
                    : "bg-white/5 border border-white/10 hover:border-[#7d4596]/60",
                ].join(" ")}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-black/30">
                  <img
                    src={imageMap[cat.slug] || "/it-hero/website.jpg"}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 sm:p-9 md:p-10">
                  <h3
                    className={[
                      "text-2xl font-bold mb-4",
                      isActive
                        ? "text-[#2aedf3]"
                        : "bg-gradient-to-r from-[#2aedf3] to-[#7d4596] bg-clip-text text-transparent",
                    ].join(" ")}
                  >
                    {cat.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {cat.desc}
                  </p>

                  <button
                    onClick={() => {
                      setActiveSlug(cat.slug);
                      navigate(`/services/it/${cat.slug}`);
                    }}
                    className={[
                      "mt-8 px-7 py-3 rounded-full font-semibold transition-all duration-300 border border-white",
                      isActive
                        ? "bg-gradient-to-r from-[#2aedf3] to-[#7d4596] text-black"
                        : "bg-white/10 text-[#2aedf3] hover:bg-[#7d4596]/30",
                    ].join(" ")}
                  >
                    View more →
                  </button>

                  <div
                    className={[
                      "mt-6 h-[2px] transition-all duration-500",
                      isActive
                        ? "w-full bg-gradient-to-r from-[#2aedf3] to-[#7d4596]"
                        : "w-0",
                    ].join(" ")}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2aedf3] to-[#7d4596] bg-clip-text text-transparent">
            Built for Enterprise Innovation
          </h2>

          <button
            onClick={() => navigate("/book-appointment")}
            className="mt-8 px-8 py-3 rounded-full font-semibold
            bg-gradient-to-r from-[#2aedf3] to-[#7d4596]
            text-black hover:scale-105 transition"
          >
            Book Appointment →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITServices;
