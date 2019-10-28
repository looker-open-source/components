module.exports = {
  siteMetadata: {
    title: 'Looker UI Components',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation`,
        path: `${__dirname}/src/documentation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/documentation`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          documentation: require.resolve('./src/Layout/Documentation.tsx'),
          default: require.resolve('./src/Layout/Default.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public|dist)/,
        stages: ['develop'],
        options: {
          emitWarning: false,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Looker UI Components',
        short_name: 'Components',
        start_url: '/',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/assets/icon-512.png',
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
