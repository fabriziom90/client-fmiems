import logo from "../../assets/images/mylogo.png";

import axios from "axios";

import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    axios.get("http://localhost:4000/users/login").then((resp) => {
      if (resp.data.loggedIn) {
        setLoginStatus(true);
      }
    });
  };

  const login = () => {
    const data = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:4000/users/login", data).then((resp) => {
      const { auth, message, token, name } = resp.data;

      if (auth) {
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);

        toast.success(message, {
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
          navigate("/admin/");
        }, 3100);
      } else {
        toast.error(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
  };

  return (
    <div className="background-main vh-100 vw-100">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="form-card">
          <div className="text-end">
            {loginStatus ? (
              <NavLink to="/admin" className="me-3">
                Vai alla tua Dashboard
              </NavLink>
            ) : (
              ""
            )}
            <NavLink to="/register">Registrati</NavLink>
          </div>
          <div className="logo justify-content-center">
            <img src={logo} alt="FM-IEMS" />
            <h2>FM-IEMS</h2>
          </div>
          <div className="text-center my-3">
            <h2>Fabrizio Mastrobattista - Income Exits Management System</h2>
          </div>
          <div className="form">
            <div className="my-3">
              <label htmlFor="" className="control-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="control-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="my-4">
              <button className="btn-main" onClick={login}>
                Accedi
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
