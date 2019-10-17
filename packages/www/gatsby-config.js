module.exports = {
  siteMetadata: {
    title: 'Looker Components',
    description: '',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        title: 'Looker Components Styleguide',
        typescript: true,
        menu: [
          'Introduction',
          'Working with Lens',
          'Advanced',
          'Principles',
          'Style',
          'Icons',
          // Components group
          'Layout',
          'Text',
          'Form',
          'Modals',
          'Components',
        ],
        icon: './src/assets/img/favicon.ico',
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
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Looker Components and Styleguide',
        short_name: 'Components',
        start_url: '/',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/assets/img/icon-512.png',
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
