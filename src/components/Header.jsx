import React from "react";
import { FaUser } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
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
                    <div class="dropdown-item">Ciao {localStorage.name}</div>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
