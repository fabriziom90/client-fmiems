import logo from "../assets/images/mylogo.png";

import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";

import { NavLink } from "react-router-dom";

const Sidebar = ({
  title = "Default title",
  subtitle = "Default subtitle",
}) => {
  const activeClass = ({ isActive }) => {
    isActive ? "active" : "";
  };

  return (
    <div id="sidebar">
      <div className="top-sidebar px-2">
        <NavLink
          to="/"
          className="d-flex align-items-center text-decoration-none text-white"
        >
          <img src={logo} alt={title} title={subtitle} />
          <h2 className="ms-3">FM-IEMS</h2>
        </NavLink>
      </div>
      <div className="bottom-sidebar">
        <ul className="list-unstyled">
          <li className={`link ${activeClass}`}>
            <div className="d-flex">
              <div className="p-icon">
                <BsGraphUpArrow />
              </div>
              <NavLink to="/incomes">Entrate</NavLink>
            </div>
          </li>
          <li className={`link ${activeClass}`}>
            <div className="d-flex">
              <div className="p-icon">
                <BsGraphDownArrow />
              </div>
              <NavLink to="/exits">Uscite</NavLink>
            </div>
          </li>
          <li className={`link ${activeClass}`}>
            <div className="d-flex">
              <div className="p-icon">
                <VscGraphLine />
              </div>
              <NavLink to="/page">Resoconto</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
