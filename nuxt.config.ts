// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["@css-render/vue3-ssr"],
  },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "nuxt-icon"],
  nuxtIcon: {
    size: "24px", // default <Icon> size applied
    class: "icon", // default <Icon> class applied
    aliases: {},
  },
  plugins: [{ src: "~/plugins/themeInit.ts", mode: "client" }],
  vite: {
    optimizeDeps: {
      include: [],
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "~/assets/global.less";',
        },
      },
    },
  },
  css: [],
});
