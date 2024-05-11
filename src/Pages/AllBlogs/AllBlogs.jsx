import { useQuery } from "@tanstack/react-query";
import { Button, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";


const AllBlogs = () => {

  const {isPending, data} = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/blogs');
      return res.json();
    }
  });

  // console.log(data)

  const handleCategory = (e) => {
    const category = e.target.value;
    console.log(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const title = e.target.search.value;
    console.log(title)
  };

  if(isPending){
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

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
            <option value="Lifestyle">Lifestyle</option>
            <option value="Technology">Technology</option>
            <option value="Food and Cooking">Food and Cooking</option>
            <option value="Fitness">Fitness</option>
            <option value="Travel">Travel</option>
            <option value="Book Reviews">Book Reviews</option>
          </select>
        </div>

        <form onSubmit={handleSearch} className="flex">
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
          data.map(d => (<div className="border-2 border-[#4D869C] mb-5 p-4 rounded-md flex flex-col md:flex-row gap-5" key={d._id}>
            <div>
              <img className="w-96 rounded-md" src={d.imageUrl} alt="" />
            </div>
            <div>
              <h2 className="text-2xl"><span className="text-xl font-bold">Title</span> : {d.title}</h2>
              <p className="text-xl"><span className="text-xl font-bold">Category</span> : {d.category}</p>
              <p className="text-xl"><span className="text-xl font-bold">Short Description</span> : {d.shortDes}</p>

              {/* button */}
              <div className="flex gap-4 mt-1">
              <Link to={`/details/${d._id}`}><Button>Details</Button></Link>
              <Button>Wishlist</Button>
              </div>
            </div>
          </div>))
        }
      </div>
    </div>
  );
};

export default AllBlogs;
