import { Link, useLoaderData } from "react-router-dom";
import { Button } from "flowbite-react";

// import { useQuery } from "@tanstack/react-query";
// import { Spinner } from "flowbite-react";

const Details = () => {
  const blogDetails = useLoaderData();

  const { _id, title, category, imageUrl, shortDes, longDes, } = blogDetails;

  // const {isPending ,data} = useQuery({
  //     queryKey: ['blogs data'],
  //     queryFn: async () => {
  //         const res = await fetch(`http://localhost:5000/blogs/${params.id}`);
  //         return res.json();
  //     }
  // })

  // if(isPending){
  //     return <Spinner color="purple" aria-label="Purple spinner example" />;
  // }

//   if(email === user.email){
//     return 
//   }

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold text-center">Details Blog page</h1>
      <div className="mt-2">
        <img className="w-96 mx-auto" src={imageUrl} alt="" />
        <div className="mt-5">
          <p className="font-medium"><span className="font-bold">Title</span> : {title}</p>
          <p className="font-medium"><span className="font-bold">category</span> : {category}</p>
          <p className="mt-1"><span className="font-bold">Short Description</span> : {shortDes}</p>
          <p className="mt-1"><span className="font-bold">Long Description</span> : {longDes}</p>
          <Link to={`/update/${_id}`}><Button className="mt-2 w-full">Update</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
