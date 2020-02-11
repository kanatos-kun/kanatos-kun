import React, { Component } from "react";
// import PropTypes from "prop-types";

class Name extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div style={{ fontSize: 25 }} className="input">
        {this.props.response}
      </div>
    );
  }
}

export default Name;
