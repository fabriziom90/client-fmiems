import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <div className="d-flex full-height">
        <Sidebar title="FM-IEMS" subtitle="FM Income Exits Management System" />
        <main>
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout;
