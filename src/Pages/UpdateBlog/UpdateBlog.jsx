import { useQuery } from "@tanstack/react-query";
import { Button, Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {

  const {id} = useParams();

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



    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const imageUrl = form.imageUrl.value;
        const shortDes = form.shortDes.value;
        const longDes = form.longDes.value;
        console.log(title, category, imageUrl, shortDes, longDes)

        const updatedBlogs = {title, category, imageUrl, shortDes, longDes};

        fetch(`http://localhost:5000/blogsUpdate/${id}`,{
          method: "PUT",
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(updatedBlogs)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount){
            Swal.fire({
              title: 'Success!',
              text: 'Blog Update Successfully',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          }
        })
    };

    return (
        <div className="mt-10">
      <h1 className="text-4xl font-bold text-center">Update Your Blog</h1>

      {/* from start */}
      <section className="p-6">
        <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
            
            <div className="grid grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="font-medium">
                  Blog Title
                </label>
                <input
                  id="title"
                  name="title"
                  defaultValue={data.title}
                  type="text"
                  placeholder="Blog Title Here"
                  className="w-full rounded-md"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="category" className="font-medium">
                  Category
                </label>
                <select name="category" defaultValue={data.category} id="category" className="w-full rounded-md">
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Technology">Technology</option>
                    <option value="Food and Cooking">Food and Cooking</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Travel">Travel</option>
                    <option value="Book Reviews">Book Reviews</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="imageUrl" className="font-medium">
                  Image Url
                </label>
                <input
                  id="imageUrl"
                  defaultValue={data.imageUrl}
                  name="imageUrl"
                  type="text"
                  placeholder="Image Url Here"
                  className="w-full rounded-md"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="shortDes" className="font-medium">
                  Short Description
                </label>
                <textarea
                  id="shortDes"
                  defaultValue={data.shortDes}
                  name="shortDes"
                  type="text"
                  placeholder="Write Short Description"
                  className="w-full rounded-md"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="longDes" className="font-medium">
                  Long Description
                </label>
                <textarea
                  id="longDes"
                  name="longDes"
                  defaultValue={data.longDes}
                  type="text"
                  rows={8}
                  placeholder="Write Long Description"
                  className="w-full rounded-md"
                />
              </div>
              <Button type="submit" className="col-span-full">Update</Button>
              
            </div>
          </fieldset> 
        </form>
      </section>
      {/* from end */}
    </div>
    );
};

export default UpdateBlog;