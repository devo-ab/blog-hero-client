import { motion, useScroll } from "framer-motion";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import GetInTouch from "../Components/GetInTouch";

const Home = () => {
  const { scrollYProgress } = useScroll();
  // const currentTime = new Date();
  

  return (
    <motion.div>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <Banner></Banner>
      <RecentBlogs></RecentBlogs>
      <NewsLetter></NewsLetter>
      <GetInTouch></GetInTouch>
    </motion.div>
  );
};

export default Home;
