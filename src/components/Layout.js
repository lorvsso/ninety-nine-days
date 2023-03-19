import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";

const TemplateWrapper = ({ children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mw8 center dark-gray">
      <Helmet title="ninety-nine days">
        <html lang="en-AU" />
        <meta
          name="description"
          content="The first trip I ever went on was ninety-nine days long. This blog is about all of the adventures I've had since then."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <footer className="black-60 f7 mt4 mb4 helvetica fw3 tc">
        © Sarah Jackson, 2018-{currentYear}
      </footer>
    </div>
  );
};

export default TemplateWrapper;
