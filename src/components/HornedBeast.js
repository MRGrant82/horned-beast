import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
    this.addClick = this.addClick.bind(this);
  }

  addClick() {
    console.log('addClick called');
    this.props.onBeastSelect(this.props.beastinfo);
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render() {
    const { beastinfo } = this.props;

    if (!beastinfo) {
      return null;
    }

    const { title, image_url, description } = beastinfo;

    return (
      <div key={beastinfo._id}>
        <h2>{title}</h2>
        <img
          width="200px"
          src={image_url}
          onClick={this.addClick}
          alt={title}
        />
        <p>{description}</p>
        <p>&#x1F44D; {this.state.likes}</p>
      </div>
    );
  }
}

export default HornedBeast;
