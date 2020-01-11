import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Calculator from './components/Calculator'

class App extends Component {
  constructor() {
    super() 
    this.state = { inputs: [1,'+',2],
    values: [1,2,3,4,5,6,7,8,9,'+','-','/','*','=','C','AC']
    } 
  }

  performOperation = (value) =>{
    if(isNaN(value)){
      
    }
    else{
      let lastDigit = this.state.inputs.pop()
      lastDigit=lastDigit*10+value
      this.setState({
        inputs: this.state.inputs.push(lastDigit)
      })
    }
    // this.setState({
      // inputs:this.state.inputs.map(input=>{
      //   if(isNaN(input)){
      //     if(input==='='){
      //       break;
      //     }
      //   }
      //   else{
      //     const lastNo = this.state.inputs.pop()
      //     lastNo=10*lastNo+input
      //     this.state.inputs.push(lastNo)
      //   }
      // })
    //   inputs: this.state.inputs.pop()
    // })
  }

  render() {
    return (
      <div className="App">
        <Calculator values={this.state.values} input={this.state.inputs} performOperation={this.performOperation} />
      </div>
    );
  }
}
export default App;
