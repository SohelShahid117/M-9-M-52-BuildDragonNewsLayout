import React from "react";
import logo from "../../../DRAGON/dragon-news-resources/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img src={logo} className="mx-auto"></img>
      <br />
      <p>journal njoy v journal njoy journal njoy journal njoy journal njoy</p>
      <br></br>
      <h3>{moment().format("MMMM Do YYYY, h:mm:ss a")}</h3>
    </div>
  );
};

export default Header;
