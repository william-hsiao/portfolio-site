// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",

  modules: ["@nuxt/content", "@nuxtjs/google-fonts"],

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
});
