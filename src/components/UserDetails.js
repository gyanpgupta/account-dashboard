import React, { Component } from "react";

export default class UserDetails extends Component {
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
      input["name"] = "";
      input["last_name"] = "";
      input["address"] = "";
      input["country"] = "";
      this.setState({ input: input });

      alert("User Details submited");
    }
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["last_name"]) {
      isValid = false;
      errors["last_name"] = "Please enter your last name.";
    }
    if (!input["address"]) {
      isValid = false;
      errors["address"] = "Please enter your address.";
    }

    if (!input["country"]) {
      isValid = false;
      errors["country"] = "Please enter your country.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className="tab-content">
        <form onSubmit={this.handleSubmit} className="form-info">
          <div className="form-group mt1">
            <label htmlFor="name">Change first name</label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.input.name}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter name"
              id="name"
            />

            <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div className="form-group mt1">
            <label htmlFor="last_name">Change Last Name</label>
            <br />
            <input
              type="text"
              name="last_name"
              value={this.state.input.last_name}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter last name"
              id="last_name"
            />

            <div className="text-danger">{this.state.errors.last_name}</div>
          </div>

          <div className="form-group mt1">
            <label htmlFor="address">Change Address</label>
            <br />
            <input
              type="text"
              name="address"
              value={this.state.input.address}
              onChange={this.handleChange}
              className="form-control"
              placeholder="street, house number, postal code"
              id="address"
            />

            <div className="text-danger">{this.state.errors.address}</div>
          </div>

          <div className="form-group mt1">
            <label htmlFor="address">Change country</label>
            <br />
            <select
              name="country"
              onChange={this.handleChange}
              className="form-control country"
            >
              <option defaultValue>Select country</option>
              <option>Germany</option>
              <option>Austria</option>
              <option>Switzerland</option>
            </select>
            <div className="text-danger">{this.state.errors.country}</div>
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
