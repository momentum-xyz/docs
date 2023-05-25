// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid');

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Odyssey',
    tagline: 'The place where our imaginations meet to create together, connect, and tokenise adventures, quests, and journeys.',
    url: 'https://discover.odyssey.org',
    baseUrl: process.env.BASE_URL || '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/rabbit-favicon-green-black.png',

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
          blog: {
            blogTitle: 'Odyssey Creator Blog',
            blogDescription: 'All the latest about Odyssey, news, tutorials, and helpful articles from the team',
            postsPerPage: 10,
            blogSidebarTitle: 'Recent posts',
            blogSidebarCount: 5,
            feedOptions: {
              type: 'all',
            },
          },
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
            'Odyssey is now in beta release on testnet, apply to get early access!',
          backgroundColor: '#fafbfc',
          textColor: '#091E42',
          isCloseable: false,
        },
        image: 'img/og-image-full-logo-1200x630.png',
        navbar: {
          title: 'Odyssey',
          logo: {
            alt: 'Odyssey Logo',
            src: 'img/rabbit-dark.svg',
            srcDark: 'img/rabbit-light.svg',
          },
          items: [
            {
              to: 'what-is-odyssey/get-a-wallet/',
              //docId: 'create-your-odyssey/create-your-odyssey',
              position: 'left',
              label: 'Create',
            },
            {
              to: 'explore-the-features',
              //docId: 'explore-the-features/explore-the-features',
              position: 'left',
              label: 'Explore',
            },
            {
              href: 'https://github.com/momentum-xyz/',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        metadata: [{name: 'keywords', content: 'web3, social, world building'}],
    // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML
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
              title: 'Discover Odyssey',
              items: [
                {
                  label: 'Create',
                  to: '/',
                },
                {
                  label: 'Explore',
                  to: '/explore-the-features/',
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
                  href: 'https://twitter.com/odysseycreator',
                },
                {
                  label: 'Telegram',
                  href: 'https://t.me/odysseycreator',
                },
                {
                  label: 'YouTube',
                  href: 'https://www.youtube.com/@odysseycreator',
                },
                {
                  label: 'Medium',
                  href: 'https://medium.com/@odysseycreator',
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/odysseycreator/',
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
            from: '/blog/odyssey-super-user-interview-clown-world-house/',
            to: '/blog/odyssey-user-interview-clown-world-house/',
          },
          /*{
            from: '/category/learn/',
            to: '/learn/what-is/',
          },
          {
            from: '/learn/AMA - Odyssey method/',
            to: '/Odyssey method/How to/',
          },*/
        ],
      }
      ],
    ],
  };
  return config;
}

module.exports = createConfig;
