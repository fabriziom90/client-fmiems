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

  function setClassResults(type, income, exit) {
    if (type === 0) {
      if (income - exit > 0) {
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
              <tr key={`year-${index}`}>
                <td>{year.anno}</td>
                {year.mesi.map((mese, i) => {
                  return (
                    <td
                      key={`month-value-${i}`}
                      className={setClassResults(
                        type,
                        mese.entrate,
                        mese.uscite
                      )}
                    >
                      {type === 0
                        ? mese.entrate - mese.uscite
                        : type === 1
                        ? mese.entrate
                        : mese.uscite}
                      €
                    </td>
                  );
                })}
                {Array.from({
                  length: months.length - year.mesi.length,
                }).map((item, index) => (
                  <td key={`month-null-${index}`}>
                    <span>-</span>
                  </td>
                ))}
                <td>
                  {type === 0 ? (
                    <>
                      <NavLink
                        to="/detail-year"
                        className="btn btn-sm btn-main"
                      >
                        <FaEye />
                      </NavLink>
                      <button
                        className="btn btn-sm btn-square btn-danger ms-2"
                        onClick={() => {
                          setShow(true);
                          setYearDelete(year.anno);
                        }}
                      >
                        <FaRegTrashAlt />
                      </button>
                    </>
                  ) : type === 1 ? (
                    <NavLink
                      to="/incomes/detail-income"
                      className="btn btn-sm btn-main"
                    >
                      <FaEye />
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/exits/detail-exits"
                      className="btn btn-sm btn-main"
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
