// src/components/about/Leadership.tsx
import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Leadership: React.FC = () => {
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Meet Our Leadership
        </h2>

        <p className="text-purple-200 mt-4 max-w-2xl mx-auto">
          Vision-driven leaders shaping the future of AI innovation, enterprise
          transformation, and global digital growth.
        </p>
      </div>

      {/* ✅ Equal height cards */}
      <div className="grid md:grid-cols-2 gap-12 items-stretch">

        {/* ================= MANAGING DIRECTOR (NOW FIRST) ================= */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-purple-700 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-40 transition" />

          <div className="relative h-full flex flex-col bg-[#1b1033]/90 backdrop-blur-3xl border border-purple-700/30 rounded-[32px] p-10 text-center transform group-hover:-translate-y-3 transition duration-500 shadow-[0_0_40px_rgba(124,58,237,0.25)]">
            
            {/* Image */}
            <div className="relative w-44 h-44 mx-auto mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-600/35 blur-2xl rounded-full" />
              <img
                src="/founders/md.jpg"
                alt="Managing Director"
                className="w-full h-full object-cover object-center rounded-full border border-purple-500/40 shadow-[0_0_25px_rgba(124,58,237,0.35)] relative"
              />
            </div>

            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">Dr. Adv. S. Ansar Ali
Managing Director | Corporate & Legal Advisor</h3>
            <p className="text-purple-400 mb-4">Managing Director</p>

            <p className="text-purple-200 text-sm leading-relaxed">
              Leads operational excellence and execution strategy, ensuring
              delivery precision, innovation continuity, and long-term enterprise
              partnerships while driving sustainable organizational growth and
              performance excellence across global initiatives.
            </p>

            {/* Social Icons */}
            <div className="mt-auto pt-6 flex justify-center gap-6">
              <a
                href="#"
                aria-label="MD LinkedIn"
                className="text-purple-200/80 hover:text-purple-100 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="#"
                aria-label="MD Twitter"
                className="text-purple-200/80 hover:text-purple-100 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>

              <a
                href="mailto:business@zora.com"
                aria-label="MD Email"
                className="text-purple-200/80 hover:text-purple-100 transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* ================= CEO (NOW SECOND) ================= */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-purple-700 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-40 transition" />

          <div className="relative h-full flex flex-col bg-[#1b1033]/90 backdrop-blur-3xl border border-purple-700/30 rounded-[32px] p-10 text-center transform group-hover:-translate-y-3 transition duration-500 shadow-[0_0_40px_rgba(124,58,237,0.25)]">
            
            {/* Image */}
            <div className="relative w-44 h-44 mx-auto mb-8 flex items-center justify-center pl-4">
              <div className="absolute inset-0 bg-purple-600/35 blur-2xl rounded-full" />
              <img
                src="/founders/ceo.jpg"
                alt="CEO"
                className="w-full h-full object-cover object-left rounded-full border border-purple-500/40 shadow-[0_0_25px_rgba(124,58,237,0.35)] relative"
              />
            </div>

            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">ASHIK ALI S</h3>
            <p className="text-purple-400 mb-4">Chief Executive Officer</p>

            <p className="text-purple-200 text-sm leading-relaxed">
              Driving strategic vision and innovation while leading enterprise AI
              transformation through scalable intelligent systems and
              future-focused technology leadership.
            </p>

            {/* Social Icons */}
            <div className="mt-auto pt-6 flex justify-center gap-6">
              <a
                href="#"
                aria-label="CEO LinkedIn"
                className="text-purple-200/80 hover:text-purple-100 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="#"
                aria-label="CEO Twitter"
                className="text-purple-200/80 hover:text-purple-100 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>

              <a
                href="mailto:business@zora.com"
                aria-label="CEO Email"
                className="text-purple-200/80 hover:text-purple-100 transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="h-10" />
    </div>
  );
};

export default Leadership;
