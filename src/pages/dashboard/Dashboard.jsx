import React from "react";
import Sidebar from "../../common/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex  justify-evenly">
        <div className=" w-[350px] fixed left-0 h-full">
          <Sidebar />
        </div>
        <div className=" ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
