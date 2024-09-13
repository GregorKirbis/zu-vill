import type { Metadata } from "next";
import type { Catalog, Page } from "../../payload/payload-types";
import { mergeOpenGraph } from "./mergeOpenGraph";

export const generateMeta = async (args: { doc: Page | Catalog }): Promise<Metadata> => {
  const { doc } = args || {};

  const ogImage = typeof doc?.meta?.image === "object" && doc?.meta?.image !== null && "url" in doc?.meta?.image
    ? `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`
    : undefined;

  return {
    title: doc?.meta?.title || "Default Title",
    description: doc?.meta?.description || "Default description",
    openGraph: mergeOpenGraph({
      title: doc?.meta?.title || "Default Title",
      description: doc?.meta?.description || "Default description",
      url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/",
      images: ogImage ? [{ url: ogImage }] : undefined,
    }),
  };
};
