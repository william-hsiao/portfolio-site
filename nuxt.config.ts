// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  runtimeConfig: {
    public: {
      domain: process.env.NUXT_PUBLIC_DOMAIN,
      gtag: process.env.NUXT_PUBLIC_GTAG,
    },
  },

  modules: ["@nuxt/content", "@nuxtjs/google-fonts", "nuxt-security"],

  googleFonts: {
    families: {
      Play: [400],
      Montserrat: [400],
    },
    download: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        "default-src": ["'self'"],
        "script-src": [
          "'self'",
          "https://*.googletagmanager.com",
          "'unsafe-inline'",
        ],
        "style-src": ["'self'", "'unsafe-inline'"],
        "connect-src": [
          "'self'",
          "https://*.google-analytics.com",
          "https://*.analytics.google.com",
          "https://*.googletagmanager.com",
          ...(process.env.NODE_ENV === "development"
            ? ["ws://localhost:*", "http://localhost:*"]
            : []),
        ],
        "img-src": [
          "'self'",
          "https://*.google-analytics.com",
          "https://*.googletagmanager.com",
        ],
      },
    },
  },
});
