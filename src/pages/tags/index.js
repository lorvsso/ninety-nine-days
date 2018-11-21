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
      <div className="flex items-center justify-center mt4 black-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w1 mr2"
        >
          <title>view tags</title>
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        </svg>{" "}
        <h1 className="f4 tc helvetica fw3">All tags</h1>
      </div>
      <ul className="list flex justify-center flex-wrap">
        {group.map(tag => (
          <li className="mr4 mb4" key={tag.fieldValue}>
            <Link
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              className="black-60 helvetica fw3 bb-0 link"
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
