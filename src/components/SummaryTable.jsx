import React from "react";

const SummaryTable = ({ year }) => {
  function showValues(values, month, type) {
    let htmlValues = [];

    values.map((income, index) => {
      htmlValues.push(
        <div
          key={
            type == "income"
              ? `income-${month}-${index}`
              : `exit-${month}-${index}`
          }
        >
          <strong>{income.customer}</strong> {income.value}€
        </div>
      );
    });
    return htmlValues;
  }

  function sumValues(array) {
    return Math.round(array.reduce((partialSum, a) => partialSum + a.value, 0));
  }

  let fullIncomes = 0;
  let fullExits = 0;
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
                              {sumValues(month.incomes)}€
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
                              {sumValues(month.exits)}€
                            </span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="head-cell bg-dark">Totale</div>
                          <div className="p-3">
                            {month.incomes.forEach((income) => {
                              fullIncomes += income.value;
                              rowIncomes += income.value;
                            })}
                            {month.exits.forEach((exit) => {
                              fullExits += exit.value;
                              rowExits += exit.value;
                            })}
                            <span
                              className={
                                rowIncomes - rowExits < 0
                                  ? "text-danger"
                                  : "text-success"
                              }
                            >
                              {Math.round(rowIncomes - rowExits, 2)}€
                            </span>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <tr>
                  <td></td>
                  <td>
                    <span className="text-success">{fullIncomes}€</span>
                  </td>
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
                    {Math.round(fullIncomes - fullExits, 2)}€
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
