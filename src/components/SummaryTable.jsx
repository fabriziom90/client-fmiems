import React from "react";

const SummaryTable = ({ year }) => {
  function showValues(values, month, type) {
    let htmlValues = [];

    values.map((month_values, index) => {
      if (type === "taxes") {
        htmlValues.push(
          <div
            key={
              type == "income"
                ? `income-${month}-${index}`
                : `exit-${month}-${index}`
            }
          >
            <strong>{(month_values.value * 0.3).toFixed(2)}€</strong>
          </div>
        );
      } else {
        htmlValues.push(
          <div
            key={
              type == "income"
                ? `income-${month}-${index}`
                : `exit-${month}-${index}`
            }
          >
            <strong>{month_values.customer}</strong> {month_values.value}€
          </div>
        );
      }
    });
    return htmlValues;
  }

  function sumValues(array, type) {
    return array
      .reduce(
        (partialSum, a) =>
          type === "taxes" ? partialSum + a.value * 0.3 : partialSum + a.value,
        0
      )
      .toFixed(2);
  }

  let fullIncomes = 0;
  let fullExits = 0;
  let fullTaxes = 0;

  return (
    <div className="col-12">
      <table className="table table-striped" id="detail">
        <tbody>
          {year.map((item, i) => {
            return (
              <>
                {item.months.map((month, index) => {
                  let rowIncomes = 0;
                  let rowExits = 0;
                  let rowTaxes = 0;
                  return (
                    <>
                      <tr key={index}>
                        <td className="p-0">
                          <div className="head-cell">Mese</div>
                          <div className="p-3">{month.month}</div>
                        </td>
                        <td className="p-0">
                          <div className="head-cell bg-success">Entrate</div>

                          <div className="p-3">
                            {month.incomes.length > 0
                              ? showValues(month.incomes, month.month, "income")
                              : "0€"}
                          </div>
                          <div className="border-top border-dark py-2">
                            <strong>Totale:</strong>{" "}
                            <span className="text-success">
                              {sumValues(month.incomes, "incomes")}€
                            </span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="head-cell bg-warning">Tasse</div>
                          <div className="p-3">
                            {month.incomes.length > 0
                              ? showValues(month.incomes, month.month, "taxes")
                              : "0€"}
                          </div>
                          <div className="border-top border-dark py-2">
                            <strong>Totale:</strong>{" "}
                            <span className="text-warning">
                              {sumValues(month.incomes, "taxes")}€
                            </span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="head-cell bg-danger">Uscite</div>
                          <div className="p-3">
                            {month.exits.length > 0
                              ? showValues(month.exits, month.month, "exit")
                              : "0€"}
                          </div>
                          <div className="border-top border-dark py-2">
                            <strong>Totale:</strong>{" "}
                            <span className="text-danger">
                              {sumValues(month.exits, "exits")}€
                            </span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="head-cell bg-dark">Totale</div>
                          <div className="p-3">
                            {month.incomes.forEach((income) => {
                              fullIncomes += income.value;
                              rowIncomes += income.value;
                              fullTaxes += income.value * 0.3;
                              rowTaxes += income.value * 0.3;
                            })}
                            {month.exits.forEach((exit) => {
                              fullExits += exit.value;
                              rowExits += exit.value;
                            })}
                            <span
                              className={
                                rowIncomes - rowExits - rowTaxes < 0
                                  ? "text-danger"
                                  : "text-success"
                              }
                            >
                              {(rowIncomes - rowExits - rowTaxes).toFixed(2)}€
                            </span>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <tr>
                  <td className="bg-primary text-white">Totali</td>
                  <td>
                    <span className="text-success">{fullIncomes}€</span>
                  </td>
                  <td className="text-warning">{fullTaxes}€</td>
                  <td>
                    <span className="text-danger">{fullExits}€</span>
                  </td>
                  <td
                    className={
                      fullIncomes - fullExits > 0
                        ? "head-cell bg-success"
                        : "head-cell bg-danger"
                    }
                  >
                    {(fullIncomes - fullExits - fullTaxes).toFixed(2)}€
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
