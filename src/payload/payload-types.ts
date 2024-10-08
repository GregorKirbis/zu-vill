/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    catalog: Catalog;
    categories: Category;
    requests: Request;
    media: Media;
    users: User;
    redirects: Redirect;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: Settings;
    header: Header;
    footer: Footer;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  publishedAt?: string | null;
  media?: number | Media | null;
  layout: (
    | {
        slides: {
          image: number | Media;
          title: string;
          description: string;
          button?:
            | {
                title: string;
                link: string;
                id?: string | null;
              }[]
            | null;
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'homeSlider';
      }
    | {
        title: string;
        richText: {
          [k: string]: unknown;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'simpleText';
      }
    | {
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                display?: ('normal' | 'highlighted') | null;
                reference?: {
                  relationTo: 'pages';
                  value: number | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: number | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        image: number | Media;
        yearsExperience: number;
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
        id?: string | null;
        blockName?: string | null;
        blockType: 'aboutUsBlock';
      }
    | {
        image: number | Media;
        smallTitle: string;
        title: string;
        caption: string;
        paragraph1: string;
        paragraph2: string;
        id?: string | null;
        blockName?: string | null;
        blockType: 'aboutUsBigBlock';
      }
    | {
        backgroundImage: number | Media;
        title: string;
        contactNumber: string;
        description: string;
        image: number | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'contactActionBlock';
      }
    | {
        services: {
          icon: string;
          title: string;
          description: string;
          link: string;
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'servicesBlock';
      }
    | {
        title?: string | null;
        description: string;
        services: {
          icon: string;
          title: string;
          description: string;
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'servicesBigBlock';
      }
    | {
        category?: (number | null) | Category;
        type: 'najem' | 'prodaja' | 'oboje';
        id?: string | null;
        blockName?: string | null;
        blockType: 'catalogBlock';
      }
    | {
        heading: string;
        description: string;
        successMessage: string;
        id?: string | null;
        blockName?: string | null;
        blockType: 'contactFormBlock';
      }
    | {
        columnWidth: '1/3' | '1/2' | '1';
        column?:
          | {
              column?:
                | (
                    | {
                        heading: string;
                        description: string;
                        successMessage: string;
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'contactFormBlock';
                      }
                    | {
                        title: string;
                        icon: 'ti-location-pin' | 'ti-email' | 'ti-mobile';
                        richText: {
                          [k: string]: unknown;
                        }[];
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'cardBlock';
                      }
                    | {
                        title?: string | null;
                        description: string;
                        services: {
                          icon: string;
                          title: string;
                          description: string;
                          id?: string | null;
                        }[];
                        id?: string | null;
                        blockName?: string | null;
                        blockType: 'servicesBigBlock';
                      }
                  )[]
                | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'layoutBlock';
      }
    | {
        title: string;
        icon: 'ti-location-pin' | 'ti-email' | 'ti-mobile';
        richText: {
          [k: string]: unknown;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'cardBlock';
      }
    | {
        cards: {
          title: string;
          cssClass: string;
          richText: {
            [k: string]: unknown;
          }[];
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'smallCardBlock';
      }
    | {
        image: number | Media;
        title: string;
        values: {
          icon: string;
          title: string;
          description: string;
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'valuesBlock';
      }
    | {
        slides: {
          image: number | Media;
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'logoSliderBlock';
      }
  )[];
  slug?: string | null;
  parent?: (number | null) | Page;
  breadcrumbs?:
    | {
        doc?: (number | null) | Page;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    original?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    medium?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  title?: string | null;
  slug?: string | null;
  parent?: (number | null) | Category;
  breadcrumbs?:
    | {
        doc?: (number | null) | Category;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "catalog".
 */
export interface Catalog {
  id: number;
  images?:
    | {
        image?: number | Media | null;
        id?: string | null;
      }[]
    | null;
  title: string;
  year: number;
  price: number;
  ddv?: boolean | null;
  additionalProperties?:
    | {
        property: string;
        value: {
          [k: string]: unknown;
        }[];
        id?: string | null;
      }[]
    | null;
  categories: (number | Category)[];
  offerType: 'najem' | 'prodaja' | 'oboje';
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "requests".
 */
export interface Request {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  productLink?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: number;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?: {
      relationTo: 'pages';
      value: number | Page;
    } | null;
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
  id: number;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          display?: ('normal' | 'highlighted') | null;
          reference?: {
            relationTo: 'pages';
            value: number | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  navItems2?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          display?: ('normal' | 'highlighted') | null;
          reference?: {
            relationTo: 'pages';
            value: number | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  navItems3?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          display?: ('normal' | 'highlighted') | null;
          reference?: {
            relationTo: 'pages';
            value: number | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  navItems4?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          display?: ('normal' | 'highlighted') | null;
          reference?: {
            relationTo: 'pages';
            value: number | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  navItems5?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          display?: ('normal' | 'highlighted') | null;
          reference?: {
            relationTo: 'pages';
            value: number | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  info?:
    | {
        ClassName?: string | null;
        label?: string | null;
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}