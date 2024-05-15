import { useQuery } from "@tanstack/react-query";
import { Button, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";

const PopularPost = () => {

    const {isLoading, data} = useQuery({
    queryKey: ['popular'],
    queryFn: async () => {
      const res = await fetch('https://blog-hero-server.vercel.app/popular');
      return res.json();
    }
  });


  if(isLoading){
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

    return (
        <div className="mt-10 mb-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Most Popular Blogs</h1>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2 md:mt-5">
        {data.map((d) => (
          <div className="border-2 border-[#4D869C] p-4 rounded-md bg-[#EEF7FF]" key={d._id}>
            <div>
              <img className="w-full rounded-md" src={d.imageUrl} alt="" />
              <div className="mt-3">
                <p className="font-medium"><span className="text-lg font-bold">Title</span> : {d.title}</p>
                <p><span className="text-lg font-semibold">Category</span> : {d.category}</p>
                <p><span className="text-lg font-semibold">Short Description</span> : {d.shortDes}</p>
                <div className="flex justify-between mt-2 ">
                  <Link className="w-full" to={`/details/${d._id}`}><Button gradientMonochrome="info" className="w-full">Details</Button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default PopularPost;