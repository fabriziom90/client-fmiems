import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Table from "../../components/Table";
import Loader from "../../components/Loader";

import axios from "axios";

const Exits = () => {
  const [exits, setExits] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getExits = async () => {
      axios.get("http://localhost:4000/exits").then((resp) => {
        setExits(resp.data.exits);
        setTimeout(() => {
          setLoaded(true);
        }, 1500);
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
          <NavLink
            to="/admin/add-year"
            className="rounded-0 btn btn-sm btn-main"
          >
            Aggiungi anno
          </NavLink>
          <NavLink
            to="/admin/exits/add-exits"
            className="rounded-0 btn btn-sm btn-danger ms-2"
          >
            Aggiungi uscita
          </NavLink>
        </div>
        <div className="col-12">
          {!loaded ? (
            <Loader loaded={loaded} />
          ) : (
            <Table data={exits} months={months} type={2} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Exits;
