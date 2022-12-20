import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminPage from "../pages/adminSign";
import ErrorPage from "../pages/errorPage";
import Dashboard from "../pages/dashboard";
import authentication from "../controller/authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminPage />,
    errorElement: <ErrorPage />
  },
  {
    loader: authentication,
    path: "dashboard",
    element: <Dashboard />
  }
]);

export default router;
