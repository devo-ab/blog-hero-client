import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Home/Home";
import ErrorPages from "../Components/ErrorPages/ErrorPages";
import SignIn from "../Components/ErrorPages/SignIn";
import SignUp from "../Components/SignUp";

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
        }
      ]
    },
  ]);

  export default router;