import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function SelectedBeast(props) {
  
  const [showModal, setShowModal] = useState(false);

 
  useEffect(() => {
    if (props.beast) {
      setShowModal(true);
    }
  }, [props.beast]);

  
  const handleCloseModal = () => {
    setShowModal(false);
    alert('Modal closed');
  };

 
  if (!props.beast) {
    return null;
  }

  
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.beast.image_url} alt={props.beast.title} className="img-fluid" />
          <p>{props.beast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SelectedBeast;
