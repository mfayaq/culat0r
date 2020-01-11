import React, { Component } from 'react'
import Button from './Button'

export class Keypad extends Component {
    render() {
        return (
            <div className='keypad'>
                {this.props.values.map((value) => (
                    <Button key={value} value={value} performOperation={this.props.performOperation}/>
        ))}
            </div>
        )
    }
}

export default Keypad
