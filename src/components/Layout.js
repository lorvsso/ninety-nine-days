import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./base.css";

const TemplateWrapper = ({ children }) => (
  <div className="mw7 center sans-serif fw3 dark">
    <Helmet title="ninety-nine days" />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
