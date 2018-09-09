import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./base.css";

const TemplateWrapper = ({ children }) => (
  <div className="mw8 center sans-serif fw3 dark-gray">
    <Helmet
      title="ninety-nine days"
      link={[
        {
          href:
            "https://fonts.googleapis.com/css?family=Abril+Fatface|Crete+Round|EB+Garamond:600,700,800|Josefin+Slab:700|Lora:700|Vollkorn:700,900|Zilla+Slab:700",
          rel: "stylesheet"
        }
      ]}
    />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
