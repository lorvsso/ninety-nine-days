import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  featuredImage,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <article className="pb5">
      {helmet || ""}
      <img src={featuredImage} alt="" className="ml2-ns mr2-ns" />

      <h1 className="tc normal f1 mt5 tc">{title}</h1>

      <p className="tc mb5 f5 tc helvetica fw3">— {description} —</p>
      <div className="mw7 center f4 content">
        <PostContent content={content} />
        {tags && tags.length ? (
          <ul className="list flex justify-center mt5">
            {tags.map(tag => (
              <li className="mr3" key={tag + `tag`}>
                <Link
                  className="dark-gray f5 tc helvetica fw3 bb-0 pa3"
                  to={`/tags/${kebabCase(tag)}/`}
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet title={`${post.frontmatter.title} | ninety-nine days`}>
            <meta name="description" content={post.excerpt} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredImage={post.frontmatter.featuredImage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredImage
      }
    }
  }
`;
