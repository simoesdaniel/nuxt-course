export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "course-project-blog",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-course-ed535-default-rtdb.firebaseio.com"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-course-ed535-default-rtdb.firebaseio.com"
  },
  pageTransition: {
    name: "fade",
    mode: "out-in"
  }
  // loading: {
  //   color: "white",
  //   height: "20px"
  // }
};
