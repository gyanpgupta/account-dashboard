import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const SideNavBar = () => {

  const isDesktop = useMediaQuery({ query: '(min-device-width: 640px)' })


  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <section>
      {!isDesktop && <div className="mobile-menu">
        <div id="mySidenav" className="sidenav">
          <ul>
            <li>
              <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
            </li>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i><a href="javascript:void(0)" title="home">Home</a>
            </li>
            <li>
              <i className="fa fa-bullhorn" aria-hidden="true"></i><a href="javascript:void(0)" title="account">My Account</a>
            </li>
            <li>
              <i className="fa fa-building" aria-hidden="true"></i><a href="javascript:void(0)" title="company">My Company</a>
            </li>
            <li>
              <i className="fa fa-cog" aria-hidden="true"></i><a href="javascript:void(0)" title="setting">My Settings</a>
            </li>
            <li>
              <i className="fa fa-newspaper-o" aria-hidden="true"></i><a href="javascript:void(0)" title="news">News</a>
            </li>
            <li>
              <i className="fa fa-area-chart" aria-hidden="true"></i><a href="javascript:void(0)" title="analytic">Analytics</a>
            </li>
          </ul>
        </div>
        <span className="open-bar" onClick={openNav}>&#9776;</span>
      </div>}
      {isDesktop && <div className="desktop-menu">
        <ul>
          <li>
            <i className="fa fa-home" aria-hidden="true"></i>

            <a href="javascript:void(0)" title="home">
              Home
            </a>
          </li>
          <li>
            <i className="fa fa-bullhorn" aria-hidden="true"></i>

            <a href="javascript:void(0)" title="account">
              My Account
            </a>
          </li>
          <li>
            <i className="fa fa-building" aria-hidden="true"></i>

            <a href="javascript:void(0)" title="company">
              My Company
            </a>
          </li>
          <li>
            <i className="fa fa-cog" aria-hidden="true"></i>

            <a href="javascript:void(0)" title="setting">
              My Settings
            </a>
          </li>
          <li>
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>

            <a href="javascript:void(0)" title="news">
              News
            </a>
          </li>
          <li>
            <i className="fa fa-area-chart" aria-hidden="true"></i>

            <a href="javascript:void(0)" title="analytic">
              Analytics
            </a>
          </li>
        </ul>
      </div>}
    </section>
  )
}

export default SideNavBar