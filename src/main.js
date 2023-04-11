import React from 'react';
import HornedBeast from './hornedBeast';

const hornedBeasts = [
  {
    title: 'Spider-Bug',
    imageUrl: {
      small: './spider-bug-small.jpg',
      large: './spider-bug-large.jpg'
    },
    description: 'A creepy-crawly bug with spider-like legs.',
  },
  {
    title: 'Flying-Bug',
    imageUrl: {
      small: './flying-bug-small.jpg',
      large: './flying-bug-large.jpg'
    },
    description: 'A winged bug that can fly through the air.',
  },
  // Add more objects as needed
];

class Main extends React.Component {
  render() {
    return (
      <div>
        {hornedBeasts.map((beast, index) => (
          <HornedBeast
            key={index}
            title={beast.title}
            imageUrl={beast.imageUrl}
            description={beast.description}
          />
        ))}
      </div>
    );
  }
}

export default Main;
