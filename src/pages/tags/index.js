import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <section className="mw7 center">
      <Helmet title={`Tags | ${title}`} />
      <h1 className="f4 tc helvetica fw3 mb5 mt5">All tags</h1>
      <ul className="list flex justify-center flex-wrap">
        {group.map(tag => (
          <li className="mr3 mb3" key={tag.fieldValue}>
            <Link
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              className="dark-gray"
            >
              {tag.fieldValue}
              &nbsp;(
              {tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
