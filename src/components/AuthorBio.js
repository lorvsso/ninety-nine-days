import React from "react";

import BioPic from "../images/bio_pic.jpg";
import InstaFeed from "./InstaFeed";

const AuthorBio = () => {
  return (
    <div className="measure-wide pl2 pr2 center items-center w-100 helvetica fw3 tc mt3 mb5">
      <div className="flex flex-column items-center justify-center">
        <img
          src={BioPic}
          alt="Sarah smiling at the camera while hanging out of a train window in Sri Lanka"
          className="w4 br-100"
        />
        <p className="b lh-heading f3 fw3">by Sarah Jackson</p>
      </div>
      <div className="mt4">
        <a href="https://instagram.com/sahjackson">
          <InstaFeed />
        </a>
        <a
          className="link bb-0 dark-gray border f5 db mb3 mt2"
          href="https://instagram.com/sahjackson"
        >
          Most recent Instagram posts
        </a>
      </div>
    </div>
  );
};

export default AuthorBio;
