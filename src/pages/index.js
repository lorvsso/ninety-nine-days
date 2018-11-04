import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <h1 className="clip">ninety-nine days</h1>
        <section className="center">
          <div class="grid">
            {posts.map(({ node: post }) => (
              <Link className="item bb-0" key={post.id} to={post.fields.slug}>
                <div class="item-overlay" />
                <img src={post.frontmatter.featuredImage} alt="" />
                <div class="item-details">
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
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
