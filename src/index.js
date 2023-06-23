import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe_component";
import Home from "./Components/Homepage/Home_component";
import Anelli from "./Components/Vetrine/VetrinaAnelli_component";
import Bracciali from "./Components/Vetrine/VetrinaBracciali_component";
import Collane from "./Components/Vetrine/VetrinaCollane_component";
import Orecchini from "./Components/Vetrine/VetrinaOrecchini_component";
import Vestiti from "./Components/Vetrine/VetrinaVestiti_component";
import Corsetti from "./Components/Vetrine/VetrinaCorsetti_component";

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
    element: <Bracciali />,
  },
  {
    path: "collane/",
    element: <Collane />,
  },
  {
    path: "orecchini/",
    element: <Orecchini />,
  },
  {
    path: "vestiti/",
    element: <Vestiti />,
  },
  {
    path: "corsetti/",
    element: <Corsetti />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
