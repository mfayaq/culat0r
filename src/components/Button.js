import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div className="button" onClick={this.props.performOperation.bind(this,this.props.value)}>
                {this.props.value}
            </div>
        )
    }
}

export default Button
