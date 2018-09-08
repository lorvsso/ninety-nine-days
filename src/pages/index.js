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
        <section className="tl">
          <h1 className="f2 fw3">Latest Posts</h1>
          {posts.map(({ node: post }) => (
            <div className="mt6" key={post.id}>
              <p>
                <Link
                  className="link f2 link dim gray dib mr3"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.frontmatter.description}
                <br />
                <br />
                <Link
                  className="link gray mt3 sans-serif"
                  to={post.fields.slug}
                >
                  Keep reading →
                </Link>
              </p>
            </div>
          ))}
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
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
