import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/Tiven_95" target='_blank' rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/breynerestiven" target='_blank' rel="noreferrer">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/breyner_parada/" target='_blank' rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/breyner-parada-942b26236/" target='_blank' rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};
