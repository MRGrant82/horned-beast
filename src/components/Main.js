import React from 'react';
import HornedBeast from '../components/hornedBeast';

const hornedBeasts = [
    {
      title: 'Spider-Bug',
      imageUrl: './spider-bug.jpg',
      description: 'A creepy-crawly bug with spider-like legs.',
    },
    {
      title: 'Flying-Bug',
      imageUrl: './flying-bug.jpg',
      description: 'A winged bug that can fly through the air.',
    },
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
