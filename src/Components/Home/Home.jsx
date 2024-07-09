import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import BreakingNews from "./../BreakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

function Home() {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h2>This is home page</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 border">
          <h2>News coming soon...</h2>
          {news.map((n) => (
            <NewsCard key={n._id} news={n}></NewsCard>
          ))}
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
}

export default Home;
