// import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WishList = () => {
  const { user } = useContext(AuthContext);

  const [dataBlogs, setDataBlogs] = useState([]);

  useEffect(() => {
    fetch(`https://blog-hero-server.vercel.app/wishlist/${user?.email}`, {credentials: 'include'})
      .then((res) => res.json())
      .then((data) => {
        setDataBlogs(data);
      });
  }, [user]);

  // tanstack query

  // const { isLoading, data } = useQuery({
  //   queryKey: ["wishlist"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://blog-hero-server.vercel.app/wishlist/${user?.email}`);
  //     return res.json();
  //   },
  // });

  // tanstack query

  const handleRemove = (id) => {
    // console.log(id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // console.log("delete confirm");
          fetch(`https://blog-hero-server.vercel.app/wishlist/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been remove.",
                  icon: "success",
                });
                const remaining = dataBlogs.filter((blogs) => blogs._id !== id);
                setDataBlogs(remaining);
              }
            });
        }
      });
  };

  // if (isLoading) {
  //   return <Spinner color="purple" aria-label="Purple spinner example" />;
  // }

  return (
    <div className="mt-10">
      {dataBlogs.map((d) => (
        <div className="border-2 border-[#4D869C] mb-2 p-2 rounded-md" key={d._id}>
          <div className="flex flex-col md:flex-row">

            <div className="flex flex-col md:flex-row gap-3">
              <img className="w-48 rounded-md" src={d.imageUrl} alt="" />
              <div>
                <h3 className="text-lg font-medium">
                  <span className="font-bold text-xl">Title</span> : {d.title}
                </h3>
                <h3 className="text-lg font-medium">
                  <span className="font-bold text-xl">Category</span> : {d.category}
                </h3>
                <p className="text-lg">
                  <span className="font-bold text-xl">Title</span> : {d.shortDes}
                </p>
              </div>
            </div>
            <div className="flex flex-row md:flex-col mt-2 gap-5">
                <Link to={`/details/${d.blog_id}`}><Button>Details</Button></Link>
                <Button onClick={() => handleRemove(d._id)}>Remove</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
