import React from "react";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";

export const authRoutes = () => [
  {
    path: "/admin",
    Component: Admin,
  },
  {
    path: "/basket",
    Component: Basket,
  },
];

export const publicRoutes = () => {
  return <div></div>;
};
