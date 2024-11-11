import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import Loader from "../../components/Loader";
import SummaryTable from "../../components/SummaryTable";

import axios from "axios";

const DetailYear = () => {
  const [year, setYear] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

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

  function showHideTaxes() {
    visible ? setVisible(false) : setVisible(true);
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
              <NavLink to="/admin" className="rounded-0 btn btn-sm btn-main">
                Visualizza anni
              </NavLink>
            </div>
          </div>
          <div className="col-12 mb-3">
            <button className="btn btn-main" onClick={showHideTaxes}>
              {visible ? (
                <>
                  Tasse visibili <FaEye />
                </>
              ) : (
                <>
                  Tasse nascoste <FaEyeSlash />
                </>
              )}
            </button>
          </div>
          {!loaded ? (
            <Loader loaded={loaded} />
          ) : (
            <SummaryTable year={year} visible={visible} />
          )}
        </div>
      </div>
    </>
  );
};

export default DetailYear;
