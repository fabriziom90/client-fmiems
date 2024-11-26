import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Table from "../../components/Table";
import Loader from "../../components/Loader";
import { useOutletContext } from "react-router-dom";

import axios from "axios";

const Incomes = () => {
  const [incomes, setIncomes] = useState([]);
  const [user] = useOutletContext();

  useEffect(() => {
    const getIncomes = async () => {
      axios
        .get("http://localhost:4000/incomes", { params: { id: user.userId } })
        .then((resp) => {
          setIncomes(resp.data.incomes);
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
          <Table data={incomes} months={months} type={1} />
        </div>
      </div>
    </div>
  );
};

export default Incomes;
