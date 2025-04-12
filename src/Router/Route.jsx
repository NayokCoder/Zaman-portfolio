import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../Component/Home";
import About from "../Component/Category/About";
import Cirtification from "../Component/Category/Cirtification";
import Traininig from "../Component/Category/Traininig";
import Blog from "../Component/Category/Blog";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Cirtification",
        element: <Cirtification />,
      },
      {
        path: "/Training",
        element: <Traininig />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
    ],
  },
]);
export default route;
