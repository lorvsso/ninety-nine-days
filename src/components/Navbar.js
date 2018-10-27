import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="sans-serif">
    <Link
      className="link dark-gray f2 f-subheadline-ns tc db mb3 mt3 mb4-ns garamond"
      to="/"
    >
      ninety-nine days
    </Link>
    <div className="tc pb5">
      <Link
        className="link dim gray f6 f5-ns mr3 dib"
        to="tags/africa"
        title="Store"
      >
        Africa
      </Link>
      <Link
        className="link dim gray f6 f5-ns mr3 dib"
        to="tags/asia"
        title="About"
      >
        Asia
      </Link>
      <Link
        className="link dim gray f6 f5-ns mr3 dib"
        to="tags/central-america"
        title="Contact"
      >
        Central&nbsp;America
      </Link>
      <Link className="link dim gray f6 f5-ns mr3 dib" to="tags/europe">
        Europe
      </Link>
      <Link
        className="link dim gray f6 f5-ns mr3 dib"
        to="tags/the-middle-east"
      >
        Middle East
      </Link>
      <Link
        className="link dim gray f6 f5-ns dib"
        to="tags/vegan"
        title="Contact"
      >
        Vegan
      </Link>
    </div>
  </nav>
);

export default Navbar;
