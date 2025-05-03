import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'York SWE Edge',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hxddad.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/york-swe-edge/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hxddad', // Usually your GitHub org/user name.
  projectName: 'york-swe-edge', // Usually your repo name.
  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: process.env.CONTAINER_ID
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/bergeron.jpg',
    navbar: {
      title: 'York SWE Edge',
      logo: {
        alt: 'Site Logo',
        src: 'img/cs-hub-logo.jpg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'CSHub Links',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/yorkcshub/',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/Uu88sQ2vfj',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@yorkcshub',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/showcase/yorkcshub/posts/?feedView=all'
            }
          ],
        },
        {
          title: 'My Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hxddad',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/hxddad/',
            }
          ],
        },
      ],
      copyright: `Made with ❤️. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
