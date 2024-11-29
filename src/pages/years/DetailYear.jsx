import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import Loader from "../../components/Loader";
import SummaryTable from "../../components/SummaryTable";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";

import axios from "axios";

const DetailYear = () => {
  const [loaded, setLoaded] = useState(false);
  const [year, setYear] = useState([]);
  const [visible, setVisible] = useState(true);
  const [user] = useOutletContext();

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
        params: { data: location.state.year, id: user.userId },
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
            <Loader />
          ) : (
            <>
              {year[0].months.length > 0 ? (
                <>
                  <div className="col-6">
                    <LineChart months={year[0].months} type={3} />
                    <PieChart months={year[0].months} visible={visible} />
                  </div>
                  <div className="col-6">
                    <SummaryTable year={year} visible={visible} />
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-center">
                    Non sono presenti entrate ed uscite per quest'anno
                  </h2>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailYear;
