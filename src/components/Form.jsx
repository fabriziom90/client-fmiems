import React from "react";

const Form = () => {
  return (
    <div className="row gy-3">
      <div className="col-3">
        <label className="control-label">Anno</label>
        <select className="form-select">
          <option value="">Seleziona anno</option>
          <option value="1">2024</option>
          <option value="2">2023</option>
          <option value="3">2022</option>
        </select>
      </div>
      <div className="col-3">
        <label htmlFor="" className="control-label">
          Mese
        </label>
        <select name="" id="" className="form-select">
          <option value="1">Gennaio</option>
          <option value="2">Febbraio</option>
          <option value="3">Marzo</option>
          <option value="4">Aprile</option>
          <option value="5">Maggio</option>
          <option value="6">Giugno</option>
          <option value="7">Luglio</option>
          <option value="8">Agosto</option>
          <option value="9">Settembre</option>
          <option value="10">Ottobre</option>
          <option value="11">Novembre</option>
          <option value="12">Dicembre</option>
        </select>
      </div>
      <div className="col-3">
        <label htmlFor="" className="control-label">
          Importo
        </label>
        <input
          type="number"
          step="0.01"
          min="0"
          className="form-control"
          placeholder="Importo"
        />
      </div>
      <div className="col-3">
        <label htmlFor="" className="control-label">
          Data
        </label>
        <input
          type="date"
          name=""
          id=""
          className="form-control"
          placeholder="In data..."
        />
      </div>
      <div className="col-12">
        <label htmlFor="" className="control-label">
          Fonte
        </label>
        <textarea
          name=""
          id=""
          className="form-control"
          placeholder="Fonte"
        ></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-sm btn-success rounded-0">Salva</button>
      </div>
    </div>
  );
};

export default Form;
