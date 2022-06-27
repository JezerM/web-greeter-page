const { description } = require("../../package");

const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;

function slugify(str) {
  const val = str
    .normalize("NFKD")
    // Remove accents
    .replace(rCombining, "")
    // Remove control characters
    .replace(rControl, "")
    // Remove return value
    .replace(/\s*:\s*.*/, "")
    // Remove function parameters
    .replace(/\s*\(\s*.*/, "")
    // Replace special characters
    .replace(rSpecial, "-")
    // Remove continuous separators
    .replace(/\-{2,}/g, "-")
    // Remove prefixing and trailing separators
    .replace(/^\-+|\-+$/g, "")
    // ensure it doesn't start with a number (#121)
    .replace(/^(\d)/, "_$1")
    // lowercase
    .toLowerCase();
  //console.log({ str, val });
  return val;
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Web Greeter Documentation",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#1a1a1a" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  base: "/web-greeter-page/docs/",
  dest: "../dist/docs/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Web Greeter Documentation",
    },
    "/es/": {
      lang: "es",
      title: "Documentación de Web Greeter",
    },
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,

    smoothScroll: true,

    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",

        nav: [
          {
            text: "Home",
            link: "https://jezerm.github.io/web-greeter-page/",
            target: "_self",
            rel: "prev",
          },
          {
            text: "Guide",
            link: "/",
          },
          {
            text: "API",
            link: "/api/",
          },
        ],
        sidebar: {
          "/api/": [
            {
              title: "API",
              collapsable: true,
              sidebarDepth: 3,
              children: [
                "",
                "/api/LightDM",
                "/api/Greeter",
                "/api/GreeterConfig",
                "/api/ThemeUtils",
                "/api/GreeterComm",
                "/api/window",
              ],
            },
            {
              title: "LDMObjects",
              collapsable: true,
              sidebarDepth: 3,
              children: [
                "/api/Battery",
                "/api/Language",
                "/api/Layout",
                "/api/User",
                "/api/Session",
                "/api/Signal",
              ],
            },
          ],
          "/": [
            {
              title: "Introduction",
              collapsable: false,
              children: ["", "Why"],
            },
            {
              title: "Guide",
              collapsable: false,
              children: [
                "/guide/intro",
                "/guide/auth_methods",
                "/guide/signals",
                "/guide/howto_auth",
                "/guide/theming",
              ],
            },
          ],
        },
      },
      "/es/": {
        selectText: "Idiomas",
        label: "Español",
        ariaLabel: "Idiomas",

        nav: [
          {
            text: "Inicio",
            link: "https://jezerm.github.io/web-greeter-page/",
            target: "_self",
            rel: "prev",
          },
          {
            text: "Guía",
            link: "/es/",
          },
          {
            text: "API",
            link: "/es/api/",
          },
        ],
        sidebar: {
          "/es/api/": [
            {
              title: "API",
              collapsable: true,
              sidebarDepth: 3,
              children: [
                "/es/api/",
                "/es/api/LightDM",
                "/es/api/Greeter",
                "/es/api/GreeterConfig",
                "/es/api/ThemeUtils",
                "/es/api/GreeterComm",
                "/es/api/window",
              ],
            },
            {
              title: "LDMObjects",
              collapsable: true,
              sidebarDepth: 3,
              children: [
                "/es/api/Battery",
                "/es/api/Language",
                "/es/api/Layout",
                "/es/api/User",
                "/es/api/Session",
                "/es/api/Signal",
              ],
            },
          ],
          "/es/": [
            {
              title: "Introducción",
              collapsable: false,
              children: ["/es/", "/es/Why"],
            },
            {
              title: "Guía",
              collapsable: false,
              children: ["/es/guide/intro"],
            },
          ],
        },
      },
    },
  },

  markdown: {
    slugify: slugify,
    anchor: {
      //slugify: slugify,
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: "#",
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  evergreen: true,
};