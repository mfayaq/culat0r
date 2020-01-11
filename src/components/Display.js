import React, { Component } from "react";

export class Display extends Component {
  render() {
    return (
      <div className="display-parent">
        <div className="display">
          {this.props.input.map((value,i) => (
            <span key={i}>{value}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default Display;
