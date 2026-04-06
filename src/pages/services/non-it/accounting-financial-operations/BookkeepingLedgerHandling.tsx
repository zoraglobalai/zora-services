import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "accounting-financial-operations",
  title: "Accounting & Financial Operations",
};

const item = {
  slug: "bookkeeping-ledger-handling",
  title: "Bookkeeping & Ledger Handling",
  shortDesc:
    "Daily transaction recording, ledger maintenance, reconciliations and structured accounting records.",
};

const heroImage = "/non-it-hero/bookkeeping-ledger-handling.webp";

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
    case "finance":
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="5" width="15" height="14" rx="2.5" />
          <path d="M8 9.5h8" />
          <path d="M8 13h3" />
          <path d="M14.5 12.5c0-1 .8-1.8 1.8-1.8s1.7.5 1.7 1.3c0 .7-.4 1.1-1.1 1.4l-1.2.4c-.8.3-1.2.7-1.2 1.4 0 .9.7 1.6 1.8 1.6s1.8-.7 1.8-1.7" />
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
    case "compliance":
      return (
        <svg {...commonProps}>
          <path d="M12 3.5 6 6v5.5c0 4 2.8 6.8 6 8 3.2-1.2 6-4 6-8V6Z" />
          <path d="m9.5 11.8 1.6 1.6 3.4-3.8" />
        </svg>
      );
    case "collaboration":
      return (
        <svg {...commonProps}>
          <path d="M8.5 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M15.8 12a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
          <path d="M4.8 18.5v-.7A3.3 3.3 0 0 1 8.1 14.5h.8a3.3 3.3 0 0 1 3.3 3.3v.7" />
          <path d="M13.8 18.5v-.6a2.8 2.8 0 0 1 2.8-2.8h.4a2.8 2.8 0 0 1 2.8 2.8v.6" />
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
  heroTitle: "Bookkeeping & Ledger Handling",
  heroSubtitle:
    "Zora Global AI provides reliable bookkeeping and ledger handling services that help businesses maintain accurate financial records, organize day-to-day transaction data, strengthen ledger accuracy and support better financial control, reporting and compliance across regular accounting operations.",

  primaryCta: "Explore Bookkeeping Services",
  secondaryCta: "Talk to Us",

  topBlocks: [
    {
      title: "Daily Transaction Recording",
      desc: "We accurately record day-to-day financial transactions with structured journal entries, proper account classification and disciplined bookkeeping practices that improve financial accuracy and record consistency.",
    },
    {
      title: "General Ledger Management",
      desc: "Our team maintains general ledgers, chart of accounts, account balances and ledger updates in a systematic way to support clean books, better tracking and dependable accounting control.",
    },
    {
      title: "Financial Accounting & Reporting",
      desc: "We support month-end bookkeeping activities, ledger reviews, reconciliations and accounting report preparation to improve visibility, compliance support and decision-making readiness.",
    },
  ],

  overview:
    "Our bookkeeping and ledger handling services help businesses maintain clean, accurate and well-organized accounting records across daily financial operations. We support transaction recording, journal entries, ledger posting, account reviews, reconciliations and structured bookkeeping workflows that strengthen financial discipline and reduce reporting gaps. With accurate books and properly maintained ledgers, businesses can improve financial visibility, support audit readiness, reduce accounting errors and build a stronger foundation for reporting, compliance and operational decision-making.",

  projectDuration: {
    title: "Project Execution Excellence",
    subtitle:
      "We deliver strategy-led bookkeeping solutions focused on record accuracy, financial visibility and scalable accounting control.",
    cards: [
      {
        title: "Fast & Strategic Execution",
        label: "Best suited for",
        desc:
          "Structured execution that helps businesses improve bookkeeping accuracy and strengthen ledger control faster.",
      },
      {
        title: "What Our Execution Covers",
        label: "What is Included",
        desc:
          "Transaction recording, ledger posting, reconciliations, account review and documentation support for reliable delivery.",
      },
      {
        title: "Why Businesses Choose Zora",
        label: "Requirement Condition",
        desc:
          "Expert bookkeeping guidance, transparent workflows and scalable ledger systems built for long-term accounting reliability.",
      },
    ],
  },

  deliverTitle: "How We Deliver",
  deliverySteps: [
    {
      title: "Requirement Gathering",
      desc:
        "Understand transaction volume, accounting structure, reporting needs and ledger requirements from the start.",
    },
    {
      title: "Analysis",
      desc:
        "Review bookkeeping gaps, ledger inconsistencies, process delays and documentation issues to define the right support model.",
    },
    {
      title: "Planning & Strategy",
      desc:
        "Define recording workflows, ledger structure, review checkpoints and a clear bookkeeping execution roadmap.",
    },
  ],

  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "Zora Global AI Technologies delivers structured non-IT bookkeeping and financial operations services that improve record accuracy, ledger control and long-term accounting stability. We combine financial discipline, process clarity and practical execution to support dependable bookkeeping performance.",
  whoWeAreCards: [
    {
      title: "Accuracy-Led Execution",
      desc:
        "We align every bookkeeping engagement with financial accuracy, process control and measurable record quality outcomes.",
    },
    {
      title: "Ledger & Reporting Expertise",
      desc:
        "Our team combines transaction discipline, ledger maintenance and reporting structure to support reliable accounting workflows.",
    },
    {
      title: "Long-Term Financial Stability",
      desc:
        "We support sustainable bookkeeping operations through consistent reviews, documentation and ongoing process improvement.",
    },
  ],

  technologiesTitle: "Business Analysis, Platforms & Operational Tools",
  technologiesSubtitle:
    "We use proven bookkeeping systems, reporting tools, compliance workflows and operational methods to deliver practical, scalable and measurable ledger management solutions.",
  technologies: [
    {
      icon: "finance",
      title: "Bookkeeping & Ledger Tools",
      desc:
        "We use practical accounting systems to manage day-to-day entries, ledgers, balances and financial records with accuracy.",
      items: ["Tally", "Zoho Books", "QuickBooks"],
    },
    {
      icon: "analytics",
      title: "Reporting & Record Review Tools",
      desc:
        "We use reporting structures and review templates that improve visibility into transactions, balances and account movement.",
      items: ["Excel Reports", "Ledger Review Sheets", "MIS Reports"],
    },
    {
      icon: "compliance",
      title: "Compliance & Documentation Systems",
      desc:
        "We support reconciliations, documentation accuracy and audit-supportive bookkeeping records through structured control systems.",
      items: ["Reconciliation Checklists", "Supporting Documents", "Audit Files"],
    },
    {
      icon: "operations",
      title: "Process Control & Workflow Tools",
      desc:
        "We use workflow checkpoints and bookkeeping controls that improve record consistency and reduce manual errors.",
      items: ["Approval Workflows", "SOPs", "Control Checklists"],
    },
    {
      icon: "strategy",
      title: "Planning & Review Tools",
      desc:
        "We use structured review methods to support ledger accuracy, month-end readiness and stronger bookkeeping discipline.",
      items: ["Month-End Checklists", "Variance Reviews", "Closure Templates"],
    },
    {
      icon: "collaboration",
      title: "Team Coordination & Review Systems",
      desc:
        "We use shared review systems that help teams, approvers and business stakeholders stay aligned on accounting records.",
      items: ["Google Workspace", "Microsoft Office", "Shared Review Templates"],
    },
  ],

  architecture: {
    title: "Non-IT Service Delivery Framework",
    intro:
      "Our structured delivery model helps businesses move from bookkeeping assessment to execution, review, reporting and ongoing support with clear milestones and measurable progress.",
    processSteps: [
      {
        icon: "01",
        title: "Requirement gathering",
        desc: "Understand bookkeeping needs, transaction structure, ledger priorities and reporting expectations",
      },
      {
        icon: "02",
        title: "Analysis",
        desc: "Assess record gaps, posting delays, ledger issues and bookkeeping workflow challenges",
      },
      {
        icon: "03",
        title: "Planning & strategy",
        desc: "Define recording workflow, ledger review cycle and structured bookkeeping priorities",
      },
      {
        icon: "04",
        title: "Resource allocation",
        desc: "Assign the right bookkeeping specialists, review support and reporting resources",
      },
    ],
    deliveryCards: [
      {
        icon: "05",
        title: "Execution",
        desc: "Execute transaction recording, ledger updates, reviews and reconciliations efficiently",
      },
      {
        icon: "06",
        title: "Monitoring & optimization",
        desc: "Continuously review record quality, ledger accuracy and process efficiency",
      },
    ],
    closureCard: {
      icon: "07",
      title: "Reporting & support",
      desc: "Provide bookkeeping insights, supporting documentation and ongoing support for stable financial records",
    },
  },

  maintenanceSupport: {
    title: "Continuous Business Growth & Support",
    subtitle:
      "We support long-term financial stability through continuous bookkeeping refinement, ledger improvement and strategic guidance that strengthens record accuracy and business confidence.",
    cards: [
      {
        title: "Bookkeeping Optimization & Financial Accuracy",
        desc:
          "Improve transaction workflows, reduce entry errors and maintain high bookkeeping accuracy across operations.",
      },
      {
        title: "Strategic Refinement & Ledger Alignment",
        desc:
          "Refine bookkeeping workflows based on business needs, accounting priorities and record management demands.",
      },
      {
        title: "Performance Monitoring & Financial Insights",
        desc:
          "Track bookkeeping quality, ledger trends and record performance to support better financial decisions.",
      },
      {
        title: "Consultation & Operational Excellence",
        desc:
          "Provide expert bookkeeping guidance to improve execution quality, documentation and process discipline.",
      },
      {
        title: "Compliance & Record Control Support",
        desc:
          "Support reconciliations, documentation and control systems that improve readiness, reliability and audit confidence.",
      },
    ],
  },

  frameworkTitle: "Bookkeeping Transformation",
  frameworkSubtitle:
    "Turning daily financial activity into structured, reliable and audit-supportive accounting records.",

  beforePoints: [
    "Unrecorded or inconsistently recorded transactions",
    "Disorganized ledgers and incomplete account tracking",
    "Limited visibility into day-to-day financial activity",
    "Higher risk of errors, reporting gaps and compliance issues",
  ],

  afterPoints: [
    "Accurate financial records and structured journal entries",
    "Well-maintained ledgers with better balance tracking",
    "Improved accounting visibility and financial control",
    "Stronger compliance support and reporting readiness",
  ],

  whyChooseTitle: "Bookkeeping Transformation",
  whyChoose: [
    {
      title: "Accurate records and stronger ledger control",
      desc:
        "We help maintain structured books and disciplined ledger records that improve financial control and reduce daily bookkeeping errors.",
    },
    {
      title: "Consistent bookkeeping support",
      desc:
        "Our bookkeeping process supports transaction accuracy, ledger maintenance, reconciliations and cleaner accounting workflows.",
    },
    {
      title: "Clear visibility for better decisions",
      desc:
        "With accurate books and organized ledgers, your business gains better visibility into financial activity and reporting readiness.",
    },
  ],

  zoraWhyTitle: "Why Zora Global AI Technologies",
  zoraWhy: [
    {
      title: "Scalable & Business-Aligned Solutions",
      desc:
        "We deliver scalable bookkeeping solutions aligned with business needs, ledger control and long-term accounting reliability.",
    },
    {
      title: "Structured & Transparent Execution",
      desc:
        "Our process combines milestone-based delivery, record clarity and quality-driven execution for dependable outcomes.",
    },
    {
      title: "Long-Term Growth & Partnership",
      desc:
        "We support continuous bookkeeping improvement, operational reliability and long-term business confidence through a customer-focused approach.",
    },
  ],

  contactTitle: "Start Your Bookkeeping Engagement",
  contactSubtitle:
    "Need reliable bookkeeping and ledger handling support for your business? Speak with our accounting specialists to build accurate records, cleaner ledgers and stronger financial operations.",

  messageLabel: "Tell us about your bookkeeping needs...",
  submitLabel: "Request Bookkeeping Consultation",
};

const NonItAccountingFinancialOperationsBookkeepingLedgerHandling: React.FC = () => {
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
                  className="group relative overflow-hidden p-7 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="relative text-xl font-bold text-blue-300 transition-colors duration-300 group-hover:text-white">{b.title}</h3>
                  <p className="relative text-gray-400 mt-3 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">{b.desc}</p>
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
                          {renderTechnologyIcon(tech.icon, "blue")}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight text-blue-200">
                          {tech.title}
                        </h3>
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-5"
                            : "grid-rows-[0fr] opacity-0 mt-0"
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

              <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="group relative overflow-hidden rounded-2xl bg-[#0b1220] border border-white/10 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="text-lg font-bold text-red-300">Before</h3>
                  <ul className="relative mt-4 space-y-3 text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
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
                      <span>Accuracy</span>
                      <span>Control</span>
                      <span>Compliance</span>
                    </div>
                    <div className="mt-4 text-lg md:text-xl text-gray-200/90">
                      Structured bookkeeping with measurable visibility
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-[#0b1220] border border-white/10 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="text-lg font-bold text-green-300">After</h3>
                  <ul className="relative mt-4 space-y-3 text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
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

          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-300">
              {content?.whyChooseTitle}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.whyChoose ?? []).map(
                (w: { title: string; desc: string }) => (
                  <div
                    key={w.title}
                    className="group relative overflow-hidden p-7 rounded-2xl bg-[#0b1220] border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-lg font-bold text-purple-200 transition-colors duration-300 group-hover:text-white">
                      {w.title}
                    </h3>
                    <p className="relative text-gray-400 mt-2 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
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

export default NonItAccountingFinancialOperationsBookkeepingLedgerHandling;
