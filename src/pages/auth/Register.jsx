import React from "react";

const Register = () => {
  return (
    <div className="background-main vh-100 vw-100">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="form-card">
          <div class="text-end">
            <NavLink to="/login">Accedi</NavLink>
          </div>
          <div className="logo justify-content-center">
            <img src={logo} alt="FM-IEMS" />
            <h2>FM-IEMS</h2>
          </div>
          <div className="text-center my-3">
            <h2>Fabrizio Mastrobattista - Income Exits Management System</h2>
          </div>
          <div className="form">
            <div className="my-3">
              <label htmlFor="" className="control-label">
                Nome e cognome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Nome e cognome"
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="control-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="control-label">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="control-label">
                Conferma password
              </label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
                className="form-control"
                placeholder="Conferma password"
              />
            </div>
            <div className="my-4">
              <button className="btn-main">Accedi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
