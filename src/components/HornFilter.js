import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class HornFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const filter = event.target.value;
    this.props.onFilterChange(filter);
  }

  render() {
    const beasts = this.props.beasts;
    const uniqueHorns = [];

    for (let i = 0; i < beasts.length; i++) {
      if (!uniqueHorns.includes(beasts[i].horns)) {
        uniqueHorns.push(beasts[i].horns);
      }
    }

    const options = [<option key="all" value="">All</option>];
    for (let i = 0; i < uniqueHorns.length; i++) {
      options.push(<option key={i} value={uniqueHorns[i]}>{uniqueHorns[i]} Horns</option>);
    }

    return (
      <Form>
        <Form.Group controlId="hornsFilter">
          <Form.Label>Filter by Number of Horns:</Form.Label>
          <Form.Control as="select" onChange={this.handleChange}>
            {options}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default HornFilter;
