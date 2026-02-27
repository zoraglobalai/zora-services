const PremiumStats: React.FC = () => {
  return (
    <div className="relative mb-44">
      <div
        className="absolute inset-0 -z-10 rounded-[48px] blur-[80px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(42,237,243,0.10), rgba(125,69,150,0.10), rgba(124,58,237,0.08))",
        }}
      />

      <div className="grid md:grid-cols-4 gap-12">
        {[
          { number: "150+", label: "Enterprise Clients" },
          { number: "400+", label: "AI Projects Delivered" },
          { number: "99%", label: "Client Satisfaction" },
          { number: "24/7", label: "Global Operations" },
        ].map((stat, index) => (
          <div key={index} className="relative group">
            <div
              className="absolute -inset-1 rounded-3xl blur opacity-20 group-hover:opacity-45 transition"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(42,237,243,0.45), rgba(125,69,150,0.45), rgba(124,58,237,0.35))",
              }}
            />
            <div className="relative bg-[#0f0b1d]/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center transform group-hover:-translate-y-2 transition duration-500">
              <h3 className="text-6xl font-serif font-extrabold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-white/75 mt-4">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumStats;
