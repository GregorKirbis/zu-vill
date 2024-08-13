import { notFound } from "next/navigation";
import { fetchDocs } from "../../../_api/fetchDocs";
import { Category } from "../../../../payload/payload-types";
import Link from 'next/link';

interface SidebarProps {
  slug: string;
}

export default async function Sidebar({ slug, ...catalog }: SidebarProps & { type: string }) {
  let categories: Category[] = [];
  let baseSlug = Array.isArray(slug) ? slug[0] : slug;

  try {

    const fetchedData = await fetchDocs<any>('catalog', false, {
      offerType: [catalog.type, 'oboje'],
      categories: [],
      slug: '',
    });

    const categorySet = new Set<number>(); // Set to track unique category IDs

    // Extract unique categories from fetched products
    fetchedData.forEach(product => {
      product.categories.forEach(category => {
        if (!categorySet.has(category.id)) {
          categorySet.add(category.id);
          categories.push({
            id: category.id,
            title: category.title,
            slug: category.slug,
            updatedAt: "",
            createdAt: ""
          });
        }
      });
    });
  } catch (error) {
    console.error(error);
  }

  if (categories.length === 0) {
    // If no categories found, trigger a 404 page
    //notFound();
    return null; // Return null or an empty component if notFound is triggered
  }

  return (
    <div className="col-lg-3">
      <aside className="side-bar sticky-top">
        <div className="widget widget_archive">
          <h5 className="widget-title style-1">Seznam kategorij</h5>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
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
