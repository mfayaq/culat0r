import React, { Component } from "react";

export class Display extends Component {
  render() {
    try {
      return (
        <div className="display-parent">
          <div className="display">
            {this.props.input.map((value,i) => (
              <span key={i}>{value}</span>
            ))}
          </div>
        </div>
      ); 
    } catch (error) {
      return (
        <div className="display-parent">
          <div className="display error">
            Invalid Expression
          </div>
        </div>
      );
    }
  }
}

export default Display;
