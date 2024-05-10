import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Home/Home";
import ErrorPages from "../Components/ErrorPages/ErrorPages";
import SignIn from "../Components/ErrorPages/SignIn";
import SignUp from "../Components/SignUp";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Featured from "../Pages/Featured/Featured";
import WishList from "../Pages/WishList/WishList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>,
      errorElement: <ErrorPages></ErrorPages>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/signIn",
            element: <SignIn></SignIn>
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>
        },
        {
          path: "/addblog",
          element: <AddBlog></AddBlog>
        },
        {
          path: "/allblogs",
          element: <AllBlogs></AllBlogs>
        },
        {
          path: "/featured",
          element: <Featured></Featured>
        },
        {
          path: "/wishlist",
          element: <WishList></WishList>
        }
      ]
    },
  ]);

  export default router;