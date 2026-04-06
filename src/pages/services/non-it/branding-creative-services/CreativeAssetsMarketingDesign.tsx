import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "branding-creative-services",
  title: "Branding & Creative Services",
};

const item = {
  slug: "creative-assets-marketing-design",
  title: "Creative Assets & Marketing Design",
  shortDesc:
    "High-quality creative assets for marketing, branding, UI visuals and multimedia designs.",
};

const heroImage = "/non-it-hero/creative-assets-marketing-design.webp";

const renderTechnologyIcon = (icon: string, accent: "blue" | "purple") => {
  const strokeClass =
    accent === "purple" ? "stroke-purple-200" : "stroke-blue-200";

  const commonProps = {
    className: `h-7 w-7 ${strokeClass}`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "strategy":
      return (
        <svg {...commonProps}>
          <path d="M5 18.5h14" />
          <path d="M7 15.5V10" />
          <path d="M12 15.5V6.5" />
          <path d="M17 15.5V12" />
          <path d="M6.5 9.5 12 6l5.5 5" />
        </svg>
      );
    case "marketing":
      return (
        <svg {...commonProps}>
          <path d="M4.5 14.5V9.8a1.8 1.8 0 0 1 1.8-1.8h2.1l6.9-3v14l-6.9-3H6.3a1.8 1.8 0 0 1-1.8-1.8Z" />
          <path d="M8.5 16.2 10 20" />
          <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
          <path d="M19.2 8a6 6 0 0 1 0 8" />
        </svg>
      );
    case "design":
      return (
        <svg {...commonProps}>
          <path d="m4.5 15.5 6.5-6.5 4 4 4.5-4.5" />
          <path d="m14.5 8.5 1.8-1.8a1.8 1.8 0 1 1 2.5 2.5L17 11" />
          <path d="M6.5 17.5h11" />
        </svg>
      );
    case "content":
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" />
          <path d="M8 9h8" />
          <path d="M8 12.5h8" />
          <path d="M8 16h5" />
        </svg>
      );
    case "operations":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 4.5v2.2" />
          <path d="M12 17.3v2.2" />
          <path d="m6.7 6.7 1.6 1.6" />
          <path d="m15.7 15.7 1.6 1.6" />
          <path d="M4.5 12h2.2" />
          <path d="M17.3 12h2.2" />
          <path d="m6.7 17.3 1.6-1.6" />
          <path d="m15.7 8.3 1.6-1.6" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...commonProps}>
          <path d="M5 18.5h14" />
          <path d="M7.5 16V11" />
          <path d="M12 16V7.5" />
          <path d="M16.5 16V9.5" />
          <path d="M6.5 8.5 10 6l3 2 4.5-3" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
};

const content: any = {
  heroTitle: "Creative Assets Services",
  heroSubtitle:
    "Zora Global AI delivers creative assets that help brands maintain visual consistency, improve communication and stand out across digital, marketing and business platforms.",

  primaryCta: "Create Visual Impact",
  secondaryCta: "Talk to Us",

  topBlocks: [
    {
      title: "Brand & Marketing Creatives",
      desc: "We design branded marketing visuals such as banners, ad creatives, social media posts, brochures and campaign graphics that strengthen brand visibility and engagement.",
    },
    {
      title: "UI & Digital Assets",
      desc: "Our team creates icons, illustrations, interface graphics and digital design elements that support websites, applications, dashboards and mobile experiences.",
    },
    {
      title: "Multimedia Assets",
      desc: "We deliver presentation visuals, motion-based design elements and supporting multimedia assets that make communication more professional and impactful.",
    },
  ],

  overview:
    "Our creative assets services help businesses build a strong and reusable visual ecosystem across branding, marketing and digital channels. We create high-quality design assets that align with your brand identity, improve communication clarity and support better campaign execution across teams and platforms.",

  projectDuration: {
    title: "Project Execution Excellence",
    subtitle:
      "We deliver strategy-led creative asset solutions focused on visual consistency, faster campaign execution and scalable brand growth.",
    cards: [
      {
        title: "Fast & Strategic Execution",
        label: "Best suited for",
        desc:
          "Structured execution that helps brands launch creative assets faster and strengthen visual communication.",
      },
      {
        title: "What Our Execution Covers",
        label: "What is Included",
        desc:
          "Creative planning, design systems, campaign assets and production workflows for focused delivery.",
      },
      {
        title: "Why Businesses Choose Zora",
        label: "Requirement Condition",
        desc:
          "Expert design guidance, transparent collaboration and scalable creative systems built for long-term brand use.",
      },
    ],
  },

  deliverTitle: "How We Deliver",
  deliverySteps: [
    {
      title: "Requirement Gathering",
      desc:
        "Understand brand goals, campaign needs, asset types and communication priorities from the start.",
    },
    {
      title: "Analysis",
      desc:
        "Review audience expectations, brand style, current creative gaps and campaign context to define the right direction.",
    },
    {
      title: "Planning & Strategy",
      desc:
        "Define creative direction, visual standards, production flow and a structured asset delivery roadmap.",
    },
  ],

  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "Zora Global AI Technologies delivers structured non-IT creative and branding services that improve visual consistency, campaign quality and long-term brand communication. We combine creative thinking, strategic execution and practical delivery to build asset systems that support business growth across every touchpoint.",
  whoWeAreCards: [
    {
      title: "Brand-Led Creative Execution",
      desc:
        "We align every creative engagement with brand standards, campaign goals and measurable communication outcomes.",
    },
    {
      title: "Design & Production Expertise",
      desc:
        "Our team combines creative strategy, digital design and visual storytelling to produce effective and scalable assets.",
    },
    {
      title: "Long-Term Asset Consistency",
      desc:
        "We support sustainable creative growth through asset systems, reusable templates and consistent brand rollout.",
    },
  ],

  technologiesTitle: "Business Analysis, Platforms & Operational Tools",
  technologiesSubtitle:
    "We use proven creative planning frameworks, design platforms, collaboration tools and reporting methods to deliver practical, scalable and measurable creative solutions.",
  technologies: [
    {
      icon: "strategy",
      title: "Creative Planning & Strategy Tools",
      desc:
        "We use structured planning methods to align asset creation with campaigns, audience needs and brand goals.",
      items: ["Campaign Planning Framework", "Creative Brief Templates", "Audience Persona Mapping"],
    },
    {
      icon: "design",
      title: "Creative Design Platforms",
      desc:
        "We use industry-standard design platforms to build graphics, marketing creatives and reusable visual systems.",
      items: ["Adobe Illustrator", "Adobe Photoshop", "Canva"],
    },
    {
      icon: "marketing",
      title: "Marketing & Campaign Platforms",
      desc:
        "We align asset delivery with marketing platforms used for campaigns, promotions and audience communication.",
      items: ["Google Ads", "Meta Ads Manager", "Mailchimp"],
    },
    {
      icon: "content",
      title: "Content & Communication Systems",
      desc:
        "We organize creative messaging, content structure and communication standards for stronger visual storytelling.",
      items: ["Content Calendars", "Brand Messaging Framework", "Copy Layout Templates"],
    },
    {
      icon: "operations",
      title: "Creative Workflow & Governance",
      desc:
        "We use practical asset workflows and approval systems that keep production, reviews and team coordination efficient.",
      items: ["Brand Guidelines", "Approval Workflow Templates", "Asset Libraries"],
    },
    {
      icon: "analytics",
      title: "Reporting & Performance Insights",
      desc:
        "We track creative performance and engagement trends through reporting systems that support smarter campaign decisions.",
      items: ["Performance Dashboards", "Engagement Reports", "Campaign Tracking"],
    },
  ],

  architecture: {
    title: "Non-IT Service Delivery Framework",
    intro:
      "Our structured delivery model helps businesses move from creative discovery to asset production, rollout and ongoing brand support with clear milestones and measurable progress.",
    processSteps: [
      {
        icon: "01",
        title: "Requirement gathering",
        desc: "Understand campaign goals, asset requirements, brand expectations and delivery priorities",
      },
      {
        icon: "02",
        title: "Analysis",
        desc: "Assess current creative quality, communication gaps and key visual priorities",
      },
      {
        icon: "03",
        title: "Planning & strategy",
        desc: "Define creative direction, brand alignment, formats and structured execution priorities",
      },
      {
        icon: "04",
        title: "Resource allocation",
        desc: "Assign the right designers, creative specialists and production resources",
      },
    ],
    deliveryCards: [
      {
        icon: "05",
        title: "Execution",
        desc: "Create brand assets, campaign creatives and communication visuals with structured implementation",
      },
      {
        icon: "06",
        title: "Monitoring & optimization",
        desc: "Review asset performance, consistency and campaign fit to refine creative delivery",
      },
    ],
    closureCard: {
      icon: "07",
      title: "Reporting & support",
      desc: "Provide asset organization, rollout guidance and ongoing creative support for consistency",
    },
  },

  maintenanceSupport: {
    title: "Continuous Business Growth & Support",
    subtitle:
      "We support long-term brand growth through continuous creative refinement, consistency improvement and strategic guidance that strengthens visual impact and communication quality.",
    cards: [
      {
        title: "Creative Optimization & Brand Consistency",
        desc:
          "Improve visual quality, maintain consistency and strengthen brand communication across creative touchpoints.",
      },
      {
        title: "Strategic Refinement & Campaign Alignment",
        desc:
          "Refine creative direction based on campaign goals, audience needs and business priorities.",
      },
      {
        title: "Performance Monitoring & Creative Insights",
        desc:
          "Track asset effectiveness, engagement trends and communication impact to support better decisions.",
      },
      {
        title: "Consultation & Creative Excellence",
        desc:
          "Provide expert creative guidance to improve execution quality, visual clarity and brand presentation.",
      },
      {
        title: "Market Presence & Engagement Support",
        desc:
          "Support communication and creative rollout that improve audience engagement, trust and brand visibility.",
      },
    ],
  },

  frameworkTitle: "From Scattered Visuals to Strong Brand Presence",
  frameworkSubtitle:
    "Turning inconsistent design materials into a clear, professional and scalable creative asset system.",

  beforePoints: [
    "Inconsistent visuals across campaigns and brand materials",
    "Low brand consistency affecting recognition and trust",
    "Repeated effort in recreating assets for every campaign",
    "Limited visual quality reducing communication impact",
  ],

  afterPoints: [
    "Consistent brand visuals across digital and marketing channels",
    "Reusable creative asset library for faster execution",
    "Better brand recall and audience engagement",
    "Professional visuals that improve communication quality",
  ],

  whyChooseTitle: "Why Our Creative Assets",
  whyChoose: [
    {
      title: "Brand-consistent output",
      desc:
        "We create assets that stay aligned with your brand identity, communication style and campaign goals.",
    },
    {
      title: "Scalable library",
      desc:
        "Our approach helps you build reusable creative assets for future campaigns, teams and platforms.",
    },
    {
      title: "Fast turnaround",
      desc:
        "We follow a structured workflow to deliver quality creative assets quickly and consistently.",
    },
  ],

  zoraWhyTitle: "Why Zora Global AI Technologies",
  zoraWhy: [
    {
      title: "Scalable & Business-Aligned Solutions",
      desc:
        "We create scalable creative systems aligned with brand goals, campaign priorities and long-term business growth.",
    },
    {
      title: "Structured & Transparent Execution",
      desc:
        "Our process combines milestone-based delivery, creative clarity and quality-driven execution for dependable outcomes.",
    },
    {
      title: "Long-Term Growth & Partnership",
      desc:
        "We support continuous creative consistency, refinement and strategic growth through a customer-focused partnership approach.",
    },
  ],

  contactTitle: "Request Creative Assets",
  contactSubtitle:
    "Ready to create, refresh, or strengthen your brand identity? Let’s design a distinctive brand system that reflects your business values, connects with your audience and supports long-term brand visibility across every platform.",
  messageLabel: "Tell us about your creative requirements...",
  submitLabel: "Request Creative Assets",
};

const NonItBrandingCreativeServicesCreativeAssetsMarketingDesign: React.FC = () => {
  const technologies = content?.technologies ?? [];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [activeTechnology, setActiveTechnology] = useState<number | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Submitted (frontend demo). Connect backend/API later.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-blue-700/16 blur-[180px] rounded-full top-[-280px] left-[-280px]" />
        <div className="absolute w-[900px] h-[900px] bg-purple-700/16 blur-[180px] rounded-full bottom-[-320px] right-[-320px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* HERO */}
      <div className="pt-28 pb-16 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-400 mb-6">
            <Link to="/services" className="hover:text-purple-300 transition">
              Services
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/services/non-it"
              className="hover:text-purple-300 transition"
            >
              Non-IT Services
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={"/services/non-it/" + category.slug}
              className="hover:text-purple-300 transition"
            >
              {category.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{item.title}</span>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl">
            {/* IMAGE BANNER */}
            <div className="relative h-56 md:h-72">
              <img
                src={heroImage}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/non-it-hero/default.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/25 via-[#050816]/55 to-[#050816]/95" />
            </div>

            <div className="relative px-8 py-12 md:px-14 md:py-14">
              <div className="relative text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  {content?.heroTitle ?? item.title}
                </h1>
                <p className="text-gray-300 mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
                  {content?.heroSubtitle ??
                    item.shortDesc ??
                    "High-impact delivery with clarity, discipline and measurable outcomes."}
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/book-appointment"
                    className="px-8 py-4 rounded-2xl font-semibold bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_40px_rgba(37,99,235,0.35)]"
                  >
                    {content?.primaryCta ?? "Get Started"}
                  </Link>
                  <a
                    href="#contact"
                    className="px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    {content?.secondaryCta ?? "Talk to Us"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick blocks */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {(content?.topBlocks ?? []).map((b: { title: string; desc: string }) => (
              <div
                key={b.title}
                className="group relative overflow-hidden p-7 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="relative text-xl font-bold text-blue-300 transition-colors duration-300 group-hover:text-white">{b.title}</h3>
                <p className="relative text-gray-400 mt-3 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Overview */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
              Overview
            </h2>
            <p className="text-gray-300 mt-4 leading-relaxed text-lg">
              {content?.overview ??
                "We deliver structured services with measurable business outcomes and operational clarity."}
            </p>
          </div>

          {/* Project Execution Excellence */}
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-200">
                {content?.projectDuration?.title}
              </h2>
              <p className="text-gray-300 mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8">
                {content?.projectDuration?.subtitle}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
              {(content?.projectDuration?.cards ?? []).map(
                (card: { title: string; desc: string }) => (
                  <div
                    key={card.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-2xl md:text-[2rem] font-bold leading-tight text-white">
                      {card.title}
                    </h3>
                    <p className="relative mt-5 text-base md:text-lg leading-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* How We Deliver */}
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-200">
              {content?.deliverTitle}
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {(content?.deliverySteps ?? []).map(
                (step: { title: string; desc: string }, idx: number) => (
                  <div
                    key={step.title}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    <h3 className="relative mt-6 text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {step.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Who We Are */}
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-200">
                {content?.whoWeAreTitle}
              </h2>
              <p className="text-gray-300 mt-5 max-w-5xl mx-auto text-base md:text-lg leading-8">
                {content?.whoWeAreText}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {(content?.whoWeAreCards ?? []).map(
                (card: { title: string; desc: string }) => (
                  <div
                    key={card.title}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-2xl font-bold text-purple-200 transition-colors duration-300 group-hover:text-white">
                      {card.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-200">
                {content?.technologiesTitle}
              </h2>
              <p className="text-gray-300 mt-5 max-w-5xl mx-auto text-base md:text-lg leading-8">
                {content?.technologiesSubtitle}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
              {technologies.map(
                (
                  tech: {
                    icon: string;
                    title: string;
                    desc: string;
                    items: string[];
                  },
                  idx: number
                ) => {
                  const accent = "blue" as const;
                  const isOpen = activeTechnology === idx;

                  return (
                    <div
                      key={tech.title}
                      onMouseEnter={() => setActiveTechnology(idx)}
                      onMouseLeave={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : current
                        )
                      }
                      onClick={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : idx
                        )
                      }
                      className={`group relative self-start overflow-hidden rounded-[28px] border bg-[#0b1220] p-5 md:p-6 transition-all duration-300 cursor-pointer ${
                        isOpen
                          ? "border-blue-300/60 shadow-[0_0_35px_rgba(59,130,246,0.18)]"
                          : "border-white/10 hover:border-blue-300/40"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-blue-300/20 bg-blue-500/10">
                          {renderTechnologyIcon(tech.icon, accent)}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight text-blue-200">
                          {tech.title}
                        </h3>
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-base md:text-lg leading-8 text-gray-400">
                            {tech.desc}
                          </p>
                          <div className="mt-5 grid grid-cols-2 gap-3">
                            {tech.items.map((tool) => (
                              <span
                                key={tool}
                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm md:text-base text-white"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Architecture */}
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-200">
                {content?.architecture?.title}
              </h2>
              <p className="text-gray-300 mt-5 max-w-5xl mx-auto text-base md:text-lg leading-8">
                {content?.architecture?.intro}
              </p>
            </div>

            <div className="mt-10 grid xl:grid-cols-[1.1fr_1.2fr] gap-8 items-start">
              <div className="space-y-4">
                {(content?.architecture?.processSteps ?? []).map(
                  (step: { icon: string; title: string; desc: string }, idx: number) => (
                    <React.Fragment key={step.title}>
                      <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0b1220] p-6 transition-all duration-300 hover:border-blue-300/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.14)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="flex items-start gap-4">
                          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 text-sm font-bold text-blue-200">
                            {step.icon}
                          </div>
                          <div className="relative">
                            <h3 className="text-xl font-bold text-blue-100 transition-colors duration-300 group-hover:text-white">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                      {idx < (content?.architecture?.processSteps?.length ?? 0) - 1 ? (
                        <div className="text-center text-2xl text-blue-200">↓</div>
                      ) : null}
                    </React.Fragment>
                  )
                )}
              </div>

                    <div className="space-y-8">
                <div className="rounded-[30px] border border-white/10 bg-[#0b1220] p-6">
                  <div className="w-fit rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-base font-bold text-white">
                    Delivery
                  </div>
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {(content?.architecture?.deliveryCards ?? []).map(
                      (card: { icon: string; title: string; desc: string }) => (
                        <div
                          key={card.title}
                          className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,23,43,0.95),rgba(8,13,24,0.98))] p-5 transition-all duration-300 hover:border-purple-300/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.14)]"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative text-base font-bold text-purple-300">{card.icon}</div>
                          <div className="relative mt-3 text-xl font-bold text-blue-100 transition-colors duration-300 group-hover:text-white">
                            {card.title}
                          </div>
                          <p className="relative mt-2 text-base leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                            {card.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                    <div className="mt-6 border-t border-dashed border-white/10 pt-3 text-center text-[16px] text-blue-200/70">
                      review & updates
                    </div>
                    <div className="text-center text-[28px] text-blue-200">↓</div>
                  </div>

                  <div className="rounded-[30px] border border-white/10 bg-[#0b1220] p-6">
                  <div className="w-fit rounded-full bg-gradient-to-r from-purple-400 to-blue-400 px-6 py-2 text-base font-bold text-slate-950">
                    Closure
                  </div>
                  <div className="group relative mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,23,43,0.95),rgba(8,13,24,0.98))] p-5 transition-all duration-300 hover:border-blue-300/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.14)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative text-base font-bold text-blue-300">
                      {content?.architecture?.closureCard?.icon}
                    </div>
                    <div className="relative mt-3 text-xl font-bold text-blue-100 transition-colors duration-300 group-hover:text-white">
                      {content?.architecture?.closureCard?.title}
                    </div>
                    <p className="relative mt-2 text-base leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {content?.architecture?.closureCard?.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Business Growth & Support */}
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-200">
                {content?.maintenanceSupport?.title}
              </h2>
              <p className="text-gray-300 mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8">
                {content?.maintenanceSupport?.subtitle}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-6 gap-6">
              {(content?.maintenanceSupport?.cards ?? []).map(
                (card: { title: string; desc: string }, idx: number) => (
                  <div
                    key={card.title}
                    className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)] ${
                      idx < 3 ? "xl:col-span-2" : "xl:col-span-3"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-xl md:text-2xl font-bold text-blue-200 transition-colors duration-300 group-hover:text-white">
                      {card.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Framework */}
          {(content?.frameworkTitle ||
            content?.beforePoints ||
            content?.afterPoints) && (
            <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
                {content?.frameworkTitle ?? "Framework"}
              </h2>
              {content?.frameworkSubtitle && (
                <p className="text-gray-400 mt-3">{content.frameworkSubtitle}</p>
              )}

              <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="rounded-[26px] border border-white/10 bg-[#071224] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <h3 className="text-2xl font-bold text-[#ff9d9d]">Before</h3>
                  <ul className="mt-6 space-y-5 text-gray-200 text-base md:text-lg leading-8">
                    {(content?.beforePoints ?? []).map((p: string) => (
                      <li key={p} className="flex items-start gap-3">
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(77,91,160,0.45),rgba(58,44,98,0.65))] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)] flex items-center justify-center">
                  <div className="text-center max-w-sm">
                    <div className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-200/90">
                      Transformation
                    </div>
                    <div className="mt-4 text-3xl md:text-[2.1rem] font-bold leading-tight text-white">
                      Research <br />
                      Design <br />
                      Validate
                    </div>
                    <div className="mt-4 text-lg md:text-xl text-gray-200/90">
                      Recognition + trust + scalable brand presence
                    </div>
                  </div>
                </div>

                <div className="rounded-[26px] border border-white/10 bg-[#071224] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <h3 className="text-2xl font-bold text-[#8dffbf]">After</h3>
                  <ul className="mt-6 space-y-5 text-gray-200 text-base md:text-lg leading-8">
                    {(content?.afterPoints ?? []).map((p: string) => (
                      <li key={p} className="flex items-start gap-3">
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Why Zora */}
          <div className="rounded-[32px] bg-white/5 border border-white/10 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-200">
              {content?.whyChooseTitle}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.whyChoose ?? []).map(
                (w: { title: string; desc: string }, idx: number) => (
                  <div
                    key={w.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="text-sm font-semibold text-blue-300/80">
                      0{idx + 1}
                    </div>
                    <h3 className="relative mt-4 text-xl font-bold text-blue-200 transition-colors duration-300 group-hover:text-white">
                      {w.title}
                    </h3>
                    <p className="relative mt-3 text-base md:text-lg leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {w.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-[32px] bg-white/5 border border-white/10 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-200">
              {content?.zoraWhyTitle}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.zoraWhy ?? []).map(
                (w: { title: string; desc: string }, idx: number) => (
                  <div
                    key={w.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative text-sm font-semibold text-blue-300/80">
                      0{idx + 1}
                    </div>
                    <h3 className="relative mt-4 text-xl font-bold text-blue-200 transition-colors duration-300 group-hover:text-white">
                      {w.title}
                    </h3>
                    <p className="relative mt-3 text-base md:text-lg leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {w.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div
            id="contact"
            className="rounded-3xl bg-white/5 border border-white/10 p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
              {content?.contactTitle ?? "Tell us about your project"}
            </h2>
            <p className="text-gray-400 mt-3">
              {content?.contactSubtitle ??
                "Share your requirements and our team will reach out."}
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label className="text-sm text-gray-300">Your name*</label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-purple-400"
                />
              </div>

              <div className="md:col-span-1">
                <label className="text-sm text-gray-300">Your email*</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-purple-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-gray-300">
                  {content?.messageLabel ?? "Tell us about your requirements..."}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  rows={5}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-purple-400"
                />
              </div>

              <div className="md:col-span-2 flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
                >
                  {content?.submitLabel ?? "Submit"}
                </button>

                <Link
                  to={"/services/non-it/" + category.slug}
                  className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition font-semibold"
                >
                  Back to {category.title}
                </Link>
              </div>
            </form>

            <p className="text-gray-500 text-sm mt-6">
              Explore our complete range of Non-IT Services for business growth
              and operations excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonItBrandingCreativeServicesCreativeAssetsMarketingDesign;
