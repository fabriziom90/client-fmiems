import React from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  let navigate = useNavigate();

  const logout = () => {
    axios.get("http://localhost:4000/users/logout").then((resp) => {
      const { result, message } = resp.data;
      localStorage.removeItem("token");

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
        navigate("/login");
      }, 3000);
    });
  };
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="content-header">
              <div className="float-end my-2">
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-sm btn-transparent btn-circle border-white text-white"
                    id="dropdown-user"
                  >
                    <FaUser />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="dropdown-item">Ciao {user.user_name}</div>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
