import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "digital-marketing-services",
  title: "Digital Marketing Services",
};

const item = {
  slug: "social-media-branding",
  title: "Social Media Management",
  shortDesc:
    "End-to-end social media management services including strategy, content creation, scheduling, engagement, campaign support and analytics-driven brand growth.",
};

const heroImage = "/non-it-hero/social-media-branding.webp";

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
    case "content":
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="5" width="15" height="14" rx="2.5" />
          <path d="M8 9h8" />
          <path d="M8 12.5h5" />
          <path d="M8 16h6" />
        </svg>
      );
    case "community":
      return (
        <svg {...commonProps}>
          <path d="M8.5 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M15.8 12a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
          <path d="M4.8 18.5v-.7A3.3 3.3 0 0 1 8.1 14.5h.8a3.3 3.3 0 0 1 3.3 3.3v.7" />
          <path d="M13.8 18.5v-.6a2.8 2.8 0 0 1 2.8-2.8h.4a2.8 2.8 0 0 1 2.8 2.8v.6" />
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
  heroTitle: "Social Media Management Services",
  heroSubtitle:
    "Zora Global AI provides professional social media management services that help businesses build brand awareness, strengthen audience engagement, maintain a consistent online presence and grow across major social media platforms through strategy-led content and performance-focused execution.",

  primaryCta: "Grow on Social Media",
  secondaryCta: "Talk to Us",

  topBlocks: [
    {
      title: "Social Media Strategy",
      desc: "We create platform-specific social media strategies aligned with your brand voice, audience behavior, business goals and content direction to improve consistency, reach and long-term digital visibility across important channels.",
    },
    {
      title: "Content Creation & Scheduling",
      desc: "Our team develops engaging social media content including post ideas, captions, creatives, branded messaging, campaign content and structured publishing schedules to keep your business active, relevant and professionally presented online.",
    },
    {
      title: "Community & Campaign Management",
      desc: "We support day-to-day social media management through audience engagement, comment moderation, campaign coordination, promotional planning and platform monitoring to help brands build trust, visibility and stronger community interaction.",
    },
  ],

  overview:
    "Our social media management services help businesses build a stronger digital presence through consistent content, audience-focused communication and platform-appropriate growth strategies. We support content planning, creative coordination, publishing schedules, engagement management, campaign execution and performance tracking across major social media platforms. By aligning social activity with brand goals, customer interests and business messaging, we help companies improve visibility, strengthen audience connection, enhance credibility and create meaningful digital engagement. Whether the goal is brand awareness, lead generation support, community growth, or stronger market positioning, our social media services are designed to deliver structured, scalable and business-aligned results.",

  projectDuration: {
    title: "Project Execution Excellence",
    subtitle:
      "We deliver structured social media management focused on stronger brand consistency, better engagement and measurable digital growth.",
    cards: [
      {
        title: "Fast & Brand-Focused Execution",
        label: "Best suited for",
        desc:
          "Businesses that want a consistent social presence with clearer messaging, stronger engagement and better content direction.",
      },
      {
        title: "What Our Execution Covers",
        label: "What is Included",
        desc:
          "Social strategy, content planning, publishing schedules, community coordination, campaign support and performance tracking.",
      },
      {
        title: "Why Businesses Choose Zora",
        label: "Requirement Condition",
        desc:
          "Platform-specific planning, disciplined execution and scalable support that improve social visibility and audience connection.",
      },
    ],
  },

  deliverTitle: "How We Deliver",
  deliverySteps: [
    {
      title: "Requirement Gathering",
      desc:
        "Understand brand goals, target audience, platforms, content themes, posting needs and engagement priorities before execution begins.",
    },
    {
      title: "Analysis",
      desc:
        "Analyze audience behavior, competitor activity, brand positioning gaps, content opportunities and platform priorities to shape the right social plan.",
    },
    {
      title: "Planning & Strategy",
      desc:
        "Define content direction, publishing cadence, campaign coordination, community workflow and reporting milestones for structured delivery.",
    },
  ],

  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "Zora Global AI Technologies provides structured social media management support that helps businesses grow their digital presence with stronger consistency, better engagement and clearer brand communication. We combine strategy, content operations and performance monitoring to turn social media activity into measurable brand growth.",
  whoWeAreCards: [
    {
      title: "Brand-Led Social Execution",
      desc:
        "We align every engagement with business goals, audience relevance and brand consistency instead of random posting activity.",
    },
    {
      title: "Content, Community & Campaign Coordination",
      desc:
        "Our work connects content planning, publishing, audience engagement, promotions and monitoring to build a stronger overall social presence.",
    },
    {
      title: "Long-Term Digital Growth Support",
      desc:
        "We stay focused on sustainable social performance through reporting, refinement, content optimization and platform-aware execution.",
    },
  ],

  technologiesTitle: "Social Media Platforms, Content Tools & Engagement Systems",
  technologiesSubtitle:
    "We use structured social planning methods, publishing systems, content workflows and analytics tools to deliver practical, scalable and measurable social media growth.",
  technologies: [
    {
      icon: "strategy",
      title: "Social Strategy & Brand Planning",
      desc:
        "We define platform goals, content themes, brand messaging and audience alignment strategies that shape more consistent social growth.",
      items: ["Content Pillars", "Brand Positioning", "Audience Mapping"],
    },
    {
      icon: "marketing",
      title: "Platform & Campaign Management",
      desc:
        "We manage core social platforms and campaign coordination to improve visibility, promotional reach and audience interaction across channels.",
      items: ["Instagram", "Facebook", "LinkedIn"],
    },
    {
      icon: "content",
      title: "Content Planning & Publishing Workflows",
      desc:
        "We structure caption planning, creative coordination, calendar scheduling and publishing workflows that keep social activity organized and consistent.",
      items: ["Content Calendars", "Scheduling Tools", "Creative Briefs"],
    },
    {
      icon: "community",
      title: "Community Engagement & Interaction",
      desc:
        "We support audience engagement, comment moderation, inbox follow-up and brand interaction routines that strengthen trust and responsiveness.",
      items: ["Comment Moderation", "Message Handling", "Audience Engagement"],
    },
    {
      icon: "operations",
      title: "Campaign Support & Execution Operations",
      desc:
        "We coordinate promotional content, social launches, collaboration flow and post-level execution details that support stronger campaign delivery.",
      items: ["Promotional Posts", "Campaign Rollouts", "Execution Checklists"],
    },
    {
      icon: "analytics",
      title: "Performance Tracking & Analytics",
      desc:
        "We build reporting views that improve visibility into reach, engagement, follower growth and campaign performance for better decisions.",
      items: ["Engagement Reports", "Reach Tracking", "Performance Dashboards"],
    },
  ],

  architecture: {
    title: "Non-IT Service Delivery Framework",
    intro:
      "Our structured delivery model helps businesses move from social strategy clarity to execution, monitoring and ongoing support with transparent milestones and measurable progress.",
    processSteps: [
      {
        icon: "01",
        title: "Requirement gathering",
        desc: "Understand brand objectives, target audience, platform focus and content expectations",
      },
      {
        icon: "02",
        title: "Analysis",
        desc: "Analyze current social presence, audience behavior, content gaps and engagement priorities",
      },
      {
        icon: "03",
        title: "Planning & strategy",
        desc: "Define content roadmap, publishing workflow, campaign support and structured action plan",
      },
      {
        icon: "04",
        title: "Resource allocation",
        desc: "Assign the right content, community and reporting support resources for execution",
      },
    ],
    deliveryCards: [
      {
        icon: "05",
        title: "Execution",
        desc: "Execute content publishing, engagement support and social campaign activities efficiently",
      },
      {
        icon: "06",
        title: "Monitoring & optimization",
        desc: "Continuously monitor engagement, evaluate content performance and optimize delivery",
      },
    ],
    closureCard: {
      icon: "07",
      title: "Reporting & support",
      desc: "Provide visibility into social performance, insights and ongoing growth support",
    },
  },

  maintenanceSupport: {
    title: "Continuous Business Growth & Support",
    subtitle:
      "We ensure long-term business success through continuous optimization, performance improvement and strategic support that drives measurable growth and operational efficiency.",
    cards: [
      {
        title: "Process Optimization & Business Efficiency",
        desc:
          "Enhance workflows, improve execution quality and drive operational efficiency and productivity growth across business processes.",
      },
      {
        title: "Strategic Refinement & Growth Alignment",
        desc:
          "Continuously refine business strategies based on performance insights to ensure scalability, revenue growth and market adaptability.",
      },
      {
        title: "Performance Monitoring & Business Insights",
        desc:
          "Track KPIs, analyze performance trends and deliver data-driven insights to support better decision-making and measurable business outcomes.",
      },
      {
        title: "Consultation & Operational Excellence",
        desc:
          "Provide expert guidance to improve business decisions, strengthen execution and achieve operational excellence across day-to-day activities.",
      },
      {
        title: "Brand & Market Positioning Support",
        desc:
          "Support branding, communication and market positioning strategies to improve customer trust, engagement and business credibility.",
      },
    ],
  },

  frameworkTitle: "Social Media Growth Transformation",
  frameworkSubtitle:
    "Turning inconsistent social activity into a structured brand presence with stronger engagement, visibility and audience growth.",

  beforePoints: [
    "Irregular posting with limited content direction",
    "Low audience engagement and weak brand interaction",
    "Inconsistent messaging across social media platforms",
    "Limited visibility into campaign and content performance",
  ],

  afterPoints: [
    "Stronger brand consistency across key social channels",
    "Improved audience engagement and community interaction",
    "Better content structure with clearer growth direction",
    "More measurable visibility into social media performance",
  ],

  whyChooseTitle: "Why Social Media Management",
  whyChoose: [
    {
      title: "Brand-consistent social execution",
      desc: "We build structured social media systems around brand voice, audience relevance and platform fit so your presence feels intentional and professional.",
    },
    {
      title: "Stronger content and community coordination",
      desc: "Our work connects planning, publishing, engagement and campaign activity so your social channels operate as a clear growth system instead of disconnected posts.",
    },
    {
      title: "Ongoing optimization for long-term growth",
      desc: "We improve social performance through reporting, content refinement, platform prioritization and consistent execution that supports sustainable visibility.",
    },
  ],

  contactTitle: "Talk to Our Social Media Experts",
  contactSubtitle:
    "Ready to improve your brand presence, audience engagement and content consistency on social media? Talk to our specialists to build a social media strategy aligned with your business goals and digital growth plans.",

  messageLabel: "Tell us about your social media goals...",
  submitLabel: "Request Social Media Consultation",
};

const cardBaseClass =
  "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] p-7 transition-all duration-300 hover:-translate-y-2";

const NonItDigitalMarketingServicesSocialMediaBranding: React.FC = () => {
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
            {(content?.topBlocks ?? []).map(
              (b: { title: string; desc: string }) => (
                <div
                  key={b.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.16)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="relative text-xl font-bold text-blue-300 transition-colors duration-300 group-hover:text-white">
                    {b.title}
                  </h3>
                  <p className="relative mt-3 leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                    {b.desc}
                  </p>
                </div>
              )
            )}
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

          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
                {content?.projectDuration?.title}
              </h2>
              <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed text-lg">
                {content?.projectDuration?.subtitle}
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.projectDuration?.cards ?? []).map(
                (card: { title: string; label: string; desc: string }) => (
                  <div
                    key={card.title}
                    className={`${cardBaseClass} hover:border-purple-300/50 hover:shadow-[0_0_32px_rgba(168,85,247,0.18)]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative text-sm font-semibold uppercase tracking-[0.18em] text-blue-300/80">
                      {card.label}
                    </div>
                    <h3 className="relative mt-4 text-xl font-bold text-purple-200 transition-colors duration-300 group-hover:text-white">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-300">
                {content?.deliverTitle}
              </h2>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.deliverySteps ?? []).map(
                (step: { title: string; desc: string }, index: number) => (
                  <div
                    key={step.title}
                    className={`${cardBaseClass} hover:border-blue-300/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.16)]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative text-sm font-semibold text-blue-300/80">
                      0{index + 1}
                    </div>
                    <h3 className="relative mt-4 text-xl font-bold text-blue-200 transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </h3>
                    <p className="relative mt-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {step.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
                {content?.whoWeAreTitle}
              </h2>
              <p className="text-gray-300 mt-4 max-w-4xl mx-auto leading-relaxed text-lg">
                {content?.whoWeAreText}
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.whoWeAreCards ?? []).map(
                (card: { title: string; desc: string }) => (
                  <div
                    key={card.title}
                    className={`${cardBaseClass} hover:border-purple-300/50 hover:shadow-[0_0_32px_rgba(168,85,247,0.18)]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-xl font-bold text-purple-200 transition-colors duration-300 group-hover:text-white">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-300">
                {content?.technologiesTitle}
              </h2>
              <p className="text-gray-300 mt-5 max-w-4xl mx-auto text-base md:text-xl leading-8">
                {content?.technologiesSubtitle}
              </p>
            </div>

            <div className="mt-12 grid items-start md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                  const isActive = activeTechnology === idx;

                  return (
                    <button
                      key={tech.title}
                      type="button"
                      onMouseEnter={() => setActiveTechnology(idx)}
                      onMouseLeave={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : current
                        )
                      }
                      onFocus={() => setActiveTechnology(idx)}
                      onBlur={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : current
                        )
                      }
                      onClick={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : idx
                        )
                      }
                      aria-expanded={isActive}
                      className={`group relative flex min-h-[132px] self-start flex-col overflow-hidden rounded-[24px] border bg-[#0b1220]/95 p-5 text-left transition-all duration-300 shadow-[0_0_30px_rgba(76,29,149,0.08)] ${
                        isActive
                          ? "border-blue-400/60 -translate-y-1 shadow-[0_0_35px_rgba(59,130,246,0.16)] xl:min-h-[300px]"
                          : "border-white/10 hover:-translate-y-1 hover:border-blue-300/40"
                      }`}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-blue-300/30 bg-blue-500/10 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.12)] transition-all duration-300">
                          {renderTechnologyIcon(tech.icon, "blue")}
                        </div>
                        <div className="flex min-h-[56px] items-center">
                          <h3 className="text-lg font-extrabold leading-tight text-blue-200 transition-colors">
                            {tech.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isActive
                            ? "mt-5 max-h-[420px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-400 leading-7 text-base md:text-lg">
                          {tech.desc}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {tech.items.map((itemName: string) => (
                            <span
                              key={itemName}
                              className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm md:text-base text-gray-200"
                            >
                              {itemName}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div className="rounded-[32px] bg-white/5 border border-white/10 p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-purple-200">
                {content?.architecture?.title}
              </h2>
              <p className="text-gray-300 mt-5 max-w-4xl mx-auto text-base md:text-xl leading-8">
                {content?.architecture?.intro}
              </p>
            </div>

            <div className="mt-10 hidden xl:block">
              <div className="mx-auto max-w-[1280px] rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,24,42,0.96),rgba(10,16,28,0.98))] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.45)]">
                <div className="grid grid-cols-[0.9fr_1.1fr] gap-6">
                  <div className="space-y-5">
                    {(content?.architecture?.processSteps ?? []).map(
                      (step: { icon: string; title: string; desc: string }, idx: number) => (
                        <React.Fragment key={step.title}>
                          <div className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0b1220] px-6 py-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-blue-300/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.16)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />
                            <div className="flex items-start gap-4">
                              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-blue-300/20 bg-blue-500/10 text-xl font-bold text-blue-200">
                                {step.icon}
                              </div>
                              <div className="relative">
                                <div className="text-[20px] font-bold leading-tight text-blue-100">
                                  {step.title}
                                </div>
                                <div className="mt-2 text-[16px] leading-7 text-gray-400">
                                  {step.desc}
                                </div>
                              </div>
                            </div>
                          </div>
                          {idx < (content?.architecture?.processSteps?.length ?? 0) - 1 ? (
                            <div className="text-center text-[28px] leading-none text-blue-200">
                              ↓
                            </div>
                          ) : null}
                        </React.Fragment>
                      )
                    )}
                  </div>

                    <div className="space-y-8">
                    <div className="rounded-[30px] border border-white/10 bg-[#0b1220] p-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                      <div className="w-fit rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-xl font-bold text-white shadow-[0_0_28px_rgba(59,130,246,0.2)]">
                        Delivery
                      </div>

                      <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                        {(content?.architecture?.deliveryCards ?? []).map(
                          (card: { icon: string; title: string; desc: string }, index: number) => (
                            <React.Fragment key={card.title}>
                              <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,23,43,0.95),rgba(8,13,24,0.98))] p-6 transition-all duration-300 hover:border-purple-300/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.14)]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="text-[18px] font-bold text-purple-300">{card.icon}</div>
                                <div className="mt-3 text-[22px] font-bold leading-tight text-blue-100">
                                  {card.title}
                                </div>
                                <div className="mt-2 text-[16px] leading-7 text-gray-400">
                                  {card.desc}
                                </div>
                              </div>
                              {index === 0 ? (
                                <div className="text-3xl text-blue-300/80">→</div>
                              ) : null}
                            </React.Fragment>
                          )
                        )}
                      </div>

                      <div className="mt-6 border-t border-dashed border-white/10 pt-3 text-center text-[16px] text-blue-200/70">
                        review & updates
                      </div>
                      <div className="text-center text-[28px] text-blue-200">↓</div>
                    </div>

                    <div className="rounded-[30px] border border-white/10 bg-[#0b1220] p-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                      <div className="w-fit rounded-full bg-gradient-to-r from-purple-400 to-blue-400 px-8 py-3 text-xl font-bold text-slate-950 shadow-[0_0_28px_rgba(96,165,250,0.16)]">
                        Closure
                      </div>

                      <div className="mt-6 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,23,43,0.95),rgba(8,13,24,0.98))] p-6">
                        <div className="text-[18px] font-bold text-blue-300">
                          {content?.architecture?.closureCard?.icon}
                        </div>
                        <div className="mt-3 text-[22px] font-bold leading-tight text-blue-100">
                          {content?.architecture?.closureCard?.title}
                        </div>
                        <div className="mt-2 text-[16px] leading-7 text-gray-400">
                          {content?.architecture?.closureCard?.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 xl:hidden">
              <div className="space-y-4">
                {(content?.architecture?.processSteps ?? []).map(
                  (step: { icon: string; title: string; desc: string }, idx: number) => (
                    <React.Fragment key={step.title}>
                      <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0b1220] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-blue-300/40">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="flex items-start gap-4">
                          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 text-sm font-bold text-blue-200">
                            {step.icon}
                          </div>
                          <div className="relative">
                            <h3 className="text-lg font-semibold text-blue-100">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-400">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                      {idx < (content?.architecture?.processSteps?.length ?? 0) - 1 ? (
                        <div className="text-center text-xl text-blue-200">↓</div>
                      ) : null}
                    </React.Fragment>
                  )
                )}
              </div>

              <div className="mt-6 space-y-5">
                <div className="rounded-[26px] border border-white/10 bg-[#0b1220] p-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <div className="w-fit rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-base font-bold text-white">
                    Delivery
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {(content?.architecture?.deliveryCards ?? []).map(
                      (card: { icon: string; title: string; desc: string }) => (
                        <div
                          key={card.title}
                          className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,23,43,0.95),rgba(8,13,24,0.98))] p-5 transition-all duration-300 hover:border-purple-300/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.14)]"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative text-base font-bold text-purple-300">{card.icon}</div>
                          <div className="relative mt-3 text-xl font-bold text-blue-100">
                            {card.title}
                          </div>
                          <p className="relative mt-2 text-base leading-7 text-gray-400">
                            {card.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="text-center text-2xl text-blue-200">↓</div>

                <div className="rounded-[26px] border border-white/10 bg-[#0b1220] p-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <div className="w-fit rounded-full bg-gradient-to-r from-purple-400 to-blue-400 px-6 py-2 text-base font-bold text-slate-950">
                    Closure
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,23,43,0.95),rgba(8,13,24,0.98))] p-5">
                    <div className="text-base font-bold text-blue-300">
                      {content?.architecture?.closureCard?.icon}
                    </div>
                    <div className="mt-3 text-xl font-bold text-blue-100">
                      {content?.architecture?.closureCard?.title}
                    </div>
                    <p className="mt-2 text-base leading-7 text-gray-400">
                      {content?.architecture?.closureCard?.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-300">
                {content?.maintenanceSupport?.title}
              </h2>
              <p className="text-gray-300 mt-4 max-w-4xl mx-auto leading-relaxed text-lg">
                {content?.maintenanceSupport?.subtitle}
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-6 gap-6">
              {(content?.maintenanceSupport?.cards ?? []).map(
                (card: { title: string; desc: string }, idx: number) => (
                  <div
                    key={card.title}
                    className={`${cardBaseClass} hover:border-blue-300/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.16)] ${
                      idx < 3 ? "xl:col-span-2" : "xl:col-span-3"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
                    <h3 className="relative text-xl font-bold text-blue-200 transition-colors duration-300 group-hover:text-white">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
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

              <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-7">
                  <h3 className="text-lg font-bold text-red-300">Before</h3>
                  <ul className="mt-4 space-y-3 text-gray-300">
                    {(content?.beforePoints ?? []).map((p: string) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-red-300">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(77,91,160,0.45),rgba(58,44,98,0.65))] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)] flex items-center justify-center">
                  <div className="text-center max-w-sm">
                    <div className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-200/90">
                      Transformation
                    </div>
                    <div className="mt-4 flex flex-col items-center gap-2 text-3xl md:text-[2.1rem] font-bold leading-tight text-white">
                      <span>Visibility</span>
                      <span>Engagement</span>
                      <span>Growth</span>
                    </div>
                    <div className="mt-4 text-lg md:text-xl text-gray-200/90">
                      Structured social media with stronger brand impact
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-7">
                  <h3 className="text-lg font-bold text-green-300">After</h3>
                  <ul className="mt-4 space-y-3 text-gray-300">
                    {(content?.afterPoints ?? []).map((p: string) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-green-300">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

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

export default NonItDigitalMarketingServicesSocialMediaBranding;
