import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import MainNews from "../pages/MainNews/MainNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "mainNews",
        element: <MainNews />
      },
    ],
  },
]);

export default router;
