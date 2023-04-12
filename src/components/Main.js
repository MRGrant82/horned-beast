import React, { Component } from 'react';
import HornedBeast from '../hornedBeast';
import data from '../data.json';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: data,
    };
  }

  render() {
    return (
      <div>
        {this.state.beasts.map((beast) => (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
            keyword={beast.keyword}
            horns={beast.horns}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
