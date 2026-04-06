import React from "react";
import { Outlet } from "react-router";
import SideBar from "./SideBar";
import { Header } from "./Header";

const Rootlayout = () => {
  return (
    <>
      <div className="relative bg-[#f7f6f9] h-full min-h-screen">
        <div className="flex items-start">
          <SideBar />

          <section className="main-content w-full">
          <Header />
            <div className="my-6 px-2">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Rootlayout;
