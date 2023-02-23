import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TrackScroll from "./pages/trackScroll/trackScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/track-scroll",
    element: <TrackScroll />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
