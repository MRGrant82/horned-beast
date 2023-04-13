import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SelectedHornedBeast(props) {
  const { beast, handleClose, show } = props;

  return (
    <div key={beast._id}>
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
    </div>
  );
}

export default SelectedHornedBeast;
