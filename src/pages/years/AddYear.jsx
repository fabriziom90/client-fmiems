import React from "react";

function getYears() {
  let currentYear = new Date().getFullYear();
  let years = Array.from(new Array(35), (val, index) => currentYear - index);
  return years;
}

const AddYear = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-3">
          <h2>Aggiungi Anno</h2>
        </div>
        <div className="col-12">
          <form className="background-main p-4">
            <div className="row gy-3">
              <div className="col-6">
                <label htmlFor="" className="control-label">
                  Anno
                </label>
                <select name="" id="" className="form-select">
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
