import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../../components/Table";

const datiContabili = [
  {
    anno: 2024,
    mesi: [
      { mese: 1, uscite: 700 },
      { mese: 2, uscite: 350 },
      { mese: 3, uscite: 600 },
      { mese: 4, uscite: 450 },
      { mese: 5, uscite: 300 },
      { mese: 6, uscite: 550 },
      { mese: 7, uscite: 500 },
      { mese: 8, uscite: 425 },
      { mese: 9, uscite: 475 },
      { mese: 10, uscite: 625 },
      { mese: 11, uscite: 525 },
      { mese: 12, uscite: 462 },
    ],
  },
];

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

const Incomes = () => {
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
          <Table data={datiContabili} months={months} type={2} />
        </div>
      </div>
    </div>
  );
};

export default Incomes;
