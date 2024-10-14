import { React } from "react";
import Modal from "react-bootstrap/Modal";

function modalBodyText(infos) {
  if (!infos.delete) {
    return (
      <p>
        <strong>Importo: </strong>
        {infos.data.value}€ <br />
        <strong>Avvenuto in data: </strong>
        {infos.data.month} <br />
        <strong>Da parte di: </strong>
        {infos.data.customer}
      </p>
    );
  } else {
    return infos.modalText;
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
