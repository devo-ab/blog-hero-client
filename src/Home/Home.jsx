import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import GetInTouch from "../Components/GetInTouch";
import CustomScrollbar from "./CustomScrollbar";
// import React from 'react';

const Home = () => {
  return (
    <div>
      <CustomScrollbar />
      <Banner></Banner>
      <RecentBlogs></RecentBlogs>
      <NewsLetter></NewsLetter>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
