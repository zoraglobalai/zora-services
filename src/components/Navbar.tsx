import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ✅ NEW: navbar ref for measuring height
  const navRef = useRef<HTMLElement | null>(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  // ✅ IMPORTANT: useLayoutEffect so height is set BEFORE paint
  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const setVar = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };

    setVar();

    const ro = new ResizeObserver(setVar);
    ro.observe(el);

    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeAll = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  const desktopBtn =
    "group relative px-7 py-2.5 font-bold rounded-full block text-sm transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-[0.99] backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black after:absolute after:left-1/2 after:top-[1px] after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-violet-200/90 after:opacity-0 after:transition-all after:duration-300 group-hover:after:w-[72%] group-hover:after:opacity-100";
  const desktopBtnInactive =
    "text-[#fffcf0] bg-[#fffcf0]/14 hover:bg-[#fffcf0]/22 border border-white/30 [box-shadow:inset_0_2px_0_rgba(255,255,255,0.52),0_12px_28px_rgba(0,0,0,0.32)] hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.58),0_16px_34px_rgba(0,0,0,0.34),0_0_22px_rgba(168,85,247,0.38)]";
  const desktopBtnActive =
    "-translate-y-[2px] bg-[#fffcf0] text-black border border-white/75 [box-shadow:inset_0_2px_0_rgba(255,255,255,0.72),0_12px_24px_rgba(0,0,0,0.28),0_0_24px_rgba(167,139,250,0.45)] after:w-[72%] after:opacity-100";

  const mobileBtn =
    "flex items-center gap-3 px-5 py-3 rounded-full text-base font-semibold transition-all transform-gpu active:scale-[0.99] backdrop-blur-md min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90";
  const mobileBtnInactive =
    "text-[#fffcf0] bg-[#fffcf0]/14 border border-white/35 shadow-[0_10px_24px_rgba(0,0,0,0.3)]";
  const mobileBtnActive = "bg-[#fffcf0] text-black border border-white/75 shadow-[0_8px_20px_rgba(0,0,0,0.25)]";

  return (
    <nav ref={navRef} className="bg-black/90 backdrop-blur-md text-white fixed w-full z-50">
      <div className="w-full px-10 py-5 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            closeAll();
            scrollTop();
          }}
        >
          <img
            src="/logo.png"
            alt="ZoraGlobalAI"
            className="h-12 w-30 object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center space-x-4 ml-4 lg:ml-6">
          <Link
            to="/"
            className={`${desktopBtn} ${location.pathname === "/" ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${desktopBtn} ${location.pathname === "/about" ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            About
          </Link>

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                to="/services"
                className={`${desktopBtn} ${location.pathname.startsWith("/services") ? desktopBtnActive : desktopBtnInactive}`}
                onClick={() => {
                  setDropdownOpen(false);
                  scrollTop();
                }}
              >
                Services
              </Link>
            </div>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#1a1a40]/90 backdrop-blur-xl rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden">
                <Link
                  to="/services/it"
                  className="block px-4 py-3 hover:bg-purple-600/20 transition focus-visible:outline-none focus-visible:bg-purple-600/25"
                  onClick={() => {
                    closeAll();
                    scrollTop();
                  }}
                >
                  IT Services
                </Link>
                <Link
                  to="/services/non-it"
                  className="block px-4 py-3 hover:bg-purple-600/20 transition focus-visible:outline-none focus-visible:bg-purple-600/25"
                  onClick={() => {
                    closeAll();
                    scrollTop();
                  }}
                >
                  Non-IT Services
                </Link>
              </div>
            )}
          </div>

          {/* ✅ UPDATED: Products opens external site */}
          <a
            href="https://www.zoraai.us/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${desktopBtn} ${desktopBtnInactive}`}
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Products
          </a>

          <Link
            to="/contact"
            className={`${desktopBtn} ${location.pathname === "/contact" ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Contact Us
          </Link>

          <Link
            to="/book-appointment"
            className="bg-violet-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform-gpu shadow-[0_4px_0px_rgb(0,0,0,0.25)] hover:bg-violet-400 hover:-translate-y-0.5 hover:shadow-[0_6px_0px_rgb(0,0,0,0.22),0_0_26px_rgba(192,132,252,0.55)] active:translate-y-0.5 active:shadow-[0_1px_0px_rgb(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90 animate-[navPulse_3s_ease-in-out_infinite]"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Book Appointment
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden relative h-11 w-11 rounded-full text-[#fff7e6] transition-all duration-300 shadow-[0_2px_0px_rgb(0,0,0,0.2)] border border-white/60 bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90"
          onClick={() => {
            setDropdownOpen(false);
            setMenuOpen((v) => !v);
          }}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute left-1/2 top-[33%] h-0.5 w-5 -translate-x-1/2 rounded bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-1/2 top-[67%] h-0.5 w-5 -translate-x-1/2 rounded bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#1a1a40]/88 backdrop-blur-xl px-6 py-6 space-y-3 border-t border-white/10"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {[
              {
                label: "Home",
                to: "/",
                active: location.pathname === "/",
              },
              {
                label: "About",
                to: "/about",
                active: location.pathname === "/about",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 * idx, duration: 0.24 }}
              >
                <Link
                  to={item.to}
                  className={`${mobileBtn} ${item.active ? mobileBtnActive : mobileBtnInactive}`}
                  onClick={() => {
                    closeAll();
                    scrollTop();
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08, duration: 0.24 }}
            >
              <div>
                <div className="flex items-center justify-between w-full gap-2">
                  <Link
                    to="/services"
                    className={`${mobileBtn} w-full ${location.pathname.startsWith("/services") ? mobileBtnActive : mobileBtnInactive}`}
                    onClick={() => {
                      closeAll();
                      scrollTop();
                    }}
                  >
                    Services
                  </Link>
                </div>

                <motion.div
                  className="ml-4 mt-3 space-y-2"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/services/it"
                    className={`${mobileBtn} ${location.pathname === "/services/it" ? mobileBtnActive : mobileBtnInactive}`}
                    onClick={() => {
                      closeAll();
                      scrollTop();
                    }}
                  >
                    IT Services
                  </Link>
                  <Link
                    to="/services/non-it"
                    className={`${mobileBtn} ${location.pathname === "/services/non-it" ? mobileBtnActive : mobileBtnInactive}`}
                    onClick={() => {
                      closeAll();
                      scrollTop();
                    }}
                  >
                    Non-IT Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12, duration: 0.24 }}>
              <a
                href="https://www.zoraai.us/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${mobileBtn} ${mobileBtnInactive}`}
                onClick={() => {
                  closeAll();
                  scrollTop();
                }}
              >
                Products
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.16, duration: 0.24 }}>
              <Link
                to="/contact"
                className={`${mobileBtn} ${location.pathname === "/contact" ? mobileBtnActive : mobileBtnInactive}`}
                onClick={() => {
                  closeAll();
                  scrollTop();
                }}
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.24 }}>
              <Link
                to="/book-appointment"
                className="block bg-violet-500 text-white px-4 py-3 rounded-lg text-center transition-all duration-300 transform-gpu shadow-[0_3px_0px_rgb(0,0,0,0.25)] hover:bg-violet-400 active:scale-[0.98] active:translate-y-0.5 active:shadow-[0_1px_0px_rgb(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90 animate-[navPulse_3s_ease-in-out_infinite]"
                onClick={() => {
                  closeAll();
                  scrollTop();
                }}
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @keyframes navPulse {
          0%, 100% { box-shadow: 0 4px 0 rgba(0,0,0,0.25), 0 0 0 rgba(192,132,252,0.0); }
          50% { box-shadow: 0 4px 0 rgba(0,0,0,0.25), 0 0 24px rgba(192,132,252,0.5); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
