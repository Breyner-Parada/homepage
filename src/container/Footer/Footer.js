import React from "react";
import { BsTwitter, BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="Footer">
        <div className="Footer-name">{"{ Breyner Parada. } ...."} </div>
        <div className="Footer-social">
          <div>Social Media</div>
          <div className="Twitter">
            <a href="https://twitter.com/Tiven_95">
              <BsTwitter />
            </a>
          </div>
          <div className="Instagram">
            <a href="https://www.instagram.com/breyner_parada/">
              <BsInstagram />
            </a>
          </div>
          <div className="Facebook">
            <a href="https://www.facebook.com/breynerestiven/">
              <BsFacebook />
            </a>
          </div>
          <div className="Github">
            <a href="https://github.com/Breyner-Parada">
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="Footer-info">
          <div>Information</div>
          <div>paradabre@gmail.com</div>
          <div>+573174531701</div>
          <div>Bucaramanga, Colombia</div>
        </div>
      </div>
      <p className="Footer-powered">Breyner Parada | ©️ 2022</p>
    </div>
  );
};
