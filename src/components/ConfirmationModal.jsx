import { React } from "react";
import Modal from "react-bootstrap/Modal";

const ConfirmationModal = (props) => {
  return (
    <Modal show={props.isOpen}>
      <Modal.Header>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.modalText}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-sm btn-danger" onClick={props.confirmDelete}>
          Cancella
        </button>
        <button className="btn btn-sm btn-secondary" onClick={props.isClosed}>
          Chiudi
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
