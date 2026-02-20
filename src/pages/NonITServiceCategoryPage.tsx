// src/pages/NonITServiceCategoryPage.tsx
import React, { useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { NON_IT_SERVICE_CATEGORIES } from "../data/nonItServicesData";

const NonITServiceCategoryPage: React.FC = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const category = useMemo(
    () => NON_IT_SERVICE_CATEGORIES.find((c) => c.slug === categorySlug),
    [categorySlug]
  );

  const [activeSlug, setActiveSlug] = useState<string>("");

  const activeItem = useMemo(() => {
    if (!category) return null;
    const initial = category.items?.[0]?.slug ?? "";
    const slugToUse = activeSlug || initial;
    return (
      category.items.find((i) => i.slug === slugToUse) ??
      category.items[0] ??
      null
    );
  }, [category, activeSlug]);

  if (!category) return <Navigate to="/services/non-it" replace />;

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-blue-700/16 blur-[180px] rounded-full top-[-280px] left-[-280px]" />
        <div className="absolute w-[900px] h-[900px] bg-purple-700/16 blur-[180px] rounded-full bottom-[-320px] right-[-320px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="pt-28 pb-14 px-6 border-b border-white/10">
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
            <span className="text-gray-200">{category.title}</span>
          </div>

          <div className="rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl">
            <div className="relative px-8 py-12 md:px-12 md:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.18),transparent_55%)]" />
              <div className="relative">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  {category.title}
                </h1>
                <p className="text-gray-300 mt-4 max-w-4xl text-lg leading-relaxed">
                  {category.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Master-detail */}
      <div className="px-6 py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10">
          {/* LEFT NAV */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h2 className="text-lg font-bold text-blue-200">Services</h2>

              <div className="mt-5 space-y-4">
                {category.items.map((item) => {
                  const isActive = item.slug === activeItem?.slug;
                  return (
                    <button
                      key={item.slug}
                      onClick={() => setActiveSlug(item.slug)}
                      className={[
                        "w-full text-left px-5 py-4 rounded-2xl border transition",
                        isActive
                          ? "bg-white text-[#050816] border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                          : "bg-white/5 text-gray-200 border-white/10 hover:bg-white/10",
                      ].join(" ")}
                    >
                      <div className="font-semibold">{item.title}</div>
                      <div
                        className={
                          isActive
                            ? "text-[#0b1220]/80 mt-1 text-sm"
                            : "text-gray-400 mt-1 text-sm"
                        }
                      >
                        {item.shortDesc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="lg:col-span-8">
            <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
              <div className="relative">
                <div className="h-52 md:h-60 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.30),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.22),transparent_55%)]" />
                <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
              </div>

              <div className="p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {activeItem?.title}
                </h2>
                <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                  {activeItem?.shortDesc}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {(activeItem?.tags ?? []).map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-blue-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      activeItem &&
                      navigate(
                        `/services/non-it/${category.slug}/${activeItem.slug}`
                      )
                    }
                    className="px-8 py-4 rounded-2xl font-semibold bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_40px_rgba(37,99,235,0.35)]"
                  >
                    View Service
                  </button>

                  <Link
                    to="/book-appointment"
                    className="px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    Book Appointment
                  </Link>

                  <Link
                    to="/services/non-it"
                    className="px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    Back to Non-IT
                  </Link>
                </div>
              </div>
            </div>

            {/* Extra section */}
            <div className="mt-10 rounded-3xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-xl font-bold text-purple-200">
                How this page works
              </h3>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Select a service on the left to preview details here. Click{" "}
                <span className="text-gray-200 font-semibold">View Service</span>{" "}
                to open the dedicated detailed page (long content + contact
                form).
              </p>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default NonITServiceCategoryPage;