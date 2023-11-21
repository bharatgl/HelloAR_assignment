import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
