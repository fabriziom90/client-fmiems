import axios from "axios";

import { React, useState, useEffect, useContext } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Loader from "../components/Loader";

import { Outlet } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    axios.get("http://localhost:4000/users/get-user-info").then((resp) => {
      if (resp.data.result) {
        setUser(resp.data.user);
        setLoaded(true);
      } else {
        navigate("/login");
      }
    });
  };

  return (
    <>
      <div className="d-flex full-height">
        <Sidebar title="FM-IEMS" subtitle="FM Income Exits Management System" />
        <main>
          <Header user={user} />
          {!loaded ? <Loader /> : <Outlet context={[user]} />}
        </main>
        <ToastContainer />
      </div>
    </>
  );
}

export default MainLayout;
