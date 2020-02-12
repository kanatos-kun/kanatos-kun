import React, { Component } from "react";
// import PropTypes from "prop-types";

class InputResult extends Component {
  constructor(props) {
    super();
  }
  render() {
    return <div className="input">{this.props.response}</div>;
  }
}

export default InputResult;
