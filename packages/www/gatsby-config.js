module.exports = {
  siteMetadata: {
    title: 'Looker Components',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation`,
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
    // `gatsby-plugin-react-helmet`, @TODO - configure this to set page titles
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Looker Components and Style Guide',
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
