import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { client } from "../lib/sanityClient";
import PageSEO from "../components/PageSEO";
import { mockBlogPosts } from "../data/blogIndex";

interface SanityImage {
  asset: { _ref: string };
}

interface Post {
  _id: string;
  id?: number;
  website_id?: number;
  category_id?: number | string;
  author_id?: number;
  title?: string;
  slug: { current: string } | string;
  content?: string;
  description?: string;
  excerpt?: string;
  featured_image?: string;
  banner_image?: string;
  status?: string;
  visibility?: string;
  is_featured?: boolean;
  allow_comments?: boolean;
  published_at?: string;
  scheduled_at?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
  category?: string;
  mainImage?: SanityImage;
}

const POSTS_PER_PAGE = 6;
const DEFAULT_BLOG_IMAGE = "/it-hero/website.webp";
const SUPPLEMENTAL_POSTS: Post[] = mockBlogPosts.map((post) => ({
  _id: `mock-${post.slug}`,
  title: post.title,
  slug: post.slug,
  excerpt: post.description,
  content: post.sections.flatMap((section) => section.paragraphs).join("\n\n"),
  category: post.department,
  og_title: post.title,
  og_description: post.description,
  og_image: post.image,
  created_at: post.date,
  updated_at: post.date,
}));

function imageUrl(ref: string) {
  const parts = ref.split("-");
  const format = parts.pop();
  const dimensions = parts.pop();
  const id = parts.slice(1).join("-");
  return `https://cdn.sanity.io/images/o2ueytky/production/${id}-${dimensions}.${format}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getSlugValue(slug: Post["slug"]) {
  return typeof slug === "string" ? slug : slug.current;
}

function getCardTitle(post: Post) {
  return post.og_title || post.meta_title || post.title || "Untitled Blog";
}

function getCardDescription(post: Post) {
  return (
    post.og_description ||
    post.meta_description ||
    post.description ||
    post.excerpt ||
    "Explore the latest update from our blog."
  );
}

function getPrimaryDate(post: Post) {
  return post.updated_at || post.created_at || post.published_at || "";
}

function getPublishedDate(post: Post) {
  return post.published_at || "";
}

function getPostImage(post: Post) {
  if (post.og_image) {
    return post.og_image;
  }
  if (post.featured_image) {
    return post.featured_image;
  }
  if (post.banner_image) {
    return post.banner_image;
  }
  if (post.mainImage?.asset._ref) {
    return imageUrl(post.mainImage.asset._ref);
  }

  const key = (post.category ?? "").toLowerCase();

  if (key.includes("cyber")) {
    return "/it-hero/data-protection.webp";
  }
  if (key.includes("digital marketing")) {
    return "/it-hero/crm.webp";
  }
  if (key.includes("branding") || key.includes("creative")) {
    return "/it-hero/website.webp";
  }

  return DEFAULT_BLOG_IMAGE;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    client
      .fetch<Post[]>(
        `*[_type == "post"] | order(coalesce(updated_at, created_at, published_at) desc) {
          _id,
          id,
          website_id,
          category_id,
          author_id,
          title,
          slug,
          content,
          description,
          excerpt,
          featured_image,
          banner_image,
          status,
          visibility,
          is_featured,
          allow_comments,
          published_at,
          scheduled_at,
          meta_title,
          meta_description,
          meta_keywords,
          canonical_url,
          og_title,
          og_description,
          og_image,
          created_at,
          updated_at,
          deleted_at,
          category,
          mainImage { asset { _ref } }
        }`
      )
      .then(setPosts);
  }, []);

  const allPosts = useMemo(() => {
    const existingIds = new Set(posts.map((post) => post._id));
    const existingSlugs = new Set(posts.map((post) => getSlugValue(post.slug)));
    const supplemental = SUPPLEMENTAL_POSTS.filter(
      (post) =>
        !existingIds.has(post._id) &&
        !existingSlugs.has(getSlugValue(post.slug))
    );

    return [...posts, ...supplemental].sort((a, b) => {
      const dateA = new Date(getPrimaryDate(a) || 0).getTime();
      const dateB = new Date(getPrimaryDate(b) || 0).getTime();
      return dateB - dateA;
    });
  }, [posts]);

  const filtered = useMemo(
    () => allPosts.filter((post) => !post.deleted_at),
    [allPosts]
  );

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#0b0618] text-white">
      <PageSEO
        title="Blog — AI, Technology & Business Insights | Zora Global AI"
        description="Read Zora Global AI's latest articles on AI automation, software development trends, digital transformation and technology strategy for modern businesses."
        canonical="/blog"
      />

      <section className="relative overflow-hidden px-6 pb-20 pt-40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroContainer}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <motion.span
            variants={heroItem}
            className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-purple-300"
          >
            Insights & Ideas
          </motion.span>
          <motion.h1
            variants={heroItem}
            className="mb-5 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Insights That Drive
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Smarter Growth
            </span>
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl"
          >
            Explore practical articles on AI, software engineering, automation,
            digital strategy, and business transformation designed to help teams
            make better technology decisions with confidence.
          </motion.p>
        </motion.div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-32 sm:px-6 lg:px-8">
        {allPosts.length > 0 && (
          <div className="mb-10 mt-8">
            <div className="inline-flex flex-col">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Latest Blogs
              </h2>
              <span className="mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400" />
            </div>
          </div>
        )}

        {paginated.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {paginated.map((post, i) => (
                <motion.div
                  key={post._id}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  className="h-full"
                >
                  <Link
                    to={`/blog/${getSlugValue(post.slug)}`}
                    className="group flex h-full min-h-[500px] flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-2 shadow-[0_0_20px_rgba(34,211,238,0.12),0_0_34px_rgba(168,85,247,0.14),0_24px_54px_rgba(7,4,22,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-purple-500/5 hover:shadow-[0_0_24px_rgba(34,211,238,0.18),0_0_42px_rgba(236,72,153,0.2),0_30px_70px_rgba(7,4,22,0.62)]"
                  >
                    <div className="h-56 w-full overflow-hidden rounded-[22px]">
                      <img
                        src={getPostImage(post)}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-grow flex-col px-5 pb-5 pt-6 md:px-6 md:pb-6 md:pt-7">
                      <h2 className="mb-4 text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-purple-300">
                        {getCardTitle(post)}
                      </h2>
                      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-400">
                        {getCardDescription(post)}
                      </p>

                      <div className="mt-auto flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={14} className="text-purple-400" />
                          <span className="font-medium text-gray-300">
                            Published:
                          </span>
                          <span>
                            {getPublishedDate(post)
                              ? formatDate(getPublishedDate(post))
                              : "N/A"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <span className="inline-flex items-center justify-center gap-2 rounded-full border border-fuchsia-400/40 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-pink-500/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:border-fuchsia-300 group-hover:from-purple-500/35 group-hover:via-fuchsia-500/35 group-hover:to-pink-500/35 group-hover:text-fuchsia-100 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.28)]">
                          <span>Read More</span>
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-lg border border-white/[0.08] px-4 py-2 text-sm text-gray-400 transition-all hover:border-purple-500/40 hover:text-purple-300 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ← Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`h-9 w-9 rounded-lg border text-sm font-semibold transition-all ${
                      page === n
                        ? "border-purple-500 bg-purple-600 text-white"
                        : "border-white/[0.08] text-gray-400 hover:border-purple-500/40 hover:text-purple-300"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-lg border border-white/[0.08] px-4 py-2 text-sm text-gray-400 transition-all hover:border-purple-500/40 hover:text-purple-300 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        ) : (
          allPosts.length > 0 && (
            <p className="mt-12 text-center text-gray-500">
              No blogs are available yet.
            </p>
          )
        )}

        {allPosts.length === 0 && (
          <p className="mt-20 text-center text-gray-500">Loading posts...</p>
        )}

        <div className="mt-24 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-[#110b22] to-[#0b0618] p-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">
            Stay Updated
          </p>
          <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            Get the latest insights in your inbox
          </h3>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-gray-400">
            No spam. Just expert articles on AI, software and digital
            transformation delivered when we publish.
          </p>
          {subscribed ? (
            <p className="font-semibold text-purple-400">
              You're subscribed! Thanks for joining.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                setEmail("");
              }}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
