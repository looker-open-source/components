module.exports = {
  siteMetadata: {
    title: `Looker Components`,
    description: '',
  },
  plugins: [
    {
      resolve: `gatsby-theme-docz`,
      options: {
        title: 'Looker Components Styleguide',
        typescript: true,
        menu: [
          'Getting Started',
          'Design Tokens',
          'Icons',
          'Layout',
          'Text',
          'Components',
        ],
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
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
}
