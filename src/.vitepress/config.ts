import { defineConfig } from "vitepress";

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

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Greeter",
  description: "A Web Based Greeter For LightDM",
  cleanUrls: true,
  lastUpdated: true,
  outDir: "../dist",

  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    es: {
      label: "Español",
      lang: "es",
      themeConfig: {
        sidebarMenuLabel: "Menú",
        langMenuLabel: "Cambiar idioma",
        darkModeSwitchLabel: "Apariencia",
        outlineTitle: "En esta página",
        returnToTopLabel: "Volver arriba",
        lastUpdated: {
          text: "Última actualización",
        },

        docFooter: {
          next: "Página siguiente",
          prev: "Página anterior",
        },
        notFound: {
          title: "PÁGINA NO ENCONTRADA",
          quote:
            "Pero si no cambias de direción, y si sigues buscando, puede que termines en donde te diriges.",
          linkText: "Llévame al inicio",
          linkLabel: "Ir al inicio",
        },

        nav: [
          { text: "Inicio", link: "/es" },
          { text: "Temas", link: "/themes" },
          { text: "Guía", link: "/es/docs/guide" },
          { text: "API", link: "/es/docs/api" },
        ],

        sidebar: {
          "/es/docs/guide": [
            {
              text: "Introducción",
              base: "/es/docs/guide",
              items: [
                { text: "About", link: "/" },
                { text: "¿Por qué?", link: "/why" },
              ],
            },
            {
              text: "Guía",
              base: "/es/docs/guide",
              items: [
                { text: "Introducción", link: "/intro" },
                {
                  text: "Diferentes métodos de autenticación",
                  link: "/auth-methods",
                },
                { text: "Señales", link: "/signals" },
                { text: "Cómo autenticarse", link: "/how-to-auth" },
                { text: "Temas", link: "/theming" },
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Themes", link: "/themes" },
      { text: "Guide", link: "/docs/guide" },
      { text: "API", link: "/docs/api" },
    ],

    sidebar: {
      "/docs/guide": [
        {
          text: "Introduction",
          base: "/docs/guide",
          items: [
            { text: "About", link: "/" },
            { text: "Why", link: "/why" },
          ],
        },
        {
          text: "Guide",
          base: "/docs/guide",
          items: [
            { text: "Introduction", link: "/intro" },
            {
              text: "Different methods of authentication",
              link: "/auth-methods",
            },
            { text: "Signals", link: "/signals" },
            { text: "How to authenticate", link: "/how-to-auth" },
            { text: "Theming", link: "/theming" },
          ],
        },
      ],
      "/docs/api": [
        {
          text: "LightDM",
          base: "/docs/api",
          items: [
            { text: "About", link: "/" },
            { text: "Greeter", link: "/Greeter" },
            { text: "GreeterConfig", link: "/GreeterConfig" },
            { text: "ThemeUtils", link: "/ThemeUtils" },
            { text: "GreeterComm", link: "/GreeterComm" },
            { text: "Window", link: "/window" },
          ],
        },
        {
          text: "LDMObjects",
          base: "/docs/api",
          items: [
            { text: "Battery", link: "/Battery" },
            { text: "Language", link: "/Language" },
            { text: "Layout", link: "/Layout" },
            { text: "User", link: "/User" },
            { text: "Session", link: "/Session" },
            { text: "Signal", link: "/Signal" },
            { text: "WindowMetadata", link: "/WindowMetadata" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/JezerM/web-greeter" },
    ],
  },

  markdown: {
    anchor: {
      slugify,
    },
  },
});
