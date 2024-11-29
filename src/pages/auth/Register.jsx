import logo from "../../assets/images/mylogo.png";
import React from "react";

import axios from "axios";
import bcrypt from "bcryptjs";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

const salt = bcrypt.genSaltSync(10);

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const register = () => {
    const hashedPassword = bcrypt.hashSync(password, salt);
    const hashedConfirmPassword = bcrypt.hashSync(confirm_password, salt);

    const data = {
      name: name,
      email: email,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
    };

    axios
      .post("http://localhost:4000/users/register", data)
      .then((resp, data) => {
        const { result, message, auth, token } = resp.data;

        if (result === true && auth === true) {
          localStorage.setItem("token", token);

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
            <NavLink to="/login">Accedi</NavLink>
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
                Nome e cognome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Nome e cognome"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="my-3">
              <label htmlFor="" className="control-label">
                Conferma password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="form-control"
                placeholder="Conferma password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="my-4">
              <button className="btn-main" onClick={register}>
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

export default Register;
