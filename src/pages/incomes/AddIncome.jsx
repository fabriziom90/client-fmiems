import React from "react";

import Form from "../../components/Form";

function AddIncome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-3">
          <h2>Aggiungi Entrata</h2>
        </div>
        <div className="col-12">
          <form className="background-main p-4">
            <Form />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddIncome;
