import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import Table from "../components/Table";

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

  useEffect(() => {
    const getValues = async () => {
      axios.get("http://localhost:4000/summary/").then((resp) => {
        setValues(resp.data.values);
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
              <NavLink to="/add-year" className="rounded-0 btn btn-sm btn-main">
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
              <Table data={values} months={months} type={0} />
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
