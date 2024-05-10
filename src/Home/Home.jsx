import { motion, useScroll } from "framer-motion"
import Banner from "./Banner";

const Home = () => {

    const { scrollYProgress } = useScroll();

    return (
        <motion.div>
            <motion.div style={{ scaleX: scrollYProgress }} /> 
            <Banner></Banner>
        </motion.div>
    );
};

export default Home;