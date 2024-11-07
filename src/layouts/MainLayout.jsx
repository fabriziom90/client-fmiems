import axios from "axios";

import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    axios.get("http://localhost:4000/users/get-user-info").then((resp) => {
      if (resp.data.result) {
        setUser(resp.data.user);
      } else {
        toast.error(resp.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3100);
      }
    });
  };

  return (
    <>
      <div className="d-flex full-height">
        <Sidebar title="FM-IEMS" subtitle="FM Income Exits Management System" />
        <main>
          <Header user={user} />
          <Outlet />
        </main>
        <ToastContainer />
      </div>
    </>
  );
}

export default MainLayout;
