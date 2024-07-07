import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import qZone1 from "../../../DRAGON/dragon-news-resources/assets/qZone1.png";
import qZone2 from "../../../DRAGON/dragon-news-resources/assets/qZone2.png";
import qZone3 from "../../../DRAGON/dragon-news-resources/assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <h2>Right side nav</h2>
      <div className="mb-6 border">
        <h2>Login With</h2>
        <button className="btn btn-outline">
          <FcGoogle />
          Google Login
        </button>
        <button className="btn btn-outline">
          <IoLogoGithub />
          Github Login
        </button>
      </div>
      <div className="mb-6 border">
        <h2>Find us on</h2>
        <Link className="btn btn-outline">
          <FaFacebook />
          Facebook
        </Link>
        <Link className="btn btn-outline">
          <FaTwitter />
          Twiteer
        </Link>
      </div>
      <div className="mb-6 border">
        <h2>Q Zone</h2>
        <img src={qZone1}></img>
        <img src={qZone2}></img>
        <img src={qZone3}></img>
      </div>
    </div>
  );
};

export default RightSideNav;
