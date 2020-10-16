import React, { Component } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

export default class AccountSettings extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };
  }

  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({ input: input });
      console.log(this.state.input);
      // alert('Account Details Form is submited');
    }
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please confirm password.";
    }

    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm_password"] !== "undefined"
    ) {
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  onBlur = () => {
    this.setState({ focused: false })
  }

  onFocus = () => {
    this.setState({ focused: true })
  }

  onBlurConfirm = () => {
    this.setState({ focusedConfirm: false })
  }

  onFocusConfirm = () => {
    this.setState({ focusedConfirm: true })
  }

  render() {
    return (
      <div className="tab-content">
        <form onSubmit={this.handleSubmit} className="form-info">
          <div className="form-group mt1">
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form-group mt1">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter password"
              id="password"
              onBlur={this.onBlur}
              onFocus={this.onFocus}
            />
            {this.state.focused && <div className="password-strength">
              <PasswordStrengthBar password={this.state.input.password} />
            </div>}
            <div className="text-danger">{this.state.errors.password}</div>
          </div>

          <div className="form-group mt1">
            <label htmlFor="password">Confirm Password</label>
            <br />
            <input
              type="password"
              name="confirm_password"
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter confirm password"
              id="confirm_password"
              onBlur={this.onBlurConfirm}
              onFocus={this.onFocusConfirm}
            />
            {this.state.focusedConfirm && <div className="password-strength">
              <PasswordStrengthBar
                password={this.state.input.confirm_password}
              />
            </div>}
            <div className="text-danger">
              {this.state.errors.confirm_password}
            </div>
          </div>
          <div className="mt-1 sumbit-btn">
            <button
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
              className="acc-btn btn"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
