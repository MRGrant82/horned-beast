import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function SelectedBeast(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { beast } = props;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {beast.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={beast.image_url} alt={beast.title} />
          <p>{beast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SelectedBeast;
