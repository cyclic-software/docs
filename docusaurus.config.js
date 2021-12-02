// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cyclic Documentation',
  tagline: 'Apps in seconds',
  url: 'https://docs.cyclic.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cyclic-software', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false, // https://docusaurus.io/docs/deployment#deploying-to-github-pages

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/cyclic-software/docs/edit/main/website/',
          // routeBasePath: '/', // If we want to drop straight into docs uncomment and delete index.js files
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/cyclic-software/docs/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        style: 'dark',
        logo: {
          alt: 'Cyclic Logo',
          src: 'img/logo-light.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/cyclic-software/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Cyclic',
            items: [
              {
                label: 'Home - www.cyclic.sh',
                href: 'https://www.cyclic.sh/',
              },
              {
                label: 'App - app.cyclic.sh',
                href: 'https://app.cyclic.sh/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/huhcqxXCbE',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cyclicsoftware',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cyclic-software/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cyclic Software, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
