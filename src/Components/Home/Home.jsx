import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";

function Home() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2>This is home page</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 border">
          <h2>News coming soon...</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
}

export default Home;
