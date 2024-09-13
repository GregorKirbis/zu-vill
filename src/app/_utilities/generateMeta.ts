import type { Metadata } from "next";
import type { Catalog, Page } from "../../payload/payload-types";
import { mergeOpenGraph } from "./mergeOpenGraph";

export const generateMeta = async (args: { doc: Page | Catalog }): Promise<Metadata> => {
  const { doc } = args || {};

  const ogImage = typeof doc?.meta?.image === "object" && doc?.meta?.image?.filename
    ? `media/${doc.meta.image.filename}`
    : (doc?.meta?.image?.url) ? doc?.meta?.image?.url : "undefined--";

  const imageWidth = 1200;  // Specify the width of the image
  const imageHeight = 630;  // Specify the height of the image

  return {
    title: doc?.meta?.title || "Default Title",
    description: doc?.meta?.description || "Default description",
    openGraph: mergeOpenGraph({
      title: doc?.meta?.title || "Default Title",
      description: doc?.meta?.description || "Default description",
      url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/",
      images: ogImage ? [{
        url: ogImage,
        width: imageWidth,
        height: imageHeight
      }] : undefined,
    }),
  };
};
