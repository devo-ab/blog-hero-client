import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const { isPending, data } = useQuery({
    queryKey: ["blogs data"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blogs/${id}`);
      return res.json();
    },
  });

  const { isPending: isLoading, data: dataComment } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comments/${id}`);
      return res.json();
    },
  });

  if (isPending) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

  const dbEmail = data.email;
  const userEmail = user?.email;

  const showButton = dbEmail === userEmail;
  console.log(dbEmail, userEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const blogs_id = id;
    const user_name = user.displayName;
    const user_image = user.photoURL;

    const userComment = { comment, blogs_id, user_name, user_image };
    console.log(userComment);

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Comment Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        form.reset();
      });
  };

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

          {showButton && (
            <Link to={`/update/${id}`}>
              <Button className="mt-2 w-full">Update</Button>
            </Link>
          )}

          <div className="mt-5">
            <h1 className="text-2xl font-semibold text-center">Comment Section</h1>
            <div className="flex flex-col md:flex-row gap-10 mt-5">
              <div className="flex-1">
                <p className="text-xl font-semibold">All Comments</p>
                {
                  dataComment.map(com => <div className="border-2 border-[#4D869C] mb-2 p-2 flex gap-3 mt-2 rounded-md" key={com._id}>
                    <div>
                      <img className="w-20" src={com.user_image} alt="" />
                    </div>
                    <div>
                      <h3>{com.user_name}</h3>
                      <p>{com.comment}</p>
                    </div>
                  </div>)
                }
              </div>
              <div className="flex-1">
                {showButton ? (
                  <p className="text-xl font-semibold text-red-600 text-center">
                    You can not comment your own blog
                  </p>
                ) : (
                  <div>
                    <h3 className="text-xl font-semibold">Comments</h3>
                    <form onSubmit={handleSubmit} className="mt-2">
                      <textarea className="w-full border-2 border-[#4D869C] rounded-md" name="comment" id="comment" rows={8}></textarea>
                      <Button type="submit">Comment</Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
