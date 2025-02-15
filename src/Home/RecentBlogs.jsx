import { useQuery } from "@tanstack/react-query";
import { Button, Spinner } from "flowbite-react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecentBlogs = () => {


  const {user} = useContext(AuthContext);

  const { isLoading, data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("https://blog-hero-server.vercel.app/recent");
      return res.json();
    },
  });

  const handleWishlist = (d) => {
    const title = d.title;
    const imageUrl = d.imageUrl;
    const category = d.category;
    const shortDes = d.shortDes;
    const blog_id = d._id;
    const userEmail = user?.email;

    const wishlist = {title, imageUrl, category, shortDes, userEmail, blog_id};
    // console.log(wishlist)

    fetch('https://blog-hero-server.vercel.app/wishlist',{
      method: "POST",
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(wishlist)
    })
    .then(res => res.json())
        .then(data => {
          // console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Added Wishlist Successfully',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          }
        })
  };

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing function
      once: false // Animation occurs only once
    });
  }, []);

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

  return (
    <div className="mt-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Recent Blogs</h1>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2 md:mt-5">
        {data.map((d) => (
          <div data-aos="flip-left" className="border-2 border-[#4D869C] p-4 rounded-md bg-[#EEF7FF]" key={d._id}>
            <div>
              <img className="w-full rounded-md" src={d.imageUrl} alt="" />
              <div className="mt-3">
                <p className="font-medium"><span className="text-lg font-bold">Title</span> : {d.title}</p>
                <p><span className="text-lg font-semibold">Category</span> : {d.category}</p>
                <p><span className="text-lg font-semibold">Short Description</span> : {d.shortDes}</p>
                <div className="flex justify-between mt-2">
                  <Link to={`/details/${d._id}`}><Button gradientMonochrome="info">Details</Button></Link>
                  <Button onClick={() => handleWishlist(d)} outline gradientDuoTone="purpleToBlue">
                    Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
