import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/1 (10).jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Shraddha Tiwari</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for my project assignment
      </h4>
      <div className="profile-links">
        <a href="https://github.com/Shraddha08-cmyk">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shraddha-tiwari-a1432724a/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
