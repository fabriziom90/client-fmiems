import React from "react";

import axios from "axios";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Loader from "../../components/Loader";
import Table from "../../components/Table";
import { useOutletContext } from "react-router-dom";

const Taxes = () => {
  const [incomes, setIncomes] = useState([]);
  const [user] = useOutletContext();

  useEffect(() => {
    const getIncomes = async () => {
      axios
        .get("http://localhost:4000/incomes/net_amount", {
          params: { id: user.userId },
        })
        .then((resp) => {
          setIncomes(resp.data.net_amounts);
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="d-flex">
            <h2 className="my-2">Importi al netto delle tasse</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="col-12">
            <Table data={incomes} months={months} type={3} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Taxes;
