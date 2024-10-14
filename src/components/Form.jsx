import React from "react";

const Form = (props) => {
  const { handleChange, values, years, months } = props;

  return (
    <div className="row gy-3">
      <div className="col-3">
        <label className="control-label">Anno</label>
        <select
          className="form-select"
          onChange={handleChange}
          values={values.year}
          id="year"
          name="year"
        >
          <option value="">Seleziona anno</option>
          {years.map((year) => {
            return (
              <option key={year.id} value={year.id}>
                {year.year}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-3">
        <label htmlFor="" className="control-label">
          Mese
        </label>
        <select
          name="month"
          id="month"
          className="form-select"
          onChange={handleChange}
          values={values.month}
        >
          <option value="">Seleziona mese</option>
          {months.map((month) => {
            return (
              <option key={month.id} value={month.id}>
                {month.month_name}
              </option>
            );
          })}
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
          onChange={handleChange}
          values={values.amount}
          name="amount"
          id="amount"
        />
      </div>
      <div className="col-12">
        <label htmlFor="" className="control-label">
          Fonte
        </label>
        <textarea
          name="customer"
          id="customer"
          className="form-control"
          placeholder="Fonte"
          onChange={handleChange}
          values={values.customer}
        ></textarea>
      </div>
    </div>
  );
};

export default Form;
