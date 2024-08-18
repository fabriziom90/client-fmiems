import { React, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import ConfirmationModal from "../../components/ConfirmationModal";

const DetailIncome = () => {
  let [thisIncome, setThisIncome] = useState(null);
  const [incomeDelete, setIncomeDelete] = useState({});
  const [show, setShow] = useState(false);
  const [customerName, setCustomerName] = useState("");

  const setObject = (income) => {
    thisIncome != null ? setThisIncome(null) : setThisIncome(income);
  };

  const incomes = [
    {
      month: 1,
      customers: [
        {
          name: "Boolean",
          incomes: [
            {
              id: 1,
              amount: 200,
              data: "2024-07-01",
            },
            {
              id: 2,
              amount: 200,
              data: "2024-07-01",
            },
            {
              id: 3,
              amount: 100,
              data: "2024-07-01",
            },
          ],
        },
        {
          name: "Supply2Amz/Grocer2Amz",
          incomes: [
            {
              id: 4,
              amount: 100,
              data: "2024-07-01",
            },
          ],
        },
        {
          name: "Schininà Brewing",
          incomes: [
            {
              id: 5,
              amount: 200,
              data: "2024-07-01",
            },
          ],
        },
      ],
    },
    {
      month: 2,
      customers: [
        {
          name: "Boolean",
          incomes: [
            {
              id: 6,
              amount: 300,
              data: "2024-07-01",
            },
            {
              id: 7,
              amount: 50,
              data: "2024-07-01",
            },
            {
              id: 8,
              amount: 250,
              data: "2024-07-01",
            },
            {
              id: 9,
              amount: 100,
              data: "2024-07-01",
            },
          ],
        },
        {
          name: "Oda Visual Studio",
          incomes: [
            {
              id: 10,
              amount: 250,
              data: "2024-07-01",
            },
          ],
        },
      ],
    },
  ];

  let fullTotal = 0;
  let maxLength = incomes.reduce(
    (max, month) => Math.max(max, month.customers.length),
    0
  );

  incomes.forEach((item) => {
    item.customers.forEach((customer) => {
      customer.incomes.forEach((income) => {
        fullTotal += income.amount;
      });
    });
  });

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12">
          <h2>Dettaglio entrate anno</h2>
        </div>
        <div className="col-12">
          <table className="table table-striped" id="detail">
            <tbody>
              {incomes.map((item, index) => {
                let total = 0;

                return (
                  <tr key={index}>
                    <td className="p-0">
                      <div className="head-cell">Mese</div>
                      <div className="p-2">{item.month}</div>
                    </td>
                    {item.customers.map((customer, i) => {
                      let sub_total = 0;
                      return (
                        <>
                          <td key={i} className="p-0 position-relative">
                            <table className="w-100 border-0 inner-table">
                              <thead>
                                <tr>
                                  <th className="head-inner-cell" colSpan={3}>
                                    {customer.name}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {customer.incomes.map((income, j) => {
                                  total += income.amount;
                                  sub_total += income.amount;
                                  return (
                                    <>
                                      <tr key={j}>
                                        <td>
                                          {thisIncome != null &&
                                          thisIncome.id === income.id ? (
                                            <input
                                              type="text"
                                              className="form-control form-control-sm"
                                              value={income.amount}
                                            />
                                          ) : (
                                            `${income.amount}€`
                                          )}
                                        </td>
                                        <td>
                                          <button
                                            className="btn btn-sm btn-square btn-warning ms-2"
                                            onClick={() => {
                                              setObject(income);
                                            }}
                                          >
                                            <FiEdit />
                                          </button>
                                        </td>
                                        <td>
                                          <button
                                            className="btn btn-sm btn-square btn-danger ms-2"
                                            onClick={() => {
                                              setShow(true);
                                              setIncomeDelete(income);
                                              setCustomerName(customer.name);
                                            }}
                                          >
                                            <FaRegTrashAlt />
                                          </button>
                                        </td>
                                      </tr>
                                    </>
                                  );
                                })}
                              </tbody>
                            </table>
                          </td>
                        </>
                      );
                    })}
                    {Array.from({
                      length: maxLength - item.customers.length,
                    }).map(() => (
                      <td className="p-0">
                        <div className="head-cell">-</div>
                        <div className="p-2">
                          <span className="display-1">-</span>
                        </div>
                      </td>
                    ))}
                    <td className="p-0" key={index}>
                      <div className="head-cell">Totale</div>
                      <div className="p-2 d-flex flex-column justify-content-center h-100">
                        {total}€
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-0" colSpan={maxLength + 1}></td>
                <td className="p-0">
                  <div
                    className={`text-white ${
                      fullTotal < 0 ? "bg-danger" : "bg-success"
                    }`}
                  >
                    {fullTotal}€
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
          <ConfirmationModal
            isOpen={show}
            isClosed={() => {
              setShow(false);
            }}
            data={incomeDelete}
            customer={customerName}
            modalTitle={"Sei sicuro di voler cancellare questa entrata?"}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailIncome;
