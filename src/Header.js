import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="image">
          <img src="http://wallpapercave.com/wp/vCefLlU.jpg" alt="logo"></img>
        </div>
        <div className="text">
          <h1>AlphaCode</h1>
          <h2>Houston's premiere coding prep course</h2>
        </div>
      </div>
    );
  }
}

export default Header;
