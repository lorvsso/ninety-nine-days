import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";

import "../styles/base.scss";

const TemplateWrapper = ({ children }) => (
  <div className="mw8 center dark-gray">
    <Helmet title="ninety-nine days">
      <html lang="en-AU" />
      <meta
        name="description"
        content="The travel and lifestyle blog of Sarah Jackson. Full of backpacking, vegan and zero-waste tips."
      />
      <link
        href="https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,600"
        rel="stylesheet"
      />
    </Helmet>
    <Navbar />
    <main>{children}</main>
  </div>
);

export default TemplateWrapper;
