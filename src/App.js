import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Calculator from "./components/Calculator";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputs: [0],
      values: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
        "+",
        "-",
        "/",
        "*",
        "=",
        "C",
        "AC"
      ]
    };
  }

  performOperation = value => {
    if (isNaN(value)) {
      switch (value) {
        case "=":
          let result
          try {
            result = eval(this.state.inputs.join(""))
            .toString()
            .split("");
          } catch (e) {
            if (e instanceof SyntaxError) {
              
          } else {
              throw( e );
          }
          }
          this.setState({
            inputs: result
          });
          break;
        case "C":
          if (this.state.inputs.length > 1) {
            this.state.inputs.pop();
            this.setState({
              inputs: this.state.inputs
            });
          }
          else{
            this.setState({
              inputs: [0]
            })
          }
          break;
        case "AC":
          this.setState({
            inputs: [0]
          });
          break;
        default:
          this.setState({
            inputs: this.state.inputs.concat(value)
          });
          break;
      }
    } else {
      let lastDigit = this.state.inputs.slice(-1)[0];
      if (lastDigit === undefined) {
        //donothing
      } else if (lastDigit == 0) {
        this.state.inputs.pop()
        this.setState({
          inputs: this.state.inputs.concat(value)
        });
      } else {
        this.setState({
          inputs: this.state.inputs.concat(value)
        });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Calculator
          values={this.state.values}
          input={this.state.inputs}
          performOperation={this.performOperation}
        />
      </div>
    );
  }
}
export default App;
