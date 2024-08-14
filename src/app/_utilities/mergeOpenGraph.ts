import type { Metadata } from "next";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  siteName: "Zu-vil - Servis viličarjev in prodaja rezervnih delov",
  title: "Zu-vil.si - Servis viličarjev in prodaja rezervnih delov",
  description: "Specializirani za servis viličarjev in prodajo rezervnih delov. Kvalitetne storitve in vrhunski izdelki.",
  images: [
    {
      url: "https://zu-vill.si/_images/og_zuvill.jpg", // Replace with the correct image URL
    },
  ],
};

export const mergeOpenGraph = (og?: Metadata["openGraph"]): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
