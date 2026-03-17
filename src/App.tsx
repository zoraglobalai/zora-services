import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieNotice from "./components/CookieNotice";
import ScrollToTop from "./components/ScrollToTop";

/* ================= MAIN PAGES ================= */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));

/* ================= BLOG ================= */
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

/* ================= IT SERVICES ================= */
const ITServices = lazy(() => import("./pages/ITServices"));
const ITServiceCategoryPage = lazy(() => import("./pages/ITServiceCategoryPage"));
const ITServiceItemPage = lazy(() => import("./pages/ITServiceItemPage"));

/* ================= NON-IT SERVICES ================= */
const NonITServices = lazy(() => import("./pages/NonITServices"));
const NonITServiceCategoryPage = lazy(() => import("./pages/NonITServiceCategoryPage"));
const NonITServiceItemPage = lazy(() => import("./pages/NonITServiceItemPage"));

const App: React.FC = () => {
  return (
    <Router>

      <ScrollToTop />

      <div className="bg-[#0b0618] text-white min-h-screen flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          <Suspense fallback={null}>
          <Routes>

            {/* ---------- MAIN PAGES ---------- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* ---------- BLOG ---------- */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* ---------- IT SERVICES ---------- */}
            <Route path="/services/it" element={<ITServices />} />
            <Route
              path="/services/it/:categorySlug"
              element={<ITServiceCategoryPage />}
            />
            <Route
              path="/services/it/:categorySlug/:itemSlug"
              element={<ITServiceItemPage />}
            />

            {/* ---------- NON-IT SERVICES ---------- */}
            <Route path="/services/non-it" element={<NonITServices />} />
            <Route
              path="/services/non-it/:categorySlug"
              element={<NonITServiceCategoryPage />}
            />
            <Route
              path="/services/non-it/:categorySlug/:itemSlug"
              element={<NonITServiceItemPage />}
            />

            {/* ---------- OTHER ---------- */}
            <Route path="/book-appointment" element={<BookAppointment />} />

          </Routes>
          </Suspense>
        </main>

        {/* FOOTER + GLOBAL COMPONENTS */}
        <Footer />
        <CookieNotice />

      </div>
    </Router>
  );
};

export default App;