const policies = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://maps.googleapis.com", "https://*.googletagmanager.com"],
  "child-src": ["'self'", "https://www.youtube.com", "https://www.youtube-nocookie.com"],
  "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  "img-src": ["'self'", "https://raw.githubusercontent.com", "https://*.google-analytics.com", "https://*.googletagmanager.com", "https://i.ytimg.com"],
  "font-src": ["'self'", "data:"],
  "frame-src": ["'self'", "https://www.youtube.com", "https://www.youtube-nocookie.com"],
  "connect-src": ["'self'", "https://maps.googleapis.com", "https://*.google-analytics.com", "https://*.analytics.google.com", "https://*.googletagmanager.com"],
};

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(" ")}`;
    }
    return "";
  })
  .join("; ");
