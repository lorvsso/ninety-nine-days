import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
<nav className="pa3 pa4-ns sans-serif">
  <Link className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" to="/">ninety-nine days</Link>
  <div className="tc pb3">
    <Link className="link dim gray f6 f5-ns dib mr3" to="/europe">Europe</Link>
    <Link className="link dim gray f6 f5-ns dib mr3" to="/asia" title="About">Asia</Link>
    <Link className="link dim gray f6 f5-ns dib mr3" to="/africa" title="Store">Africa</Link>
    <Link className="link dim gray f6 f5-ns dib" to="/americas" title="Contact">North America</Link>
  </div>
</nav>
);

export default Navbar;
