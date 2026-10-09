// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Abrigar',
  tagline: 'Welcome, wandering Soul',
  favicon: 'img/Abrigar Logo.png',

  future: {
    v4: true,
  },

  url: 'https://akua078.github.io',
  baseUrl: '/abrigar/',

  organizationName: 'Akua078',
  projectName: 'abrigar',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: "./static/img/AbrigarGreetingCard.png",

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      logo: {
        alt: 'Abrigar Logo',
        src: 'img/Abrigar Logo.png',
      },
      title: 'Abrigar',

      items: [
        {
          label: 'World',
          to: '/docs/world',
          position: 'left',
        },
        {
          label: 'Nations',
          to: '/docs/nations',
          position: 'left',
        },
        {
          label: 'Groups',
          to: '/docs/groups',
          position: 'left',
        },
      ],
    },

  
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;