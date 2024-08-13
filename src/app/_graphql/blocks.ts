
import { LINK_FIELDS } from "./link";
import { MEDIA } from "./media";



export const FORM_BLOCK = `
  ...on ContactFormBlock {
    blockType
    heading
    description
    successMessage
  }
`;

export const CATALOG_BLOCK = `
  ...on CatalogBlock {
    blockType
    category {
      id
      title
    }
    type
  }
`;

export const SERVICES_BLOCK = `
  ...on ServicesBlock {
    blockType
    services {
      icon
      title
      description
      link
    }
  }
`;
export const SERVICES_BIG_BLOCK = `
  ...on ServicesBigBlock {
    blockType
    title
    description
    services {
      icon
      title
      description
    }
  }
`;

export const VALUES_BLOCK = `
  ...on ValuesBlock {
    blockType
    title
    image {
      url
      alt
    }
    values {
      icon
      title
      description
    }
  }
`;

export const CONTACT_ACTION_BLOCK = `
  ...on ContactActionBlock {
    blockType
    backgroundImage {
      url
      alt
    }
    title
    contactNumber
    description
    image {
      url
      alt
    }
  }
`;

export const SIMPLE_TEXT_BLOCK = `
  ...on SimpleText {
    blockType
    title
    richText
  }
`;

export const HOME_SLIDER = `
  ...on HomeSlider {
    blockType
    slides {
      image {
        url
        alt
      }
      title
      description
      button {
        title
        link
      }
    }
  }
`;
export const LOGO_SLIDER_BLOCK = `
  ...on LogoSliderBlock {
    blockType
    slides {
      image {
        url
        alt
      }
    }
  }
`;

export const ABOUT_US_BLOCK = `
  ...on AboutUsBlock {
    blockType
    image {
      url
      alt
    }
    yearsExperience
    title
    description
    buttonText
    buttonLink
  }
`;
export const ABOUT_US_BIG_BLOCK = `
  ...on AboutUsBigBlock {
    blockType
    image {
      url
      alt
    }
    smallTitle
    title
    caption
    paragraph1
    paragraph2
  }
`;

export const CALL_TO_ACTION = `
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${LINK_FIELDS()}
  }
}
`;

export const CONTENT = `
...on Content {
  blockType
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`;

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  invertBackground
  position
  ${MEDIA}
}
`;

export const CARD_BLOCK = `
...on CardBlock {
  blockType
  title
  icon
  richText
  }
`;

export const SMALL_CARD_BLOCK = `
...on SmallCardBlock {
  blockType
  cards {
    title
    cssClass
    richText
    }
  }
`;

export const LAYOUT_BLOCK = `
...on LayoutBlock {
  blockType
  columnWidth
  column {
    column {
      ${FORM_BLOCK}
      ${CARD_BLOCK}
      ${SERVICES_BIG_BLOCK}
      }
    }
  }
`;
