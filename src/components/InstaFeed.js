import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode {
          edges {
            node {
              thumbnails {
                src
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <img
          className="w3 h3 w4-ns h4-ns mr2 mb2"
          src={data.allInstaNode.edges[0].node.thumbnails[1].src}
        />
        <img
          className="w3 h3 w4-ns h4-ns mr2 mb2"
          src={data.allInstaNode.edges[1].node.thumbnails[1].src}
        />
        <img
          className="w3 h3 w4-ns h4-ns mb2"
          src={data.allInstaNode.edges[2].node.thumbnails[1].src}
        />
      </>
    )}
  />
);
