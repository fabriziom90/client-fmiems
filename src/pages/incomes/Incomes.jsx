import React from "react";
import { NavLink } from "react-router-dom";

import Table from "../../components/Table";

const Incomes = () => {
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

  const datiContabili = [
    {
      anno: 2024,
      mesi: [
        { mese: 1, entrate: 500 },
        { mese: 2, entrate: 800 },
        { mese: 3, entrate: 1200 },
        { mese: 4, entrate: 900 },
        { mese: 5, entrate: 700 },
        { mese: 6, entrate: 1000 },
        { mese: 7, entrate: 1100 },
        { mese: 8, entrate: 850 },
        { mese: 9, entrate: 950 },
      ],
    },
  ];

  return (
    <div className="container-fluid mt-3">
      <div className="row gy-3">
        <div className="col-12">
          <NavLink to="/add-year" className="rounded-0 btn btn-sm btn-main">
            Aggiungi anno
          </NavLink>
          <NavLink
            to="/incomes/add-income"
            className="rounded-0 btn btn-sm btn-success ms-2"
          >
            Aggiungi entrata
          </NavLink>
        </div>
        <div className="col-12">
          <Table data={datiContabili} months={months} type={1} />
        </div>
      </div>
    </div>
  );
};

export default Incomes;
