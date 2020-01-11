import React, { Component } from 'react'
import  Keypad  from './Keypad'
import Display from './Display'

export class Calculator extends Component {
    render() {
        return (
            <div className="wrapper">
                <Display input={this.props.input}/>
                <Keypad values={this.props.values} performOperation={this.props.performOperation}/> 
            </div>
        )
    }
}

export default Calculator
