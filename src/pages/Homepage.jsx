import { NavLink } from "react-router-dom";

import Table from "../components/Table";
import Loader from "../components/Loader";

import axios from "axios";

import { useState, useEffect } from "react";

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
  const [values, setValues] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getValues = async () => {
      axios.get("http://localhost:4000/summary/").then((resp) => {
        setValues(resp.data.values);
        setTimeout(() => {
          setLoaded(true);
        }, 1800);
      });
    };

    getValues();
  }, []);

  return (
    <>
      <div className="content mt-3">
        <div className="container">
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
              <NavLink
                to="/admin/exits/add-exits"
                className="rounded-0 btn btn-sm btn-danger ms-2"
              >
                Aggiungi uscita
              </NavLink>
            </div>
            <div className="col-12">
              <h2>Riepilogo</h2>
              {!loaded ? (
                <Loader loaded={loaded} />
              ) : (
                <Table data={values} months={months} type={0} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
