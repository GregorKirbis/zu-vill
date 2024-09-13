import React from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import type { Catalog, Media, Page } from "./../payload/payload-types";
import { fetchDoc } from "./_api/fetchDoc";
import { fetchDocs } from "./_api/fetchDocs";
import { Blocks } from "./_components/Blocks";
import Hero from "./_components/Hero";
import { generateMeta } from "./_utilities/generateMeta";

// Payload Cloud caches all files through Cloudflare, so we don't need Next.js to cache them as well
// This means that we can turn off Next.js data caching and instead rely solely on the Cloudflare CDN
// To do this, we include the `no-cache` header on the fetch requests used to get the data for this page
// But we also need to force Next.js to dynamically render this page on each request for preview mode to work
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// If you are not using Payload Cloud then this line can be removed, see `../../../README.md#cache`
export const dynamic = "force-dynamic";

export default async function Page({ params: { slug = "domov" } }) {
  const { isEnabled: isDraftMode } = draftMode();

  let page: Page | null = null;
  let baseSlug = Array.isArray(slug) ? slug[0] : slug;

  try {
    page = await fetchDoc<Page>({
      collection: "pages",
      slug: baseSlug,
      draft: isDraftMode,
    });
  } catch (error) {
    console.error(error);
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  if (!page) {
    return "SS"//notFound();
  }

  const { media: mediaData, layout, title, slug: url } = page;

  return (
    <React.Fragment>
      <Hero image={mediaData as Media} page={{ title, url }} />
      <Blocks blocks={layout} disableTopPadding={false} slug={slug} />
    </React.Fragment>
  );
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>("pages");
    return pages?.map(({ slug }) => slug);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({ params: { slug = ["domov"] } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode();

  let page: Page | Catalog | null = null;
  let baseSlug = Array.isArray(slug) ? slug[0] : slug;

  try {
    if (slug.length === 1) {
      page = await fetchDoc<Page>({
        collection: "pages",
        slug: baseSlug,
        draft: isDraftMode,
      });
    } else {
      page = await fetchDoc<any>({
        collection: "catalog",
        slug: slug[1],
        draft: isDraftMode,
      });

      page.meta.title = page.meta.title || page.title;
      page.meta.image = page.meta.image || page.images?.[0];
      page.meta.description = page.meta.description || "UGODNO!!! - " + page.title;
    }

  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }
  return generateMeta({ doc: page });
  //return {};
}
