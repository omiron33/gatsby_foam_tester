module.exports = {
  siteMetadata: {
    title: `Omega Yeast`,
    description: `Site for beer`,
    author: `Warren Douglas Advertising`,
    logo: `icon.jpg`,
    phone: `773.657.3438`,
    street: `West 7th Street`,
    city: `Fort Worth, TX`,
    zip: `76102`,
    siteUrl: `https://digitalthrive.wdgital.com`,
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Products',
        link: '/products',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    {
      resolve: '@digitalthrive/gatsby-theme-template-foam',
      options: {
        contentPath: 'data',
        basePath: '/data',
      },
    },
  ],
}
