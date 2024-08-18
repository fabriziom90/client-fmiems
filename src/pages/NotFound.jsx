import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="text-center d-flex justify-content-center align-items-center mt-5">
      <div>
        <FaExclamationTriangle className="text-warning display-1 mb-4"></FaExclamationTriangle>
        <h2>404 Not found</h2>
        <p>Pagina non trovata</p>
        <Link to="/" className="rounded-0 btn btn-sm btn-main">
          Torna alla dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
