const WhoWeAre: React.FC = () => {
  return (
    <div className="relative mb-44">
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-24 w-[70%] h-[1px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, rgba(42,237,243,0.35), transparent)",
        }}
      />

      <div
        className="absolute -inset-1 rounded-[40px] blur-2xl opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(42,237,243,0.18), rgba(125,69,150,0.20), rgba(124,58,237,0.10))",
        }}
      />

      <div className="relative bg-[#121026]/70 backdrop-blur-3xl border border-white/10 rounded-[40px] p-16 shadow-[0_0_70px_rgba(125,69,150,0.18)]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-serif font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Who We Are
            </h2>

            <p className="text-white/80 text-lg leading-relaxed">
              At <strong>Zora Global AI Technologies Pvt Ltd</strong>, we
              provide{" "}
              <strong>
                48 professional services delivered within 48 hours
              </strong>{" "}
              using intelligent AI automation frameworks designed to ensure
              fast, accurate, and complete end-to-end business solutions.
            </p>

            <p className="text-white/75 leading-relaxed">
              Our approach integrates advanced artificial intelligence,
              enterprise automation, and strategic consulting to help
              organizations scale efficiently while maintaining operational
              clarity and measurable business outcomes.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {["Delivery Speed", "Security by Design", "Outcome Focused"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/75"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="space-y-8">
            {[
              "AI & Machine Learning Systems",
              "Enterprise Automation Architecture",
              "Cloud-Native Infrastructure",
              "Strategic Digital Consulting",
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div
                  className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(42,237,243,0.45), rgba(125,69,150,0.40), rgba(124,58,237,0.35))",
                  }}
                />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl transform group-hover:scale-[1.03] transition duration-500">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#2aedf3" }}
                    />
                    <span className="text-white/85">{item}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
