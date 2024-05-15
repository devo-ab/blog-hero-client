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
import PrivateRoutes from "./PrivateRoutes";
import Details from "../Pages/Details/Details";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addblog",
        element: <PrivateRoutes><AddBlog></AddBlog></PrivateRoutes>,
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
      },
      {
        path: "/wishlist",
        element: <PrivateRoutes><WishList></WishList></PrivateRoutes>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes><UpdateBlog></UpdateBlog></PrivateRoutes>,
        // loader: ({params}) => fetch(`https://blog-hero-server.vercel.app/blogs/${params.id}`)
      }
    ],
  },
]);

export default router;
