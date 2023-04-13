import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
import { Container } from 'react-bootstrap';


class Main extends Component {
  render() {
    const hornedBeasts = this.props.beasts.map((beast) => (
      <Col xs={6} md={4} lg={3} style={{ borderRight: '1px solid gray', borderBottom: '1px solid gray' }}>
  <HornedBeast beastinfo={beast} onBeastSelect={this.props.onBeastSelect} />
</Col>

    ));

    return (
      <div className="main">
        <Container>
          <Row>{hornedBeasts}</Row>
        </Container>
      </div>
    );
  }
}


export default Main;
