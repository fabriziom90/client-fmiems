import { React, useState, useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import ConfirmationModal from "../../components/ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import LineChart from "../../components/LineChart";
import Loader from "../../components/Loader";
import axios from "axios";

const DetailExit = () => {
  let [loaded, setLoaded] = useState(false);
  let [thisExit, setThisExit] = useState(null);
  const [exits, setExits] = useState([]);
  const [exitDelete, setExitDelete] = useState({});
  const [show, setShow] = useState(false);
  const [customerName, setCustomerName] = useState("");
  let [exitValue, setExitValue] = useState("");
  let [exitCustomer, setExitCustomer] = useState("");
  const [user] = useOutletContext();

  let location = useLocation();

  function getYearExits() {
    axios
      .get("http://localhost:4000/exits/get_distinct_exits", {
        params: {
          year: location.state.year,
          id: user.userId,
        },
      })
      .then((resp) => {
        setExits(resp.data.exits);
        setTimeout(() => {
          setLoaded(true);
        }, 1500);
      });
  }

  useEffect(() => {
    const getExits = async () => {
      getYearExits();
    };

    getExits();
  }, []);

  const setObject = (exit) => {
    thisExit != null ? setThisExit(null) : setThisExit(exit);
    if (thisExit != null) {
      updateExit();
    }
  };

  const changeValue = (e) => {
    setExitValue(e.target.value);
  };

  const changeCustomer = (e) => {
    setExitCustomer(e.target.value);
  };

  const deleteExit = () => {
    let params = {
      exit_id: exitDelete.exit_id,
    };

    axios
      .delete("http://localhost:4000/exits/delete", { data: params })
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
        getYearExits();
      });
  };

  function updateExit() {
    let data = {
      exit_id: thisExit.exit_id,
      value: thisExit.value,
      customer: thisExit.customer,
    };
    if (exitValue !== "") {
      data.value = exitValue;
    }

    if (exitCustomer != "") {
      data.customer = exitCustomer;
    }

    if (thisExit.value != data.value || thisExit.customer != data.customer) {
      axios.put("http://localhost:4000/exits/update", data).then((resp) => {
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
        getYearExits();
      });
    }
  }

  let fullTotal = 0;
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center my-3">
            <h2>Dettaglio uscite anno</h2>
            <div>
              <NavLink
                to="/admin/exits"
                className="btn btn-sm btn-main border-0"
              >
                Uscite
              </NavLink>
              <NavLink
                to="/admin/exits/add-exits"
                className="rounded-0 btn btn-sm btn-danger ms-2"
              >
                Aggiungi uscita
              </NavLink>
            </div>
          </div>
        </div>
        {!loaded ? (
          <Loader />
        ) : (
          <>
            {exits[0].months.length > 0 ? (
              <>
                <div className="col-6">
                  <LineChart months={exits[0].months} type={2} />
                </div>
                <div className="col-6">
                  <table className="table table-striped" id="detail">
                    <tbody>
                      {exits.map((item) => {
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
                                      {month.exits.map((exit) => {
                                        total += exit.value;
                                        fullTotal += exit.value;
                                        return (
                                          <>
                                            <div className="p-2">
                                              <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                  {thisExit != null &&
                                                  thisExit.exit_id ===
                                                    exit.exit_id ? (
                                                    <>
                                                      <div className="d-flex">
                                                        <input
                                                          type="text"
                                                          className="form-control form-control-sm me-1"
                                                          defaultValue={
                                                            exit.value
                                                          }
                                                          onChange={changeValue}
                                                          placeholder="Importo"
                                                        />
                                                        <input
                                                          type="text"
                                                          className="form-control form-control-sm"
                                                          defaultValue={
                                                            exit.customer
                                                          }
                                                          onChange={
                                                            changeCustomer
                                                          }
                                                          placeholder="Cliente"
                                                        />
                                                      </div>
                                                    </>
                                                  ) : (
                                                    <>
                                                      <strong>
                                                        {exit.customer}
                                                      </strong>{" "}
                                                      - {exit.value}€
                                                    </>
                                                  )}
                                                </div>
                                                <div>
                                                  <button
                                                    className="btn btn-sm btn-warning me-1"
                                                    onClick={() => {
                                                      setObject(exit);
                                                    }}
                                                  >
                                                    <FiEdit />
                                                  </button>
                                                  <button
                                                    className="btn btn-sm btn-square btn-danger me-2"
                                                    onClick={() => {
                                                      setShow(true);
                                                      setExitDelete(exit);
                                                      setCustomerName(
                                                        exit.customer
                                                      );
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
                                        {total.toFixed(2)}€
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
                                  fullTotal > 0 ? "bg-danger" : "bg-success"
                                }`}
                              >
                                <div>{fullTotal.toFixed(2)}€</div>
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
                    modalTitle={"Sei sicuro di voler cancellare questa uscita?"}
                    modalText={
                      "Una volta cancellata questa uscita non potrà essere più recuperata e dovrai reinserirla. Vuoi procedere?"
                    }
                    confirmDelete={deleteExit}
                  />
                </div>
              </>
            ) : (
              <>
                <h2 className="text-center">
                  Non sono presenti uscite per quest'anno
                </h2>
              </>
            )}
          </>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default DetailExit;
