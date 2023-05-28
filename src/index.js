import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe_component";
import Home from "./Components/Homepage/Home_component";
import Anelli from "./Components/VetrinaAnelli/VetrinaAnelli_component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about_me/",
    element: <AboutMe />,
  },
  {
    path: "anelli/",
    element: <Anelli />,
  },
  {
    path: "bracciali/",
    element: <Anelli />,
  },
  {
    path: "collane/",
    element: <Anelli />,
  },
  {
    path: "orecchini/",
    element: <Anelli />,
  },
  {
    path: "vestiti/",
    element: <Anelli />,
  },
  {
    path: "corsetti/",
    element: <Anelli />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
