import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";

import Loader from "../../components/Loader";
import SummaryTable from "../../components/SummaryTable";

import axios from "axios";

const DetailYear = () => {
  const [year, setYear] = useState([]);
  const [loaded, setLoaded] = useState(false);

  let location = useLocation();

  useEffect(() => {
    const getDetails = async () => {
      getDetailYear();
    };

    getDetails();
  }, []);

  function getDetailYear() {
    axios
      .get("http://localhost:4000/years/summary", {
        params: { data: location.state.year },
      })
      .then((res) => {
        setYear(res.data.values);

        setTimeout(() => {
          setLoaded(true);
        }, 1500);
      });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="my-2">
                Dettaglio anno {year.length > 0 ? year[0].year : ""}
              </h2>
              <NavLink to="/" className="rounded-0 btn btn-sm btn-main">
                Visualizza anni
              </NavLink>
            </div>
          </div>
          {!loaded ? <Loader loaded={loaded} /> : <SummaryTable year={year} />}
        </div>
      </div>
    </>
  );
};

export default DetailYear;
