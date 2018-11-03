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
      <img src={featuredImage} className="" />

      <h1 className="tc">{title}</h1>

      <p className="tc">{description}</p>
      <div className="measure center f4 content">
        <PostContent content={content} />
        {tags && tags.length ? (
          <ul className="list flex justify-center pl0 mt5">
            {tags.map(tag => (
              <li className="mr3" key={tag + `tag`}>
                <Link className="dark-gray" to={`/tags/${kebabCase(tag)}/`}>
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
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
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
