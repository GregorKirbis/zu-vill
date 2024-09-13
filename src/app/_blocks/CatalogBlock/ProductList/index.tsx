'use client';

import React, { useEffect, useState } from "react";
import { Page } from "../../../../payload/payload-types";
import Link from 'next/link';
import { fetchDocs } from '../../../_api/fetchDocs'; // Adjust the path as necessary
import { Url } from "next/dist/shared/lib/router/router.js";
import Image from 'next/image';
import { fetchDoc } from "../../../_api/fetchDoc";
import { ContentBlock } from "../../Content";

import "./index.css";
import { off } from "process";

type Category = {
  id: number;
  title: string;
};

type Props = Extract<Page["layout"][0], { blockType: "catalogBlock" }> & { id?: string, slug?: Url };

const ProductList: React.FC<Props> = ({ id, slug, ...catalog }) => {
  const [data, setData] = useState<any[]>([]); // Adjust the type as necessary
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  let baseSlug = Array.isArray(slug) ? slug[0] : slug;

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        let categorySlug = '';
        if (Array.isArray(slug))
          categorySlug = (slug[1] === 'c') ? slug[2] : '';

        const categoriesT = await fetchDoc<Category>({
          collection: "categories",
          slug: categorySlug,
          draft: false,
        });

        let categories = catalog.category ? [(catalog.category as Category).id] : [];
        if (categoriesT) categories = [categoriesT.id];

        const offerType = catalog.type === "oboje" ? undefined : catalog.type;
        setType(offerType);

        const fetchedData = await fetchDocs<any>('catalog', false, {
          offerType: [offerType, 'oboje'],
          categories,
          slug: '', // Make sure to pass `slug` correctly
        });


        setData(fetchedData);



      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id, catalog.category, catalog.type, slug]);

  // Function to format price
  function formatPrice(price) {
    // Convert price to a number
    const numberPrice = parseFloat(price);

    // Format number with thousands separator
    const formattedPrice = numberPrice.toLocaleString('de-DE', {
      minimumFractionDigits: 0, // No decimal places
      maximumFractionDigits: 0
    });

    if (formattedPrice === "NaN" || formattedPrice === "0") return "Cena po dogovoru";

    // Append currency symbol (e.g., Euro sign)
    return `${formattedPrice} €`;
  }




  if (error) return <div>Error: {error}</div>;

  return (
    <div className="col-lg-9 col-md-7">
      <div id="masonry" className="dlab-blog-grid-2">
        <div className="row card-row" style={{ minHeight: "800px" }}>
          {!loading ? data.map((item, index) => (
            <div key={index} className="post card-container col-lg-6 col-md-12 col-sm-12">
              <div className="blog-post blog-grid blog-rounded blog-effect1">
                <div className="dlab-post-media dlab-img-effect">
                  <Link href={`/${baseSlug}/${item.slug}`} legacyBehavior>
                    <a>
                    <Image
                        src={item.images[0]?.image?.url || "/path/to/placeholder.jpg"}
                        alt={item.name || "Placeholder Image"}
                        width={700}
                        height={500}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                </div>
                <div className="dlab-info p-a20 border-1">
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link href={`/${baseSlug}/${item.slug}`} legacyBehavior>
                        <a>{item.title}</a>
                      </Link>
                    </h4>
                  </div>
                  <div className="dlab-post-text">
                    <p>{item.categories[0].title || ""}</p>
                  </div>
                  <div className="row dlab-post-more">
                    <div className="col-6">
                      <Link href={`/${baseSlug}/${item.slug}`} legacyBehavior>
                        <a title="READ MORE" rel="bookmark" className="site-button">
                          PREBERI VEČ <i className="ti-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="dlab-post-meta col-6">
                      <ul className="">
                        <li className="post-date"><h3 className="m-tb15">
                          {type !== 'najem' ? <span>{formatPrice(item.price)}</span>:<span></span>}
                          </h3>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )) : <div className="loader"></div>}
        </div>
      </div>
    </div>
  )
};

export default ProductList;
