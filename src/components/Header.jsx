import React from "react";
import { FaUser } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
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
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
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
