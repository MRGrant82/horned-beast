import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main(props) {
  const beasts = props.beasts.map(beast => (
    <Col xs={6} md={4} lg={3} style={{ borderRight: '1px solid gray', borderBottom: '1px solid gray' }}>
      <HornedBeast beastinfo={beast} onBeastSelect={props.onBeastSelect} />
    </Col>
  ));

  return (
    <div className="main">
      <Row>{beasts}</Row>
    </div>
  );
}

export default Main;
