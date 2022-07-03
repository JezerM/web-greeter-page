import { defaultTheme, defineUserConfig } from "vuepress";
const { description } = require("../../package");

const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;

function slugify(str: string): string {
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

export default defineUserConfig({
  title: "Web Greeter Documentation",
  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#1a1a1a" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  //base: "/web-greeter-page/docs/",
  base: "/docs/",
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

  theme: defaultTheme({
    repo: "",
    editLink: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    colorMode: "auto",

    locales: {
      "/": {
        selectLanguageText: "Languages",
        selectLanguageName: "English",
        selectLanguageAriaLabel: "Languages",

        navbar: [
          {
            text: "Home",
            link: "https://jezerm.github.io/web-greeter-page/",
            target: "__self",
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
              text: "API",
              collapsible: true,
              children: [
                "/api/",
                "/api/LightDM",
                "/api/Greeter",
                "/api/GreeterConfig",
                "/api/ThemeUtils",
                "/api/GreeterComm",
                "/api/window",
              ],
            },
            {
              text: "LDMObjects",
              collapsible: true,
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
              text: "Introduction",
              collapsible: false,
              children: ["/", "Why"],
            },
            {
              text: "Guide",
              collapsible: false,
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
        selectLanguageText: "Idiomas",
        selectLanguageName: "Español",
        selectLanguageAriaLabel: "Idiomas",

        navbar: [
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
              text: "API",
              collapsible: true,
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
              text: "LDMObjects",
              collapsible: true,
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
              text: "Introducción",
              collapsible: false,
              children: ["/es/", "/es/Why"],
            },
            {
              text: "Guía",
              collapsible: false,
              children: ["/es/guide/intro"],
            },
          ],
        },
      },
    },
  }),

  markdown: {
    slugify: slugify,
  },
});
