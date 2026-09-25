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

  url: 'https://teastwood3317.github.io',
  baseUrl: '/abrigar/',

  organizationName: 'teastwood3317',
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
    image: 'img/Abrigar Greeting Card.png',

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

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Thomas Eastwood. Abrigar and its original content are the property of Thomas Eastwood.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;