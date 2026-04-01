import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const CoreServices: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const services = useMemo(
    () => [
      {
        id: 1,
        title: "Web & Web Applications",
        description:
          "High-performance, scalable web solutions engineered for enterprise-grade performance and security.",
        slug: "website-web-application-services",
        image: "/it-hero/website.jpg",
      },
      {
        id: 2,
        title: "Mobile Development",
        description:
          "Native and cross-platform mobile applications delivering seamless user experiences across all devices.",
        slug: "mobile-application-development",
        image: "/it-hero/android.jpg",
      },
      {
        id: 3,
        title: "AI & Automation",
        description:
          "Intelligent automation solutions leveraging AI and machine learning to optimize business operations.",
        slug: "ai-automation-solutions",
        image: "/it-hero/aiot.jpg",
      },
      {
        id: 4,
        title: "Enterprise Software",
        description:
          "Custom-built enterprise platforms designed for scalability, security, and long-term business value.",
        slug: "custom-enterprise-software",
        image: "/it-hero/crm.jpg",
      },
      {
        id: 5,
        title: "Cloud & Infrastructure",
        description:
          "Modern cloud-native solutions enabling global collaboration, flexibility, and digital expansion.",
        slug: "cloud-infrastructure-services",
        image: "/it-hero/cloud-architecture.jpg",
      },
      {
        id: 6,
        title: "Cybersecurity",
        description:
          "Enterprise-grade security solutions protecting your digital assets and ensuring data integrity.",
        slug: "cybersecurity-solutions",
        image: "/it-hero/data-protection.jpg",
      },
    ],
    []
  );

  // ✅ Horizontal-only centering (NO vertical page jump)
  const focusCard = useCallback((id: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const el = container.querySelector<HTMLElement>(`[data-id="${id}"]`);
    if (!el) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const elCenter = elRect.left + elRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;
    const delta = elCenter - containerCenter;

    container.scrollTo({
      left: container.scrollLeft + delta,
      behavior: "smooth",
    });
  }, []);

  // ✅ Toggle open/close for EVERY card
  const handleClick = (id: number) => {
    setActiveId((prev) => {
      const next = prev === id ? null : id;

      // focus only when opening (not when closing)
      if (next !== null && isInView) {
        setTimeout(() => focusCard(next), 60);
      }

      return next;
    });
  };

  // Arrow scrolling
  const scrollOneCard = (direction: "left" | "right") => {
    const currentIndex =
      activeId == null ? -1 : services.findIndex((s) => s.id === activeId);

    const nextIndex =
      direction === "right"
        ? (currentIndex + 1) % services.length
        : (currentIndex - 1 + services.length) % services.length;

    const nextId = services[nextIndex].id;
    setActiveId(nextId);

    if (isInView) focusCard(nextId);
  };

  // ✅ Detect when section is in view (so auto-scroll doesn't pull page)
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // ✅ Set first card active ONLY ONCE (fixes the close issue)
  useEffect(() => {
    if (services.length) setActiveId(services[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ AUTO SCROLL only when section is visible (3 seconds)
  useEffect(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    if (!isInView) return;

    autoTimerRef.current = setInterval(() => {
      const currentIndex =
        activeId == null ? -1 : services.findIndex((s) => s.id === activeId);

      const nextIndex = (currentIndex + 1) % services.length;
      const nextId = services[nextIndex].id;

      setActiveId(nextId);
      focusCard(nextId);
    }, 3000);

    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [activeId, services, focusCard, isInView]);

  // ✅ When user scrolls into this section the first time, center active card once
  useEffect(() => {
    if (!isInView) return;
    if (activeId == null) return;

    const t = setTimeout(() => focusCard(activeId), 80);
    return () => clearTimeout(t);
  }, [isInView, activeId, focusCard]);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
      }}
      className="
        relative bg-transparent text-white overflow-hidden w-full
        py-16 sm:py-24
      "
    >
      <div className="max-w-[92rem] mx-auto px-2 sm:px-4">
        {/* HEADER */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black text-center bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.32)]">
            IT Services &amp; Solutions
          </h2>
        </div>

        {/* ✅ Carousel */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={() => scrollOneCard("left")}
            className="absolute left-1 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Scroll left"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scrollOneCard("right")}
            className="absolute right-1 sm:right-2 md:right-3 top-1/2 -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Scroll right"
          >
            ›
          </button>

          {/* Safe area */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="
                flex gap-4 sm:gap-6
                overflow-x-auto scroll-smooth no-scrollbar
                pl-4 pr-4
                sm:pl-8 sm:pr-8
                md:pl-10 md:pr-10
              "
            >
              {services.map((service) => {
                const isActive = activeId === service.id;

                return (
                  <div
                    key={service.id}
                    data-id={service.id}
                    onClick={() => handleClick(service.id)}
                    className={`
                      relative flex-shrink-0 cursor-pointer transition-all duration-500
                      rounded-[30px] overflow-hidden
                      ${isActive ? "w-[320px] sm:w-[420px]" : "w-[220px] sm:w-[260px]"}
                    `}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[30px] blur-2xl opacity-40" />

                    <div className="relative bg-[#0a041f]/90 border border-indigo-700/40 rounded-[30px] overflow-hidden h-full">
                      <div className="h-40 sm:h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition duration-500 hover:scale-110"
                          loading="lazy"
                          draggable={false}
                        />
                      </div>

                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-indigo-300">
                          {service.title}
                        </h3>

                        {isActive && (
                          <div className="mt-3 sm:mt-4 transition-all duration-300">
                            <p className="text-gray-400 text-xs sm:text-sm">
                              {service.description}
                            </p>

                            <Link
                              to={`/services/it/${service.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="mt-4 sm:mt-5 inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg text-xs sm:text-sm font-semibold"
                            >
                              View Service →
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default CoreServices;
