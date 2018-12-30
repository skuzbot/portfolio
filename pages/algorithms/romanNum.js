import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class RomanNum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numeralInput: '',
      numeralOutput: 0,
      DIGIT_VALUES: {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      }
    }
  }

  handleNumeralInput(e) {
    let num = e.target.value.toUpperCase();
    let output = this.translateRomanNumeral(num);
    this.setState({
      numeralInput: num,
      numeralOutput: output,
    })
  }

  translateRomanNumeral(rn, o = 0) {
    const DIGIT_VALUES = this.state.DIGIT_VALUES;
    for (let i = 0; i < rn.length; i++) {
      if (DIGIT_VALUES[rn[i]] === undefined) {
        return 'null';
      }
      if (DIGIT_VALUES[rn[i]] < DIGIT_VALUES[rn[i + 1]]) {
        o -= DIGIT_VALUES[rn[i]];
      } else {
        o += DIGIT_VALUES[rn[i]];
      }
    }
    return o;
  };

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
        Roman Numerals

        <div className='romanNum'>
          Input any Roman numeral:
          <span className='note'>(Valid characters are I, V, X, L, C, D, M)</span>
          <input 
            pattern='/[i|v|x|l|c|d|m]/gi'
            className='numeral-input'
            value={this.state.numeralInput}
            onInput={(e) => e.target.value = e.target.value.replace(/[^i|v|x|l|c|d|m]/gi, '')}
            onChange={(e) => this.handleNumeralInput(e)}/>
          <div>{this.state.numeralInput}</div>
          <div className='numeral-output'>
            <div>Converted Number:</div>
            <div>{this.state.numeralOutput}</div>
          </div>
        </div>
        <Footer/>
        <style jsx>{`
          .romanNum {
            margin: 20px;
            width: 100vw;
            display: flex;
            font-size: 2em;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          input {
            margin: 20px;
            height: 80px;
            width: 320px;
            text-align: right;
            font-size: 1.5em;
            border: 1px black solid;
            font-family: 'Fira Mono', monospace;
          }

          .numeral-output {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }

          .note {
            margin: 5px;
            font-size: 0.5em;
          }
        `}</style>
      </div>
    )
  }
}

// /*
// Output:
//   numerical representations of roman numeral input

// Input:
// string
// Constrains/Conditions:

// Examples/Edge Cases:

// */
// var DIGIT_VALUES = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// };
// // -Start of Code-                                                 ===
// translateRomanNumeral = (rn, o = []) => {
//   for (let i = 0; i < rn.length; i++) {
//     if (DIGIT_VALUES[rn[i]] === undefined) {
//       return 'null';
//     }
//     if (DIGIT_VALUES[rn[i]] < DIGIT_VALUES[rn[i + 1]]) {
//       o = o.concat([-1 * DIGIT_VALUES[rn[i]], DIGIT_VALUES[rn[i + 1]]]);
//       i++;
//     } else {
//       o.push(DIGIT_VALUES[rn[i]]);
//     }
//   }
//   return o.length ? o.reduce((a, c) => a + c) : 0;
// };
// // -End of Code-                                                   ===

// // given tests:

// // const input = 'LX'; //60 -> 50 + 10
// // const input = 'MCMXC'; //1990 -> 1000 + (-1 * 100) + 1000 + (-1 * 10) + 100
// const input = 'LX'; // null

// console.log(translateRomanNumeral(input));