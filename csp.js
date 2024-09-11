const policies = {
  "default-src": ["*"],
  "script-src": ["*"],
  "style-src": ["*"],
  "font-src": ["*"],
  "img-src": ["*"],
  "connect-src": ["*"],
  "frame-src": ["*"],
  "child-src": ["*"], // Note: 'child-src' is deprecated
  "base-uri": ["*"],
  "form-action": ["*"],
  "object-src": ["*"],
};

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(" ")}`;
    }
    return "";
  })
  .join("; ");
