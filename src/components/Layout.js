import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "../styles/base.scss";

const TemplateWrapper = ({ children }) => (
  <div className="mw8 center dark-gray">
    <Helmet
      title="ninety-nine days"
      link={[
        {
          href: "https://fonts.googleapis.com/css?family=EB+Garamond:400,600",
          rel: "stylesheet"
        }
      ]}
    />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
