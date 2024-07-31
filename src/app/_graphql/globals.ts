import { LINK_FIELDS } from "./link";

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    navItems2 {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    navItems3 {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`;

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`;

export const FOOTER = `
  Footer {
    navItems4 {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    navItems5 {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    info {
      ClassName
      label
      value
    }
  }
`;

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`;

export const SETTINGS = `
  Settings {
    postsPage {
      slug
    }
    projectsPage {
      slug
    }
  }
`;

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`;
