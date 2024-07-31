import { CONTENT, MEDIA_BLOCK, HOME_SLIDER, ABOUT_US_BLOCK, CONTACT_ACTION_BLOCK, SERVICES_BLOCK,SERVICES_BIG_BLOCK, CATALOG_BLOCK, FORM_BLOCK, LAYOUT_BLOCK, CARD_BLOCK, SMALL_CARD_BLOCK, ABOUT_US_BIG_BLOCK, VALUES_BLOCK, SIMPLE_TEXT_BLOCK   } from "./blocks";
import { LINK_FIELDS } from "./link";
import { MEDIA } from "./media";
import { META } from "./meta";

export const PAGES = `
  query Pages {
    Pages(limit: 300) {
      docs {
        slug
      }
    }
  }
`;

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        layout {
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${HOME_SLIDER}
          ${ABOUT_US_BLOCK}
          ${CONTACT_ACTION_BLOCK}
          ${SERVICES_BLOCK}
          ${CATALOG_BLOCK}
          ${FORM_BLOCK}
          ${LAYOUT_BLOCK}
          ${CARD_BLOCK}
          ${SMALL_CARD_BLOCK}
          ${ABOUT_US_BIG_BLOCK}
          ${VALUES_BLOCK}
          ${SIMPLE_TEXT_BLOCK}
          ${SERVICES_BIG_BLOCK}
        }
        ${MEDIA}
      }
    }
  }
`;
