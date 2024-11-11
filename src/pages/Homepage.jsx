import { NavLink } from "react-router-dom";

import Table from "../components/Table";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";

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
    getValues();
  }, []);

  const getValues = async () => {
    axios.get("http://localhost:4000/summary/").then((resp) => {
      setValues(resp.data.values);
      setTimeout(() => {
        setLoaded(true);
      }, 1800);
    });
  };

  const deleteYear = (year) => {
    let params = {
      year_id: year,
    };

    axios
      .delete("http://localhost:4000/years/delete", { data: params })
      .then((resp) => {
        const { result, message } = resp.data;
        if (result) {
          toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        getValues();
      });
  };

  return (
    <>
      <div className="content mt-3 mx-4">
        <div className="container-full">
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
              ) : values.length > 0 ? (
                <Table
                  data={values}
                  months={months}
                  type={0}
                  handleDeleteYear={deleteYear}
                />
              ) : (
                "Nessun anno è stato inserito"
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Homepage;
