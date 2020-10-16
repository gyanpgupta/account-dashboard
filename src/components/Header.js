import React, { Component } from 'react'
import logo from '../assests/Images/logo.png'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  openDropDown = () => {
    debugger
    this.setState({ open: !this.state.open })
  }

  myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }



  render() {
    const { open } = this.state

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    return (
      <header>
        <div className="site-logo">
          <img src={logo} width="auto" alt="" />
        </div>
        <ul className="nav-option">
          <li className="language-dropdown">
            <div className="dropdown">
              <button className="dropbtn" onClick={this.myFunction} ><i className="fa fa-globe" aria-hidden="true"></i>EN</button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)" title="message">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" title="notification">
              <i className="fa fa-bell" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </header>
    )
  }
}
