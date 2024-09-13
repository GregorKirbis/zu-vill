import type { Metadata } from "next";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  siteName: "Zu-vil - Servis viličarjev in prodaja rezervnih delov",
  title: "Zu-vil.si - Servis viličarjev in prodaja rezervnih delov",
  description: "Specializirani za servis viličarjev in prodajo rezervnih delov. Kvalitetne storitve in vrhunski izdelki.",
  images: [
    {
      url: "https://zu-vil.si/media/og_zuvill.webp", // Replace with the correct image URL
      width: 1200, // Default width
      height: 630 // Default height
    },
  ],
};

export const mergeOpenGraph = (og?: Metadata["openGraph"]): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ?? defaultOpenGraph.images,
  };
};
