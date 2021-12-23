import React from "react";

import BioPic from "../images/bio_pic.jpg";
// import InstaFeed from "./InstaFeed";

const AuthorBio = () => {
  return (
    <div className="measure-wide pl2 pr2 center items-center w-100 helvetica fw3 tc mb5">
      <div className="flex flex-column items-center justify-center">
        <img
          src={BioPic}
          alt="Sarah in a train in Sri Lanka"
          className="w4 br-100"
        />
        <p className="b lh-heading f3 fw3">by Sarah Jackson</p>
      </div>
      <div>
        <a
          className="link bb-0 dark-gray border f5 db mb3"
          href="https://instagram.com/sahjackson"
        >
          Instagram: @sahjackson
        </a>
      </div>
    </div>
  );
};

export default AuthorBio;
