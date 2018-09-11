module.exports = {
  siteMetadata: {
    title: 'Cursus'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}