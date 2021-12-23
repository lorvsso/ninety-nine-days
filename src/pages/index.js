import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AuthorBio from "../components/AuthorBio";
import GridItem from "../components/GridItem";
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
              <GridItem
                key={post.id}
                featuredImage={post.frontmatter.featuredImage}
                link={post.fields.slug}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
              />
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
      edges: PropTypes.array,
    }),
  }),
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
