import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { NON_IT_SERVICE_PAGES } from "./nonItServicePages";
import { NON_IT_SERVICE_CATEGORIES } from "../data/nonItServicesData";
import PageSEO from "../components/PageSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const NonITServiceItemPage: React.FC = () => {
  const { categorySlug, itemSlug } = useParams();
  const key = `${categorySlug}/${itemSlug}`;
  const Page = NON_IT_SERVICE_PAGES[key as keyof typeof NON_IT_SERVICE_PAGES];

  if (!Page) {
    return <Navigate to="/services/non-it" replace />;
  }

  const category = NON_IT_SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);
  const item = category?.items.find((i) => i.slug === itemSlug);
  const seoTitle = item ? `${item.title} | Zora Global AI` : "Business Services | Zora Global AI";
  const seoDescription = item?.shortDesc ?? "Professional business solutions delivered by Zora Global AI.";
  const seoCanonical = `/services/non-it/${categorySlug}/${itemSlug}`;
  const fullCanonical = `https://www.zoraglobalai.com${seoCanonical}`;

  return (
    <>
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonical}
        serviceSchema={item ? { name: item.title, description: item.shortDesc, url: fullCanonical } : undefined}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Non-IT Services", path: "/services/non-it" },
          ...(category ? [{ name: category.title, path: `/services/non-it/${category.slug}` }] : []),
          ...(item ? [{ name: item.title, path: `/services/non-it/${categorySlug}/${itemSlug}` }] : []),
        ]}
      />
      <Page />
    </>
  );
};

export default NonITServiceItemPage;
