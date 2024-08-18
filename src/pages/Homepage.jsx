import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import Table from "../components/Table";

import { useState } from "react";

const datiContabili = [
  {
    anno: 2024,
    mesi: [
      { mese: 1, entrate: 500, uscite: 700 },
      { mese: 2, entrate: 800, uscite: 350 },
      { mese: 3, entrate: 1200, uscite: 600 },
      { mese: 4, entrate: 900, uscite: 450 },
      { mese: 5, entrate: 700, uscite: 300 },
      { mese: 6, entrate: 1000, uscite: 550 },
      { mese: 7, entrate: 1100, uscite: 500 },
      { mese: 8, entrate: 850, uscite: 425 },
      { mese: 9, entrate: 950, uscite: 475 },
      { mese: 10, entrate: 1250, uscite: 625 },
      { mese: 11, entrate: 1050, uscite: 525 },
      { mese: 12, entrate: 925, uscite: 462 },
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

function Homepage() {
  return (
    <>
      <div className="content mt-3">
        <div className="container">
          <div className="row gy-3">
            <div className="col-12">
              <NavLink className="rounded-0 btn btn-sm btn-main">
                Aggiungi anno
              </NavLink>
              <NavLink
                to="/incomes/add-income"
                className="rounded-0 btn btn-sm btn-success ms-2"
              >
                Aggiungi entrata
              </NavLink>
              <NavLink
                to="/exits/add-exits"
                className="rounded-0 btn btn-sm btn-danger ms-2"
              >
                Aggiungi uscita
              </NavLink>
            </div>
            <div className="col-12">
              <h2>Riepilogo</h2>
              <Table data={datiContabili} months={months} type={0} />
            </div>
            <div className="col-4">
              <Card>
                <div className="card-img-top">
                  <img
                    src="https://placehold.co/300"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  itaque neque culpa sunt eaque explicabo iure nemo nesciunt
                  incidunt qui accusantium tempore et voluptates, amet quisquam
                  eos dolore animi repellendus!
                </div>
              </Card>
            </div>
            <div className="col-4">
              <Card bg="bg-success">
                <div className="card-img-top">
                  <img
                    src="https://placehold.co/300"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  itaque neque culpa sunt eaque explicabo iure nemo nesciunt
                  incidunt qui accusantium tempore et voluptates, amet quisquam
                  eos dolore animi repellendus!
                </div>
              </Card>
            </div>
            <div className="col-4">
              <Card bg="bg-primary">
                <div className="card-img-top">
                  <img
                    src="https://placehold.co/300"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  itaque neque culpa sunt eaque explicabo iure nemo nesciunt
                  incidunt qui accusantium tempore et voluptates, amet quisquam
                  eos dolore animi repellendus!
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
