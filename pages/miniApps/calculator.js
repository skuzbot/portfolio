import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentInput: '',
    }
  }

  handleInputChange(e) {
    e.preventDefault;
    let input = e.target.value.replace(/[^0-9.]/gi, '') || 0;
    // ! here. trying to figure out how to only keep one decimal
    // console.log('input.length :', input.length);
    // console.log('input.replace(/./g, ).length + 1 :', input.replace(//, '').length + 1);
    if (input.length !== (input.replace(/./g, '').length + 1)) {
      //two decimals found. split on first and keep first two elements
      let inputArr = input.split('.');
      input = `${inputArr[0]}.${inputArr[1]}`
    }
    this.setState({
      currentInput: input,
    })
  }
  
  render() {
    return (
      <div className='container'>
        <Meta />
        <Navbar />
        <div className='content'>
          calculator
          <div className='calculator'>
            <input 
              className='number-input' 
              value={this.state.currentInput} 
              onChange={(e) => this.handleInputChange(e)}></input>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .content {
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          .calculator {
            width: 20vw;
          }

          .number-input {
            margin-top: 5vh;
            width: 100%;
            height: 40px;
            text-align: right;
            border: 1px black solid;
            font-size: 1.4em;
            font-family: 'Fira Mono', monospace; 
          }


        `}</style>
      </div>
    )
  }
}