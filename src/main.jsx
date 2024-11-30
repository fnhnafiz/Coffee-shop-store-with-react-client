import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import MainLayOut from "./Components/MainLayOut";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffeeCard from "./Components/UpdateCoffeeCard";
import CoffeeUpdate from "./Components/CoffeeUpdate";
import AuthProviderContext from "./Components/AuthProvider/AuthProviderContext";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";
import AllUsersData from "./Components/AllUsersData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://coffee-making-store-client.vercel.app/details"),
      },
      {
        path: "/details",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/view-details/:id",
        element: <UpdateCoffeeCard></UpdateCoffeeCard>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-making-store-client.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <CoffeeUpdate></CoffeeUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-making-store-client.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allUsers",
        element: <AllUsersData></AllUsersData>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProviderContext>
    <Toaster position="bottom-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </AuthProviderContext>
);
