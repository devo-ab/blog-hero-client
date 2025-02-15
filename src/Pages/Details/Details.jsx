import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Details = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [userComment, setUserComment] = useState([]);
  console.log(rating);

  const { isLoading, data} = useQuery({
    queryKey: ["blogs data"],
    queryFn: async () => {
      const res = await fetch(`https://blog-hero-server.vercel.app/blogs/${id}`);
      return res.json();
    },
  });

  // const {  isLoading : isPending, data: userComment } = useQuery({
  //   queryKey: ["comments"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://blog-hero-server.vercel.app/comments/${id}`);
  //     return res.json();
  //   },
  // });

  useEffect(() => {
    fetch(`https://blog-hero-server.vercel.app/comments/${id}`)
    .then((res) => res.json())
      .then((data) => {
       setUserComment(data);
      });
  },[id]);


  

  // if (isPending) {
  //   return <Spinner color="purple" aria-label="Purple spinner example" />;
  // }

  const dbEmail = data?.email;
  const userEmail = user?.email;

  const showButton = dbEmail === userEmail;
  

  
  // console.log(dbEmail, userEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const blogs_id = id;
    const user_name = user.displayName;
    const user_image = user.photoURL;
    const user_email = user.email;
    const rate = rating;

    const Comment = { comment, blogs_id, user_name, user_image, rate, user_email };
    // console.log(userComment);

    fetch("https://blog-hero-server.vercel.app/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Comment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Comment Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          setUserComment([...userComment, Comment])
        }
        form.reset();
      });
  };

  const handleCommentDelete = (com) => {
    fetch(`https://blog-hero-server.vercel.app/comments/${com?._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      if (data.deletedCount) {
        Swal.fire({
          title: "Success!",
          text: "Comment Deleted Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        const remaining = userComment.filter((comment) => comment._id !== com._id);
        setUserComment(remaining);
      }
    })
  };

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }
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
            <h1 className="text-3xl font-semibold text-center">Comment Section</h1>
            <div className="flex flex-col md:flex-row gap-10 mt-5">
              <div className="flex-1">
                <div>
                <p className="text-xl font-semibold">All Comments : {userComment.length}</p>
                <p>Rating : {userComment.reduce((acc, item) => acc + item.rate, 0)/ userComment.length}/5</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                {
                  userComment.map(com => <div className="border-2 border-[#4D869C] mb-2 p-2 flex gap-3 rounded-md" key={com._id}>
                    <div>
                      <img className="w-20" src={com.user_image} alt="" />
                    </div>
                    <div>
                      <h3><span className="font-medium">Name</span> : {com.user_name}</h3>
                      <p><span className="font-medium">Comment</span> : {com.comment}</p>
                      {
                        com.user_email === userEmail && <button onClick={() => handleCommentDelete(com)} className="py-2 mt-1 rounded px-4 border-red-400 bg-red-700 text-white">Delete</button>
                      }
                    </div>
                  </div>)
                }
                </div>
              </div>
              <div className="flex-1">
                {showButton ? (
                  <p className="text-xl font-semibold text-red-600 text-center">
                    You can not comment your own blog
                  </p>
                ) : (
                  <div>
                    <h1 className="text-xl font-semibold">Rate this blog</h1>
                  <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
                    <h3 className="text-xl font-semibold">Comments</h3>
                    <form onSubmit={handleSubmit} className="mt-2">
                      <textarea className="w-full border-2 border-[#4D869C] rounded-md" name="comment" id="comment" rows={8}></textarea>
                      <Button type="submit">Post Comment</Button>
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
