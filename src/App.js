import React, { Component } from "react";
import Name from "./components/Name";
import KeypadButton from "./components/KeypadButton";
import "./style.css";
import _ from "underscore";
class App extends Component {
  constructor() {
    super();
    this.handleChangeName = this.handleChangeName.bind(this);
    this.state = {
      input: []
    };
  }

  handleChangeName(e, pName) {
    e.preventDefault();
    var _temp = this.state.input;
    if (pName === "/" || pName === "*" || pName === "-" || pName === "+") {
      _temp.push(pName);
    } else if (
      pName === "0" ||
      pName === "1" ||
      pName === "2" ||
      pName === "3" ||
      pName === "4" ||
      pName === "5" ||
      pName === "6" ||
      pName === "7" ||
      pName === "8" ||
      pName === "9" ||
      pName === "."
    ) {
      _temp.push(pName);
    } else if (pName === "CE") {
      _temp = [];
    } else if (pName === "=") {
      _temp.push(pName);
    }
    if (pName === "CE") {
      this.setState({ input: _temp });
    } else {
      this.setState({ input: _temp });
    }
  }

  convertToStringValue() {
    var stringValue = "";
    if (this.state.input[this.state.input.length - 1] === "=") {
      stringValue = "Calcul!";
      var a;
      var sign;
      var b;
      var result;
      _.each(this.state.input, (value, i) => {
        //do the calcul if requirement is set !

        //----------------------------------------------------------------------
        if (
          value === "0" ||
          value === "1" ||
          value === "2" ||
          value === "3" ||
          value === "4" ||
          value === "5" ||
          value === "6" ||
          value === "7" ||
          value === "8" ||
          value === "9" ||
          value === "."
        ) {
          //enter
          if (a === undefined) {
            a = value;
          } else if (b === undefined && sign !== undefined) {
            b = value;
          } else if (b !== undefined && sign !== undefined) {
            b = b + value;
          } else {
            if (a !== result) {
              a = a + value;
            }
          }
        } else if (
          value === "/" ||
          value === "*" ||
          value === "-" ||
          value === "+"
        ) {
          sign = value;
          //enter
        }
        //------------------------------------

        if (
          a !== undefined &&
          b !== undefined &&
          sign !== undefined &&
          i + 1 < this.state.input.length
        ) {
          if (
            (this.state.input[i + 1] !== "0" &&
              this.state.input[i + 1] !== "1" &&
              this.state.input[i + 1] !== "2" &&
              this.state.input[i + 1] !== "3" &&
              this.state.input[i + 1] !== "4" &&
              this.state.input[i + 1] !== "5" &&
              this.state.input[i + 1] !== "6" &&
              this.state.input[i + 1] !== "7" &&
              this.state.input[i + 1] !== "8" &&
              this.state.input[i + 1] !== "9") ||
            this.state.input[i + 1] === "="
          ) {
            let parseA = parseInt(a, 10);
            let parseB = parseInt(b, 10);
            switch (sign) {
              case "+":
                result = parseA + parseB;
                break;
              case "-":
                result = parseA - parseB;
                break;
              case "*":
                result = parseA * parseB;
                break;
              case "/":
                result = parseA / parseB;
                break;
              default:
                break;
            }
            a = result;
            b = undefined;
            sign = undefined;
          }
        }
        //---------------------------------------------------------------

        //-------------------------------------
        if (value === "=") {
          stringValue = result.toString();
          return stringValue;
        }
        //---------------------------------
      });

      this.state.input.pop();
    } else {
      _.each(this.state.input, value => {
        stringValue += value.toString();
      });
    }

    return stringValue;
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container-title">
          <h2 className="title">Calculatrice</h2>
          <Name response={this.convertToStringValue()} />
        </div>
        <div className="grid-container-keypad">
          <KeypadButton
            name="nine"
            sign="9"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="eight"
            sign="8"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="seven"
            sign="7"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="six"
            sign="6"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="five"
            sign="5"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="four"
            sign="4"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="three"
            sign="3"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="two"
            sign="2"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="one"
            sign="1"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="zeros"
            sign="0"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="dott"
            sign="."
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="egal"
            sign="="
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="plus"
            sign="+"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="minus"
            sign="-"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="multiple"
            sign="*"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="divide"
            sign="/"
            handleChangeName={this.handleChangeName}
          />
          <KeypadButton
            name="reset"
            sign="CE"
            handleChangeName={this.handleChangeName}
          />
        </div>
      </div>
    );
  }
}

export default App;
