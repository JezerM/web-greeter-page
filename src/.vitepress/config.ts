import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Greeter",
  description: "A Web Based Greeter For LightDM",

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
          { text: "Temas", link: "/es/themes" },
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
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/JezerM/web-greeter" },
    ],
  },
});
