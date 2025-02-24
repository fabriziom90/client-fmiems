import logo from "../assets/images/mylogo.png";

import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";

import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  let location = useLocation();

  return (
    <div id="sidebar">
      <div className="top-sidebar px-2">
        <NavLink
          to="./"
          className="d-flex align-items-center text-decoration-none text-white"
        >
          <img src={logo} alt="FM-IEMS" />
          <h2 className="ms-3">FM-IEMS</h2>
        </NavLink>
      </div>
      <div className="bottom-sidebar">
        <ul className="list-unstyled">
          <li
            className={
              location.pathname.includes("/admin/incomes")
                ? `link active`
                : "link"
            }
          >
            <div className="d-flex">
              <div className="p-icon">
                <BsGraphUpArrow />
              </div>
              <NavLink to="/admin/incomes">Entrate</NavLink>
            </div>
          </li>
          <li
            className={
              location.pathname.includes("/admin/exits")
                ? `link active`
                : "link"
            }
          >
            <div className="d-flex">
              <div className="p-icon">
                <BsGraphDownArrow />
              </div>
              <NavLink to="/admin/exits">Uscite</NavLink>
            </div>
          </li>
          <li
            className={
              location.pathname.includes("/admin/taxes")
                ? `link active`
                : "link"
            }
          >
            <div className="d-flex">
              <div className="p-icon">
                <VscGraphLine />
              </div>
              <NavLink to="/admin/taxes">Tasse</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
