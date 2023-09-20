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
        path: "main_news/:id",
        element: <MainNews />,
        loader: ({ params }) => fetch(`news.json/${params.id}`)
      },
    ],
  },
]);

export default router;
