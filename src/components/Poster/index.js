import React, { Component } from 'react';

class Poster extends Component {
  render() {
    return (
      <div className="Poster">
        <div className="Poster__picture">
          <img src={this.props.img} alt=""/>
        </div>
      </div>
    );
  }
}

export default Poster;
