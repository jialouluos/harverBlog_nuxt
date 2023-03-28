// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [
      "@css-render/vue3-ssr",
      // '@juggle/resize-observer',
    ],
  },
  modules: ["@pinia/nuxt","@pinia-plugin-persistedstate/nuxt"],
  // piniaPersistedstate: {
  //   cookieOptions: {
  //     sameSite: "strict",
  //   },
  //   storage: "localStorage",
  // },
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
