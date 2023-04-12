import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';


class Main extends Component {
  render() {
    const hornedBeasts = this.props.loadContent.map((beast) => (
      <HornedBeast beastinfo={beast} />
    ));
    const colBeasts = hornedBeasts.map((beast) => (
      <Col xs={6} md={4} lg={3} key={beast.key}>
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
