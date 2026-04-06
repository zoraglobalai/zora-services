import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  TrendingUp,
  RefreshCw,
  User,
} from "lucide-react";
import { client } from "../lib/sanityClient";
import PageSEO from "../components/PageSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import { mockBlogPosts, type MockSectionMedia } from "../data/blogIndex";

const BASE_URL = "https://www.zoraglobalai.com";

interface SanityImage {
  asset: { _ref: string };
}

interface Post {
  _id: string;
  title?: string;
  slug: { current: string } | string;
  publishedAt?: string;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
  description?: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  read_time?: string;
  body?: unknown[];
  content?: string;
  meta_description?: string;
  og_image?: string;
  featured_image?: string;
  banner_image?: string;
  mainImage?: SanityImage;
  section_media?: MockSectionMedia[];
}

const ptComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 leading-snug border-l-4 border-purple-500 pl-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-purple-200 mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-300 text-base md:text-lg leading-relaxed text-left mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 bg-purple-500/10 rounded-r-xl pl-6 pr-4 py-4 my-6 text-purple-200 italic text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="space-y-2 mb-6 pl-2">{children}</ul>,
    number: ({ children }) => (
      <ol className="space-y-2 mb-6 pl-4 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-gray-300 text-base md:text-lg leading-relaxed">
        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-gray-300 text-base md:text-lg leading-relaxed pl-1">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="text-purple-200 italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm rounded-md px-2 py-0.5 font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 underline underline-offset-4 hover:text-purple-300 transition-colors"
      >
        {children}
      </a>
    ),
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

function getPublishedDate(post: Post) {
  return post.publishedAt || post.published_at || post.updated_at || post.created_at || "";
}

function imageUrl(ref: string) {
  const parts = ref.split("-");
  const format = parts.pop();
  const dimensions = parts.pop();
  const id = parts.slice(1).join("-");
  return `https://cdn.sanity.io/images/o2ueytky/production/${id}-${dimensions}.${format}`;
}

function getPostImage(post: Post, localImage?: string) {
  if (localImage) {
    return localImage;
  }
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
  return "/it-hero/website.webp";
}

function hasRenderableMedia(media: MockSectionMedia) {
  if (!media) {
    return false;
  }

  const source = media.src?.trim();

  if (media.type === "image") {
    return Boolean(source);
  }

  if (media.type === "video") {
    return Boolean(source);
  }

  return false;
}

function renderInlineMedia(
  media: MockSectionMedia,
  key: string,
  fallbackAlt: string
) {
  return (
    <figure
      key={key}
      className="mb-5 border border-white/[0.08] bg-white/[0.03]"
    >
      {media.type === "image" ? (
        <img
          src={media.src}
          alt={media.alt || fallbackAlt}
          className="w-full h-[220px] md:h-[320px] object-cover"
        />
      ) : (
        <video
          controls
          preload="metadata"
          poster={media.poster}
          className="w-full h-[220px] md:h-[320px] bg-black"
        >
          <source src={media.src} />
          Your browser does not support the video tag.
        </video>
      )}
      {media.caption && (
        <figcaption className="px-4 py-3 text-sm text-gray-400 text-left">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  const localPost = useMemo(
    () => mockBlogPosts.find((item) => item.slug === slug),
    [slug]
  );

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    if (localPost) {
      setLoading(false);
    }

    let cancelled = false;

    client
      .fetch<Post | null>(
        `*[_type == "post" && slug.current == $slug][0] {
          _id, title, slug, publishedAt, published_at, created_at, updated_at, description, excerpt, category, readTime, read_time, body, content, meta_description, og_image, featured_image, banner_image, section_media, mainImage { asset { _ref } }
        }`,
        { slug }
      )
      .then((result) => {
        if (!cancelled) {
          setPost(result);
          if (!localPost) {
            setLoading(false);
          }
        }
      })
      .catch(() => {
        if (!cancelled && !localPost) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug, localPost]);

  const fallbackPost: Post | null = localPost
    ? {
        _id: `mock-${localPost.slug}`,
        title: localPost.title,
        slug: localPost.slug,
        description: localPost.description,
        excerpt: localPost.description,
        category: localPost.department,
        published_at: localPost.date,
        readTime: localPost.readTime,
        content: localPost.sections
          .flatMap((section) => section.paragraphs)
          .join("\n\n"),
        og_image: localPost.image,
      }
    : null;

  const activePost = post ?? fallbackPost;
  const currentSidebarSlug = slug ?? localPost?.slug ?? "";
  const recentUpdatedPosts = useMemo(
    () =>
      [...mockBlogPosts]
        .filter((item) => item.slug !== currentSidebarSlug)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .slice(0, 3),
    [currentSidebarSlug]
  );

  if (loading && !activePost) {
    return (
      <div className="min-h-screen bg-[#0b0618] flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!activePost) {
    return (
      <div className="min-h-screen bg-[#0b0618] flex items-center justify-center">
        <p className="text-gray-500">Blog not found.</p>
      </div>
    );
  }

  const slugValue = getSlugValue(activePost.slug);
  const title = activePost.title ?? "Untitled Blog";
  const description =
    activePost.description ||
    activePost.excerpt ||
    activePost.meta_description ||
    `${title} - read the full article on the Zora Global AI blog.`;
  const publishedDate = getPublishedDate(activePost);
  const readTime = activePost.readTime || activePost.read_time;
  const postImage = getPostImage(activePost, localPost?.image);
  const localSections = localPost?.sections ?? [];
  const backendInlineMedia = (activePost.section_media ?? []).filter(hasRenderableMedia);
  const textContent = (activePost.content ?? "")
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#0b0618] text-white">
      <PageSEO
        title={`${title} | Zora Global AI`}
        description={description}
        canonical={`/blog/${slugValue}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            datePublished: publishedDate,
            dateModified: publishedDate,
            url: `${BASE_URL}/blog/${slugValue}`,
            author: {
              "@type": "Organization",
              name: "Zora Global AI",
              url: BASE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "Zora Global AI",
              url: BASE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/logo.webp`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${slugValue}`,
            },
          })}
        </script>
      </Helmet>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: title, path: `/blog/${slugValue}` },
        ]}
      />
      <section className="relative overflow-hidden px-6 pb-0 pt-40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-purple-600/15 blur-[100px] rounded-full" />
        </div>
        <div className="mx-auto max-w-[1440px] relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors group hover:text-purple-300"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mb-5 flex flex-wrap items-center gap-5"
          >
            {activePost.category && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-500/12 px-3 py-1 text-xs font-semibold text-purple-200">
                <Tag size={11} />
                {activePost.category}
              </span>
            )}
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <User size={14} className="text-purple-300" />
              Zora Global AI Team
            </span>
            {readTime && (
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Clock size={14} className="text-purple-300" />
                {readTime}
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 max-w-[880px] text-4xl font-extrabold leading-tight tracking-tight text-white md:text-[3.2rem]"
          >
            {title}
          </motion.h1>
          <p className="mb-6 max-w-[820px] text-left text-base leading-relaxed text-gray-300 md:text-[1.05rem]">
            {description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-4 pb-32 pt-2 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,840px)_420px] lg:gap-28">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="max-w-[860px]"
          >
            <div className="mt-1 overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(7,4,22,0.35)]">
              <img
                src={postImage}
                alt={title}
                className="h-[210px] w-full object-cover md:h-[300px]"
              />
            </div>
            {publishedDate && (
              <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
                <Calendar size={14} className="text-purple-300" />
                <span className="font-medium text-gray-300">Posted on</span>
                <span>{formatDate(publishedDate)}</span>
              </div>
            )}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 mt-5 origin-left h-px bg-gradient-to-r from-purple-500/60 via-fuchsia-500/30 to-transparent"
            />

            <div className="max-w-none pr-2">
              {activePost.body && activePost.body.length > 0 ? (
                <PortableText
                  value={activePost.body as import("@portabletext/types").TypedObject[]}
                  components={ptComponents}
                />
              ) : localSections.length > 0 ? (
                localSections.map((section) => (
                  <section key={section.subtitle} className="mb-10">
                    <h2
                      className={`mb-4 text-2xl text-white ${
                        localPost?.boldSubtitles ? "font-bold" : "font-semibold"
                      }`}
                    >
                      {section.subtitle}
                    </h2>
                    {section.paragraphs.map((paragraph, paragraphIndex) => {
                      const relatedMedia =
                        section.media?.filter(
                          (media) =>
                            (media.afterParagraph ?? 0) === paragraphIndex &&
                            hasRenderableMedia(media)
                        ) ?? [];

                      return (
                        <div key={`${section.subtitle}-${paragraphIndex}`}>
                          <p className="mb-4 text-left text-base leading-relaxed text-gray-300 md:text-lg">
                            {paragraph}
                          </p>
                          {relatedMedia.map((media, mediaIndex) =>
                            renderInlineMedia(
                              media,
                              `${section.subtitle}-${paragraphIndex}-${mediaIndex}`,
                              section.subtitle
                            )
                          )}
                        </div>
                      );
                    })}
                  </section>
                ))
              ) : (
                textContent.map((paragraph, index) => {
                  const relatedMedia = backendInlineMedia.filter(
                    (media) => (media.afterParagraph ?? 0) === index
                  );

                  return (
                    <div key={`${index}-${paragraph.slice(0, 24)}`}>
                      <p className="mb-5 text-left text-base leading-relaxed text-gray-300 md:text-lg">
                        {paragraph}
                      </p>
                      {relatedMedia.map((media, mediaIndex) =>
                        renderInlineMedia(
                          media,
                          `backend-${index}-${mediaIndex}`,
                          title
                        )
                      )}
                    </div>
                  );
                })
              )}
            </div>

          </motion.article>

          <aside className="lg:-mt-[292px] lg:self-start lg:sticky lg:top-8">
            <div className="space-y-10">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(7,4,22,0.35)]">
                <div className="mb-5 flex items-center gap-2">
                  <RefreshCw size={18} className="text-purple-300" />
                  <h3 className="text-[1.55rem] font-bold text-white">
                    Recent Articles
                  </h3>
                </div>
                <div className="space-y-5 border-t border-white/10 pt-5">
                  {recentUpdatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/blog/${item.slug}`}
                      className="group grid grid-cols-[92px_minmax(0,1fr)] items-center gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                    >
                      <div className="h-[68px] w-[92px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <p className="text-[1.02rem] font-semibold leading-snug text-white transition-colors group-hover:text-purple-200">
                          {item.title}
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={13} className="text-purple-300" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(7,4,22,0.35)]">
                <div className="mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-fuchsia-300" />
                  <h3 className="text-[1.55rem] font-bold text-white">
                    Book Your Free Consultation
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Service Interested In"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-500 hover:to-fuchsia-400"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
