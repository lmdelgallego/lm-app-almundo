import React, { Component } from 'react'

import './Header.css'
import logo from '../../assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;