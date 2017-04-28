import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/" >Home</Link>
        {" | "}
        <Link to="/courses" >Courses</Link>
        {" | "}
        <Link to="/about" >About</Link>
      </nav>
    );
  }
}

export default Header;