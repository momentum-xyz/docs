// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Momentum',
  tagline: 'Monumental',
  url: 'https://momentum.xyz',
  baseUrl: process.env.BASE_URL || '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'momentum-xyz',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/momentum-xyz/docs/',
        },
        blog: false,
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
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'annoucement_wip',
        content:
          'Work In Progress...',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'Momentum',
        logo: {
          alt: 'Momentum Logo',
          src: 'img/flamingo_cyan.svg',
          srcDark: 'img/flamingo_white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'what-is',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'api',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://github.com/momentum-xyz/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/what-is',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6PH9nSu7UP',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Momentum.xyz',
                href: 'https://momentum.xyz',
              },
            ],
          },
        ],
        copyright: `
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" />
        </a>
        <br />
        This work is licensed under a 
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        Creative Commons Attribution 4.0 International License
        </a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    /*
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: false, // require.resolve('./sidebarsApi.js'),
        docLayoutComponent: "@theme/DocPage",
        docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "api",
        config: {
          api: {
            specPath: "https://dev.odyssey.ninja/api/v3/backend/docs-json",
            outputDir: "api",
            //sidebarOptions: {
            //  groupPathsBy: "tag",
            //},
          }
        },
      },
    ],
    */
  ],

};

module.exports = config;
