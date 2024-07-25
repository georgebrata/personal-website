export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  env: {
    apiUrl: 'https://script.google.com/macros/s/AKfycbyadFq3Dre4OqZJf_0NcJ3qXRbdkFn1FFwUOAo2KX0YH8M3ICs7tR0D6FBMEUzts3E3/exec'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "personal-website",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
        {
            src: "https://www.googletagmanager.com/gtag/js?id=G-40P7NL2EGP",
            async: true,
            
        },
        {
            src: "js/ga.js",
        },
        // {
        //     src: "js/formilla.js",
        // },
        {
          src: "https://cdn.counter.dev/script.js",
          'data-utcoffset': "2",
          'data-id': "03bd5925-48e2-4d33-ae59-d66aaf6acba0",
        }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: 'plugins/carousel.js', ssr: false} // Only works on client side
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxt/image"],
  vite: {
    /* options for vite */
    // ssr: true // enable unstable server-side rendering for development (false by default)
    // experimentWarning: false // hide experimental warning message (disabled by default for tests)
    vue: {
      /* options for vite-plugin-vue2 */
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/svg", "@nuxt/image"],
  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    },
  },

  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-dracula.css",
      },
    },
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        
      },
    },
  },
};
