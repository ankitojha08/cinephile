import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Body from "./Components/Body.js";
import Watchlist from "./Components/Watchlist.jsx";
import DetailPage from "./Components/DetailPage.js";
import { WishlistProvider } from "../utils/wishlistContext.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import QueryPage from "./Components/QueryPage.js";

const AppLayout = () => {
  return (
    <WishlistProvider>
      <Header />
      <Outlet />
      <Footer />
    </WishlistProvider>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/item/:id",
        element: <DetailPage />,
      },
      {
        path: "/cart",
        element: <Watchlist />,
      },
      {
        path: "/query/:query",
        element: <QueryPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
