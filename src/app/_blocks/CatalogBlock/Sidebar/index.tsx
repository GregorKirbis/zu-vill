import { fetchDocs } from "../../../_api/fetchDocs";
import { Category } from "../../../../payload/payload-types";
import Link from "next/link";

interface SidebarProps {
  slug: string | string[];
}

export default async function Sidebar({ slug, ...catalog }: SidebarProps & { type: string }) {
  let categories: Category[] = [];
  const baseSlug = Array.isArray(slug) ? slug[0] : slug;
  const activeCategorySlug =
    Array.isArray(slug) && slug[1] === "c" ? slug[2] || "" : "";

  try {
    const fetchedData = await fetchDocs<any>("catalog", false, {
      offerType: [catalog.type, "oboje"],
      categories: [],
      slug: "",
    });

    const categorySet = new Set<number>();

    (fetchedData || []).forEach((product) => {
      (product.categories || []).forEach((category) => {
        if (!categorySet.has(category.id)) {
          categorySet.add(category.id);
          categories.push({
            id: category.id,
            title: category.title,
            slug: category.slug,
            updatedAt: "",
            createdAt: "",
          });
        }
      });
    });
  } catch (error) {
    console.error(error);
  }

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="col-lg-3 col-md-4 m-b30">
      <aside className="side-bar sticky-top catalog-sidebar">
        <div className="widget widget_archive catalog-sidebar-card">
          <h5 className="widget-title style-1">Kategorije</h5>
          <ul className="catalog-cat-list">
            <li className={!activeCategorySlug ? "active" : ""}>
              <Link href={`/${baseSlug}`} legacyBehavior>
                <a>Vsi viličarji</a>
              </Link>
            </li>
            {categories.map((category) => (
              <li
                key={category.id}
                className={activeCategorySlug === category.slug ? "active" : ""}
              >
                <Link href={`/${baseSlug}/c/${category.slug}`} legacyBehavior>
                  <a>{category.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
