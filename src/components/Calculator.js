import React, { Component } from 'react'
import  Keypad  from './Keypad'
import Display from './Display'
// import ErrorBoundary from './ErrorBoundary'

export class Calculator extends Component {
    render() {
        return (
            <div className="wrapper">
                {/* <ErrorBoundary> */}
                <Display input={this.props.input}/>
                {/* </ErrorBoundary> */}
                <Keypad values={this.props.values} performOperation={this.props.performOperation}/> 
            </div>
        )
    }
}

export default Calculator
