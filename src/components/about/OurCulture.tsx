const OurCulture: React.FC = () => {
  return (
    <div className="mt-44 relative">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-[-10%] top-20 w-[620px] h-[620px] blur-[190px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(42,237,243,0.12), transparent 65%)",
          }}
        />
        <div
          className="absolute right-[-10%] bottom-0 w-[620px] h-[620px] blur-[190px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(125,69,150,0.14), transparent 65%)",
          }}
        />
      </div>

      <div className="text-center mb-14">
        <h2 className="text-5xl font-serif font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Our Culture
        </h2>

        <p className="text-white/75 mt-6 max-w-3xl mx-auto leading-relaxed">
          We operate with technical rigor, architectural clarity, and a bias
          toward measurable execution. Innovation at Zora Global AI is
          intentional driven by research, discipline, and accountability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
        {[
          {
            title: "Deep Technical Ownership",
            desc: "Engineering responsibility and precision guide every solution we build.",
          },
          {
            title: "Executive-Level Thinking",
            desc: "Technology decisions aligned directly with business strategy.",
          },
          {
            title: "Long-Term Partnerships",
            desc: "We grow with clients through sustained collaboration and trust.",
          },
          {
            title: "Responsible AI Governance",
            desc: "Security, ethics, and compliance embedded into every AI system.",
          },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <div
              className="absolute -inset-1 rounded-[28px] blur-xl opacity-25 group-hover:opacity-55 transition duration-500"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(42,237,243,0.55), rgba(125,69,150,0.50), rgba(124,58,237,0.45))",
              }}
            />

            <div className="relative bg-[#0f0b1d]/55 border border-white/10 backdrop-blur-3xl rounded-[28px] p-8 overflow-hidden transform transition duration-500 group-hover:-translate-y-3">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(42,237,243,0.12),transparent)] translate-x-[-120%] group-hover:translate-x-[120%]" />

              <div className="relative mb-6 inline-flex items-center gap-2">
                <span
                  className="text-sm font-semibold tracking-wider"
                  style={{ color: "#2aedf3" }}
                >
                  0{index + 1}
                </span>
                <span
                  className="h-[1px] w-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(42,237,243,0.95), rgba(125,69,150,0.55), transparent)",
                  }}
                />
              </div>

              <h3 className="relative text-xl font-serif font-extrabold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                {item.title}
              </h3>

              <p className="relative text-white/75 mt-4 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div
                className="relative mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2aedf3, #7d4596, #7c3aed)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCulture;
