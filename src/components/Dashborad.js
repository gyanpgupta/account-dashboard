import React, { Component } from "react";
import AccountSettings from "./AccountSettings";
import UserDetails from "./UserDetails";
import Header from "./Header";
import SideNavBar from "./SideNavBar";

export default class Dashborad extends Component {
  constructor() {
    super();
    this.state = {
      check: "main",
    };
  }

  switchToMain = () => {
    this.setState({ check: "main" });
  };

  switchToAdd = () => {
    this.setState({ check: "add" });
  };

  render() {
    const { check } = this.state;
    return (
      <div class="main-container">
        <Header />
        <SideNavBar />
        <div className="right-sec">
          <div className="tab-view">
            <ul>
              <li
                className={check === "main" ? "active" : ""}
                onClick={this.switchToMain}
              >
                <a href="#" title="main-info">
                  Main Information
                </a>
              </li>
              <li
                className={check === "add" ? "active" : ""}
                onClick={this.switchToAdd}
              >
                <a href="#" title="main-info">
                  Additional Information
                </a>
              </li>
            </ul>
          </div>
          {check === "main" && <AccountSettings />}
          {check === "add" && <UserDetails />}
        </div>
      </div>
    );
  }
}
