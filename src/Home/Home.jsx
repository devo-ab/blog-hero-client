import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import GetInTouch from "../Components/GetInTouch";
import CustomScrollbar from "./CustomScrollbar";
import PopularPost from "./PopularPost";
import Faq from "./Faq";
// import React from 'react';

const Home = () => {
  return (
    <div>
      <CustomScrollbar />
      <Banner></Banner>
      <RecentBlogs></RecentBlogs>
      <NewsLetter></NewsLetter>
      <PopularPost></PopularPost>
      <GetInTouch></GetInTouch>
      <Faq></Faq>
    </div>
  );
};

export default Home;
