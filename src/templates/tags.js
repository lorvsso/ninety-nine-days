import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    // const postLinks = posts.map(post => (
    //   <li key={post.node.fields.slug}>
    //     <Link to={post.node.fields.slug}>
    //       <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
    //     </Link>
    //   </li>
    // ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”.`;

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <p className="tc">
          {tagHeader}{" "}
          <Link to="/tags/" className="dark-gray">
            See all tags
          </Link>
          <br />
        </p>

        <section className="center mt3">
          <div class="grid">
            {posts.map(({ node: post }) => (
              <Link className="item" key={post.id} to={post.fields.slug}>
                <img src={post.frontmatter.featuredImage} />
                {/* <span className="absolute">{post.frontmatter.title}</span> */}
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
