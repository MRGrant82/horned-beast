import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
    alert('Modal closed');
  }

  handleShow() {
    this.setState({ show: true });
    alert('Modal opened');
  }

  render() {
    const { beast } = this.props;

    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          {beast.title}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={beast.image_url} alt={beast.title} />
            <p>{beast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
