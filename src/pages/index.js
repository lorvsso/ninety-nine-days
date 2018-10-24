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
        <section>
          <div class="wrapper">
            <div class="panel">
              <img src="https://scontent-lht6-1.cdninstagram.com/vp/817ea9b62e3671440362c9e2f276017b/5C32110F/t51.2885-15/e35/39321987_278742369590298_4711919895007199232_n.jpg?_nc_eui2=AeHuMgBNarEkZ36Oh14jD-xQExZl3yydAHb2IFJnPGsrbhqkR-U8zL3mFPxZMhoA4Vg-3AKMvD6-gsMdvAte7gV-ktYw8uxfXA5buEzMHLybFg" />
            </div>

            <div class="panel tall-panel">
              <img src="https://scontent-lht6-1.cdninstagram.com/vp/446ad98ab5cf83d3b4181913b21d9378/5C23BEA9/t51.2885-15/e35/39984432_236418250551416_2371002699344762927_n.jpg?_nc_eui2=AeEAIJD6m35m44dS4UhJD7K2Opu_CySschwNV7XahI4MXs-ok5Yk6XnegSKQALRKG99vC5MtQkQRkNI_-LQl6izLR_CEpXCxAk5nLgfExjRWIQ" />
            </div>
            <div class="panel">
              <img src="https://scontent-lht6-1.cdninstagram.com/vp/e0009128dbe7f89840f3ac76f4220201/5C39FFFF/t51.2885-15/e35/39957929_1110065925808534_6749793074215387136_n.jpg?_nc_eui2=AeEAarK8dKuEOLujEEAY4KUeDC3Ow1cL3ZTFDjbDDWqEWLg0JF4YI7u05QZ3gkYqjCUFYcAce_jlsACxY7uKgvKWK4qoODmFqWAZvDGoBwwlig" />
            </div>
            <div class="panel">
              <img src="https://scontent-lht6-1.cdninstagram.com/vp/88c1d2b1ff1c9df1c3982363e61244de/5C33588A/t51.2885-15/e35/39397333_942173169299445_5603478831332589568_n.jpg?_nc_eui2=AeGsyz0s8-ubkeBOrBxQRuyt6e3jIGSlpbRpAuHc7nsQIVpRicVapAFwMzc02Db0WP5FYEvAS0MoY_EERPBAyil278VBaU_iUSkY7gCnTXuTzQ" />
            </div>
            <div class="panel">
              <img src="http://localhost:8000/img/india.jpg" />
            </div>
          </div>
        </section>
        {/* TODO: get working with featured photo in above grid. This is just
        temporary so authors can see the lists of posts. */}
        <section className="tl mw7 center">
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
