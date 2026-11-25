import { notFound } from "next/navigation";
import { Catalog } from "../../../../payload/payload-types";
import Link from "next/link";
import ProductGallerySlider from "./ProductGallerySlider";
import { fetchDoc } from "../../../_api/fetchDoc";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./index.css";
import RichText from "../../../_components/RichText";
import SendButton from "../../../_components/SendButton";

type Props = {
  slug?: string | string[];
};

function formatPrice(price: any, ddv = true) {
  const numberPrice = parseFloat(price);
  const add = ddv ? "+ DDV" : "";

  const formattedPrice = numberPrice.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (formattedPrice === "NaN" || formattedPrice === "0,00") {
    return "Cena po dogovoru";
  }

  return `${formattedPrice} € ${add}`.trim();
}

const ProductItemComponent: React.FC<{
  data: Catalog;
  type: string;
  baseSlug: string;
}> = ({ data, type, baseSlug }) => {
  const isNajem = type === "najem";
  const categoryTitle =
    Array.isArray(data.categories) && data.categories.length > 0
      ? (data.categories[0] as any)?.title || ""
      : "";
  const backLabel = isNajem
    ? "Nazaj na najem viličarjev"
    : "Nazaj na prodajo viličarjev";

  return (
    <div className="section-full content-inner bg-white product-detail-section">
      <div className="container woo-entry">
        <div className="product-detail-topbar">
          <Link href={`/${baseSlug}`} legacyBehavior>
            <a className="product-back-link">
              <i className="ti-arrow-left"></i> {backLabel}
            </a>
          </Link>
          {categoryTitle && (
            <span className="product-detail-badge">{categoryTitle}</span>
          )}
        </div>

        <div className="row g-4 align-items-start m-b30">
          <div className="col-md-12 col-lg-7 col-sm-12">
            <ProductGallerySlider images={(data.images as any) || []} />
          </div>

          <div className="col-md-12 col-lg-5 col-sm-12">
            <div className="product-info-card">
              <div className="product-info-header">
                {categoryTitle && (
                  <span className="product-info-kicker">{categoryTitle}</span>
                )}
                <h2 className="product-info-title">{data.title}</h2>
              </div>

              <div className="product-specs-wrap">
                <table className="table product-specs-table">
                  <tbody>
                    <tr>
                      <th>Letnik</th>
                      <td>{data.year === 0 ? "Novo" : data.year}</td>
                    </tr>
                    {(data.additionalProperties || []).map((item, index) => (
                      <tr key={index}>
                        <th>{item.property}</th>
                        <td>
                          <RichText content={item.value} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {data.description && (
                <div className="product-description-box">
                  <RichText content={data.description} />
                </div>
              )}

              <div className="product-cta-box">
                {!isNajem && (
                  <div className="product-price-block">
                    <span className="product-price-label">Cena</span>
                    <div className="product-price-value">
                      {formatPrice(data.price, data.ddv)}
                    </div>
                  </div>
                )}

                <div className="product-cta-actions">
                  <SendButton
                    className="site-button radius-no w-100 text-center"
                    href="/kontakt"
                    label={isNajem ? "POŠLJI POVPRAŠEVANJE ZA NAJEM" : "POŠLJI POVPRAŠEVANJE"}
                  />
                  <a href="tel:+38626095123" className="product-call-link">
                    <i className="fa fa-phone"></i> Ali pokličite: <strong>+386 2 609 51 23</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function ProductItem({
  slug,
  ...catalog
}: Props & { type: string }) {
  if (!slug) {
    notFound();
  }

  const baseSlug = Array.isArray(slug) ? slug[0] : slug;
  const itemSlug = Array.isArray(slug) ? slug[1] : slug;
  let fetchedData: Catalog | null = null;

  try {
    fetchedData = await fetchDoc<any>({
      collection: "catalog",
      slug: itemSlug,
      draft: false,
    });
  } catch (error) {
    console.error(error);
    notFound();
  }

  if (!fetchedData) {
    notFound();
  }

  return (
    <ProductItemComponent
      data={fetchedData}
      type={catalog.type}
      baseSlug={baseSlug}
    />
  );
}
