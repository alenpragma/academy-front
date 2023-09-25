import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

ReactDOM.createRoot(document.getElementById("root")).render(
<<<<<<< HEAD
  <div className="max-w-6xl lg:mx-auto md:mx-5">
=======

>>>>>>> 9fc6660e31c73d5328e264133742e9a461139dcf
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

);
