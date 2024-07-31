import type { FieldHook } from "payload/types";

const format = (val: string): string => {
  return val
    .normalize("NFKD") // Normalize to decompose characters into base and diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .replace(/ /g, "-") // Replace spaces with hyphens
    .replace(/[^a-zA-Z0-9-]/g, "") // Remove any non-alphanumeric and non-hyphen characters
    .toLowerCase(); // Convert to lowercase
};

const formatSlug =
  (fallback: string): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    if (typeof value === "string") {
      return format(value);
    }

    if (operation === "create") {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback];

      if (fallbackData && typeof fallbackData === "string") {
        return format(fallbackData);
      }
    }

    return value;
  };

export default formatSlug;
