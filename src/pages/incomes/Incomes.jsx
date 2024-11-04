import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Table from "../../components/Table";
import Loader from "../../components/Loader";

import axios from "axios";

const Incomes = () => {
  const [incomes, setIncomes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getIncomes = async () => {
      axios.get("http://localhost:4000/incomes").then((resp) => {
        setIncomes(resp.data.incomes);
        setTimeout(() => {
          setLoaded(true);
        }, 1500);
      });
    };

    getIncomes();
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
            to="/admin/incomes/add-income"
            className="rounded-0 btn btn-sm btn-success ms-2"
          >
            Aggiungi entrata
          </NavLink>
        </div>
        <div className="col-12">
          {!loaded ? (
            <Loader loaded={loaded} />
          ) : (
            <Table data={incomes} months={months} type={1} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Incomes;
