import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Home/Home";
import ErrorPages from "../Components/ErrorPages/ErrorPages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>,
      errorElement: <ErrorPages></ErrorPages>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;