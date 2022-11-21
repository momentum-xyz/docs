// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid');

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Momentum',
    tagline: 'Enabling digital societies to create, build and scale together in a decentralized metaverse network',
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
              'https://github.com/momentum-xyz/docs/blob/main/',
            remarkPlugins: [[mdxMermaid.default, {
              theme: { light: 'default', dark: 'dark' }
            }]],
          },
          blog: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
      [
        'redocusaurus',
        {
          // Plugin Options for loading OpenAPI files
          specs: [
            {
              id: 'api-develop',
              spec: 'https://momentum-xyz.github.io/ubercontroller/openapi.json',
              route: '/api/develop/',
              layout: {
                title: 'Momentum API',
              },
            },
          ],
          // Theme Options for modifying how redoc renders them
          theme: {
            // Change with your site colors
            primaryColor: '#1890ff',
            primaryColorDark: '#01ffb3',
          },
        },
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
          title: 'Odyssey',
          logo: {
            alt: 'Odyssey Logo',
            src: 'img/flamingo_cyan.svg', //need to change logo when available
            srcDark: 'img/flamingo_white.svg', //need to change logo when available
          },
          items: [
            {
              type: 'doc',
              docId: 'create-your-odyssey/create-your-odyssey',
              position: 'left',
              label: 'Create',
            },
            {
              type: 'doc',
              docId: 'explore-the-features/explore-the-features',
              position: 'left',
              label: 'Explore',
            },
            {
              type: 'doc',
              docId: 'build/getting-started',
              position: 'left',
              label: 'Build',
            },
            {
              to: 'api/develop',
              position: 'left',
              label: 'API',
            },
            //{to: 'api', label: 'API', position: 'left'},
            {
              type: 'doc',
              docId: 'about-odyssey/about-odyssey',
              position: 'right',
              label: 'About',
            },
            {
              type: 'doc',
              docId: 'contact-us/contact-us',
              position: 'right',
              label: 'Contact',
            },
            {
              type: 'doc',
              docId: 'careers/careers',
              position: 'right',
              label: 'Careers',
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
                  label: 'Learn',
                  to: '/learn/what-is',
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
      [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/category/learn/',
            to: '/learn/what-is/',
          },
          {
            from: '/learn/AMA - Odyssey method/',
            to: '/Odyssey method/How to/',
          },
        ],
      }
      ],
    ],
  };
  return config;
}

module.exports = createConfig;
