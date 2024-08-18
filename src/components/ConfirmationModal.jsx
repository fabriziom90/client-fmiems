import { React, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

function modalBodyText(infos) {
  if (infos.customer !== "") {
    return (
      <p>
        <strong>Importo: </strong>
        {infos.data.amount}€ <br />
        <strong>Avvenuto in data: </strong>
        {infos.data.data} <br />
        <strong>Da parte di: </strong>
        {infos.customer}
      </p>
    );
  } else {
    return "Cancellando l'anno verranno cancellate anche tutte le entrate e le uscite registrate in esso. Vuoi continuare?";
  }
}

const ConfirmationModal = (props) => {
  return (
    <Modal show={props.isOpen}>
      <Modal.Header>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBodyText(props)}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-sm btn-danger">Cancella</button>
        <button className="btn btn-sm btn-secondary" onClick={props.isClosed}>
          Chiudi
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
