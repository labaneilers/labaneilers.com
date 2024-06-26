import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Software, thoughts, and stuff',
  tagline: 'Adventures in life and other minutiae',
  favicon: 'img/favicon.ico',

  noIndex: process.env["PREVIEW_MODE"] ? true : false,

  // Set the production url of your site here
  url: 'https://labaneilers.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env["PREVIEW_MODE"] ? '/preview/' : '/',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'labaneilers', // Usually your GitHub org/user name.
  projectName: 'labaneilers.com', // Usually your repo name.

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
      {
        docs: false,
        blog: {
          blogTitle: 'Software, thoughts, and stuff',
          blogDescription: 'A blog about software, engineering management, platform engineering, and other minutiae.',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/labaneilers/labaneilers.com/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Laban Eilers`,
          },
          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-T4PWD3MVN1',
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/waterfall.jpg',
    metadata: [
      {name: 'keywords', content: 'laban, eilers, devops, platform engineering, blog, kubernetes'},
    ],
    navbar: {
      title: 'Software, thoughts, and stuff',
      logo: {
        alt: 'Laban Eilers blog',
        src: 'img/laban-prague.jpg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {to: '/', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/paintings', label: 'Paintings', position: 'left'},
        {to: '/resume', label: 'Resume', position: 'left'},
        {
          href: 'https://github.com/labaneilers',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/laban-eilers-38642a/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     // {
        //     //   label: 'Discord',
        //     //   href: 'https://discordapp.com/invite/docusaurus',
        //     // },
        //     // {
        //     //   label: 'Twitter',
        //     //   href: 'https://twitter.com/docusaurus',
        //     // },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/labaneilers',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'about',
              to: '/about',
            },
            {
              label: 'paintings',
              to: '/paintings',
            },
            {
              label: 'resume',
              to: '/resume',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Laban Eilers`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
