import React, { Component } from "react";
// import PropTypes from "prop-types";

class KeypadButton extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={this.props.name}>
        <button
          style={{ width: "100%", height: "100%", fontSize: "100%" }}
          onClick={(e, name) => this.props.handleChangeName(e, this.props.sign)}
        >
          {this.props.sign}
        </button>
      </div>
    );
  }
}

export default KeypadButton;
