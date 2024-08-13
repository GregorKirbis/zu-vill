import { notFound } from "next/navigation";
import { Catalog, Category } from "../../../../payload/payload-types";
import Link from 'next/link';
import ProductGallerySlider from "./ProductGallerySlider";
import { fetchDoc } from "../../../_api/fetchDoc";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RichText from "../../../_components/RichText";
type Props = {
  slug?: string;
};

  // Function to format price
  function formatPrice(price, ddv= true) {
    // Convert price to a number
    const numberPrice = parseFloat(price);
    const add = ddv ? "+ DDV" : "";

    // Format number with thousands separator
    const formattedPrice = numberPrice.toLocaleString('de-DE', {
      minimumFractionDigits: 2, // No decimal places
      maximumFractionDigits: 2
    });

    if (formattedPrice === "NaN" || formattedPrice === "0,00") return "Cena po dogovoru";

    // Append currency symbol (e.g., Euro sign)
    return `${formattedPrice} € ${add}`;
  }


// Component to render the product item
const ProductItemComponent: React.FC<{ data: Catalog; type: string }> = ({ data, type }) => {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container woo-entry">
        <div className="row m-b30">
          <div className="col-md-12 col-lg-7 col-sm-12 m-b30">
            <ProductGallerySlider images={data.images as []} />
          </div>
          <div className="col-md-12 col-lg-5 col-sm-12">
            <form method="post" className="cart">
              <div className="dlab-post-title">
                <h4 className="post-title">

                    {data.title}

                </h4>
              </div>
              <p></p>
              <table className="table table-bordered">
                <tbody>
                <tr >
                      <td>Letnik</td>
                      <td>{data.year === 0 ? 'Novo': data.year}</td>
                </tr>
                  {data.additionalProperties.map((item, index) => (
                    <tr key={index}>
                      <td>{item.property}</td>
                      <td><RichText content={item.value} /> </td>
                    </tr>
                  ))}
                </tbody>
              </table>
                  <div>
              <RichText content={data.description} />
              </div>
              <div className="dlab-divider bg-gray tb15">
                <i className="icon-dot c-square"></i>
              </div>
              <div className="row">
                <div className="col-7">
                <h3 className="m-tb15">{type !== 'najem' ? formatPrice(data.price, data.ddv):''}</h3>
                </div>
                <div className="col-5">
                <button className="site-button radius-no m-tb10">
                    <i className="ti-shopping-cart"></i> Pošlji povraševanje
                  </button>

                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row m-b30">
          <div className="col-lg-12">
            <div className="dlab-tabs product-description tabs-site-button">
              {/* Tabs content would go here */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* <ProductSlider /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function ProductItem({ slug, ...catalog  }: Props & { type: string }) {

  if (!slug) {
    notFound();
  }

  let baseSlug = Array.isArray(slug) ? slug[0] : slug;
  let fetchedData: Catalog = null;

  try {
      fetchedData = await fetchDoc<any>({
      collection: "catalog",
      slug: slug[1],
      draft: false,
    });
  } catch (error) {
    console.error(error);
    notFound();
  }


  return <ProductItemComponent data={fetchedData} type={catalog.type} />;
}
