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
      <img src={featuredImage} alt="" className=" pl2 pr2" />

      <h1 className="tc normal f1-ns f2 mt5 tc lh-title">{title}</h1>

      <p className="tc mb5 f5 tc helvetica fw3 black-60">— {description} —</p>
      <div className="measure-wide lh-copy center f4-ns f5 content pl2 pr2">
        <PostContent content={content} />
        {tags && tags.length ? (
          <>
            <ul className="list flex justify-center items-center flex-wrap mt5 pa0">
              {tags.map(tag => (
                <li className="mt0 lh-solid" key={tag + `tag`}>
                  <Link
                    className="black-60 f5 tc helvetica fw3 bb-0 pa3"
                    to={`/tags/${kebabCase(tag)}/`}
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              className="black-60 f6 helvetica fw3 bb-0 flex justify-center "
              to="/tags"
            >
              view all tags
            </Link>
          </>
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
