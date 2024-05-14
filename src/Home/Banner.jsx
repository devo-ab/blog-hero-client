import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// // import "./styles.css";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-10 border-2 border-[#4D869C] rounded-md">
      <div className="relative">
        <img className="w-full rounded-md  bg-gradient-to-r from-[#151515] to-[#15151500]" src="/banner.jpg" alt="" />
        <div className="absolute top-2 md:top-1/4 left-2 md:left-20 md:bg-gray-500 md:bg-opacity-30 p-5">
          <h1 className=" text-2xl md:text-6xl font-bold text-white">
            <span >Welcome To</span>{" "}
            <Typewriter
              words={["Blog", "Hero"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p className="font-semibold mt-1 text-white text-lg">
            Empower Your Voice, Inspire the World: Your Platform Awaits at Blog Hero!
          </p>
          <p className="mt-1 hidden md:block text-white text-lg w-[650px]">
            Dive into a world where your thoughts become supercharged, your stories become
            legendary, and your voice becomes a hero. Unleash the power of your narratives, elevate
            your blogging journey, and embark on an odyssey of creativity and expression. With Blog
            Hero, you're not just a writer; you're a champion of storytelling.
          </p>

          <div className="flex gap-5 mt-3">
            <Link to="/allblogs">
              <Button gradientMonochrome="cyan">See All Blogs</Button>
            </Link>
            <Link to="/featured">
              <Button gradientMonochrome="teal">See Top Blogs</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="w-60 absolute top-0 right-">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
};

export default Banner;
