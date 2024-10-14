import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Table from "../../components/Table";

import axios from "axios";

const Exits = () => {
  const [exits, setExits] = useState([]);

  useEffect(() => {
    const getExits = async () => {
      axios.get("http://localhost:4000/exits").then((resp) => {
        setExits(resp.data.exits);
      });
    };

    getExits();
  }, []);

  const months = [
    "Gen",
    "Feb",
    "Mar",
    "Apr",
    "Mag",
    "Giu",
    "Lug",
    "Ago",
    "Set",
    "Ott",
    "Nov",
    "Dic",
  ];

  return (
    <div className="container-fluid mt-3">
      <div className="row gy-3">
        <div className="col-12">
          <NavLink to="/add-year" className="rounded-0 btn btn-sm btn-main">
            Aggiungi anno
          </NavLink>
          <NavLink
            to="/exits/add-exits"
            className="rounded-0 btn btn-sm btn-danger ms-2"
          >
            Aggiungi uscita
          </NavLink>
        </div>
        <div className="col-12">
          <Table data={exits} months={months} type={1} />
        </div>
      </div>
    </div>
  );
};

export default Exits;
