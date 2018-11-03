module.exports = {
  siteMetadata: {
    title: "ninety-nine days"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "images"
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/styles/base.css`
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
