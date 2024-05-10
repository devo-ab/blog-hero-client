import { Button } from "flowbite-react";


const AllBlogs = () => {

  const handleCategory = (e) => {
    const category = e.target.value;
    console.log(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const title = e.target.search.value;
    console.log(title)
  };

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
    </div>
  );
};

export default AllBlogs;
