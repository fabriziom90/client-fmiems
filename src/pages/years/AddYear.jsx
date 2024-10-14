import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

function getYears() {
  let currentYear = new Date().getFullYear();
  let years = Array.from(new Array(35), (val, index) => currentYear - index);
  return years;
}

const AddYear = () => {
  const [year, setYear] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4000/years/store", { year }).then((res) => {
      const { result, message } = res.data;

      if (result === true) {
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
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-3">
          <h2>Aggiungi Anno</h2>
        </div>
        <ToastContainer />
        <div className="col-12">
          <form className="background-main p-4" onSubmit={submitForm}>
            <div className="row gy-3">
              <div className="col-6">
                <label htmlFor="" className="control-label">
                  Anno
                </label>
                <select
                  name="year"
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="form-select form-select-sm"
                  required
                >
                  <option value="">Seleziona l'anno</option>
                  {getYears().map((year, index) => {
                    return (
                      <option key={`year-${index}`} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-6">
                <button className="btn btn-sm btn-success mt-4">Salva</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddYear;
