import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

import Loader from "../../components/Loader";

const DetailTaxes = () => {
  const [year, setYear] = useState([]);
  const [loaded, setLoaded] = useState(false);
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
      .get("http://localhost:4000/taxes/detail", {
        params: { data: location.state.year, id: user.userId },
      })
      .then((res) => {
        setYear(res.data.net_amounts[0]);

        setTimeout(() => {
          setLoaded(true);
        }, 1500);
      });
  }

  function showValues(array, elem) {
    let htmlValues = [];
    array.map((income, i) => {
      htmlValues.push(
        <div className="pb-3">
          {elem === "incomes" ? <strong>{income.customer}: </strong> : ""}
          {elem === "incomes"
            ? income.income.toFixed(2)
            : elem === "taxes"
            ? income.taxes.toFixed(2)
            : income.net.toFixed(2)}
          €
        </div>
      );
    });

    return htmlValues;
  }

  function sumValues(array, type) {
    if (type === "incomes")
      return array
        .reduce((partialSum, a) => partialSum + a.income, 0)
        .toFixed(2);
    else if (type === "taxes")
      return array
        .reduce((partialSum, a) => partialSum + a.taxes, 0)
        .toFixed(2);
    else
      return array.reduce((partialSum, a) => partialSum + a.net, 0).toFixed(2);
  }

  let rowIncomes = 0;
  let rowTaxes = 0;
  let rowNets = 0;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="my-2">Dettaglio tasse anno {year.year}</h2>
        </div>
        <div className="col-12">
          {!loaded ? (
            <Loader loaded={loaded} />
          ) : (
            <>
              <table className="table table-striped">
                <tbody>
                  {year.months.map((month, index) => {
                    month.incomes.forEach((income) => {
                      rowIncomes += income.income;
                      rowTaxes += income.taxes;
                      rowNets += income.net;
                    });

                    return (
                      <>
                        <tr key={`month-${index}`}>
                          <td className="p-0">
                            <div className="head-cell">Mese</div>
                            <div className="p-3">{month.month}</div>
                          </td>
                          <td className="p-0">
                            <div className="head-cell bg-success">Entrate</div>
                            <div className="p-3">
                              <div className="pb-3">
                                {showValues(month.incomes, "incomes")}
                              </div>
                              <div className="border-top py-3 border-dark">
                                <strong>Totale: </strong>
                                {sumValues(month.incomes, "incomes")}€
                              </div>
                            </div>
                          </td>
                          <td className="p-0">
                            <div className="head-cell bg-danger">Tasse</div>
                            <div className="p-3">
                              <div className="pb-3">
                                {showValues(month.incomes, "taxes")}
                              </div>
                              <div className="border-top py-3 border-dark">
                                <strong>Totale: </strong>
                                {sumValues(month.incomes, "taxes")}€
                              </div>
                            </div>
                          </td>
                          <td className="p-0">
                            <div className="head-cell bg-dark">Netto</div>
                            <div className="p-3">
                              <div className="pb-3">
                                {showValues(month.incomes, "nets")}
                              </div>
                              <div className="border-top py-3 border-dark">
                                <strong>Totale: </strong>
                                {sumValues(month.incomes, "nets")}€
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}

                  <tr>
                    <td className="head-cell">
                      <strong>Totali</strong>
                    </td>
                    <td>
                      <strong>Totale: </strong>
                      <span className="text-success">
                        {rowIncomes.toFixed(2)}€
                      </span>
                    </td>
                    <td>
                      <strong>Totale: </strong>
                      <span className="text-danger">
                        {rowTaxes.toFixed(2)}€
                      </span>
                    </td>
                    <td>
                      <span>
                        <strong>Totale:</strong> {rowNets}€
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailTaxes;
