import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import zoraLogo from "../assets/zora-logo-redesign.webp";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (navRef.current?.contains(target)) return;
      setMenuOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

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

  const desktopBtn =
    "group relative px-7 py-2.5 font-bold rounded-full block text-sm transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-[0.99] backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black after:absolute after:left-1/2 after:top-[1px] after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-violet-200/90 after:opacity-0 after:transition-all after:duration-300 group-hover:after:w-[72%] group-hover:after:opacity-100";
  const desktopBtnInactive =
    "text-[#fffcf0] bg-[#fffcf0]/14 hover:bg-[#fffcf0]/22 border border-white/30 [box-shadow:inset_0_2px_0_rgba(255,255,255,0.52),0_12px_28px_rgba(0,0,0,0.32)] hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.58),0_16px_34px_rgba(0,0,0,0.34),0_0_22px_rgba(168,85,247,0.38)]";
  const desktopBtnActive =
    "-translate-y-[2px] bg-[#fffcf0] text-black border border-white/75 [box-shadow:inset_0_2px_0_rgba(255,255,255,0.72),0_12px_24px_rgba(0,0,0,0.28),0_0_24px_rgba(167,139,250,0.45)] after:w-[72%] after:opacity-100";
  const mobileBtn =
    "flex items-center justify-center gap-3 px-5 py-3.5 rounded-full text-lg font-bold tracking-[0.01em] whitespace-nowrap transition-all transform-gpu active:scale-[0.99] backdrop-blur-md min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90";
  const mobileBtnInactive =
    "text-[#fffcf0] bg-[#fffcf0]/14 border border-white/35 shadow-[0_10px_24px_rgba(0,0,0,0.3)]";

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 text-white transition-all duration-300 bg-gradient-to-r from-black via-purple-550 to-purple-950 backdrop-blur-lg border-b border-purple-500/30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
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
        <div className="hidden lg:flex items-center space-x-2 md:space-x-3 lg:space-x-4 ml-2 md:ml-3 lg:ml-6">

          <Link
            to="/"
            className={`${desktopBtn} ${location.pathname === "/" ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              scrollTop();
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${desktopBtn} ${location.pathname === "/about" ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
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
              scrollTop();
            }}
          >
            Blog
          </Link>

          <Link
            to="/services"
            className={`${desktopBtn} ${location.pathname.startsWith("/services") ? desktopBtnActive : desktopBtnInactive}`}
            onClick={() => {
              scrollTop();
            }}
          >
            Services
          </Link>

          

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
            className="bg-violet-500 text-white font-bold text-[11px] lg:text-xs xl:text-sm px-2.5 lg:px-3 xl:px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="lg:hidden relative h-11 w-11 rounded-full text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1a1a40]/88 backdrop-blur-xl px-6 py-6 space-y-3 border-t border-white/10 md:px-8 md:py-7">
          <Link
            to="/"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            About
          </Link>
          <Link
            to="/blog"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            Blog
          </Link>
          <Link
            to="/services"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            Services
          </Link>
          <a
            href="https://www.zoraai.us/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
          >
            Products
          </a>
          <Link
            to="/contact"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={scrollTop}
          >
            Contact Us
          </Link>
          <Link
            to="/book-appointment"
            className="block bg-violet-500 text-white px-5 py-3.5 rounded-lg text-center text-lg font-extrabold tracking-[0.01em] whitespace-nowrap md:w-fit md:min-w-[220px]"
            onClick={scrollTop}
          >
            <span className="font-bold">Book Appointment</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
