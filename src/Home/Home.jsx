import { motion, useScroll } from "framer-motion";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
  const { scrollYProgress } = useScroll();
  // const currentTime = new Date();
  

  return (
    <motion.div>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <Banner></Banner>
      <RecentBlogs></RecentBlogs>
      <NewsLetter></NewsLetter>
    </motion.div>
  );
};

export default Home;
