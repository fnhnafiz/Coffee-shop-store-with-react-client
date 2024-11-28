import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import MainLayOut from "./Components/MainLayOut";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffeeCard from "./Components/UpdateCoffeeCard";
import CoffeeUpdate from "./Components/CoffeeUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/details"),
      },
      {
        path: "/details",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/view-details/:id",
        element: <UpdateCoffeeCard></UpdateCoffeeCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <CoffeeUpdate></CoffeeUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
