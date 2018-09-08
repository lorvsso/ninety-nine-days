import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="sans-serif">
    <Link
      className="link black b f1 f-headline-ns tc db mb3 mb4-ns"
      style={{ fontFamily: "Roslindale Display Condensed Bold" }}
      to="/"
    >
      ninety-nine days
    </Link>
    <div className="tc pb6">
      <Link className="link dim gray f6 f5-ns dib mr3" to="/about">
        About
      </Link>
      <Link className="link dim gray f6 f5-ns dib mr3" to="tags/europe">
        Europe
      </Link>
      <Link
        className="link dim gray f6 f5-ns dib mr3"
        to="tags/asia"
        title="About"
      >
        Asia
      </Link>
      <Link
        className="link dim gray f6 f5-ns dib mr3"
        to="tags/africa"
        title="Store"
      >
        Africa
      </Link>
      <Link
        className="link dim gray f6 f5-ns dib"
        to="tags/americas"
        title="Contact"
      >
        North America
      </Link>
    </div>
  </nav>
);

export default Navbar;
