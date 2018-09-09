import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="sans-serif">
    <Link
      className="link dark-gray b f1 f-headline-ns tc db mb3 mt3 mb4-ns garamond"
      to="/"
    >
      ninety-nine days
    </Link>
    <div className="tc pb5">
      <Link className="link dim gray f6 f5-ns mr3" to="/about">
        About
      </Link>
      <Link className="link dim gray f6 f5-ns mr3" to="tags/europe">
        Europe
      </Link>
      <Link className="link dim gray f6 f5-ns mr3" to="tags/asia" title="About">
        Asia
      </Link>
      <Link
        className="link dim gray f6 f5-ns mr3"
        to="tags/africa"
        title="Store"
      >
        Africa
      </Link>
      <Link
        className="link dim gray f6 f5-ns mr3"
        to="tags/central-america"
        title="Contact"
      >
        Central America
      </Link>
      <Link className="link dim gray f6 f5-ns" to="tags/vegan" title="Contact">
        Vegan
      </Link>
    </div>
  </nav>
);

export default Navbar;
