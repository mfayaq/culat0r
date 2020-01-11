import React, { Component } from 'react'

export class Button extends Component {
    render() {
        if(this.props.value.match(/C/)){
            return (
                <div className="button clear" onClick={this.props.performOperation.bind(this,this.props.value)}>
                    {this.props.value}
                </div>
            )    
        }
        else if(isNaN(this.props.value)){
            return (
                <div className="button operator" onClick={this.props.performOperation.bind(this,this.props.value)}>
                    {this.props.value}
                </div>
            )
        }

        return (
            <div className="button " onClick={this.props.performOperation.bind(this,this.props.value)}>
                {this.props.value}
            </div>
        )
    }
}

export default Button
