import { MEDIA } from "./media";
import { META } from "./meta";

export const CATALOG = `
query Catalog($slug: String, $draft: Boolean) {
    Catalogs(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        images {
          image {
            url
            alt
            sizes {
              medium {
                url
                width
                height
                mimeType
                filesize
                filename
              }
            }
          }
        }
        year
        price
        ddv
        slug
        additionalProperties {
          property
          value
        }
        description
        offerType
        categories {
          id
          title
          slug
        }
        ${META}
      }
    }
  }
`;

export const CATALOGS = `
  query Catalog( $draft: Boolean, $categories: [JSON], $offerType: [Catalog_offerType_Input] ) {
    Catalogs(
      where: {
        categories: { in: $categories },
        offerType: { in: $offerType }
      },
      limit: 100,
      draft: $draft
    ) {
      docs {
        id
        title
        images {
          image {
            url
            alt
            sizes {
              medium {
                url
                width
                height
                mimeType
                filesize
                filename
              }
            }
          }
        }
        year
        price
        slug
        additionalProperties {
          property
          value
        }
        description
        offerType
        categories {
          id
          title
          slug
        }
      }
    }
  }
`;


