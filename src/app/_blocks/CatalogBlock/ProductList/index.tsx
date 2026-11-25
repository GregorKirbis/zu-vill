'use client';

import React, { useEffect, useState } from "react";
import { Page } from "../../../../payload/payload-types";
import Link from "next/link";
import { fetchDocs } from "../../../_api/fetchDocs";
import { Url } from "next/dist/shared/lib/router/router.js";
import Image from "next/image";
import { fetchDoc } from "../../../_api/fetchDoc";

import "./index.css";

type Category = {
  id: number;
  title: string;
};

type Props = Extract<Page["layout"][0], { blockType: "catalogBlock" }> & {
  id?: string;
  slug?: Url;
};

const ProductList: React.FC<Props> = ({ id, slug, ...catalog }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [activeCategoryName, setActiveCategoryName] = useState<string>("");

  const baseSlug = Array.isArray(slug) ? slug[0] : slug;

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        let categorySlug = "";
        if (Array.isArray(slug)) {
          categorySlug = slug[1] === "c" ? slug[2] : "";
        }

        const categoriesT = categorySlug
          ? await fetchDoc<Category>({
              collection: "categories",
              slug: categorySlug,
              draft: false,
            })
          : null;

        let categories = catalog.category ? [(catalog.category as Category).id] : [];
        if (categoriesT) {
          categories = [categoriesT.id];
          setActiveCategoryName(categoriesT.title || "");
        } else {
          setActiveCategoryName("");
        }

        const offerType = catalog.type === "oboje" ? undefined : catalog.type;
        setType(offerType || null);

        const fetchedData = await fetchDocs<any>("catalog", false, {
          offerType: [offerType, "oboje"],
          categories,
          slug: "",
        });

        setData(Array.isArray(fetchedData) ? fetchedData : []);
      } catch (err) {
        setError(err?.message || "Napaka pri nalaganju kataloga.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id, catalog.category, catalog.type, slug]);

  function formatPrice(price: any) {
    const numberPrice = parseFloat(price);
    const formattedPrice = numberPrice.toLocaleString("de-DE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    if (formattedPrice === "NaN" || formattedPrice === "0") {
      return "Cena po dogovoru";
    }

    return `${formattedPrice} €`;
  }

  if (error) {
    return (
      <div className="col-lg-9 col-md-8">
        <div className="catalog-empty">
          <h4>Napaka pri nalaganju ponudbe</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const isNajem = type === "najem";

  return (
    <div className="col-lg-9 col-md-8">
      <div className="catalog-toolbar">
        <div>
          <span className="catalog-toolbar-label">
            {activeCategoryName ? activeCategoryName : isNajem ? "Ponudba za najem" : "Ponudba za prodajo"}
          </span>
        </div>
        {!loading && (
          <div className="catalog-toolbar-count">
            Prikazanih: <strong>{data.length}</strong>
          </div>
        )}
      </div>

      <div id="masonry" className="dlab-blog-grid-2">
        <div className="row g-4 card-row">
          {loading ? (
            [0, 1, 2, 3].map((n) => (
              <div key={n} className="col-lg-6 col-md-12 col-sm-12 d-flex">
                <div className="catalog-card catalog-skeleton w-100">
                  <div className="skeleton-img" />
                  <div className="catalog-card-body">
                    <div className="skeleton-line short" />
                    <div className="skeleton-line title" />
                    <div className="skeleton-line btn" />
                  </div>
                </div>
              </div>
            ))
          ) : data.length === 0 ? (
            <div className="col-12">
              <div className="catalog-empty">
                <h4>Trenutno ni viličarjev v tej kategoriji</h4>
                <p>
                  Za aktualno zalogo in ponudbo po meri nas kontaktirajte na{" "}
                  <strong>info@zu-vil.si</strong> ali pokličite <strong>+386 2 609 51 23</strong>.
                </p>
                <Link href="/kontakt" legacyBehavior>
                  <a className="site-button">POŠLJI POVPRAŠEVANJE</a>
                </Link>
              </div>
            </div>
          ) : (
            data.map((item, index) => {
              const categoryTitle = item.categories?.[0]?.title || "";
              const imgUrl = item.images?.[0]?.image?.url || "/_images/logo.png";

              return (
                <div
                  key={item.id || index}
                  className="col-lg-6 col-md-12 col-sm-12 d-flex"
                >
                  <div className="catalog-card w-100">
                    <div className="catalog-card-media">
                      <Link href={`/${baseSlug}/${item.slug}`} legacyBehavior>
                        <a className="catalog-card-img-link">
                          <Image
                            src={imgUrl}
                            alt={item.title || "Viličar"}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                          />
                        </a>
                      </Link>
                      {categoryTitle && (
                        <span className="catalog-cat-badge">{categoryTitle}</span>
                      )}
                    </div>

                    <div className="catalog-card-body">
                      <h4 className="catalog-card-title">
                        <Link href={`/${baseSlug}/${item.slug}`} legacyBehavior>
                          <a>{item.title}</a>
                        </Link>
                      </h4>

                      <div className="catalog-card-footer">
                        <Link href={`/${baseSlug}/${item.slug}`} legacyBehavior>
                          <a
                            title={item.title}
                            rel="bookmark"
                            className={`site-button catalog-cta-btn ${isNajem ? "w-100 text-center" : ""}`}
                          >
                            {isNajem ? "PODROBNOSTI IN NAJEM" : "PREBERI VEČ"}{" "}
                            <i className="ti-arrow-right"></i>
                          </a>
                        </Link>

                        {!isNajem && (
                          <div className="catalog-price">
                            {formatPrice(item.price)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
