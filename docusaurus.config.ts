import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'hapet',
  tagline: 'hapet-lang site',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hapetlang.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          
          editUrl: ({ locale, docPath, versionDocsDirPath, permalink, version }) => {
             // Example logic:
             if (locale === 'en') {
               return `https://github.com/hapet-lang/site/blob/main/${docPath}`;
             } else if (locale === 'ru') {
                return `https://github.com/hapet-lang/site/blob/main/i18n/ru/docusaurus-plugin-content-docs/current/${docPath}`;
             } else if (locale === 'zh-Hans') {
                return `https://github.com/hapet-lang/site/blob/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/${docPath}`;
             }
             return undefined; // or a default URL
           },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'hapet',
      logo: {
        alt: 'hapet Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/hapet-lang/hapet/',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/hapet',
            },
            {
              label: 'Telegram chat',
              href: 'https://t.me/hapetlang',
            },
            {
              label: 'BlueSky',
              href: 'https://bsky.app/profile/hapet-lang.bsky.social',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hapet-lang/hapet/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} hapet, Airat Abdrakov`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp'],
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
