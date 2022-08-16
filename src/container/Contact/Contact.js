import React from "react";
import * as images from "../../constants/images";
import { AppWrapp, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:paradabre@gmail.com" className="p-text">
            paradabre@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+573174531701" className="p-text">
            +57 3174531701
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            ></input>
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            ></input>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thanks you for getting touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrapp(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
