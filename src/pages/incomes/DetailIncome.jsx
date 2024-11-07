import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import ConfirmationModal from "../../components/ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import axios from "axios";

const DetailIncome = () => {
  let [thisIncome, setThisIncome] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [incomeDelete, setIncomeDelete] = useState({});
  const [show, setShow] = useState(false);
  const [customerName, setCustomerName] = useState("");
  let [incomeValue, setIncomeValue] = useState("");
  let [incomeCustomer, setIncomeCustomer] = useState("");

  let location = useLocation();

  function getYearIncomes() {
    axios
      .get("http://localhost:4000/incomes/get_distinct_incomes", {
        params: {
          year: location.state.year,
        },
      })
      .then((resp) => {
        setIncomes(resp.data.incomes);
      });
  }

  useEffect(() => {
    const getIncomes = async () => {
      getYearIncomes();
    };

    getIncomes();
  }, []);

  const setObject = (income) => {
    thisIncome != null ? setThisIncome(null) : setThisIncome(income);
    if (thisIncome != null) {
      updateIncome();
    }
  };

  const changeValue = (e) => {
    setIncomeValue(e.target.value);
  };

  const changeCustomer = (e) => {
    setIncomeCustomer(e.target.value);
  };

  const deleteIncome = () => {
    let params = {
      income_id: incomeDelete.income_id,
    };

    axios
      .delete("http://localhost:4000/incomes/delete", { data: params })
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

          setShow(false);
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
        getYearIncomes();
      });
  };

  function updateIncome() {
    let data = {
      income_id: thisIncome.income_id,
      value: thisIncome.value,
      customer: thisIncome.customer,
    };
    if (incomeValue !== "") {
      data.value = incomeValue;
    }

    if (incomeCustomer != "") {
      data.customer = incomeCustomer;
    }

    if (
      thisIncome.value != data.value ||
      thisIncome.customer != data.customer
    ) {
      axios.put("http://localhost:4000/incomes/update", data).then((resp) => {
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
        getYearIncomes();
      });
    }
  }

  let fullTotal = 0;
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center my-3">
            <h2>Dettaglio entrate anno</h2>
            <div>
              <NavLink
                to="/admin/incomes"
                className="btn btn-sm btn-main border-0"
              >
                Entrate
              </NavLink>
              <NavLink
                to="/admin/incomes/add-income"
                className="rounded-0 btn btn-sm btn-success ms-2"
              >
                Aggiungi entrata
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-12">
          <table className="table table-striped" id="detail">
            <tbody>
              {incomes.map((item) => {
                return (
                  <>
                    {item.months.map((month, index) => {
                      let total = 0;
                      return (
                        <>
                          <tr key={index}>
                            <td className="p-0">
                              <div className="head-cell">Mese</div>
                              <div className="p-2">{month.month}</div>
                            </td>
                            <td className="p-0">
                              <div className="head-cell height-30px"></div>
                              {month.incomes.map((income) => {
                                total += income.value;
                                fullTotal += income.value;
                                return (
                                  <>
                                    <div className="p-2">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                          {thisIncome != null &&
                                          thisIncome.income_id ===
                                            income.income_id ? (
                                            <>
                                              <div className="d-flex">
                                                <input
                                                  type="text"
                                                  className="form-control form-control-sm me-1"
                                                  defaultValue={income.value}
                                                  onChange={changeValue}
                                                  placeholder="Importo"
                                                />
                                                <input
                                                  type="text"
                                                  className="form-control form-control-sm"
                                                  defaultValue={income.customer}
                                                  onChange={changeCustomer}
                                                  placeholder="Cliente"
                                                />
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              <strong>{income.customer}</strong>{" "}
                                              - {income.value}€
                                            </>
                                          )}
                                        </div>
                                        <div>
                                          <button
                                            className="btn btn-sm btn-warning me-1"
                                            onClick={() => {
                                              setObject(income);
                                            }}
                                          >
                                            <FiEdit />
                                          </button>
                                          <button
                                            className="btn btn-sm btn-square btn-danger me-2"
                                            onClick={() => {
                                              setShow(true);
                                              setIncomeDelete(income);
                                              setCustomerName(income.customer);
                                            }}
                                          >
                                            <FaRegTrashAlt />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                              <div className="head-cell mt-2 border-bottom border-dark">
                                {total}€
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <tr>
                      <td className="p-0 head-cell">Totale</td>
                      <td
                        className={`p-0 full-total text-white ${
                          fullTotal < 0 ? "bg-danger" : "bg-success"
                        }`}
                      >
                        <div>{fullTotal}€</div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <ConfirmationModal
            isOpen={show}
            isClosed={() => {
              setShow(false);
            }}
            delete={true}
            data={incomeDelete}
            customer={customerName}
            modalTitle={"Sei sicuro di voler cancellare questa entrata?"}
            modalText={
              "Una volta cancellata questa entrata non potrà essere più recuperata e dovrai reinserirla. Vuoi procedere?"
            }
            confirmDelete={deleteIncome}
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default DetailIncome;
