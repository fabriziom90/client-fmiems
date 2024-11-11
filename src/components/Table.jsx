import { React, useState } from "react";

import { NavLink } from "react-router-dom";

import { FaEye } from "react-icons/fa";

import { FaRegTrashAlt } from "react-icons/fa";
import ConfirmationModal from "./ConfirmationModal";

const Table = ({ data, months, type, handleDeleteYear }) => {
  const [show, setShow] = useState(false);
  const [yearDelete, setYearDelete] = useState({});

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

  function setBgColor(type, value) {
    if (type === 0) {
      if (value > 0) {
        return `head-cell bg-success`;
      } else {
        return `head-cell bg-danger`;
      }
    } else if (type === 1) {
      return `head-cell bg-success`;
    } else if (type === 2) {
      return `head-cell bg-danger`;
    } else {
      return `head-cell bg-warning`;
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
            <th className="head-cell">Totale</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {data.map((year, index) => {
            let rowTotal = 0;
            return (
              <tr key={`year-${year.year_id}`}>
                <td>{year.year}</td>
                {year.months.map((month, i) => {
                  if (month != null) {
                    rowTotal += month;
                    return (
                      <td
                        key={`month-value-${i}`}
                        className={setClassResults(type, month)}
                      >
                        {month.toFixed(2)}€
                      </td>
                    );
                  } else {
                    return <td> - </td>;
                  }
                })}
                <td className={setBgColor(type, rowTotal)}>
                  {rowTotal.toFixed(2)}€
                </td>
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
                          setYearDelete(year.year_id);
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
        modalTitle={"Sei sicuro di voler cancellare questo anno?"}
        modalText={
          "Una volta cancellata questo anno, verranno eliminate anche le relative entrate ed uscite e non sarà più possibile recuperarle. Vuoi procedere?"
        }
        confirmDelete={() => {
          handleDeleteYear(yearDelete);
          setShow(false);
        }}
      />
    </>
  );
};

export default Table;
