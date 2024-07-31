export const CATEGORIES = `
  query Categories {
    Categories(limit: 300) {
      docs {
        title
        slug
        id
      }
    }
  }
`;
export const CATEGORIES_P = `
  query Categories( $draft: Boolean, $categories: [JSON], $offerType: Catalog_offerType_Input ) {
    Categories(
      where: {
        categories: { in: $categories },
        offerType: { equals: $offerType }
      },
      limit: 100,
      draft: $draft
    ) {
      docs {
        id
        title
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
        }
      }
    }
  }
`;
export const CATEGORIES_A = `
  query Categories( $draft: Boolean, $offerType: Catalog_offerType_Input ) {
    Categories(
      where: {
        offerType: { equals: $offerType }
      },
      limit: 100,
      draft: $draft
    )
    {
      docs {
        categories {
          id
          title
        }
      }
    }
}
`;

export const CATEGORY = `
  query Categories($slug: [String], $draft: Boolean) {
    Categories(where: { slug: { in: $slug } }, draft: $draft) {
      docs {
        title
        slug
        id
      }
    }
  }
`;
