import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Login from "../Components/Login/Login";
import Register from "../Components/Register.js/Register";
import Main from "../Layout/Main";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/*",
    element: (
      <div>
        <h2>Error: 404</h2>
        <h4>Following path not found!!</h4>
      </div>
    ),
  },
]);

export default Routes;
