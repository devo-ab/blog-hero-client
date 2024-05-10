import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Details = () => {
  const { id } = useParams();
  const {user} = useContext(AuthContext);

  const { isPending, data } = useQuery({
    queryKey: ["blogs data"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blogs/${id}`);
      return res.json();
    },
  });

  if (isPending) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

  const dbEmail = data.email;
  const userEmail = user.email;

  const showButton = dbEmail === userEmail;
  console.log(dbEmail, userEmail);

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold text-center">Details Blog page</h1>
      <div className="mt-2">
        <img className="w-96 mx-auto" src={data.imageUrl} alt="" />
        <div className="mt-5">
          <p className="font-medium">
            <span className="font-bold">Title</span> : {data.title}
          </p>
          <p className="font-medium">
            <span className="font-bold">category</span> : {data.category}
          </p>
          <p className="mt-1">
            <span className="font-bold">Short Description</span> : {data.shortDes}
          </p>
          <p className="mt-1">
            <span className="font-bold">Long Description</span> : {data.longDes}
          </p>
          {
            showButton ? <Link to={`/update/${id}`}><Button className="mt-2 w-full">Update</Button></Link> : <p>hi</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Details;
