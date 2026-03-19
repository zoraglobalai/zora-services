import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { IT_SERVICE_PAGES } from "./itServicePages";
import { IT_SERVICE_CATEGORIES } from "../data/itServicesData";
import PageSEO from "../components/PageSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const ITServiceItemPage: React.FC = () => {
  const { categorySlug, itemSlug } = useParams();
  const key = `${categorySlug}/${itemSlug}`;
  const Page = IT_SERVICE_PAGES[key as keyof typeof IT_SERVICE_PAGES];

  if (!Page) {
    return <Navigate to="/services/it" replace />;
  }

  const category = IT_SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);
  const item = category?.items.find((i) => i.slug === itemSlug);
  const seoTitle = item ? `${item.title} | Zora Global AI` : "IT Services | Zora Global AI";
  const seoDescription = item?.description ?? "Expert IT solutions delivered by Zora Global AI.";
  const seoCanonical = `/services/it/${categorySlug}/${itemSlug}`;
  const fullCanonical = `https://www.zoraglobalai.com${seoCanonical}`;

  return (
    <>
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonical}
        serviceSchema={item ? { name: item.title, description: item.description, url: fullCanonical } : undefined}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "IT Services", path: "/services/it" },
          ...(category ? [{ name: category.title, path: `/services/it/${category.slug}` }] : []),
          ...(item ? [{ name: item.title, path: `/services/it/${categorySlug}/${itemSlug}` }] : []),
        ]}
      />
      <Page />
    </>
  );
};

export default ITServiceItemPage;
