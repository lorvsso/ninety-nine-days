import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import AuthorBio from "../components/AuthorBio";

import "../styles/base.scss";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <h1 className="clip">ninety-nine days</h1>
        <section className="center">
          <div className="grid">
            {posts.map(({ node: post }) => (
              <div className="item bb-0" key={post.id} to={post.fields.slug}>
                <div className="item-overlay" />
                <img src={post.frontmatter.featuredImage} alt="" />
                <div className="item-details">
                  <h2 className="item-title f4 normal mb1">
                    <Link
                      className="link white"
                      key={post.id}
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <Link
                    className="link white f5 mb3 lh-solid"
                    key={post.id}
                    to={post.fields.slug}
                  >
                    {post.frontmatter.description}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt5">
          <AuthorBio />
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
