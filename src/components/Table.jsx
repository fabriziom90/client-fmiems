import { React, useState } from "react";

import { NavLink } from "react-router-dom";

import { FaEye } from "react-icons/fa";

import DataTable from "react-data-table-component";
import { FaRegTrashAlt } from "react-icons/fa";
import ConfirmationModal from "./ConfirmationModal";

const Table = ({ data, months, type }) => {
  const [show, setShow] = useState(false);
  const [yearDelete, setYearDelete] = useState({});
  const [customerName, setCustomerName] = useState("");

  function setClassResults(type, value) {
    if (type === 0) {
      if (value > 0) {
        return `text-success`;
      } else {
        return `text-danger`;
      }
    } else {
      return "";
    }
  }

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Anno</th>
            {months.map((month, index) => {
              return (
                <>
                  <th key={`month-${index}`}>{month}</th>
                </>
              );
            })}
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {data.map((year, index) => {
            return (
              <tr key={`year-${year.year_id}`}>
                <td>{year.year}</td>
                {year.months.map((month, i) => {
                  if (month != null) {
                    return (
                      <td
                        key={`month-value-${i}`}
                        className={setClassResults(type, month)}
                      >
                        {month}€
                      </td>
                    );
                  } else {
                    return <td> - </td>;
                  }
                })}
                <td>
                  {type === 0 ? (
                    <>
                      <NavLink
                        to={`/admin/years/${year.year_id}/detail-year`}
                        className="btn btn-sm btn-main"
                        state={{ year: year.year }}
                      >
                        <FaEye />
                      </NavLink>
                      <button
                        className="btn btn-sm btn-square btn-danger ms-2"
                        onClick={() => {
                          setShow(true);
                          setYearDelete(year.year);
                        }}
                      >
                        <FaRegTrashAlt />
                      </button>
                    </>
                  ) : type === 1 ? (
                    <NavLink
                      to={`/admin/incomes/${year.year_id}/detail-income`}
                      className="btn btn-sm btn-main"
                      state={{ year: year.year }}
                    >
                      <FaEye />
                    </NavLink>
                  ) : type === 2 ? (
                    <NavLink
                      to={`/admin/exits/${year.year_id}/detail-exit`}
                      className="btn btn-sm btn-main"
                      state={{ year: year.year }}
                    >
                      <FaEye />
                    </NavLink>
                  ) : (
                    <NavLink
                      to={`/admin/taxes/${year.year_id}/detail-tax`}
                      className="btn btn-sm btn-main"
                      state={{ year: year.year }}
                    >
                      <FaEye />
                    </NavLink>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ConfirmationModal
        isOpen={show}
        isClosed={() => {
          setShow(false);
        }}
        data={yearDelete}
        customer={customerName}
        modalTitle={"Sei sicuro di voler cancellare questo anno?"}
      />
    </>
  );
};

export default Table;
