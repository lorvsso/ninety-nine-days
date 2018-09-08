import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./tachyons.css";

const TemplateWrapper = ({ children }) => (
  <div className="is-four-fifths">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
