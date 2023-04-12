import React from 'react';
import horn1 from '../components/horn1.png';
import horn2 from '../components/horn2.png';

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.title === 'Spider-Bug' ? horn1 : horn2} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;
