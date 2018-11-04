import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    // const totalCount = this.props.data.allMarkdownRemark.totalCount;

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <h1 className="f4 tc helvetica fw3 mb5 mt5">{tag}</h1>
        <section className="center mt3">
          <div class="grid">
            {posts.map(({ node: post }) => (
              <Link className="item bb-0" key={post.id} to={post.fields.slug}>
                <div class="item-overlay" />
                <img src={post.frontmatter.featuredImage} alt="" />
                <div class="item-details fadeIn-bottom">
                  <h3 class="item-title f4 normal">{post.frontmatter.title}</h3>
                  <p class="item-text">{post.frontmatter.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
            featuredImage
          }
        }
      }
    }
  }
`;
