import React from "react";
import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      {/* <h2>News Details</h2> */}
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2>News Details is in here</h2>
          <p>{id}</p>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
