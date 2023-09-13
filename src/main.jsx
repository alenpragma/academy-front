import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl lg:mx-auto md:mx-5 mx-5">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
