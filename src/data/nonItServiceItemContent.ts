// src/data/nonItServiceItemContent.ts
export type NonITTopBlock = { title: string; desc: string };
export type NonITStep = { title: string; desc: string };
export type NonITWhy = { title: string; desc: string };

export type NonITServiceItemContent = {
  heroTitle: string;
  heroSubtitle: string;
  primaryCta?: string;
  secondaryCta?: string;

  topBlocks: NonITTopBlock[];
  overview: string;

  deliverTitle?: string;
  deliverySteps: NonITStep[];

  whyChooseTitle?: string;
  whyChoose: NonITWhy[];

  frameworkTitle?: string;
  frameworkSubtitle?: string;
  beforePoints?: string[];
  afterPoints?: string[];

  contactTitle?: string;
  contactSubtitle?: string;
  messageLabel?: string;
  submitLabel?: string;
};

export const NON_IT_SERVICE_ITEM_CONTENT: Record<
  string,
  Record<string, NonITServiceItemContent>
> = {
  // =========================
  // Business & Strategy Consulting
  // =========================
  "business-strategy-consulting": {
    "business-process-optimisation": {
      heroTitle: "Business Process Optimisation",
      heroSubtitle:
        "Zora Global AI delivers business process optimisation services that reduce operational costs, streamline workflows, and deliver measurable ROI through ERP systems, workflow automation, and digital transformation.",
      primaryCta: "Optimize Business Processes",
      secondaryCta: "Talk to Us",

      topBlocks: [
        {
          title: "ERP & Enterprise Systems",
          desc: "Design, implementation, and optimisation of ERP platforms to unify operations, data, and reporting across the organisation.",
        },
        {
          title: "Workflow & Process Automation",
          desc: "Automate approvals, repetitive tasks, and business workflows using intelligent automation and BPM tools.",
        },
        {
          title: "Process Improvement & Cost Reduction",
          desc: "Identify inefficiencies, optimise operations, and reduce costs through continuous improvement frameworks.",
        },
      ],

      overview:
        "Our business process optimisation services improve end-to-end workflows through ERP optimisation, workflow automation, process mapping, and data-driven digital transformation initiatives.",

      deliverTitle: "Our Process Optimisation Approach",
      deliverySteps: [
        {
          title: "Discover — Process Assessment & Mapping",
          desc: "Analyse workflows, ERP systems, and operations to identify bottlenecks and optimisation opportunities.",
        },
        {
          title: "Design — Optimisation & Automation",
          desc: "Redesign workflows and deploy ERP and automation improvements for efficiency.",
        },
        {
          title: "Improve — Performance Monitoring & ROI",
          desc: "Track KPIs, cost savings, and efficiency metrics for continuous improvement.",
        },
      ],

      whyChooseTitle: "Why Choose Our Optimisation Services",
      whyChoose: [
        { title: "Data-driven delivery", desc: "We measure impact using KPIs, cost savings, and efficiency metrics." },
        { title: "ERP + automation expertise", desc: "Unified enterprise systems with intelligent workflow automation." },
        { title: "ROI-focused outcomes", desc: "Optimisation initiatives designed to reduce cost and improve productivity." },
      ],

      frameworkTitle: "Business Process Optimisation Framework",
      frameworkSubtitle: "Aligning people, processes, and technology for sustainable efficiency.",
      beforePoints: [
        "Manual and fragmented workflows",
        "High operational costs",
        "Disconnected ERP systems",
        "Limited process visibility",
      ],
      afterPoints: [
        "Streamlined operations",
        "Lower costs and higher productivity",
        "Integrated ERP-driven workflows",
        "Measurable ROI",
      ],

      contactTitle: "Optimize Your Business Processes",
      contactSubtitle:
        "Ready to reduce costs and improve efficiency? Talk to our process optimisation experts today.",
      messageLabel: "Describe your process optimisation goals...",
      submitLabel: "Request Process Assessment",
    },

    "operational-efficiency-consulting": {
      heroTitle: "Operational Efficiency Consulting",
      heroSubtitle:
        "Zora Global AI helps organizations optimize operations, eliminate inefficiencies, and maximize productivity through data-driven operational consulting.",
      primaryCta: "Explore Consulting Services",
      secondaryCta: "Talk to Us",

      topBlocks: [
        {
          title: "Process Optimization",
          desc: "Analyze and redesign business processes to reduce waste, improve execution speed, and increase operational clarity.",
        },
        {
          title: "Cost Reduction",
          desc: "Identify cost-saving opportunities while maintaining quality, compliance, and service performance.",
        },
        {
          title: "Performance Measurement",
          desc: "Define KPIs, dashboards, and metrics to monitor efficiency and enable continuous improvement.",
        },
      ],

      overview:
        "Our operational efficiency consulting services identify bottlenecks, streamline workflows, and implement sustainable improvements that drive measurable business results.",

      deliverTitle: "Our Consulting Approach",
      deliverySteps: [
        {
          title: "Assess — Current State Analysis",
          desc: "Evaluate existing processes, systems, resource utilization, and operational challenges.",
        },
        {
          title: "Optimize — Process Improvement",
          desc: "Design optimized workflows, eliminate inefficiencies, and define improvement initiatives.",
        },
        {
          title: "Implement — Execution & Change Management",
          desc: "Implement solutions, support teams through change, and embed continuous improvement practices.",
        },
      ],

      whyChooseTitle: "Driving Operational Excellence",
      whyChoose: [
        { title: "Measurable outcomes", desc: "KPIs and dashboards to track improvements over time." },
        { title: "Sustainable improvements", desc: "Process changes that teams can adopt and maintain." },
        { title: "Cost + productivity balance", desc: "Reduce waste while protecting performance and compliance." },
      ],

      frameworkTitle: "Driving Operational Excellence",
      frameworkSubtitle: "Transforming inefficiencies into measurable competitive advantages.",
      beforePoints: [
        "Inefficient processes",
        "High operational costs",
        "Low productivity",
        "Limited performance visibility",
      ],
      afterPoints: [
        "Streamlined operations",
        "Reduced costs",
        "Improved productivity",
        "Data-driven decision making",
      ],

      contactTitle: "Improve Your Operational Performance",
      contactSubtitle:
        "Ready to enhance efficiency and reduce costs? Our consultants are here to help you achieve operational excellence.",
      messageLabel: "Tell us about your operational challenges...",
      submitLabel: "Request Consultation",
    },

    "digital-transformation-consulting": {
      heroTitle: "Digital Transformation Consulting",
      heroSubtitle:
        "Zora Global AI delivers digital transformation consulting services that help organizations modernize business processes, operational models, and technology ecosystems.",
      primaryCta: "Explore Our Services",
      secondaryCta: "Talk to Us",

      topBlocks: [
        {
          title: "Strategy & Management Consulting",
          desc: "Business and management consulting aligned with people, processes, and technology for long-term growth.",
        },
        {
          title: "Technology & Digital Solutions",
          desc: "Cloud transformation, automation, data analytics, AI, and modern digital platforms enabling enterprise transformation.",
        },
        {
          title: "Operational Transformation",
          desc: "Redesign operating models, optimize workflows, and modernize service delivery for efficiency and agility.",
        },
      ],

      overview:
        "Our digital transformation consulting services combine management consulting, IT consulting, and technology strategy to help businesses adapt, innovate, and scale through enterprise transformation initiatives.",

      deliverTitle: "Our Consulting Approach",
      deliverySteps: [
        {
          title: "Assess — Business & Technology Evaluation",
          desc: "Assess processes, systems, and digital maturity to identify transformation opportunities.",
        },
        {
          title: "Plan — Strategy & Roadmap",
          desc: "Define transformation strategy, roadmap, and governance aligned with business goals.",
        },
        {
          title: "Execute — Delivery & Optimization",
          desc: "Support execution, change enablement, and continuous improvement for long-term success.",
        },
      ],

      whyChooseTitle: "Why Our Digital Transformation",
      whyChoose: [
        { title: "End-to-end delivery", desc: "From evaluation to roadmap to execution and optimization." },
        { title: "Modern tech stack", desc: "Cloud, automation, data, and AI combined with governance." },
        { title: "Business-aligned change", desc: "Transformation tied to outcomes, efficiency, and agility." },
      ],

      frameworkTitle: "Digital Transformation Framework",
      frameworkSubtitle: "Aligning strategy, technology, and operations for sustainable growth.",
      beforePoints: [
        "Legacy systems and disconnected processes",
        "Manual operations and limited visibility",
        "Slow innovation and high costs",
      ],
      afterPoints: [
        "Integrated digital operations",
        "Improved agility and scalability",
        "Data-driven decisions",
      ],

      contactTitle: "Start Your Digital Transformation",
      contactSubtitle:
        "Ready to modernize your business? Talk to our digital transformation consultants today.",
      messageLabel: "Tell us about your transformation goals...",
      submitLabel: "Submit Inquiry",
    },
  },

  // =========================
  // Staff Augmentation & Workforce Solutions
  // =========================
  "staff-augmentation-workforce-solutions": {
    "non-it-staff-augmentation": {
      heroTitle: "Non-IT Staff Augmentation & Workforce Solutions",
      heroSubtitle:
        "Zora Global AI provides non-IT staff augmentation services to support talent acquisition, manpower services, operational staffing, administrative staffing, and customer support hiring.",
      primaryCta: "Explore Staffing Solutions",
      secondaryCta: "Talk to Us",

      topBlocks: [
        {
          title: "Talent Acquisition & Recruitment",
          desc: "End-to-end recruitment services including sourcing, screening, interviewing, and onboarding for non-IT roles.",
        },
        {
          title: "Staff Augmentation & Deployment",
          desc: "Flexible workforce deployment with temporary, contract, and long-term staffing models.",
        },
        {
          title: "Operational & Support Staffing",
          desc: "Administrative staff, customer support teams, operational personnel, and service industry staffing.",
        },
      ],

      overview:
        "Our non-IT staffing and workforce augmentation solutions help organizations meet staffing requirements efficiently across operations, administration, customer service, logistics, sales support, and management roles.",

      deliverTitle: "Staff Augmentation Process",
      deliverySteps: [
        {
          title: "Identify — Staffing Requirements",
          desc: "Understand role requirements, skills, experience levels, and workforce expectations.",
        },
        {
          title: "Source — Talent Sourcing & Screening",
          desc: "Source qualified candidates through recruitment networks and staffing channels.",
        },
        {
          title: "Deploy — Staff Deployment & Management",
          desc: "Deploy staff with payroll support, compliance handling, and ongoing workforce management.",
        },
      ],

      whyChooseTitle: "Flexible Workforce Augmentation",
      whyChoose: [
        { title: "Faster hiring", desc: "Reduce hiring timelines with proven sourcing channels." },
        { title: "Flexible models", desc: "Temporary, contract, and long-term staffing options." },
        { title: "Operational reliability", desc: "Deployment + payroll + compliance support included." },
      ],

      frameworkTitle: "Flexible Workforce Augmentation",
      frameworkSubtitle: "Scaling teams efficiently through professional staffing solutions.",
      beforePoints: [
        "Talent shortages",
        "Long hiring cycles",
        "Operational workload pressure",
        "Limited internal recruitment capacity",
      ],
      afterPoints: [
        "On-time staff availability",
        "Improved operational efficiency",
        "Reduced hiring costs",
        "Scalable workforce",
      ],

      contactTitle: "Build Your Workforce",
      contactSubtitle:
        "Looking for reliable non-IT staffing and workforce augmentation? Connect with our staffing experts today.",
      messageLabel: "Tell us about your staffing requirements...",
      submitLabel: "Request Staffing Support",
    },
  },

  // =========================
  // Branding & Creative Services
  // =========================
  "branding-creative-services": {
    "brand-identity-positioning": {
      heroTitle: "Brand Identity Design",
      heroSubtitle:
        "Zora Global AI helps businesses create distinctive and consistent brand identities that connect emotionally with audiences and stand out in competitive markets.",
      primaryCta: "Explore Branding Services",
      secondaryCta: "Talk to Us",

      topBlocks: [
        {
          title: "Logo & Visual Identity",
          desc: "Create memorable logos and visual systems that reflect your brand’s personality, values, and positioning.",
        },
        {
          title: "Brand Strategy",
          desc: "Define brand positioning, messaging frameworks, and tone of voice to guide consistent communication.",
        },
        {
          title: "Brand Guidelines",
          desc: "Develop comprehensive brand guidelines to ensure consistency across digital, marketing, and physical assets.",
        },
      ],

      overview:
        "Our brand identity design services combine strategy, creativity, and visual design to build brands that are recognizable, meaningful, and scalable across all touchpoints.",

      deliverTitle: "Our Brand Identity Process",
      deliverySteps: [
        { title: "Discover — Brand Research", desc: "Understand your business, target audience, competitors, and market positioning." },
        { title: "Design — Visual Identity Creation", desc: "Design logos, color systems, typography, and supporting brand assets." },
        { title: "Define — Guidelines & Rollout", desc: "Deliver brand guidelines and support implementation across platforms and teams." },
      ],

      whyChooseTitle: "Building Brands with Purpose",
      whyChoose: [
        { title: "Strategic foundation", desc: "Positioning + messaging aligned to business goals." },
        { title: "Recognizable identity", desc: "Consistent visuals built for trust and recall." },
        { title: "Scalable guidelines", desc: "A system your team can apply everywhere." },
      ],

      frameworkTitle: "Building Brands with Purpose",
      frameworkSubtitle: "From visual identity to lasting brand recognition.",
      beforePoints: [
        "Inconsistent brand visuals",
        "Low brand recognition",
        "Unclear brand messaging",
        "Weak market differentiation",
      ],
      afterPoints: [
        "Strong and consistent brand presence",
        "Improved customer trust",
        "Clear brand positioning",
        "Scalable brand system",
      ],

      contactTitle: "Build a Brand That Stands Out",
      contactSubtitle:
        "Ready to create or refresh your brand identity? Let’s design a brand that truly represents your business.",
      messageLabel: "Tell us about your brand or design needs...",
      submitLabel: "Request Branding Consultation",
    },

    "ui-ux-creative-design": {
      heroTitle: "UI/UX Design Services",
      heroSubtitle:
        "Zora Global AI designs intuitive, engaging, and user-focused digital experiences that improve usability, increase conversions, and strengthen brand perception.",
      primaryCta: "Explore UI/UX Services",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "User Research & Analysis", desc: "Understand user behavior, needs, and pain points through research-driven insights." },
        { title: "Interface Design", desc: "Design visually appealing, intuitive interfaces aligned with usability best practices." },
        { title: "Usability Testing", desc: "Validate designs through testing, feedback, and continuous improvement cycles." },
      ],

      overview:
        "Our UI/UX design services combine research, strategy, and creative design to deliver seamless digital experiences across web and mobile platforms.",

      deliverTitle: "Our UI/UX Design Process",
      deliverySteps: [
        { title: "Research — User & Market Insights", desc: "Research users, competitors, and product goals to define the design direction." },
        { title: "Design — Wireframes & Visual Design", desc: "Create wireframes, prototypes, and high-fidelity UI designs." },
        { title: "Validate — Testing & Refinement", desc: "Test usability, gather feedback, and refine designs for optimal user experience." },
      ],

      whyChooseTitle: "Designing Experiences Users Love",
      whyChoose: [
        { title: "Clarity-first UX", desc: "Reduce friction, improve navigation, and simplify journeys." },
        { title: "Conversion-focused", desc: "Design decisions that support engagement and outcomes." },
        { title: "Validated results", desc: "Testing and refinement for measurable UX improvements." },
      ],

      frameworkTitle: "From Posts to Performance",
      frameworkSubtitle: "Turning user needs into intuitive digital experiences.",
      beforePoints: [
        "Confusing user interfaces",
        "Poor user engagement",
        "High bounce rates",
        "Low conversion rates",
      ],
      afterPoints: [
        "Improved usability",
        "Higher user engagement",
        "Increased conversions",
        "Stronger brand experience",
      ],

      contactTitle: "Create Better User Experiences",
      contactSubtitle:
        "Ready to improve your digital product’s usability and design? Let’s build experiences your users will love.",
      messageLabel: "Tell us about your product or design needs...",
      submitLabel: "Request UI/UX Consultation",
    },

    "creative-assets-marketing-design": {
      heroTitle: "Creative Assets Services",
      heroSubtitle:
        "Zora Global AI delivers high-quality creative assets that help brands communicate visually, maintain consistency, and stand out across digital platforms.",
      primaryCta: "Create Visual Impact",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Brand & Marketing Creatives", desc: "Logos, banners, ads, social media creatives, and promotional visuals designed to enhance recognition and engagement." },
        { title: "UI & Digital Assets", desc: "Icons, UI elements, illustrations, and interface graphics optimized for web and mobile applications." },
        { title: "Multimedia Assets", desc: "Motion graphics, presentation assets, and creative visuals that bring digital experiences to life." },
      ],

      overview:
        "Our creative assets services provide businesses with scalable visual resources including brand graphics, marketing creatives, digital illustrations, UI assets, and multimedia designs tailored to your brand identity.",

      deliverTitle: "Our Creative Process",
      deliverySteps: [
        { title: "Discovery — Brand & Requirement Analysis", desc: "We understand your brand identity, target audience, and creative objectives before designing visual assets." },
        { title: "Design — Creative Asset Production", desc: "Our designers craft high-quality creative assets following brand guidelines and visual best practices." },
        { title: "Delivery — Review & Optimization", desc: "We refine designs based on feedback and deliver ready-to-use creative assets." },
      ],

      whyChooseTitle: "Why Our Creative Assets",
      whyChoose: [
        { title: "Brand-consistent output", desc: "Assets aligned with your identity and campaign goals." },
        { title: "Scalable library", desc: "Designs you can reuse across channels and teams." },
        { title: "Fast turnaround", desc: "A structured process for efficient delivery." },
      ],

      contactTitle: "Request Creative Assets",
      contactSubtitle:
        "Need professional creative assets for your brand or campaigns? Let’s design visuals that elevate your business.",
      messageLabel: "Tell us about your creative requirements...",
      submitLabel: "Request Creative Assets",
    },

    "website-corporate-content": {
      heroTitle: "Website Content Services",
      heroSubtitle:
        "Zora Global AI delivers professional website content services that help businesses communicate clearly, rank higher on search engines, and convert visitors into customers with SEO-optimized, brand-aligned content.",
      primaryCta: "Get Content Started",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Website Copywriting", desc: "Clear, compelling website copy that reflects your brand voice and guides users through the journey." },
        { title: "SEO Content Writing", desc: "Keyword-driven content that improves rankings, organic traffic, and long-term visibility." },
        { title: "Blogs & Landing Pages", desc: "Informative blogs and high-converting landing pages designed to support marketing and lead generation." },
      ],

      overview:
        "Our website content services focus on clarity, relevance, and search visibility. From homepage copy and service pages to blogs and landing pages, we create content that drives engagement and conversions.",

      deliverTitle: "Our Website Content Process",
      deliverySteps: [
        { title: "Discovery — Research & Planning", desc: "Understand business goals, audience needs, competitors, and SEO opportunities." },
        { title: "Creation — Content Writing & Optimization", desc: "Craft SEO-friendly, engaging, and brand-consistent content." },
        { title: "Refinement — Review & Improvement", desc: "Refine content for clarity, performance, and alignment with business objectives." },
      ],

      whyChooseTitle: "Content That Converts",
      whyChoose: [
        { title: "SEO + clarity", desc: "Content optimized for search and for real users." },
        { title: "Brand-aligned tone", desc: "Consistent voice across pages and campaigns." },
        { title: "Conversion-focused structure", desc: "Clear messaging that improves engagement and outcomes." },
      ],

      frameworkTitle: "Content That Converts",
      frameworkSubtitle: "Turning unclear messaging into structured, engaging, and conversion-focused content.",
      beforePoints: [
        "Unclear messaging",
        "Low engagement",
        "Poor search visibility",
        "Inconsistent brand voice",
      ],
      afterPoints: [
        "Clear messaging",
        "Improved rankings",
        "Higher engagement",
        "Better conversions",
      ],

      contactTitle: "Talk to Our Content Experts",
      contactSubtitle:
        "Looking to improve your website content? Our specialists are ready to help.",
      messageLabel: "Tell us about your content requirements...",
      submitLabel: "Request Content Consultation",
    },

    "content-management-support": {
      heroTitle: "Content Management Services",
      heroSubtitle:
        "Zora Global AIprovides end-to-end content management services to help businesses organize, manage, publish, and optimize digital content across platforms with accuracy and consistency.",
      primaryCta: "Manage Content Effectively",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Content Strategy & Planning", desc: "Define frameworks, workflows, and governance models aligned with business goals and audience needs." },
        { title: "Content Publishing & Maintenance", desc: "Manage updates, formatting, publishing schedules, and version control across platforms." },
        { title: "Content Optimization & Governance", desc: "Ensure accuracy, compliance, SEO optimization, and lifecycle management for long-term value." },
      ],

      overview:
        "Our content management services ensure your digital content remains structured, relevant, up-to-date, and optimized across websites, applications, and marketing channels.",

      deliverTitle: "Our Content Management Workflow",
      deliverySteps: [
        { title: "Planning — Content Structuring & Strategy", desc: "Define content architecture, workflows, and publishing guidelines." },
        { title: "Execution — Publishing & Updates", desc: "Publish, update, and manage content across digital platforms efficiently." },
        { title: "Optimization — Content Review & Improvement", desc: "Monitor content performance, ensure compliance, and continuously improve quality." },
      ],

      whyChooseTitle: "Why Content Management Support",
      whyChoose: [
        { title: "Operational consistency", desc: "Structured workflows and version control to avoid errors." },
        { title: "Always up-to-date", desc: "Maintenance-driven approach to keep content current." },
        { title: "Governed quality", desc: "Compliance + SEO + accuracy built into the process." },
      ],

      contactTitle: "Talk to Our Content Specialists",
      contactSubtitle:
        "Looking for reliable content management support? Let our experts handle your content lifecycle.",
      messageLabel: "Tell us about your content management needs...",
      submitLabel: "Request Content Support",
    },
  },

  // =========================
  // Accounting & Financial Operations
  // =========================
  "accounting-financial-operations": {
    "accounting-management": {
      heroTitle: "Accounting Management Services",
      heroSubtitle:
        "Zora Global AI provides end-to-end accounting management services that help businesses maintain accurate financial records, ensure compliance, and gain complete visibility into financial performance.",
      primaryCta: "Get Accounting Support",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Bookkeeping & General Ledger", desc: "Systematic bookkeeping, journal entries, and ledger maintenance for accurate and real-time financial tracking." },
        { title: "Accounts Payable & Receivable", desc: "Invoice processing, billing, collections, vendor payments, and receivable management." },
        { title: "Financial Reporting & Compliance", desc: "Balance sheets, income statements, cash flow reports, and regulatory compliance." },
      ],

      overview:
        "Our accounting management services cover the complete financial lifecycle of a business — from bookkeeping and ledger management to financial reporting and compliance — keeping your accounts accurate and audit-ready.",

      deliverTitle: "Our Accounting Management Process",
      deliverySteps: [
        { title: "Setup — Accounting Setup & Review", desc: "Review records, chart of accounts, and systems to establish a compliant foundation." },
        { title: "Processing — Daily Accounting Operations", desc: "Handle bookkeeping, reconciliations, payroll accounting, and ledger updates." },
        { title: "Reporting — Financial Reporting & Review", desc: "Prepare financial statements and management reports for decision-making." },
      ],

      whyChooseTitle: "Accounting Management Transformation",
      whyChoose: [
        { title: "Accuracy + control", desc: "Clean books and disciplined processes that reduce risk." },
        { title: "Compliance-ready", desc: "Structured records aligned with standards and audit needs." },
        { title: "Clear visibility", desc: "Reports that improve financial decision-making." },
      ],

      frameworkTitle: "Accounting Management Transformation",
      frameworkSubtitle: "From manual accounting challenges to structured and compliant financial management.",
      beforePoints: [
        "Inconsistent financial records",
        "Delayed reconciliations",
        "Compliance risks",
        "Limited financial visibility",
      ],
      afterPoints: [
        "Clean and accurate accounts",
        "Timely financial statements",
        "Improved compliance",
        "Better decision-making",
      ],

      contactTitle: "Talk to Our Accounting Experts",
      contactSubtitle:
        "Need reliable accounting management for your business? Our experts are here to help.",
      messageLabel: "Tell us about your accounting requirements...",
      submitLabel: "Request Accounting Consultation",
    },

    "bookkeeping-ledger-handling": {
      heroTitle: "Bookkeeping & Ledger Handling",
      heroSubtitle:
        "Zora Global AI provides reliable bookkeeping and ledger handling services focused on accurate recording of daily transactions, maintenance of general ledgers, and compliance with accounting standards.",
      primaryCta: "Explore Bookkeeping Services",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Daily Transaction Recording", desc: "Accurate recording of daily financial transactions using double entry bookkeeping principles and structured journal entries." },
        { title: "General Ledger Management", desc: "Maintenance of ledgers, chart of accounts, balances, and reconciliations for accuracy and consistency." },
        { title: "Financial Accounting & Reporting", desc: "Support for month-end close and reliable accounting reports aligned with standards." },
      ],

      overview:
        "Our bookkeeping and ledger handling services cover financial accounting, journal entries, double entry bookkeeping, and general ledger management to ensure transparent and accurate financial records.",

      deliverTitle: "Our Bookkeeping Process",
      deliverySteps: [
        { title: "Record — Transaction Recording", desc: "Capture and record all business transactions using proper journal entries." },
        { title: "Post — Ledger Posting", desc: "Post journal entries to general ledger accounts and track balances accurately." },
        { title: "Reconcile — Ledger Reconciliation", desc: "Reconcile accounts, verify balances, and resolve discrepancies." },
      ],

      whyChooseTitle: "From Transactions to Financial Clarity",
      whyChoose: [
        { title: "Audit-ready records", desc: "Structured entries and ledgers reduce compliance risks." },
        { title: "Accurate reconciliations", desc: "Verification of balances to prevent errors and leakage." },
        { title: "Clear reporting", desc: "Reliable financial records that support decisions." },
      ],

      frameworkTitle: "From Transactions to Financial Clarity",
      frameworkSubtitle: "Turning daily financial activity into structured, reliable accounting records.",
      beforePoints: [
        "Unrecorded transactions",
        "Disorganized ledgers",
        "Limited financial visibility",
        "Audit and compliance risks",
      ],
      afterPoints: [
        "Accurate financial records",
        "Well-maintained ledgers",
        "Improved compliance",
        "Better financial control",
      ],

      contactTitle: "Start Your Bookkeeping Engagement",
      contactSubtitle:
        "Need reliable bookkeeping and ledger handling services? Speak with our accounting specialists today.",
      messageLabel: "Tell us about your bookkeeping needs...",
      submitLabel: "Request Bookkeeping Consultation",
    },

    "financial-reporting": {
      heroTitle: "Financial Reporting Services",
      heroSubtitle:
        "Zora Global AI delivers accurate and compliant financial reporting services, helping businesses prepare balance sheets, income statements, profit and loss accounts, and cash flow statements with clarity and transparency.",
      primaryCta: "Explore Financial Reporting",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Financial Statements", desc: "Income statements, P&L, balance sheets, and cash flow statements prepared as per accounting standards." },
        { title: "Management & Corporate Reporting", desc: "Management accounting, consolidated reports, and internal performance reporting." },
        { title: "Compliance & Financial Analysis", desc: "Financial and ratio analysis with compliance to GAAP, IFRS, and statutory requirements." },
      ],

      overview:
        "Our financial reporting services support businesses with accurate financial statements, trial balance review, statutory compliance, and financial analysis to deliver clear insights into performance and profitability.",

      deliverTitle: "Our Financial Reporting Process",
      deliverySteps: [
        { title: "Collect — Financial Data Collection", desc: "Collect trial balances, general ledger data, and accounting records." },
        { title: "Prepare — Statement Preparation", desc: "Prepare balance sheets, income statements, and cash flow statements." },
        { title: "Review — Analysis & Compliance", desc: "Perform analysis and ensure compliance with reporting standards." },
      ],

      whyChooseTitle: "From Accounting Data to Insights",
      whyChoose: [
        { title: "Timely reporting", desc: "Structured process for consistent financial statements." },
        { title: "Compliance-first", desc: "GAAP/IFRS + statutory alignment and review checks." },
        { title: "Decision-ready insights", desc: "Analysis that improves clarity on profitability and performance." },
      ],

      frameworkTitle: "From Accounting Data to Insights",
      frameworkSubtitle: "Turning financial records into meaningful business intelligence.",
      beforePoints: [
        "Limited financial visibility",
        "Inconsistent statements",
        "Compliance risks",
      ],
      afterPoints: [
        "Clear financial visibility",
        "Accurate reporting",
        "Better decision-making",
      ],

      contactTitle: "Request Financial Reporting Support",
      contactSubtitle:
        "Need accurate financial statements or compliance-ready reports? Talk to our accounting experts today.",
      messageLabel: "Tell us about your reporting needs...",
      submitLabel: "Request Consultation",
    },

    "financial-operations-support": {
      heroTitle: "Financial Operations Support",
      heroSubtitle:
        "Zora Global AI delivers financial operations support services covering billing and payments, e invoicing, invoice processing, accounts payable, and accounts receivable.",
      primaryCta: "Explore Financial Operations",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Billing & Invoicing", desc: "Digital invoicing, online billing, invoice creation, delivery, due date tracking, and billing management." },
        { title: "Accounts Payable", desc: "Invoice approvals, PO matching, payment authorization, and automated accounts payable processing." },
        { title: "Accounts Receivable", desc: "Customer invoicing, collections, reconciliation, and overdue invoice management." },
      ],

      overview:
        "Our financial operations support services improve billing, invoicing, and payment workflows. We manage invoice generation, approval workflows, accounts payable, and receivable collections to reduce delays and improve cash flow.",

      deliverTitle: "Financial Operations Workflow",
      deliverySteps: [
        { title: "Invoice — Invoice Creation", desc: "Generate and submit invoices with defined billing terms and payment instructions." },
        { title: "Approve — Invoice Approval", desc: "Automated approvals, validation checks, and PO-to-invoice matching." },
        { title: "Pay — Payment & Reconciliation", desc: "Process payments, track receipts, and reconcile payables and receivables." },
      ],

      whyChooseTitle: "Invoice-to-Pay Optimization",
      whyChoose: [
        { title: "Faster cycles", desc: "Reduce delays with approvals and tracking." },
        { title: "Better visibility", desc: "Clear view of invoices, payments, and outstanding receivables." },
        { title: "Improved cash flow", desc: "Stronger collections and reduced overdue invoices." },
      ],

      frameworkTitle: "Invoice-to-Pay Optimization",
      frameworkSubtitle: "Streamlining billing, invoicing, and payments.",
      beforePoints: [
        "Manual invoicing",
        "Delayed payments",
        "Limited visibility",
      ],
      afterPoints: [
        "Faster collections",
        "Reduced overdue invoices",
        "Improved cash flow",
      ],

      contactTitle: "Optimize Your Financial Operations",
      contactSubtitle:
        "Need help with billing, invoicing, payables, or receivables? Talk to our financial operations specialists.",
      messageLabel: "Tell us about your billing & payment needs...",
      submitLabel: "Request Support",
    },
  },

  // =========================
  // Digital Marketing Services
  // =========================
  "digital-marketing-services": {
    "seo-content-growth": {
      heroTitle: "SEO Services for Organic Growth",
      heroSubtitle:
        "Zora Global AI Technologies is an SEO agency delivering professional search engine optimization services that help businesses improve rankings, drive organic traffic, and build long-term brand visibility.",
      primaryCta: "Get SEO Started",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Technical & On-Page SEO", desc: "Website structure, page speed, indexing, metadata, content, and internal linking optimized for search performance." },
        { title: "Content & Keyword Strategy", desc: "Keyword research and content optimization targeting high-intent queries to drive qualified organic traffic." },
        { title: "Local, Enterprise & Ecommerce SEO", desc: "Scalable SEO solutions for local businesses, enterprises, SaaS, and ecommerce platforms." },
      ],

      overview:
        "Our SEO services help businesses rank higher on Google, attract qualified organic traffic, and improve online visibility through technical SEO, on-page SEO, content optimization, local SEO, and ongoing management.",

      deliverTitle: "How Our SEO Services Work",
      deliverySteps: [
        { title: "Audit — SEO Audit & Research", desc: "Analyze website performance, competitors, keywords, technical issues, and content gaps." },
        { title: "Optimize — Technical & Content SEO", desc: "Implement fixes, on-page improvements, content optimization, and internal linking." },
        { title: "Grow — Monitoring & SEO Growth", desc: "Track rankings and traffic while continuously refining strategies." },
      ],

      whyChooseTitle: "Search Engine Optimization Strategy",
      whyChoose: [
        { title: "Sustainable growth", desc: "Long-term strategy, not short-term spikes." },
        { title: "Full-stack SEO", desc: "Technical + on-page + content working together." },
        { title: "Measurable tracking", desc: "Rankings, traffic, and performance monitoring." },
      ],

      frameworkTitle: "Search Engine Optimization Strategy",
      frameworkSubtitle: "A long-term SEO approach focused on sustainable growth.",
      beforePoints: [
        "Low search visibility",
        "Inconsistent traffic",
        "Poor keyword rankings",
      ],
      afterPoints: [
        "Higher Google rankings",
        "Consistent organic traffic",
        "Stronger brand authority",
      ],

      contactTitle: "Talk to Our SEO Experts",
      contactSubtitle:
        "Ready to improve rankings and grow organic traffic? Speak with our SEO specialists today.",
      messageLabel: "Tell us about your SEO goals...",
      submitLabel: "Request SEO Consultation",
    },

    "performance-marketing": {
      heroTitle: "Performance Marketing Services",
      heroSubtitle:
        "Zora Global AI is a performance marketing agency delivering high-impact Google Ads and Meta Ads campaigns to generate qualified leads and measurable ROI.",
      primaryCta: "Launch Paid Campaigns",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Google Ads & Search Marketing", desc: "Search, display, remarketing, and conversion-focused PPC strategies." },
        { title: "Meta Ads & Social Advertising", desc: "Facebook and Instagram ad campaigns with targeting, creative testing, and conversion optimization." },
        { title: "Conversion & ROI Optimization", desc: "Optimize creatives, landing pages, bidding, and funnels to improve ROI and lower acquisition costs." },
      ],

      overview:
        "Our performance marketing services focus on Google Ads, Facebook/Instagram Ads, and scalable paid acquisition models designed to increase conversions and maximize return on ad spend.",

      deliverTitle: "How Our Performance Marketing Works",
      deliverySteps: [
        { title: "Plan — Audience & Funnel Strategy", desc: "Research audiences, funnels, and competitors to build a data-driven paid advertising strategy." },
        { title: "Launch — Ads Execution & Optimization", desc: "Launch campaigns with optimized creatives, targeting, and bidding models." },
        { title: "Scale — ROI Tracking & Growth", desc: "Track CTR, CPA, ROAS and scale winning campaigns for consistent lead generation." },
      ],

      whyChooseTitle: "Performance Marketing Framework",
      whyChoose: [
        { title: "ROI-focused", desc: "Campaigns optimized for measurable growth and efficiency." },
        { title: "Continuous optimization", desc: "Iterate creatives, funnels, and bids to improve performance." },
        { title: "Scalable lead flow", desc: "Scale what works to create predictable results." },
      ],

      frameworkTitle: "Performance Marketing Framework",
      frameworkSubtitle: "A results-driven advertising model focused on measurable growth.",
      beforePoints: [
        "Low lead volume",
        "High acquisition costs",
        "Unpredictable marketing results",
      ],
      afterPoints: [
        "Consistent lead flow",
        "Lower CPA",
        "Predictable ROI",
      ],

      contactTitle: "Start Performance Marketing",
      contactSubtitle:
        "Looking to generate leads fast with Google Ads and Meta Ads? Talk to our performance marketing experts today.",
      messageLabel: "Tell us about your advertising goals...",
      submitLabel: "Request Campaign Setup",
    },

    "social-media-branding": {
      heroTitle: "Social Media Management Services",
      heroSubtitle:
        "Zora Global AI provides end-to-end social media management services to help brands build awareness, engage audiences, and grow their online presence across major platforms.",
      primaryCta: "Grow on Social Media",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "Social Media Strategy", desc: "Data-driven strategies aligned with brand goals, audience behavior, and platform best practices." },
        { title: "Content Creation & Scheduling", desc: "Creative posts, visuals, captions, and consistent scheduling across platforms." },
        { title: "Community & Campaign Management", desc: "Active engagement, moderation, and campaign execution to build trust and loyalty." },
      ],

      overview:
        "Our social media management services connect businesses with their audience through consistent content, strategic campaigns, and active engagement, driving brand visibility and measurable growth.",

      deliverTitle: "Our Social Media Management Process",
      deliverySteps: [
        { title: "Research — Audience & Platform Analysis", desc: "Analyze audience behavior, competitors, and platform insights to define the right content strategy." },
        { title: "Execution — Content Publishing & Engagement", desc: "Publish content, manage interactions, and actively engage with audiences." },
        { title: "Optimization — Analytics & Performance Improvement", desc: "Track metrics and continuously optimize campaigns for growth." },
      ],

      whyChooseTitle: "From Posts to Performance",
      whyChoose: [
        { title: "Consistent presence", desc: "A repeatable process to maintain brand visibility." },
        { title: "Engagement growth", desc: "Community management that builds trust and loyalty." },
        { title: "Measurable insights", desc: "Analytics-driven improvements to campaigns." },
      ],

      frameworkTitle: "From Posts to Performance",
      frameworkSubtitle: "Turning social activity into measurable brand growth.",
      beforePoints: [
        "Inconsistent posting",
        "Low engagement rates",
        "Limited brand visibility",
        "No clear strategy",
      ],
      afterPoints: [
        "Consistent brand presence",
        "Higher engagement",
        "Audience growth",
        "Measurable ROI",
      ],

      contactTitle: "Talk to Our Social Media Experts",
      contactSubtitle:
        "Ready to grow your brand on social media? Our experts are here to help.",
      messageLabel: "Tell us about your social media goals...",
      submitLabel: "Request Social Media Consultation",
    },

    "lead-generation-campaigns": {
      heroTitle: "Lead Design & Product Experience Strategy",
      heroSubtitle:
        "Zora Global AI provides senior-level design leadership to help organizations craft meaningful digital experiences — bridging business vision, user needs, and scalable design systems.",
      primaryCta: "Explore Our Approach",
      secondaryCta: "Talk to Us",

      topBlocks: [
        { title: "UX Strategy & Research", desc: "User research, journey mapping, usability testing, and insight synthesis for evidence-based design decisions." },
        { title: "Product & Interaction Design", desc: "End-to-end product design: information architecture, interaction design, and refined UI." },
        { title: "Design Systems & Governance", desc: "Scalable design systems that improve consistency, speed, and cross-team collaboration." },
      ],

      overview:
        "Our lead design services go beyond visuals. We guide product teams through research, strategy, and execution so every design decision supports long-term business outcomes and exceptional user experiences.",

      deliverTitle: "How We Lead Design Initiatives",
      deliverySteps: [
        { title: "Discovery — Business & User Alignment", desc: "Stakeholder alignment, success metrics definition, and deep user understanding to form a strong design foundation." },
        { title: "Design — Experience & System Design", desc: "Prototyping, interaction design, and system creation that balance creativity, usability, and feasibility." },
        { title: "Delivery — Collaboration & Execution", desc: "Collaborate with engineering and product teams to maintain design integrity through implementation." },
        { title: "Scale — Optimization & Growth", desc: "Continuous improvement, audits, and system evolution to support long-term product growth." },
      ],

      whyChooseTitle: "Why Choose Our Lead Design Services",
      whyChoose: [
        { title: "Senior Design Leadership", desc: "Embedded design leadership that guides teams, mentors designers, and drives strategic decisions." },
        { title: "Business-Driven Design", desc: "Design decisions aligned with measurable business outcomes, not just aesthetics." },
        { title: "Scalable Design Systems", desc: "Systems and processes built to scale with your product and organization." },
      ],

      contactTitle: "Work With Our Lead Designers",
      contactSubtitle:
        "Elevate your product experience with strategic design leadership. Let’s discuss how we can support your design and product goals.",
      messageLabel: "Tell us about your product or design challenge...",
      submitLabel: "Start a Conversation",
    },
  },
};