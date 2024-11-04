import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Form from "../../components/Form";

function AddExit() {
  const navigate = useNavigate();

  const [values, setValues] = useState("");
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);

  const handleChange = (e) => {
    const updatedForm = { ...values, [e.target.name]: e.target.value };
    setValues(updatedForm);
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/exits/store", values).then((res) => {
      const { result, message } = res.data;
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

        setTimeout(function () {
          navigate("/exits/");
        }, 3400);
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

  useEffect(() => {
    const fetchYear = async () => {
      axios.get("http://localhost:4000/years").then((res) => {
        setYears(res.data.years);
      });
    };

    fetchYear();
  }, []);

  useEffect(() => {
    const fetchMonth = async () => {
      axios.get("http://localhost:4000/months").then((resp) => {
        setMonths(resp.data.months);
      });
    };

    fetchMonth();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-3">
          <h2>Aggiungi Uscita</h2>
        </div>
        <div className="col-12">
          <form className="background-main p-4">
            <Form
              values={values}
              years={years}
              months={months}
              handleChange={handleChange}
            />
            <div className="col-12">
              <button
                className="btn btn-sm btn-success rounded-0 mt-3"
                onClick={submitForm}
              >
                Salva
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default AddExit;
