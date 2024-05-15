import { Button } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddBlog = () => {
  const { user } = useContext(AuthContext);

  const now = new Date();
  // console.log(now)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const imageUrl = form.imageUrl.value;
    const shortDes = form.shortDes.value;
    const longDes = form.longDes.value;
    const email = user.email;
    const user_name = user.displayName;
    const user_pro = user.photoURL;
    const blog_time = now;
    // const blog_date = currentDate;

    const blogs = { title, category, imageUrl, shortDes, longDes, email, blog_time, user_pro, user_name };
    // console.log(blogs);

    fetch("https://blog-hero-server.vercel.app/addblogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogs),
    }, {credentials: 'include'})
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Blog Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-center">Add Blog</h1>

      {/* from start */}
      <section className="p-6">
        <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
            <div className="grid grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="font-medium">
                  Blog Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Blog Title Here"
                  className="w-full rounded-md"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="category" className="font-medium">
                  Category
                </label>
                <select name="category" id="category" className="w-full rounded-md">
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
                  type="text"
                  rows={8}
                  placeholder="Write Long Description"
                  className="w-full rounded-md"
                />
              </div>
              <Button type="submit" className="col-span-full">
                Submit
              </Button>
            </div>
          </fieldset>
        </form>
      </section>
      {/* from end */}
    </div>
  );
};

export default AddBlog;
