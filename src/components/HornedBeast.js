import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class HornedBeast extends Component {
  state = {
    likes: 0
  }
  
  addClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  
  render() {
    const { title, image_url, description } = this.props.beastinfo;
    
    return (
      <div>
        <h2>{title}</h2>
        <Image width="200px" src={image_url} onClick={this.addClick} />
        <p>{description}</p>
        <p>&hearts; {this.state.likes}</p>
      </div>
    )
  }
}

export default HornedBeast;
