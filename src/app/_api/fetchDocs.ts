import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

import type { Config } from "../../payload/payload-types";
import { PAGES } from "../_graphql/pages";
import { POSTS } from "../_graphql/posts";
import { PROJECTS } from "../_graphql/projects";
import { CATALOGS } from "../_graphql/catalog";
import { GRAPHQL_API_URL } from "./shared";
import { payloadToken } from "./token";
import { CATEGORIES } from "../_graphql/categories";

const queryMap: Record<keyof Config["collections"], { query: string; key: string }> = {
  pages: {
    query: PAGES,
    key: "Pages",
  },
  catalog: {
    query: CATALOGS,
    key: "Catalogs",
  },
  categories: {
    query: CATEGORIES,
    key: "Categories",
  },
  media: {
    query: "",
    key: ""
  },
  users: {
    query: "",
    key: ""
  },
  redirects: {
    query: "",
    key: ""
  },
  "payload-preferences": {
    query: "",
    key: ""
  },
  "payload-migrations": {
    query: "",
    key: ""
  }
};

export const fetchDocs = async <T>(collection: keyof Config["collections"], draft?: boolean, variables?: Record<string, unknown>): Promise<T[]> => {
  if (!queryMap[collection]) throw new Error(`Collection ${collection} not found`);

  let token: RequestCookie | undefined;

  if (draft) {
    const { cookies } = await import("next/headers");
    token = cookies().get(payloadToken);
  }

  const docs: T[] = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token?.value && draft ? { Authorization: `JWT ${token.value}` } : {}),
    },
    cache: "no-store",
    next: { tags: [collection] },
    body: JSON.stringify({
      query: queryMap[collection].query,
      variables,
    }),
  })
    ?.then((res) => res.json())
    ?.then((res) => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? "Error fetching docs");

      return res?.data?.[queryMap[collection].key]?.docs;
    });

  return docs;
};
