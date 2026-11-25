import dotenv from "dotenv";
import path from "path";
import payload from "payload";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const PAGE_SLUG = "regeneracija-trakcijskih-baterij";
const IMAGE_ALT = "Energic Plus – naprava za regeneracijo trakcijskih baterij";
const HERO_IMAGE_ALT = "Regeneracija trakcijskih baterij – banner";
const YOUTUBE_URL = "https://www.youtube.com/watch?v=A4iE7hY2Suc";

async function ensureMedia(
  alt: string,
  relFilePath: string,
  overwriteFile = false
): Promise<string | number> {
  const filePath = path.resolve(__dirname, relFilePath);
  const existing = await payload.find({
    collection: "media",
    where: { alt: { equals: alt } },
    limit: 1,
  });
  if (existing.docs.length > 0) {
    if (overwriteFile) {
      await payload.update({
        collection: "media",
        id: existing.docs[0].id,
        data: { alt },
        filePath,
      });
      console.log(`Updated media file "${alt}" (ID: ${existing.docs[0].id})`);
    } else {
      console.log(`Reusing existing media "${alt}" (ID: ${existing.docs[0].id})`);
    }
    return existing.docs[0].id;
  }
  const created = await payload.create({
    collection: "media",
    data: { alt },
    filePath,
  });
  console.log(`Uploaded media "${alt}" (ID: ${created.id})`);
  return created.id;
}

async function run() {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || "",
    local: true,
  });

  console.log("Payload initialized. Checking media...");

  // 1. Upload or reuse both images
  const productMediaId = await ensureMedia(
    IMAGE_ALT,
    "../../public/assets/regeneracija-baterij-energic-plus.jpg"
  );
  const heroMediaId = await ensureMedia(
    HERO_IMAGE_ALT,
    "../../public/assets/regeneracija-baterij-hero.jpg",
    true
  );
  const servisMediaId = await ensureMedia(
    "ZU-VIL servisna flota in delavnica",
    "../../public/assets/servis-vilicarjev-flota.jpg"
  );

  // 2. Create or update the subpage /regeneracija-trakcijskih-baterij
  const pageData = {
    title: "Regeneracija trakcijskih baterij",
    slug: PAGE_SLUG,
    _status: "published" as const,
    publishedAt: new Date().toISOString(),
    media: heroMediaId as any,
    meta: {
      title: "Regeneracija trakcijskih baterij | ZU-VIL d.o.o.",
      description:
        "Regeneracija trakcijskih baterij za električne viličarje z napravo Energic Plus v podjetju ZU-VIL d.o.o.",
      image: heroMediaId as any,
    },
    layout: [
      {
        blockType: "aboutUsBigBlock",
        blockName: "Uvod - Regeneracija",
        image: productMediaId as any,
        smallTitle: "ZU-VIL d.o.o.",
        title: "Regeneracija",
        caption: "trakcijskih baterij",
        paragraph1:
          "V podjetju ZU-VIL smo našo ponudbo razširili s storitvijo regeneracije trakcijskih baterij.",
        paragraph2:
          "Regeneracija je postopek, pri katerem s posebno napravo Energic Plus izvedemo nadzorovane cikle polnjenja in praznjenja baterije. Namen postopka je zmanjšati učinke staranja in sulfatizacije ter izboljšati uporabno zmogljivost in delovanje baterije, kadar njeno stanje to še omogoča.",
      },
      {
        blockType: "videoBlock",
        blockName: "Video predstavitev",
        smallTitle: "Video predstavitev",
        title: "Kako poteka regeneracija baterije?",
        description:
          "Oglejte si kratek prikaz postopka regeneracije trakcijskih baterij z napravo Energic Plus.",
        youtubeUrl: YOUTUBE_URL,
      },
      {
        blockType: "simpleText",
        blockName: "Podrobnosti in kontakt",
        title: "Komu je storitev namenjena?",
        richText: [
          {
            children: [
              {
                text: "Storitev je namenjena uporabnikom električnih viličarjev in druge opreme s trakcijskimi baterijami. Pred izvedbo je smiselno preveriti stanje baterije, saj uspešnost regeneracije ni enaka pri vseh baterijah in je odvisna od njihove starosti, tipa ter dejanskega stanja. Regeneracija zato ne more zagotoviti povrnitve baterije v prvotno stanje.",
              },
            ],
          },
          {
            children: [
              {
                text: "Če želite preveriti, ali je regeneracija primerna tudi za vašo baterijo, nas kontaktirajte. Z veseljem vam bomo svetovali in predstavili možnosti.",
              },
            ],
          },
          {
            children: [
              { text: "Lahko nam pišete na " },
              { text: "info@zu-vil.si", bold: true },
              { text: " ali pokličete na " },
              { text: "041 689 395", bold: true },
              { text: " ali " },
              { text: "041 677 518", bold: true },
              { text: ". Veseli bomo vašega povpraševanja!" },
            ],
          },
        ],
      },
    ] as any,
  };

  const existingPage = await payload.find({
    collection: "pages",
    where: { slug: { equals: PAGE_SLUG } },
    depth: 0,
    limit: 1,
  });

  let pageId: string | number;
  if (existingPage.docs.length > 0) {
    pageId = existingPage.docs[0].id;
    await payload.update({
      collection: "pages",
      id: pageId,
      data: pageData,
    });
    console.log(`Updated page "/${PAGE_SLUG}" (ID: ${pageId}).`);
  } else {
    const createdPage = await payload.create({
      collection: "pages",
      data: pageData,
    });
    pageId = createdPage.id;
    console.log(`Created page "/${PAGE_SLUG}" (ID: ${pageId}).`);
  }

  // 3. Add or update hero slide on homepage ("domov") HomeSlider
  const homePages = await payload.find({
    collection: "pages",
    where: { slug: { equals: "domov" } },
    depth: 0,
    limit: 1,
  });

  if (homePages.docs.length === 0) {
    console.log('Homepage with slug "domov" not found. Skipping HomeSlider update.');
  } else {
    const homePage = homePages.docs[0] as any;
    const layout = Array.isArray(homePage.layout) ? [...homePage.layout] : [];
    const sliderIndex = layout.findIndex((b: any) => b.blockType === "homeSlider");

    if (sliderIndex === -1) {
      console.log('No "homeSlider" block found on homepage "domov".');
    } else {
      const sliderBlock = { ...layout[sliderIndex] };
      const slides = Array.isArray(sliderBlock.slides) ? [...sliderBlock.slides] : [];
      const newSlide = {
        image: heroMediaId,
        title: "REGENERACIJA TRAKCIJSKIH BATERIJ",
        description:
          "Zmanjšajte učinke staranja in sulfatizacije ter izboljšajte uporabno zmogljivost in delovanje baterije vašega električnega viličarja.",
        button: [
          {
            title: "Več o storitvi",
            link: `/${PAGE_SLUG}`,
          },
        ],
      };

      const existingSlideIdx = slides.findIndex(
        (s: any) =>
          Array.isArray(s.button) &&
          s.button.some((btn: any) => btn.link === `/${PAGE_SLUG}`)
      );

      if (existingSlideIdx !== -1) {
        slides[existingSlideIdx] = { ...slides[existingSlideIdx], ...newSlide };
        console.log('Updated existing "REGENERACIJA TRAKCIJSKIH BATERIJ" slide on HomeSlider.');
      } else {
        slides.unshift(newSlide);
        console.log('Added "REGENERACIJA TRAKCIJSKIH BATERIJ" slide to HomeSlider.');
      }

      sliderBlock.slides = slides;
      layout[sliderIndex] = sliderBlock;

      await payload.update({
        collection: "pages",
        id: homePage.id,
        data: { layout },
      });
    }
  }

  // 4. Rename "Storitve" page -> "Servis" and polish its content & service card links
  const storitveRes = await payload.find({
    collection: "pages",
    where: {
      or: [{ slug: { equals: "storitve" } }, { slug: { equals: "servis" } }],
    },
    depth: 0,
    limit: 1,
  });

  if (storitveRes.docs.length > 0) {
    const servisPage = storitveRes.docs[0] as any;
    const servisLayout = Array.isArray(servisPage.layout) ? [...servisPage.layout] : [];

    // Replace/update top intro block with AboutUsBigBlock matching /regeneracija-trakcijskih-baterij
    const introIdx = servisLayout.findIndex(
      (b: any) => b.blockType === "simpleText" || b.blockType === "aboutUsBigBlock"
    );
    const servisIntroBlock = {
      blockType: "aboutUsBigBlock",
      blockName: "Uvod - Servis",
      image: servisMediaId as any,
      smallTitle: "ZU-VIL d.o.o.",
      title: "Zanesljiv in strokoven",
      caption: "servis viličarjev",
      paragraph1:
        "Naša visoko usposobljena servisna ekipa hitro, zanesljivo in učinkovito opravi servis ter odpravi napake na viličarjih vseh blagovnih znamk.",
      paragraph2:
        "Zavedamo se, da vsak izpad stroja pomeni strošek – zato se odzivamo v najkrajšem možnem času, ob večjih popravilih pa vam zagotovimo tudi nadomestni viličar. Uporabljamo kakovostne in originalne rezervne dele ter izvajamo redne periodične preglede za varno in nemoteno delo.",
    };
    if (introIdx !== -1) {
      servisLayout[introIdx] = servisIntroBlock;
    } else {
      servisLayout.unshift(servisIntroBlock);
    }

    // Polish servicesBlock cards & fix links (including Regeneracija trakcijskih baterij)
    const servicesIdx = servisLayout.findIndex((b: any) => b.blockType === "servicesBlock");
    if (servicesIdx !== -1) {
      servisLayout[servicesIdx] = {
        ...servisLayout[servicesIdx],
        services: [
          {
            icon: "flaticon-settings",
            title: "Servis viličarjev",
            description:
              "Servisiramo vse vrste viličarjev, paletnih vozičkov in ostale transportne opreme vseh blagovnih znamk – hitro, strokovno in z možnostjo nadomestnega viličarja.",
            link: "/kontakt",
          },
          {
            icon: "flaticon-voltmeter",
            title: "Regeneracija trakcijskih baterij",
            description:
              "Z napravo Energic Plus izvajamo nadzorovano regeneracijo trakcijskih baterij za zmanjšanje sulfatizacije in podaljšanje uporabne zmogljivosti.",
            link: `/${PAGE_SLUG}`,
          },
          {
            icon: "flaticon-settings-1",
            title: "Prodaja rezervnih delov",
            description:
              "Nudimo rezervne dele za vse blagovne znamke viličarjev. Večina rezervnih delov je pri vas že v 24 urah.",
            link: "/rezervni-deli",
          },
          {
            icon: "flaticon-forklift",
            title: "Najem viličarjev",
            description:
              "Kratkoročni in dolgoročni najem zanesljivih viličarjev ter nadomestni viličarji v času servisa.",
            link: "/najem-viliarjev",
          },
          {
            icon: "flaticon-shopping-cart",
            title: "Prodaja viličarjev",
            description:
              "Širok izbor novih in pregledanih rabljenih viličarjev, paletnih vozičkov ter transportne opreme priznanih znamk.",
            link: "/prodaja-viliarjev",
          },
          {
            icon: "flaticon-product",
            title: "Baterije in dodatna oprema",
            description:
              "Dobava trakcijskih kislinskih, litijevih in gel baterij ter vse dodatne opreme za nemoteno poslovanje.",
            link: "/kontakt",
          },
        ],
      };
    }

    await payload.update({
      collection: "pages",
      id: servisPage.id,
      data: {
        title: "Servis",
        slug: "servis",
        meta: {
          ...(servisPage.meta || {}),
          title: "Servis viličarjev | ZU-VIL d.o.o.",
          description:
            "Zanesljiv in strokoven servis viličarjev vseh znamk, redni pregledi, nadomestni viličarji in regeneracija trakcijskih baterij.",
        },
        layout: servisLayout,
      },
    });
    console.log(`Renamed and polished page "Storitve" -> "Servis" (ID: ${servisPage.id}).`);
  }

  // 5. Update Header navigation menu (rename Storitve -> Servis + add Regeneracija baterij)
  const header = (await payload.findGlobal({
    slug: "header",
    depth: 0,
  })) as any;

  const navItems = Array.isArray(header.navItems)
    ? header.navItems.map((item: any) => {
        if (item?.link?.label === "Storitve") {
          return { ...item, link: { ...item.link, label: "Servis" } };
        }
        return item;
      })
    : [];

  const alreadyInMenu = navItems.some(
    (item: any) => item?.link?.reference?.value === pageId
  );

  if (!alreadyInMenu) {
    const newNavItem = {
      link: {
        type: "reference",
        display: "normal",
        label: "Regeneracija baterij",
        reference: {
          relationTo: "pages",
          value: pageId,
        },
      },
    };

    const highlightedIdx = navItems.findIndex(
      (item: any) => item?.link?.display === "highlighted"
    );
    if (highlightedIdx !== -1) {
      navItems.splice(highlightedIdx, 0, newNavItem);
    } else {
      navItems.push(newNavItem);
    }
    console.log('Added "Regeneracija baterij" to Header main menu.');
  }

  await payload.updateGlobal({
    slug: "header",
    data: {
      navItems,
    },
  });
  console.log('Updated Header menu ("Storitve" -> "Servis").');

  // 6. Update Footer navigation menu (rename Storitve -> Servis)
  const footer = (await payload.findGlobal({
    slug: "footer",
    depth: 0,
  })) as any;

  if (Array.isArray(footer.navItems)) {
    const updatedFooterNav = footer.navItems.map((item: any) => {
      if (item?.link?.label === "Storitve") {
        return { ...item, link: { ...item.link, label: "Servis" } };
      }
      return item;
    });
    await payload.updateGlobal({
      slug: "footer",
      data: {
        navItems: updatedFooterNav,
      },
    });
    console.log('Updated Footer menu ("Storitve" -> "Servis").');
  }

  console.log("Done!");
  process.exit(0);
}

run().catch((err) => {
  console.error("Error running add-regeneracija-baterij script:", err);
  process.exit(1);
});
