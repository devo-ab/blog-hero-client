import { useQuery } from "@tanstack/react-query";
import { Button, Spinner } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';


const AllBlogs = () => {

  const {user} = useContext(AuthContext);

  const [allData, setAllData] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchText, setSearchText] = useState([]);

  // const {isLoading, data} = useQuery({
  //   queryKey: ['blogs'],
  //   queryFn: async () => {
  //     const res = await fetch('http://localhost:5000/blogs');
  //     return res.json();
  //   }
  // });

  

  
  console.log('all data set',allData)

  // console.log(data)

  const handleCategory = (e) => {
    const category = e.target.value;
    console.log(category);
    setCategory(category);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/search/${category}`)
    .then(res => res.json())
    .then(data => {setAllData(data)})
  },[category]);

  

  

  const handleSearch = (e) => {
    e.preventDefault();
    const title = e.target.search.value;
    console.log(title)
    setSearchText(title)
  };

  useEffect(() => {
    fetch(`http://localhost:5000/search/title/${searchText}`)
    .then(res => res.json())
    .then(data => {setAllData(data)})
  },[searchText]);

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
    .then(res => res.json())
    .then(data => {setAllData(data)})
  },[]);

  const handleWishlist = (d) => {
    const title = d.title;
    const imageUrl = d.imageUrl;
    const category = d.category;
    const shortDes = d.shortDes;
    const blog_id = d._id;
    const userEmail = user?.email;

    const wishlist = {title, imageUrl, category, shortDes, userEmail, blog_id};
    console.log(wishlist)

    fetch('http://localhost:5000/wishlist',{
      method: "POST",
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(wishlist)
    })
    .then(res => res.json())
        .then(data => {
          console.log(data)
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

  // if(isLoading){
  //   return <Spinner color="purple" aria-label="Purple spinner example" />;
  // }

  return (
    <div className="mt-5">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Explore Our Stories</h1>
      <div className="flex flex-col md:flex-row gap-2  md:gap-16 mt-5 justify-center items-center">
        <div className="w-40">
          <select
            onChange={handleCategory}
            name="category"
            id="category"
            className="w-full rounded-md"
          >
            <option  >Category</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Technology">Technology</option>
            <option value="Food and Cooking">Food and Cooking</option>
            <option value="Fitness">Fitness</option>
            <option value="Travel">Travel</option>
            <option value="Book Reviews">Book Reviews</option>
          </select>
        </div>

        <form onSubmit={handleSearch} className="flex gap-5">
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Search By Blog Title"
            className="rounded-md"
          />
          <Button type="submit">Search</Button>
        </form>
      </div>

      {/* Card Generate Here */}
      <div className="mt-5">
        {
          allData.map(d => (<div data-aos="zoom-out-up" className="border-2 border-[#4D869C] mb-5 p-4 rounded-md flex flex-col md:flex-row gap-5 bg-[#EEF7FF]" key={d._id}>
            <div>
              <img className="w-96 rounded-md" src={d.imageUrl} alt="" />
            </div>
            <div>
              <h2 className="text-xl"><span className="text-xl font-semibold">Title</span> : {d.title}</h2>
              <p className="text-lg"><span className="text-xl font-semibold">Category</span> : {d.category}</p>
              <p className="text-lg"><span className="text-xl font-semibold">Short Description</span> : {d.shortDes}</p>

              {/* button */}
              <div className="flex gap-4 mt-3">
              <Link to={`/details/${d._id}`}><Button gradientMonochrome="info">Details</Button></Link>
              <Button outline gradientDuoTone="purpleToBlue" onClick={() => handleWishlist(d)}>Wishlist</Button>
              </div>
            </div>
          </div>))
        }
      </div>
    </div>
  );
};

export default AllBlogs;
