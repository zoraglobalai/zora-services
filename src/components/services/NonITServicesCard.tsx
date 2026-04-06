import React from "react";
import { Link } from "react-router-dom";

const NonITServicesCard: React.FC = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-700 to-blue-700 rounded-[50px] blur-2xl opacity-40 group-hover:opacity-70 transition"></div>

      <div className="relative bg-[#0a041f]/80 backdrop-blur-3xl border border-purple-700/40 rounded-[50px] p-8 sm:p-10 md:p-16 shadow-[0_0_80px_rgba(124,58,237,0.5)]">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ✅ IMAGE FIRST ON MOBILE */}
          <div className="order-1 md:order-1 h-[260px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden border border-purple-600/30 shadow-inner relative">
            <img
              src="/services/non-it-services.webp"
              alt="Non IT Services"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020010]/70 to-transparent"></div>

            <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 text-purple-300 text-base sm:text-xl font-semibold">
              Strategic Business Excellence
            </div>
          </div>

          <div className="order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-purple-400">
              Non-IT Services
            </h2>

            <p className="text-gray-400 text-base sm:text-lg mb-6 md:mb-8 leading-relaxed">
              Business-focused services designed to accelerate growth,
              strengthen operations, build brands and scale teams.
            </p>

            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <li>◆ Business & Strategy Consulting</li>
              <li>◆ Branding & Creative Services</li>
              <li>◆ Accounting & Financial Operations</li>
              <li>◆ Digital Marketing Services</li>
              <li>◆ Staff Augmentation & Workforce Solutions</li>
            </ul>

            <Link
              to="/services/non-it"
              className="inline-block mt-8 sm:mt-10 px-10 sm:px-12 py-4 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 to-violet-700 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(124,58,237,0.8)]"
            >
              Explore Non-IT Services
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NonITServicesCard;
