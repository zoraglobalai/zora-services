import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import zoraLogo from "../assets/zora-logo-redesign.png";

const Navbar: React.FC = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownCloseTimeoutRef = useRef<number | null>(null);

  const navRef = useRef<HTMLElement | null>(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

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

  useEffect(() => {
    return () => {
      if (dropdownCloseTimeoutRef.current !== null) {
        window.clearTimeout(dropdownCloseTimeoutRef.current);
      }
    };
  }, []);

  const closeAll = () => {
    if (dropdownCloseTimeoutRef.current !== null) {
      window.clearTimeout(dropdownCloseTimeoutRef.current);
      dropdownCloseTimeoutRef.current = null;
    }
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  const openDropdown = () => {
    if (dropdownCloseTimeoutRef.current !== null) {
      window.clearTimeout(dropdownCloseTimeoutRef.current);
      dropdownCloseTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const scheduleDropdownClose = () => {
    if (dropdownCloseTimeoutRef.current !== null) {
      window.clearTimeout(dropdownCloseTimeoutRef.current);
    }

    dropdownCloseTimeoutRef.current = window.setTimeout(() => {
      setDropdownOpen(false);
      dropdownCloseTimeoutRef.current = null;
    }, 180);
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

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 text-white transition-all duration-300 bg-gradient-to-r from-black via-purple-550 to-purple-950 backdrop-blur-lg border-b border-purple-500/30"
    >
      <div className="w-full px-10 py-3 md:py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            closeAll();
            scrollTop();
          }}
        >
          <img
            src={zoraLogo}
            alt="ZoraGlobalAI"
            className="h-12 md:h-14 w-auto object-contain"
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

          {/* BLOG ADDED */}
          <Link
            to="/blog"
            className={`${desktopBtn} ${location.pathname.startsWith("/blog") ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Blog
          </Link>

          <div
            className="relative pb-3 -mb-3"
            ref={dropdownRef}
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleDropdownClose}
          >
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

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-0 w-52 bg-[#1a1a40]/90 backdrop-blur-xl rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden">
                <Link
                  to="/services/it"
                  className="block px-4 py-3 hover:bg-purple-600/20 transition"
                  onClick={closeAll}
                >
                  IT Services
                </Link>
                <Link
                  to="/services/non-it"
                  className="block px-4 py-3 hover:bg-purple-600/20 transition"
                  onClick={closeAll}
                >
                  Non-IT Services
                </Link>
              </div>
            )}
          </div>

          

          <a
            href="https://www.zoraai.us/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${desktopBtn} ${desktopBtnInactive}`}
          >
            Products
          </a>

          <Link
            to="/contact"
            className={`${desktopBtn} ${location.pathname === "/contact" ? desktopBtnActive : desktopBtnInactive}`}
          >
            Contact Us
          </Link>

          <Link
            to="/book-appointment"
            className="bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <button
          className="md:hidden relative h-11 w-11 rounded-full"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#1a1a40]/88 backdrop-blur-xl px-6 py-6 space-y-3 border-t border-white/10"
          >
            <Link to="/" className={`${mobileBtn} ${mobileBtnInactive}`}>
              Home
            </Link>

            <Link to="/about" className={`${mobileBtn} ${mobileBtnInactive}`}>
              About
            </Link>

            {/* BLOG ADDED */}
            <Link to="/blog" className={`${mobileBtn} ${mobileBtnInactive}`}>
              Blog
            </Link>

            <Link to="/services" className={`${mobileBtn} ${mobileBtnInactive}`}>
              Services
            </Link>

            <Link to="/contact" className={`${mobileBtn} ${mobileBtnInactive}`}>
              Contact Us
            </Link>

            <Link
              to="/book-appointment"
              className="block bg-violet-500 text-white px-4 py-3 rounded-lg text-center text-base font-semibold"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
