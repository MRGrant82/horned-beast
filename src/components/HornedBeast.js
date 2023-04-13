import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class HornedBeast extends Component {
  state = {
    likes: 0
  }
  
  addClick = () => {
    console.log('test');
    this.props.onBeastSelect(this.props.beastinfo);
    this.setState({
      likes: this.state.likes + 1
    })
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
        <Image width="200px" src={image_url} onClick={this.addClick} />
        <p>{description}</p>
        <p>&#x1F44D; {this.state.likes}</p>
      </div>
    );
    
  }
}

export default HornedBeast;
