import React from "react";

import BioPic from "../images/bio_pic.jpg";

const AuthorBio = () => {
  return (
    <div className="center items-center w-100 measure-wide helvetica fw3 tc mt4 mb5">
      <img
        src={BioPic}
        alt="Sarah smiling at the camera while hanging out of a train window in Sri Lanka"
        className="w4 br-100"
      />

      <p className="b lh-heading f4 fw3">by Sarah Jackson</p>

      <p>
        <a
          className="link bb-0 dark-gray border"
          href="https://instagram.com/sahjackson"
        >
          Instagram
        </a>
      </p>
    </div>
  );
};

export default AuthorBio;
