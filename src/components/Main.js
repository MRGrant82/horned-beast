import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';

class Main extends Component {
  render() {
    const hornedBeasts = this.props.beasts.map((beast) => (
      <HornedBeast key={beast._id} beastinfo={beast} onBeastSelect={this.props.onBeastSelect} />
    ));
    console.log('onBeastSelect:', this.props.onBeastSelect);
    

    const colBeasts = hornedBeasts.map((beast) => (
      <Col xs={6} md={4} lg={3} key={beast.props.beastinfo._id}>
        {beast}
      </Col>
    ));
    

    return (
      <div className="main">
        <Row>{colBeasts}</Row>
      </div>
    );
  }
}

export default Main;
