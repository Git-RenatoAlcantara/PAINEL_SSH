import { Outlet, Link, Navigate, useLoaderData } from "react-router-dom";
import { Typography } from "@mui/material";
import GridView from "../Grid";
export default function Dashboard() {
  const { auth } = useLoaderData();
  console.log(auth);
  return <> {auth === true ? <GridView /> : <Navigate to="/" />}</>;
}
