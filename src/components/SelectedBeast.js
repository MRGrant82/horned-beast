import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function SelectedBeast(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.beast) {
      setShow(true);
    }
  }, [props.beast]);

  const handleClose = () => {
    setShow(false);
    alert('Modal closed');
  };

  const { beast } = props;

  if (!beast) {
    return null;
  }

  return (
    <div>
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

export default SelectedBeast;
